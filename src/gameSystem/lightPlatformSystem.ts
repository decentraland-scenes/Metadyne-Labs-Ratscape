import { AudioSource, ColliderLayer, Entity, GltfContainer, RaycastQueryType, RaycastResult, Transform, engine, raycastSystem } from "@dcl/sdk/ecs"
import { Vector3, Quaternion } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
import { CONFIG } from "../config"
import { BoxDataComponent, LaserEmitterComponent, LaserRayComponent, LaserReceiverComponent, PortalComponent } from "../components"
import resources from "../resources"
import { BoxType, LaserType, PortalColor, State } from "../gameObject/gameObjectType"
import helper from "../helper/helper"
import { laserReceiverActivated, laserReceiverDeactivated } from "../gameObject/laser"
import { GAME_STATE } from "../gameData"
import { SFX, playSFXSound } from "../gameObject/soundFX"

export type rayPlatformDataType = {
    rayEmitterSource: Entity, //EMITTER SOURCE
    rayOriginEntity: Entity, //ray entity source
    hitEntity: Entity | undefined,
    index:number,
    raySystemEntity: Entity | undefined, //ENTITY FOR RAYCAST
    rayVisualEntity: Entity | undefined, //ENTITY FOR PLATFORM VISUAL
    active: boolean,
    rayCastActiveTimerId: number | undefined //EVERY FIRERAYCAST CALLED, WILL ACTIVATE TIMER FOR SHORT PERIODE OF TIME, BECAUSE PORTAL HAVE DELAY WHEN APPEAR >.<
}
type raycastData = {[key:number]: rayPlatformDataType[]}

let _PLATFORM_RAYCAST_DATA: raycastData = {}

let portalBluePrevPos: Vector3 | undefined = undefined
let portalOrangePrevPos: Vector3 | undefined = undefined

export function resetLightPlatformSystemConfig(){
    for(let key in _PLATFORM_RAYCAST_DATA){
        for(let i = 0; i < _PLATFORM_RAYCAST_DATA[key].length; i++){
            engine.removeEntity(_PLATFORM_RAYCAST_DATA[key][i].raySystemEntity as Entity)
            engine.removeEntity(_PLATFORM_RAYCAST_DATA[key][i].rayVisualEntity as Entity)
        }
    }
    _PLATFORM_RAYCAST_DATA = {}
    portalBluePrevPos = undefined
    portalOrangePrevPos = undefined
}

