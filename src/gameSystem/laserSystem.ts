import { ColliderLayer, Entity, GltfContainer, PBGltfContainer, RaycastQueryType, Transform, engine, raycastSystem } from "@dcl/sdk/ecs"
import { Vector3, Quaternion, Color4 } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
import { BoxDataComponent, LaserEmitterComponent, LaserRayComponent, LaserReceiverComponent, PortalComponent, TurretSystemComponent } from "../components"
import resources from "../resources"
import { BoxType, LaserType, State } from "../gameObject/gameObjectType"
import helper from "../helper/helper"
import { laserReceiverActivated, laserReceiverDeactivated } from "../gameObject/laser"
import { GAME_STATE } from "../gameData"
import { boxList } from "../gameObject/box"
import { HealthDamageType, _CONFIG_HEALTH } from "./healthSystem"
import { destroyTurret, turretList } from "../gameObject/turret"

export type raycastDataType = {
    rayEmitterSource: Entity, //EMITTER SOURCE
    rayOriginEntity: Entity, //ray entity source
    hitEntity: Entity | undefined,
    index:number,
    raySystemEntity: Entity | undefined, //ENTITY FOR RAYCAST
    rayVisualEntity: Entity | undefined, //ENTITY FOR LASER VISUAL
    active: boolean,
    rayCastActiveTimerId: number | undefined, //EVERY FIRERAYCAST CALLED, WILL ACTIVATE TIMER FOR SHORT PERIODE OF TIME, BECAUSE PORTAL HAVE DELAY WHEN APPEAR >.<
    rayLinePoints: [Vector3, Vector3 | undefined], //START POS AND HIT POS,
    isRayDamagePlayer?: boolean
}
type raycastData = {[key:number]: raycastDataType[]}

let _LASER_RAYCAST_DATA: raycastData = {}
let _LASER_RECEIVER_DATA: {[key: number]: Entity | undefined} = {}

let portalBluePrevPos: Vector3 | undefined = undefined
let portalOrangePrevPos: Vector3 | undefined = undefined
let prevBoxMirrorsPos: (Vector3 | undefined) [] = []


export function resetLaserSystemConfig(){
    for(let key in _LASER_RAYCAST_DATA){
        for(let i = 0; i < _LASER_RAYCAST_DATA[key].length; i++){
            engine.removeEntity(_LASER_RAYCAST_DATA[key][i].raySystemEntity as Entity)
            engine.removeEntity(_LASER_RAYCAST_DATA[key][i].rayVisualEntity as Entity)
        }
    }
    _LASER_RAYCAST_DATA = {}
    _LASER_RECEIVER_DATA = {}
    portalBluePrevPos = undefined
    portalOrangePrevPos = undefined
    prevBoxMirrorsPos = []
}

let lineStartPosDebug: Entity[] = []
let lineEndPosDebug: Entity[] = []
let intersectPosDebug: Entity[] = []

