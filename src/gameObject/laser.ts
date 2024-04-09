import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, AudioSource, VisibilityComponent } from "@dcl/sdk/ecs"
import { BoxType, DoorType, IBoxData, IDoorData, IFlipWallData, ILaserData, ILaserFieldData, IPlatformData, IStairData, LaserFieldRayState, LaserFieldType, LaserType, PlatformType, StairType, WallType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { BoxDataComponent, DoorDataComponent, FlipWallDataComponent, LaserEmitterComponent, LaserFieldDataComponent, LaserReceiverComponent, PlatformDataComponent, StairDataComponent, TeleportStatusComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic, createLaserEmitterBodyPhysic } from "../gameSystem/physic/createBody"
import { raycastDataType, registerLaserRay } from "../gameSystem/laserSystem"
import { activatePlatform, canceltriggerPlatform, createPlatform, deactivatePlatform, triggerPlatform } from "./platform"
import { cancelTriggerDoor, closeDoor, createDoor, openDoor, triggerDoor } from "./door"
import { activateStair, cancelTriggerStair, createStair, deactivateStair, triggerStair } from "./stair"
import { IsLoadingObject } from "../level/createLevel"
import { activateLaserFieldRay, cancelTriggerLaserFieldRay, createLaserField, deactivateLaserFieldRay, triggerLaserFieldRay } from "./laserField"
import { cancelTriggerFlipWal, createFlipWall, flipTheWall, triggerFlipWall } from "./flipWall"


let _EMITTER_ACTIVATEOBJS_DATA: {[key:number]: {entity: Entity, activateFn: Function, deactivateFn: Function}[]} = {}

export function resetLaserObjects(){
    _EMITTER_ACTIVATEOBJS_DATA = {}
}


export function createLaserEmitter(laserData: ILaserData){
    //CREATE ENTITY
    let laserEmitter = engine.addEntity()
    Transform.create(laserEmitter, {
        parent:CONFIG.centerEntity,
        position: { x: laserData.position.x, y: laserData.position.y, z: laserData.position.z },
        rotation: { x: laserData.rotation.x, y: laserData.rotation.y, z: laserData.rotation.z, w: laserData.rotation.w }
    })

    //ADD Entity to loading system
    IsLoadingObject.create(laserEmitter)

    switch(laserData.type){
        case LaserType.LASER_EMITTER: 
            console.log("load level. create object: laser emitter default:", laserEmitter)
            GltfContainer.create(laserEmitter, resources.models.laser_emitter)
            break
        case LaserType.LASER_EMITTER_RED:
            console.log("load level. create object: laser emitter red:", laserEmitter)
            GltfContainer.create(laserEmitter, resources.models.laser_emitter_red)
    }

    let buzzSound = engine.addEntity()
    Transform.create(buzzSound, {
        parent: laserEmitter,
        position: Vector3.Zero()
    })
    AudioSource.create(buzzSound, {
        audioClipUrl: resources.sounds.laserEmitterSound,
        loop: true,
        playing: true
    })
    //ADD Entity to loading system
    IsLoadingObject.create(buzzSound)

    console.log("laserData:", laserData)

    LaserEmitterComponent.create(laserEmitter, {
        type: laserData.type,
        position: laserData.position,
        rotation: laserData.rotation,
        dimension: laserData.dimension,
        rayEntities: [],
        isFinish: false
    })
    
    //adjust slightly to avoid wall collider
    let rayPos = Vector3.add(utils.getWorldPosition(laserEmitter), Vector3.rotate(Vector3.create(0, 0, 0.2), laserData.rotation))
    let rayRot = laserData.rotation

    let rayCastData: raycastDataType = {
        rayEmitterSource: laserEmitter,
        rayOriginEntity: laserEmitter,
        hitEntity: undefined,
        index: 0,
        raySystemEntity: undefined, //ENTITY FOR RAYCAST
        rayVisualEntity: undefined, //ENTITY FOR PLATFORM VISUAL
        active: true,
        rayCastActiveTimerId: undefined,
        rayLinePoints: [rayPos, undefined]
    }
    registerLaserRay(rayCastData, rayPos, rayRot)
    //createSingleRayCast(laserEmitter)

    //SETUP BOX PHYSIC
    let laserEmitterBody = createLaserEmitterBodyPhysic(laserEmitter)
    // boxBodiesList[box] = boxBody
    // boxList.push(box)
}

export function createLaserReceiver(laserData: ILaserData, controlledObject?: Entity){
    
    //CREATE ENTITY
    let laserReceiver = engine.addEntity()
    Transform.create(laserReceiver, {
        parent:CONFIG.centerEntity,
        position: laserData.position,
        rotation: laserData.rotation
    })
    let laserReceiverComponent = LaserReceiverComponent.create(laserReceiver, {
        type: laserData.type,
        position: laserData.position,
        rotation: laserData.rotation,
        dimension: laserData.dimension,
        activated: false
    })

      //ADD Entity to loading system
    IsLoadingObject.create(laserReceiver)

    GltfContainer.create(laserReceiver, resources.models.laser_receiver)

    console.log("game play. laser receiver creation:", laserData)

    //let toActivate: {entity: Entity, activateFn: Function, deactivateFn: Function}[] = []
    _EMITTER_ACTIVATEOBJS_DATA[laserReceiver] = []
    if(laserData.activating){
        for(let i = 0; i < laserData.activating.length; i++){
            if (Object.values(PlatformType).includes(laserData.activating[i].type as unknown as PlatformType)) {
                let entity = createPlatform(laserData.activating[i] as unknown as IPlatformData, laserReceiver)

                let activateFn = activatePlatform
                let deactivateFn = deactivatePlatform
                _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ entity, activateFn,  deactivateFn })
            }
            else if(Object.values(DoorType).includes(laserData.activating[i].type as unknown as DoorType)){
                let entity = createDoor(laserData.activating[i] as unknown as IDoorData, laserReceiver)
                
                let activateFn = openDoor
                let deactivateFn = closeDoor
                _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ entity, activateFn, deactivateFn })
            }
            else if(Object.values(StairType).includes(laserData.activating[i].type as unknown as StairType)){
                let entity = createStair(laserData.activating[i] as unknown as IStairData)
                
                let activateFn = activateStair
                let deactivateFn = deactivateStair
                _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ entity, activateFn, deactivateFn })
            }
            else if(Object.values(LaserFieldType).includes(laserData.activating[i].type as unknown as LaserFieldType)){
                let entity = createLaserField(laserData.activating[i] as unknown as ILaserFieldData)//createStair(laserData.activating[i] as unknown as IStairData)
                
                console.log("game play. laser receiver control laser field. laser field data:", LaserFieldRayState[LaserFieldDataComponent.get(entity).initial_state])

                let activateFn = activateLaserFieldRay
                let deactivateFn = deactivateLaserFieldRay
                
                if((laserData.activating[i] as unknown as ILaserFieldData).initial_state === LaserFieldRayState.OFF){
                    console.log("game play. laser field. reverse activation")
                    activateFn = deactivateLaserFieldRay
                    deactivateFn = activateLaserFieldRay
                }

                _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ entity, activateFn, deactivateFn })
            }
            else if(Object.values(WallType).includes(laserData.activating[i].type as unknown as WallType)){
                if(laserData.activating[i].type === WallType.FLIPWALL){
                    let entity = createFlipWall(laserData.activating[i] as unknown as IFlipWallData, laserReceiver)
                            
                    let activateFn = flipTheWall
                    let deactivateFn = flipTheWall
                    _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ entity, activateFn, deactivateFn })
            
                }
            }
            //PUT ANOTHER TYPE HERE
            //else if ()
        }
    }
    
    if(controlledObject){
        laserReceiverComponent.parent = controlledObject
        if(StairDataComponent.getMutableOrNull(controlledObject)){
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ 
                entity: controlledObject, 
                activateFn: triggerStair,
                deactivateFn: cancelTriggerStair
            })
        }
        else if(DoorDataComponent.getMutableOrNull(controlledObject)){
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({ 
                entity: controlledObject, 
                activateFn: triggerDoor,
                deactivateFn: cancelTriggerDoor
            })
        }
        else if(PlatformDataComponent.getMutableOrNull(controlledObject)){
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({
                entity : controlledObject,
                activateFn: triggerPlatform,
                deactivateFn: canceltriggerPlatform
            })
        }
        else if(LaserFieldDataComponent.getMutableOrNull(controlledObject)){
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({
                entity : controlledObject,
                activateFn: triggerLaserFieldRay,
                deactivateFn: cancelTriggerLaserFieldRay
            })
        }
        else if(FlipWallDataComponent.getMutableOrNull(controlledObject)){
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiver].push({
                entity : controlledObject,
                activateFn: triggerFlipWall,
                deactivateFn: cancelTriggerFlipWal
            })
        }
        //PUT ANOTHER TYPE HERE
        //else if()
    }
    
    if(laserData.connector_line){
        let laserDataComponent = LaserReceiverComponent.getMutable(laserReceiver)

        let connector_line_active = engine.addEntity()
        GltfContainer.create(connector_line_active, {src: "models/connector_line/" + laserData.connector_line + "_active.glb"})
        Transform.create(connector_line_active, {
            parent: CONFIG.centerEntity
        })
        VisibilityComponent.create(connector_line_active, {
            visible: false
        })
        laserDataComponent.connector_line_active = connector_line_active

        let connector_line_inactive = engine.addEntity()
        GltfContainer.create(connector_line_inactive, {src: "models/connector_line/" +  laserData.connector_line + "_inactive.glb"})
        Transform.create(connector_line_inactive, {
            parent: CONFIG.centerEntity
        })
        VisibilityComponent.create(connector_line_inactive, {
            visible: true
        })
        laserDataComponent.connector_line_inactive = connector_line_inactive

        IsLoadingObject.create(connector_line_active)
        IsLoadingObject.create(connector_line_inactive)
    }

    console.log("game play. laser receiver creation:", _EMITTER_ACTIVATEOBJS_DATA[laserReceiver])
    return laserReceiver
}

