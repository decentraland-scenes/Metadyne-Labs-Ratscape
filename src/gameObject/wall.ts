import { ColliderLayer, Entity, GltfContainer, Material, MeshCollider, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import { IWallData, WallType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { PortableFlagComponent, WallDataComponent } from "../components"
import { createGlassHolePhysicBody, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { Color3, Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import { OBJECT_GRABBED_CONFIG } from "../gameSystem/objectGrabbingSystem"

type WallBodyListType = {[key:number]: CANNON.Body}
export let wallBodiesList: WallBodyListType = {}

export function resetWallObjects(){
    wallBodiesList = {}
}

export function createWall(wallData: IWallData){
    let wall = engine.addEntity()
    Transform.create(wall, {
        parent:CONFIG.centerEntity,
        position: { x: wallData.position.x, y: wallData.position.y, z: wallData.position.z },
        rotation: { x: wallData.rotation.x, y: wallData.rotation.y, z: wallData.rotation.z, w: wallData.rotation.w }
    })

    //ADD WALL COMPONENT
    WallDataComponent.create(wall, wallData)

    if(CONFIG.DEBUG_WALL_ORIENTATION_ENABLED){
        let debugOrientation = engine.addEntity()
        GltfContainer.create(debugOrientation, resources.models.debugArrow)
        Transform.create(debugOrientation, {
            parent: CONFIG.centerEntity,
            position: wallData.position,
            rotation: wallData.rotation,
            scale: Vector3.create(2, 2, 0.5)
        })
        if(wallData.type === WallType.FLOOR_PORTABLE || wallData.type === WallType.FLOOR_UNPORTABLE || wallData.type === WallType.FLOOR_UNPORTABLE_V1 || wallData.type === WallType.FLOOR_UNPORTABLE_V2){
            Transform.getMutable(debugOrientation).rotation = Quaternion.multiply(wallData.rotation, Quaternion.fromEulerDegrees(-90, 0, 0))
        }
    }

    //ADD Entity to loading system
    IsLoadingObject.create(wall)

    let boxBody: CANNON.Body
    
    switch(wallData.type){
        case WallType.FLOOR_PORTABLE:
            console.log("load level. create object: floor portable:", wall)
            GltfContainer.create(wall, resources.models.floor_portable)
            PortableFlagComponent.create(wall,{
                dimension: wallData.dimension
            })
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break

        case WallType.FLOOR_UNPORTABLE:
            console.log("load level. create object: floor unportable default:", wall)
            GltfContainer.create(wall, resources.models.floor_unportable)
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break

        case WallType.FLOOR_UNPORTABLE_V1:
            console.log("load level. create object: floor unportable variant 1:", wall)
            GltfContainer.create(wall, resources.models.floor_unportable_v1)
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break
        
        case WallType.FLOOR_UNPORTABLE_V2:
            console.log("load level. create object: floor unportable variant 2:", wall)
            GltfContainer.create(wall, resources.models.floor_unportable_v2)
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break

        case WallType.WALL_PORTABLE:
            console.log("load level. create object: wall portable:", wall)
            GltfContainer.create(wall, resources.models.wall_portable)
            PortableFlagComponent.create(wall,{
                dimension: wallData.dimension
            })
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break

        case WallType.WALL_UNPORTABLE:
            console.log("load level. create object: wall unportable:", wall)
            GltfContainer.create(wall, resources.models.wall_unportable)
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break

        case WallType.WALL_GLASSHOLE:
            console.log("load level. create object: wall glas hole:", wall)
            GltfContainer.create(wall, resources.models.glass_hole)
            //CREATE HOLE COLLIDER
            let holeCollider = engine.addEntity()
            Transform.create(holeCollider, {
                parent: wall,
                scale: Vector3.create(2.2, 2.2, 0.04)
            })
            Material.setPbrMaterial(holeCollider, {
                albedoColor: Color4.create(0.5, 0.5, 0.5, CONFIG.DEBUG_SCENE_ENABLED? 0.1 : 0)
              })
            MeshRenderer.setBox(holeCollider)
            MeshCollider.setBox(holeCollider, ColliderLayer.CL_PHYSICS)

            //SETUP WALL PHYSIC
            createGlassHolePhysicBody(wall)
            break

        case WallType.WALL_GLASS:
            console.log("load level. create object: wall glas default:", wall)
            GltfContainer.create(wall, resources.models.glass_default)
            //SETUP WALL PHYSIC
            boxBody = createWallBodyPhysic(wall) as CANNON.Body
            wallBodiesList[wall] = boxBody
            break
    }

    OBJECT_GRABBED_CONFIG.collisionEntityList.push(wall)
}