//CALL EVERYTIME FIRE NEW LASER RAY TO CHECK INTERFERENCE FROM OTHER GAME OBJECTS (BOX, PORTAL, ETC)
export function registerLaserRay(rayData: raycastDataType, rayPos: Vector3, rayRot: Quaternion, fromBox?:boolean){
    if(!(rayData.rayEmitterSource in _LASER_RAYCAST_DATA)) {
        _LASER_RAYCAST_DATA[rayData.rayEmitterSource] = []
    }

    let EmitterRootLaserData = _LASER_RAYCAST_DATA[rayData.rayEmitterSource]
    
    if(rayData.index > EmitterRootLaserData.length - 1){
        //NEW RAY
        //console.log("LASER. REGISTER NEW RAY, index:", rayData.index, EmitterRootLaserData.length)

        //check if box already in ray to prevent inifinite loop
        for(let i = 0; i < EmitterRootLaserData.length; i++){
            //console.log("COMPARE", i, ":", EmitterRootLaserData[i].rayOriginEntity, rayData.rayOriginEntity)
            if(EmitterRootLaserData[i].rayOriginEntity === rayData.rayOriginEntity && EmitterRootLaserData[i].active) {
                if(BoxDataComponent.getOrNull(rayData.rayOriginEntity)?.type === BoxType.BOX_MIRROR){
                    //console.log("LASER. HIT SAME BOX, RETURN")
                    return
                }
            }
        }

        rayData.raySystemEntity = engine.addEntity()
        Transform.createOrReplace(rayData.raySystemEntity, {
            position: rayPos,
            rotation: rayRot
        })

        rayData.rayVisualEntity = engine.addEntity()

        let laserModel: PBGltfContainer = resources.models.laser_ray_green
        if(LaserEmitterComponent.get(rayData.rayEmitterSource).type === LaserType.LASER_EMITTER_RED)
            laserModel = resources.models.laser_ray_red

        GltfContainer.create(rayData.rayVisualEntity, laserModel)
        Transform.createOrReplace(rayData.rayVisualEntity, {
            parent: fromBox? rayData.rayOriginEntity : engine.RootEntity,
            position: fromBox? Vector3.Zero() : rayPos,
            rotation: fromBox? Quaternion.Identity() : rayRot,
            //scale: Vector3.Zero()
        })

        _LASER_RAYCAST_DATA[rayData.rayEmitterSource].push(rayData)

        fireRayCast(rayData)
    }
    else{
        //MAKE RAY AFTER THIS INACTIVE AND SET LASER RAY SCALE TO 0
        let ExistingRayData = _LASER_RAYCAST_DATA[rayData.rayEmitterSource][rayData.index]
        let ExistingVisualTransform = Transform.get(ExistingRayData.rayVisualEntity as Entity)

        //console.log("LASER. MODIFY PREVIOUS RAY INDEX:", ExistingRayData, EmitterRootLaserData.length)

        let isPosChanged = false
        if(!Vector3.equalsWithEpsilon(ExistingVisualTransform.position, rayPos)){
            //console.log("LASER. RAY CHANGE POS", rayData.index)
            isPosChanged = true
        }

        ExistingRayData.active = true
        //ExistingRayData.hitEntity = rayData.hitEntity
        ExistingRayData.rayOriginEntity = rayData.rayOriginEntity
        ExistingRayData.rayLinePoints[0] = rayData.rayLinePoints[0]

        if(ExistingRayData.raySystemEntity){
            Transform.createOrReplace(ExistingRayData.raySystemEntity, {
                position: rayPos,
                rotation: rayRot
            })
        }   
        if(ExistingRayData.rayVisualEntity){
            let rayVisualTransform = Transform.getMutable(ExistingRayData.rayVisualEntity)
            if(isPosChanged && !fromBox){
                //utils.tweens.startScaling(ExistingRayData.rayVisualEntity, ExistingVisualTransform.scale, Vector3.Zero(), 0.15)
                rayVisualTransform.scale = Vector3.Zero()
            }
            rayVisualTransform.parent = fromBox? rayData.rayOriginEntity : engine.RootEntity
            rayVisualTransform.position = fromBox? Vector3.Zero() : rayPos
            rayVisualTransform.rotation = fromBox? Quaternion.Identity() : rayRot
            
        }

        // for(let i = rayData.index + 1; i < EmitterRootLaserData.length; i++){
        //     EmitterRootLaserData[i].active = false

        //     if(EmitterRootLaserData[i].rayVisualEntity){
        //         Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.x = 0
        //         Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.y = 0
        //         Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.z = 0
        //     }
        // }

        fireRayCast(ExistingRayData)
    }
}

