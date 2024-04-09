import { ColliderLayer, GltfContainer, Material, MeshCollider, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import { ILabData, IMiscObjectData, LabType, MiscObjectType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { PortableFlagComponent, WallDataComponent } from "../components"
import { createGlassHolePhysicBody, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { Color4, Vector3 } from "@dcl/sdk/math"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"

export function createMiscObj(miscData: IMiscObjectData){
    let misc = engine.addEntity()
    Transform.create(misc, {
        parent:CONFIG.centerEntity,
        position: { x: miscData.position.x, y: miscData.position.y, z: miscData.position.z },
        rotation: { x: miscData.rotation.x, y: miscData.rotation.y, z: miscData.rotation.z, w: miscData.rotation.w }
    })

    //ADD Entity to loading system
    IsLoadingObject.create(misc)

    switch(miscData.type){
        case MiscObjectType.SECURITY_CAM:
            console.log("load level. create object: security cam:", misc)
            GltfContainer.create(misc, resources.models.securityCam)
            break
            
        case MiscObjectType.CONTROL_ROOM:
            console.log("load level. create object: control room:", misc)
            GltfContainer.create(misc, resources.models.controlRoom)
            break
    }
    return misc
}