//CALL EVERYTIME FIRE NEW LASER RAY TO CHECK INTERFERENCE FROM OTHER GAME OBJECTS (BOX, PORTAL, ETC)
export function registerPlatformRaycast(rayData: rayPlatformDataType, rayPos: Vector3, rayRot: Quaternion){
    if(!(rayData.rayEmitterSource in _PLATFORM_RAYCAST_DATA)) {
        _PLATFORM_RAYCAST_DATA[rayData.rayEmitterSource] = []
    }
    
    let EmitterRootLaserData = _PLATFORM_RAYCAST_DATA[rayData.rayEmitterSource]

    for(let i = 0; i < EmitterRootLaserData.length; i++){
        if(
            (EmitterRootLaserData[i].rayOriginEntity === rayData.rayOriginEntity && EmitterRootLaserData[i].active) && 
            (rayData.rayOriginEntity === GAME_STATE.portalBlue || rayData.rayOriginEntity === GAME_STATE.portalOrange) && 
            (Vector3.equals(rayPos, Transform.get(EmitterRootLaserData[i].raySystemEntity as Entity).position))
        ) 
            return
    }

    if(rayData.index > EmitterRootLaserData.length - 1){
        //console.log("game play. platform. register new ray")
        rayData.raySystemEntity = engine.addEntity()
        Transform.createOrReplace(rayData.raySystemEntity, {
            position: rayPos,
            rotation: rayRot
        })

        rayData.rayVisualEntity = engine.addEntity()
        GltfContainer.create(rayData.rayVisualEntity, resources.models.light_platform)
        Transform.createOrReplace(rayData.rayVisualEntity, {
            position: rayPos,
            rotation: rayRot,
            scale: Vector3.Zero()
        })
        
        _PLATFORM_RAYCAST_DATA[rayData.rayEmitterSource].push(rayData)

        fireRayCast(rayData)
    }
    else{
        let ExistingRayData = _PLATFORM_RAYCAST_DATA[rayData.rayEmitterSource][rayData.index]
        //console.log("MODIFY PREVIOUS INDEX RAY", ExistingRayData)
        //MAKE RAY AFTER THIS INACTIVE AND SET LASER RAY SCALE TO 0
        //console.log("MODIFY ALREADY ESTABLISHED RAY CAST, index:", rayData.index, EmitterRootLaserData.length)
        ExistingRayData.active = true
        ExistingRayData.hitEntity = rayData.hitEntity
        ExistingRayData.rayOriginEntity = rayData.rayOriginEntity
        if(ExistingRayData.raySystemEntity){
            Transform.createOrReplace(ExistingRayData.raySystemEntity, {
                position: rayPos,
                rotation: rayRot
            })
        }
        if(ExistingRayData.rayVisualEntity){
            let rayVisualTransform = Transform.getMutable(ExistingRayData.rayVisualEntity)
            rayVisualTransform.position = rayPos
            rayVisualTransform.rotation = rayRot
            rayVisualTransform.scale = Vector3.Zero()
            
            playSFXSound(SFX.lightPlatformSoundEntity, true)
            //console.log("SFX LIGHT PLATFORM, ", AudioSource.get(SFX.lightPlatformSoundEntity).playing)
            //if(rayData.hitEntity === hit.entityId && Math.abs(visualEntTransform.scale.z - hit.length / 2 + 0.2) < 0.1){}
        }

        for(let i = rayData.index + 1; i < EmitterRootLaserData.length; i++){
            EmitterRootLaserData[i].active = false

            if(EmitterRootLaserData[i].rayVisualEntity){
                Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.x = 0
                Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.y = 0
                Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.z = 0
            }
        }
        
        fireRayCast(ExistingRayData)
    }
}
export function PlatformLightSystem(dt: number){
    if(GAME_STATE.state !== State.PLAYING) return
    if(!GAME_STATE.portalBlue || !GAME_STATE.portalOrange) return

    let portalBlueTransform = Transform.get(GAME_STATE.portalBlue)
    let portalOrangeTransform = Transform.get(GAME_STATE.portalOrange)

    if(!portalBluePrevPos) portalBluePrevPos = portalBlueTransform.position
    if(!portalOrangePrevPos) portalOrangePrevPos = portalOrangeTransform.position

    if(!Vector3.equals(portalBluePrevPos, portalBlueTransform.position) || !Vector3.equals(portalOrangePrevPos, portalOrangeTransform.position)){
        //console.log("PLATFORM. INITIATE LASER RAY CHAIN")
        let activeCount = 0
        for(let key in _PLATFORM_RAYCAST_DATA){
            fireRayCast(_PLATFORM_RAYCAST_DATA[key][0])
        }
    }
    portalBluePrevPos = portalBlueTransform.position
    portalOrangePrevPos = portalOrangeTransform.position
}

export function manualTriggerPlatformRayChain() {
    for (let key in _PLATFORM_RAYCAST_DATA) {
        fireRayCast(_PLATFORM_RAYCAST_DATA[key][0])
    }
}