export function LaserRaySystem(dt: number){
    if(GAME_STATE.state !== State.PLAYING) return
    if(!GAME_STATE.portalBlue || !GAME_STATE.portalOrange) return

    let portalBlueTransform = Transform.get(GAME_STATE.portalBlue)
    let portalOrangeTransform = Transform.get(GAME_STATE.portalOrange)

    if(!portalBluePrevPos) portalBluePrevPos = portalBlueTransform.position
    if(!portalOrangePrevPos) portalOrangePrevPos = portalOrangeTransform.position
    
    /*
        If any portal or box moves, update the laser ray.
        TODO: add if turret moves.
    */
    let isPortalMove = false
    if(!Vector3.equals(portalBluePrevPos, portalBlueTransform.position) || !Vector3.equals(portalOrangePrevPos, portalOrangeTransform.position)){
        isPortalMove = true
        portalBluePrevPos = portalBlueTransform.position
        portalOrangePrevPos = portalOrangeTransform.position
    }

    let isAnyBoxMove = false
    for(let i = 0; i < boxList.length; i++){
        let boxMirrorGlobalPos = utils.getWorldPosition(boxList[i])
        if(i >= prevBoxMirrorsPos.length){
            prevBoxMirrorsPos.push(undefined)
        }
        if(!prevBoxMirrorsPos[i]) prevBoxMirrorsPos[i] = boxMirrorGlobalPos

        if(!Vector3.equals(prevBoxMirrorsPos[i] as Vector3, boxMirrorGlobalPos)){
            isAnyBoxMove = true
            //console.log("LASER. ONE OF BOX MOVE", prevBoxMirrorsPos[i])
            prevBoxMirrorsPos[i] = boxMirrorGlobalPos
            break
        }
    }

    if(isPortalMove || isAnyBoxMove){
        //console.log("LASER. INITIATE LASER RAY CHAIN")
        for(let key in _LASER_RAYCAST_DATA){
            fireRayCast(_LASER_RAYCAST_DATA[key][0])
        }
    }

    /*
        Loop through laser ray data to:
        * Check if laser ray (green or red) hit receiver
        * Check if laser red ray hit player. If yes damage.
    */
    for(let key in _LASER_RAYCAST_DATA){
        let i = 0
        let activeCount = 0
        for(i = 0; i < _LASER_RAYCAST_DATA[key].length; i++){
            let emitterData = LaserEmitterComponent.get(_LASER_RAYCAST_DATA[key][i].rayEmitterSource)
            if(emitterData.type === LaserType.LASER_EMITTER_RED && _LASER_RAYCAST_DATA[key][i].active){
                /* 
                    Sphere intersection with line, taken from:
                    * http://nic-gamedev.blogspot.com/2011/11/using-vector-mathematics-and-bit-of_09.html
                    * http://nic-gamedev.blogspot.com/2011/11/using-vector-mathematics-and-bit-of_08.html
                */
                let lineStartPoint = _LASER_RAYCAST_DATA[key][i].rayLinePoints[0]
                let lineEndPoint = _LASER_RAYCAST_DATA[key][i].rayLinePoints[1]

                //console.log("LASER. LINE POINTS: ", key, i, _LASER_RAYCAST_DATA[key][i].rayLinePoints[0], _LASER_RAYCAST_DATA[key][i].rayLinePoints[1])
                if(lineStartPoint && lineEndPoint){
                    //check player intersection
                    let playerPos = Vector3.subtract(Transform.get(engine.PlayerEntity).position, Vector3.create(0, 0, 0))
                    let intersectionResult = isTargetIntersectWithLine(lineStartPoint, lineEndPoint, playerPos, 1)
                    //console.log("LASER.", i, "IS INTERSECT:", intersectionResult.isIntersect, intersectionResult.intersectionPoint, intersectionResult.distanceSq)

                    if(intersectionResult.isIntersect){
                        if(!_LASER_RAYCAST_DATA[key][i].isRayDamagePlayer){
                            _LASER_RAYCAST_DATA[key][i].isRayDamagePlayer = true
                            _CONFIG_HEALTH.addDPS(HealthDamageType.LASERRED)
                            //console.log("LASER RAY DAMAGE", _LASER_RAYCAST_DATA[key][i].isRayDamagePlayer, "ADD DPS", _CONFIG_HEALTH.totalDPS)
                        }
                    }
                    else{
                        if(_LASER_RAYCAST_DATA[key][i].isRayDamagePlayer){
                            _LASER_RAYCAST_DATA[key][i].isRayDamagePlayer = false
                            _CONFIG_HEALTH.removeDPS(HealthDamageType.LASERRED)
                            //console.log("LASER RAY DAMAGE", _LASER_RAYCAST_DATA[key][i].isRayDamagePlayer, "REMOVE DPS", _CONFIG_HEALTH.totalDPS)
                        }
                    }

                    for(let turret of turretList){
                        let turretSystemComponent = TurretSystemComponent.getMutable(turret)
                        //let turretPosGlobal = Vector3.add(Transform.get(turret).position, CONFIG.centerGround)
                        let turretPosGlobal = utils.getWorldPosition(turret)

                        let turretIntersectionResult = isTargetIntersectWithLine(lineStartPoint, lineEndPoint, turretPosGlobal, 1.5)
                        if(turretIntersectionResult.isIntersect){
                            turretSystemComponent.turretHitByLaser = true

                            if(turretSystemComponent.turretDestroyLaserCount === -1){
                                turretSystemComponent.turretDestroyLaserCount = utils.timers.setTimeout(() => {
                                    if(turretSystemComponent.turretHitByLaser){
                                        destroyTurret(turret)
                                    }
                                    else{
                                        utils.timers.clearTimeout(turretSystemComponent.turretDestroyLaserCount)
                                        turretSystemComponent.turretDestroyLaserCount = -1
                                    }
                                }, 2000)
                            }

                            Transform.getMutable(turret).scale = Vector3.scale(Vector3.One(), 1 + 0.2 * Math.random())
                        }
                        else{
                            
                            turretSystemComponent.turretHitByLaser = false
                        }
                    }
                }
            }
            if(_LASER_RAYCAST_DATA[key][i].active){ activeCount += 1 }
            else break
            
        }

        let isLaserReceiver = LaserReceiverComponent.getOrNull(_LASER_RAYCAST_DATA[key][i - 1].hitEntity as Entity)
        if(isLaserReceiver && isLaserReceiver.type === LaserType.LASER_RECEIVER){
            //console.log("LASER HIT RECEIVER!!")
            laserReceiverActivated(_LASER_RAYCAST_DATA[key][i - 1].hitEntity as Entity)
            _LASER_RECEIVER_DATA[key] = _LASER_RAYCAST_DATA[key][i - 1].hitEntity as Entity
        }
        else{
            if(_LASER_RECEIVER_DATA[key]){
                laserReceiverDeactivated( _LASER_RECEIVER_DATA[key] as Entity)
                _LASER_RECEIVER_DATA[key] = undefined
            }
        }
    }
}

