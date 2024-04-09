import { ColliderLayer, GltfContainer, Material, MeshCollider, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import { ILabData, ILevelSign, IMiscObjectData, LabType, LevelSignType, MiscObjectType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { PortableFlagComponent, WallDataComponent } from "../components"
import { createGlassHolePhysicBody, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import { GAME_STATE } from "../gameData"

export function createSignObject(signData: ILevelSign){
    let sign = engine.addEntity()
    Transform.create(sign, {
        parent:CONFIG.centerEntity,
        position: { x: signData.position.x, y: signData.position.y, z: signData.position.z },
        rotation: { x: signData.rotation.x, y: signData.rotation.y, z: signData.rotation.z, w: signData.rotation.w}
            //Quaternion.multiply(signData.rotation, Quaternion.fromEulerDegrees(0, 180, 0))
    })

    //ADD Entity to loading system
    IsLoadingObject.create(sign)

    switch(signData.type){
        case LevelSignType.SIGN_VERTICALBIG:
            Transform.getMutable(sign).rotation = Quaternion.multiply(signData.rotation, Quaternion.fromEulerDegrees(0, 180, 0))
            console.log("load level. create object: sign vertical big:", sign)
            GltfContainer.create(sign, {src: "models/lvlSign" + GAME_STATE.currentLevel.toString() + ".glb"})
            break

        case LevelSignType.SIGN_DOOR_ENTRANCE:
            console.log("load level. create object: sign door entrance:", sign)
            GltfContainer.create(sign, resources.models.door_entrancesign)
            break
            
        case LevelSignType.SIGN_DOOR_EXIT:
            console.log("load level. create object: sign door exit:", sign)
            GltfContainer.create(sign, resources.models.door_exitsign)
            break
    }
    return sign
}