export function laserReceiverActivated(laserReceiverEnt: Entity){
    let laserReceiverComponent = LaserReceiverComponent.getMutable(laserReceiverEnt)
    if(laserReceiverComponent.activated) return
    else laserReceiverComponent.activated = true

    console.log("game play. laser receiver activated (hit by laser).")

    for(let i = 0; i < _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt].length; i++){
        if(laserReceiverComponent.parent){
            //TRIGGER ONLY, BUT NOT YET ACTIVATED
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].activateFn(laserReceiverEnt, _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].entity)
        }
        else{
            //ACTIVATE OBJECT DIRECTLY
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].activateFn(_EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].entity)
        }
    }

    if(laserReceiverComponent.connector_line_active && laserReceiverComponent.connector_line_inactive){
        VisibilityComponent.getMutable(laserReceiverComponent.connector_line_active).visible = true
        VisibilityComponent.getMutable(laserReceiverComponent.connector_line_inactive).visible = false
    }
}
export function laserReceiverDeactivated(laserReceiverEnt: Entity){
    let laserReceiverComponent = LaserReceiverComponent.getMutable(laserReceiverEnt)
    if(!laserReceiverComponent.activated) return
    else laserReceiverComponent.activated = false

    console.log("game play. laser receiver deactivated (not hit by laser).")

    for(let i = 0; i < _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt].length; i++){
        if(laserReceiverComponent.parent){
            //TRIGGER ONLY, BUT NOT YET DEACTIVATED
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].deactivateFn(laserReceiverEnt, _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].entity)
        }
        else{
            //DEACTIVATE OBJECT DIRECTLY
            _EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].deactivateFn(_EMITTER_ACTIVATEOBJS_DATA[laserReceiverEnt][i].entity)
        }
    }
    
    if(laserReceiverComponent.connector_line_active && laserReceiverComponent.connector_line_inactive){
        VisibilityComponent.getMutable(laserReceiverComponent.connector_line_active).visible = false
        VisibilityComponent.getMutable(laserReceiverComponent.connector_line_inactive).visible = true
    }
}