function fireRayCast(rayData: rayPlatformDataType){

    if(rayData.rayCastActiveTimerId) utils.timers.clearTimeout(rayData.rayCastActiveTimerId as number)
    
    //console.log("PLATFORM. FIRE RAYCAST FROM:", rayData.index)
    rayData.rayCastActiveTimerId = utils.timers.setTimeout(() => {
        raycastSystem.removeRaycasterEntity(rayData.raySystemEntity as Entity)
        rayData.rayCastActiveTimerId = undefined
        //console.log("PLATFORM. STOP RAYCAST FROM:", rayData.index)
    }, 500) //ACTIVATE FOR 0.5 SECOND ENNOUGH??
    
    if(rayData.raySystemEntity){
        raycastSystem.registerLocalDirectionRaycast(
            {
                entity: rayData.raySystemEntity,
                opts: {
                    queryType: RaycastQueryType.RQT_HIT_FIRST,
                    direction: Vector3.Forward(),
                    maxDistance: 1000,
                    continuous: true,
                    collisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_CUSTOM4 //wall and portal
                },
            },
            function (raycastResult) {
                //console.log("PLATFORM. RAYCAST RESULT INDEX:", rayData.index, raycastResult, raycastResult.hits[0]?.meshName)
                
                if(rayData.active){
                    if (raycastResult.hits.length > 0) {
                        let hit = raycastResult.hits[0]
                        if (hit.entityId) {
                            //TODO: CHECK IF HIT ENTITY DATA SAME WITH NEXT RAY DATA, IF SAME RETURN.
                            
                            rayData.hitEntity = hit.entityId as Entity
                            let EmitterRootLaserData = _PLATFORM_RAYCAST_DATA[rayData.rayEmitterSource]
                            //console.log("LASER RAY HIT:", hit.entityId, hit.meshName, hit.length)

                            if(rayData.rayVisualEntity){
                                let visualEntTransform = Transform.get(rayData.rayVisualEntity)

                                //if(Vector3.equals(visualEntTransform.scale, Vector3.Zero())) playSFXSound(SFX.lightPlatformSoundEntity, true)
                                // else{
                                    let startScale = Vector3.create(visualEntTransform.scale.x, visualEntTransform.scale.y, hit.length / 2 + 0.2)
                                    utils.tweens.startScaling(rayData.rayVisualEntity, startScale, Vector3.create(1, 1, hit.length / 2 + 0.2), 0.03)
                                    //Transform.getMutable(rayData.rayVisualEntity).scale = Vector3.create(0.75, 1, hit.length / 2 + 0.2)
                                // }
                            }

                            if(hit.entityId === GAME_STATE.portalBlue || hit.entityId === GAME_STATE.portalOrange){
                                let portal: Entity
                                let otherPortal: Entity

                                if(hit.entityId === GAME_STATE.portalBlue) {
                                    //console.log("LASER HIT PORTAL BLUE")
                                    portal = GAME_STATE.portalBlue as unknown as Entity
                                    otherPortal = GAME_STATE.portalOrange as unknown as Entity
                                }
                                else {
                                    //console.log("LASER HIT PORTAL ORANGE")
                                    portal = GAME_STATE.portalOrange as unknown as Entity
                                    otherPortal = GAME_STATE.portalBlue as unknown as Entity
                                }

                                let portalComponent = PortalComponent.get(portal)
                                let otherPortalComponent = PortalComponent.get(otherPortal)

                                if(portalComponent.active && otherPortalComponent.active){
                                    
                                    //console.log("REGISTER NEW RAY")

                                    let nextRayData : rayPlatformDataType = {
                                        rayEmitterSource: rayData.rayEmitterSource,
                                        rayOriginEntity: otherPortal, //hit.entityId as Entity,
                                        hitEntity: undefined,
                                        index: rayData.index + 1,
                                        raySystemEntity: undefined,
                                        rayVisualEntity: undefined,
                                        active: true,
                                        rayCastActiveTimerId: undefined
                                    }

                                    let otherPortalTransform = Transform.get(otherPortal)
                                    let rayPos = Vector3.add(otherPortalTransform.position, Vector3.rotate(Vector3.create(0, -0.5, 0.2), otherPortalTransform.rotation))

                                    //console.log("PLATFRORM. HIT PORTAL: ", PortalColor[portalComponent.color], "REGISTER RAYCAST FROM:", PortalColor[otherPortalComponent.color])
                                    registerPlatformRaycast(nextRayData, rayPos, Transform.get(otherPortal).rotation)
                                }
                            }
                            else{
                                //console.log("LASER HIT OTHER ENTITIY:", hit.entityId, "LASER INDEX: ", rayData.index)
                                for(let i = rayData.index + 1; i < EmitterRootLaserData.length; i++){
                                    EmitterRootLaserData[i].active = false
                                    
                                    //console.log("TERMINATE LASER INDEX: ", i)
                                    if(EmitterRootLaserData[i].rayVisualEntity)
                                        Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.x = 0
                                        Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.y = 0
                                        Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.z = 0
                                }
                            }
                                
                        }
                    }
                    else {
                        rayData.hitEntity = undefined
                        //console.log('LASER. RAYCAST TEST no entities hit', rayData)
                        if(rayData.rayVisualEntity && rayData.active){
                            Transform.getMutable(rayData.rayVisualEntity).scale = Vector3.create(0.75, 1, 100 / 2)
                        }
                    }
                }
            }
        )
    }
    else{
        console.log("NO RAY DATA SYSTEM ENTITY ???")
    }
}