function isTargetIntersectWithLine(lineStart: Vector3, lineEnd: Vector3, targetPos: Vector3, radius: number, i?: number | undefined){
    //let playerPos = Transform.get(engine.PlayerEntity).position
    let lineDiffVect = Vector3.subtract(lineEnd, lineStart)
    let testPoint = Vector3.subtract(targetPos, lineStart)

    let dotProduct = Vector3.dot(lineDiffVect, testPoint)
    let percAlongLine = dotProduct / Vector3.lengthSquared(lineDiffVect)

    if(percAlongLine < 0) percAlongLine = 0
    if(percAlongLine > 1) percAlongLine = 1

    let intersectionPoint = Vector3.add(lineStart, Vector3.scale(lineDiffVect, percAlongLine))

    //let targetPosSameY = Vector3.create(targetPos.x, intersectionPoint.y, targetPos.z)
    let targetPosToInstersectPoint = Vector3.subtract(intersectionPoint, targetPos)
    let distanceSqTargetrToLine = Vector3.lengthSquared(targetPosToInstersectPoint)

    // if(i !== undefined){
    //     if(!lineStartPosDebug[i]) lineStartPosDebug[i] = utils.addTestCube({position: Vector3.Zero()}, undefined, undefined, Color4.Teal(), true, true)
    //     if(!lineEndPosDebug[i]) lineEndPosDebug[i] = utils.addTestCube({position: Vector3.Zero()}, undefined, undefined, Color4.Teal(), true, true)
    //     if(!intersectPosDebug[i]) intersectPosDebug[i] = utils.addTestCube({position: Vector3.Zero()}, undefined, undefined, Color4.Teal(), true, true)
        
    //     Transform.getMutable(lineStartPosDebug[i]).position = lineStart
    //     Transform.getMutable(lineEndPosDebug[i]).position = lineEnd
    //     Transform.getMutable(intersectPosDebug[i]).position = intersectionPoint
    // }
    return {
        isIntersect: distanceSqTargetrToLine < radius * radius,
        distanceSq: distanceSqTargetrToLine,
        intersectionPoint: intersectionPoint
    }
}

export function manualTriggerLaserRayChain() {
    //console.log("LASER. INITIATE LASER RAY CHAIN MANUAL CALL")
    for (let key in _LASER_RAYCAST_DATA) {
        fireRayCast(_LASER_RAYCAST_DATA[key][0])
    }
}

