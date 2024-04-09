import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity } from "@dcl/sdk/ecs"
import { BoxType, DoorType, IBoxData, IDoorData, ILaserData, IPlatformData, IStairData, LaserType, PlatformType, StairType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import * as utils from '@dcl-sdk/utils'
import { Color4, Vector3 } from "@dcl/sdk/math"
import { rayPlatformDataType, registerPlatformRaycast } from "../gameSystem/lightPlatformSystem"
import { IsLoadingObject } from "../level/createLevel"


export function createLightPlatform(lightPlatformData: IPlatformData){
    //CREATE ENTITY
    let lightPlatformEmitter = engine.addEntity()
    Transform.create(lightPlatformEmitter, {
        parent:CONFIG.centerEntity,
        position: { x: lightPlatformData.position.x, y: lightPlatformData.position.y, z: lightPlatformData.position.z },
        rotation: { x: lightPlatformData.rotation.x, y: lightPlatformData.rotation.y, z: lightPlatformData.rotation.z, w: lightPlatformData.rotation.w }
    })
    //ADD Entity to loading system
    IsLoadingObject.create(lightPlatformEmitter)

    GltfContainer.create(lightPlatformEmitter, resources.models.light_platform_emitter)
    
    console.log("load level. create object: light platform emitter:", lightPlatformEmitter)
    
    //adjust slightly to avoid wall collider
    let rayPos = Vector3.add(utils.getWorldPosition(lightPlatformEmitter), Vector3.rotate(Vector3.create(0, 0, 0.2), lightPlatformData.rotation))
    let rayRot = lightPlatformData.rotation

    let rayCastData: rayPlatformDataType = {
        rayEmitterSource: lightPlatformEmitter,
        rayOriginEntity: lightPlatformEmitter,
        hitEntity: undefined,
        index: 0,
        raySystemEntity: undefined, //ENTITY FOR RAYCAST
        rayVisualEntity: undefined, //ENTITY FOR PLATFORM VISUAL
        active: true,
        rayCastActiveTimerId: undefined
    }
    registerPlatformRaycast(rayCastData, rayPos, rayRot)

    return lightPlatformEmitter
}