function fireRayCast(rayData: raycastDataType){

    if(rayData.rayCastActiveTimerId) {
        utils.timers.clearTimeout(rayData.rayCastActiveTimerId as number)
    }
    //console.log("LASER. FIRE RAYCAST FROM:", rayData.index, rayData.rayCastActiveTimerId)
    rayData.rayCastActiveTimerId = utils.timers.setTimeout(() => {
        raycastSystem.removeRaycasterEntity(rayData.raySystemEntity as Entity)
        rayData.rayCastActiveTimerId = undefined
        //console.log("LASER. STOP RAYCAST FROM:", rayData.index)
    }, 750) //ACTIVATE FOR 0.5 SECOND

    let delayProcessCount = 0
    if(rayData.raySystemEntity){
        raycastSystem.registerLocalDirectionRaycast(
            {
                entity: rayData.raySystemEntity,
                opts: {
                    queryType: RaycastQueryType.RQT_HIT_FIRST,
                    direction: Vector3.Forward(),
                    maxDistance: 1000,
                    continuous: true,
                    collisionMask: ColliderLayer.CL_CUSTOM1 | ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_CUSTOM4 //box, wall, portal
                },
            },
            function (raycastResult) {
                
                // delayProcessCount += 1
                // if(delayProcessCount <= 1) return
                // if(rayData.index === 1) {
                //     console.log("game play. laser index 1:", raycastResult.hits[0]?.meshName, GltfContainer.get(raycastResult.hits[0].entityId as Entity))
                // }
            
                if(rayData.active){
                    if (raycastResult.hits.length > 0) {
                        let hit = raycastResult.hits[0]
                        rayData.rayLinePoints[1] = hit.position
                        if (hit.entityId) {
                            //TODO: CHECK IF HIT ENTITY DATA SAME WITH NEXT RAY DATA, IF SAME RETURN.

                            rayData.hitEntity = hit.entityId as Entity
                            let EmitterRootLaserData = _LASER_RAYCAST_DATA[rayData.rayEmitterSource]
                            //console.log("LASER RAY HIT:", hit.entityId, hit.meshName, hit.length)

                            if(rayData.rayVisualEntity){
                                // let visualEntTransform = Transform.get(rayData.rayVisualEntity)
                                // utils.tweens.startScaling(rayData.rayVisualEntity, visualEntTransform.scale, Vector3.create(2, 2, hit.length + 0.2), 0.1)

                                Transform.getMutable(rayData.rayVisualEntity).scale = Vector3.create(2, 2, hit.length)
                            }

                            let isBoxEntity = BoxDataComponent.getOrNull(hit.entityId as Entity)
                            if(isBoxEntity && isBoxEntity.type === BoxType.BOX_MIRROR){
                                let nextRayPos = utils.getWorldPosition(hit.entityId as Entity)
                                let nextRayRot = helper.getEntityGlobalRotation(hit.entityId as Entity)

                                //create new ray and register it
                                let nextRayData : raycastDataType = {
                                    rayEmitterSource: rayData.rayEmitterSource,
                                    rayOriginEntity: hit.entityId as Entity,
                                    hitEntity: undefined,
                                    index: rayData.index + 1,
                                    raySystemEntity: undefined,
                                    rayVisualEntity: undefined,
                                    active: true,
                                    rayCastActiveTimerId: undefined,
                                    rayLinePoints: [nextRayPos, undefined]
                                }
                                
                                if(helper.compareQuat(nextRayRot, Quaternion.Identity())) return

                                registerLaserRay(nextRayData, nextRayPos, nextRayRot, true)
                            }
                            else if(hit.entityId === GAME_STATE.portalBlue || hit.entityId === GAME_STATE.portalOrange){
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
                                let portalTransform = Transform.get(portal)
                                let otherPortalTransform = Transform.get(otherPortal)

                                if(portalComponent.active && otherPortalComponent.active){
                                    //MATCH WITH RELATIVE POSITION WITH OTHER PORTAL
                                    //let nextRayPos = Vector3.add(Transform.get(otherPortal).position, Vector3.scale(otherPortalComponent.normal, 0.1))
                                    let hitRelativePosPortal = Vector3.rotate(Vector3.subtract(hit.position as unknown as Vector3, Transform.get(portal).position), helper.conjugateQuat(Transform.get(portal).rotation))
                                    //console.log("LASER. PORTAL DISTANCE LENGTH", Vector3.lengthSquared(hitRelativePosPortal))
                                    if (Vector3.lengthSquared(hitRelativePosPortal) > 2) return
                                    let relativePosPortal2 = Vector3.add(Transform.get(otherPortal).position, Vector3.rotate(hitRelativePosPortal, Transform.get(otherPortal).rotation))
                                    
                                    //----------------------------------------------------------------//
                                    let sourceTransform = Transform.get(rayData.raySystemEntity as Entity)
                                    let rayOutRelative_portalSource = Vector3.normalize(Vector3.subtract(sourceTransform.position, hit.position as Vector3))
                                    let rayOutGlobal = Vector3.rotate(rayOutRelative_portalSource, helper.conjugateQuat(portalTransform.rotation))
                                    //utils.addTestCube({position: Vector3.add(rayOutGlobal, hit.position as Vector3), scale: Vector3.create(0.2, 0.2, 0.2)}, undefined, undefined, Color4.Magenta())

                                    let rayOutRelative_otherPortal = Vector3.rotate(rayOutGlobal, otherPortalTransform.rotation)
                                    //utils.addTestCube({position: Vector3.add(rayOutRelative_otherPortal, relativePosPortal2), scale: Vector3.create(0.2, 0.2, 0.2)}, undefined, undefined, Color4.Teal())

                                    let finalRotation = Quaternion.fromLookAt(relativePosPortal2, Vector3.add(rayOutRelative_otherPortal, relativePosPortal2))

                                    let nextRayData : raycastDataType = {
                                        rayEmitterSource: rayData.rayEmitterSource,
                                        rayOriginEntity: otherPortal, //hit.entityId as Entity,
                                        hitEntity: undefined,
                                        index: rayData.index + 1,
                                        raySystemEntity: undefined,
                                        rayVisualEntity: undefined,
                                        active: true,
                                        rayCastActiveTimerId: undefined,
                                        rayLinePoints: [relativePosPortal2, undefined]
                                    }
                                    
                                    registerLaserRay(nextRayData, relativePosPortal2, finalRotation)
                                }
                            }
                            else{
                                //console.log("LASER HIT OTHER ENTITIY:", hit.meshName, "LASER INDEX: ", rayData.index, "TERMINATE: ", rayData.index + 1)
                                for(let i = rayData.index + 1; i < EmitterRootLaserData.length; i++){
                                    EmitterRootLaserData[i].active = false
                                    
                                    //console.log("TERMINATE LASER INDEX: ", i)
                                    if(EmitterRootLaserData[i].rayVisualEntity){
                                        Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.x = 0
                                        Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.y = 0
                                        Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.z = 0
                                    }
                                }
                            }
                                
                        }
                    }
                    else {
                        rayData.hitEntity = undefined
                        //console.log('LASER. RAYCAST TEST no entities hit', rayData)
                        if(rayData.rayVisualEntity && rayData.active){
                            Transform.getMutable(rayData.rayVisualEntity).scale = Vector3.create(2, 2, 100)
                        }
                        //rayData.rayLinePoints[1] = undefined 
                        rayData.rayLinePoints[1] = Vector3.add(
                            Vector3.rotate(Vector3.create(0, 0, 100), Transform.get(rayData.raySystemEntity as Entity).rotation),
                            Transform.get(rayData.raySystemEntity as Entity).position
                        )

                        let EmitterRootLaserData = _LASER_RAYCAST_DATA[rayData.rayEmitterSource]

                        for(let i = rayData.index + 1; i < EmitterRootLaserData.length; i++){
                            EmitterRootLaserData[i].active = false
                            
                            //console.log("TERMINATE LASER INDEX: ", i)
                            if(EmitterRootLaserData[i].rayVisualEntity){
                                Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.x = 0
                                Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.y = 0
                                Transform.getMutable(EmitterRootLaserData[i].rayVisualEntity as unknown as Entity).scale.z = 0
                            }
                        }
                    }
                }
            }
        )
    }
    else{
        console.log("LASER. NO RAY DATA SYSTEM ENTITY ???")
    }
}
