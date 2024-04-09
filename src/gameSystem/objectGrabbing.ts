
import { AudioSource, AvatarAnchorPointType, AvatarAttach, ColliderLayer, Entity, GltfContainer, InputAction, PointerEventType, Raycast, RaycastQueryType, RaycastResult, Transform, engine, inputSystem, raycastSystem } from "@dcl/sdk/ecs";
import { CONFIG } from "../config";
import { GAME_STATE } from "../gameData";
import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math";
import * as utils from '@dcl-sdk/utils'
import helper from '../helper/helper'
import { BoxDataComponent, TeleportStatusComponent, RemoveGravityComponent, WallDataComponent, TurretDataComponent, CatDataComponent } from "../components";
import resources from "../resources";
import { BoxType, TeleportStatus, TurretObjectType, WallType } from "../gameObject/gameObjectType";
import { boxBodiesList } from "../gameObject/box"
import * as CANNON from 'cannon/build/cannon'
import { activateBoxBeam, deactivateBoxBeam } from "../gameObject/boxBeam";
import { hideBeam, showBeam } from "../gameObject/gun";
import { SFX, playSFXSound } from "../gameObject/soundFX";
import { turretBodiesList, turretList } from "../gameObject/turret";
import { OBJECT_GRABBED_CONFIG } from "./objectGrabbingSystem";
import { catBodiesList } from "../gameObject/kitten";



export function grabObject(entity: Entity){
    //boxBodiesList[entity].sleep()
    for (const [boxEnt] of engine.getEntitiesWith(BoxDataComponent, Transform)) {
        if (boxEnt !==entity) {
            boxBodiesList[boxEnt].wakeUp()
        }
    }

    let isBox = false
    let isTurret = false
    let isKitten = false
    let grabbedOffset: Vector3 = OBJECT_GRABBED_CONFIG.grabbedOffset.boxOffset
    if(BoxDataComponent.getOrNull(entity)){
        isBox = true
        grabbedOffset = OBJECT_GRABBED_CONFIG.grabbedOffset.boxOffset
        
        //disable box collider with avatar
        GltfContainer.getMutable(entity).invisibleMeshesCollisionMask = ColliderLayer.CL_POINTER | ColliderLayer.CL_CUSTOM1 //custom_1 (hit by laser)
    }
    else if(TurretDataComponent.getOrNull(entity)){
        isTurret = true
        grabbedOffset = OBJECT_GRABBED_CONFIG.grabbedOffset.turretOffset
        
        //disable box collider with avatar
        GltfContainer.getMutable(entity).invisibleMeshesCollisionMask = ColliderLayer.CL_POINTER
    }
    else if(CatDataComponent.getOrNull(entity)){
        isKitten = true
        grabbedOffset = OBJECT_GRABBED_CONFIG.grabbedOffset.kittenOffset
        
        //disable box collider with avatar
        GltfContainer.getMutable(entity).invisibleMeshesCollisionMask = ColliderLayer.CL_POINTER
    }

    if(isBox || isTurret) playSFXSound(SFX.boxTakeSoundEntity, true)

    const objectTransform = Transform.getMutable(entity)
    
    Transform.createOrReplace(entity, {
        parent: engine.CameraEntity,
        position: grabbedOffset,
        // rotation: objectTransform.rotation
        rotation: isKitten? Quaternion.fromEulerDegrees(0, 180, 0) : Quaternion.Identity()
    })

    Vector3.copyFrom(grabbedOffset, objectTransform.position)

    console.log("objectGrabbingSystem, object position after grabbing", objectTransform.position)
    
  
    // if(isBox){
        // activate grabbing beam effect
        activateBoxBeam(entity )
        showBeam()
    // }
    
    // if(isBox){
    //     GAME_STATE.activeBox = entity
    // }
    // if(isTurret){
    //     GAME_STATE.grabbedTurret = entity
    // }

    console.log("objectGrabbingSystem, grab object:", entity.valueOf(), "is box", isBox, "is turret", isTurret, "is kitten", isKitten)
}

export function releaseObject(entity: Entity){
    GAME_STATE.activeBox = undefined
    GAME_STATE.grabbedTurret = undefined
    GAME_STATE.grabbedKitten = undefined

    let isBox = false
    let isTurret = false
    let isKitten = false
    if(BoxDataComponent.getOrNull(entity)){
        isBox = true
    }
    else if(TurretDataComponent.getOrNull(entity)){
        isTurret = true
    }
    else if(CatDataComponent.getOrNull(entity)){
        isKitten = true
    }

    if(isBox || isTurret) playSFXSound(SFX.boxTakeSoundEntity, true)
    
    const mutableTransform = Transform.getMutable(entity)

    let entityPosRelativeCenter = Vector3.subtract(utils.getWorldPosition(entity), CONFIG.centerGround)
    
    mutableTransform.position =  Vector3.subtract(utils.getWorldPosition(entity), CONFIG.centerGround)
    if(isKitten)
        mutableTransform.rotation = Quaternion.multiply(Transform.get(engine.PlayerEntity).rotation, Quaternion.fromEulerDegrees(0, 180, 0))
    else
        mutableTransform.rotation = Transform.get(engine.PlayerEntity).rotation
    mutableTransform.parent = CONFIG.centerEntity

    
    //UPDATE BOX BODY COORDINATES --> HANDLE IN PHYSIC SYSTEM
    //boxBodiesList[entity]
    if(isBox){
        //reenable box collider with avatar
        GltfContainer.getMutable(entity).invisibleMeshesCollisionMask = ColliderLayer.CL_PHYSICS | ColliderLayer.CL_POINTER | ColliderLayer.CL_CUSTOM1

        boxBodiesList[entity].wakeUp()
        boxBodiesList[entity].position.set(entityPosRelativeCenter.x, entityPosRelativeCenter.y, entityPosRelativeCenter.z)
        boxBodiesList[entity].quaternion.set(mutableTransform.rotation.x, mutableTransform.rotation.y, mutableTransform.rotation.z, mutableTransform.rotation.w)
    }
    else if(isTurret){
        GltfContainer.getMutable(entity).invisibleMeshesCollisionMask = ColliderLayer.CL_PHYSICS | ColliderLayer.CL_POINTER

        turretBodiesList[entity].wakeUp()
        turretBodiesList[entity].position.set(entityPosRelativeCenter.x, entityPosRelativeCenter.y, entityPosRelativeCenter.z)
        turretBodiesList[entity].quaternion.set(mutableTransform.rotation.x, mutableTransform.rotation.y, mutableTransform.rotation.z, mutableTransform.rotation.w)
    }
    else if(isKitten){
        GltfContainer.getMutable(entity).invisibleMeshesCollisionMask = ColliderLayer.CL_PHYSICS | ColliderLayer.CL_POINTER
        
        catBodiesList[entity].wakeUp()
        catBodiesList[entity].position.set(entityPosRelativeCenter.x, entityPosRelativeCenter.y, entityPosRelativeCenter.z)
        catBodiesList[entity].quaternion.set(mutableTransform.rotation.x, mutableTransform.rotation.y, mutableTransform.rotation.z, mutableTransform.rotation.w)
    }

    //disable box grabbing beam effect
    deactivateBoxBeam(entity)
    hideBeam()

    console.log("objectGrabbingSystem, release object:", entity.valueOf(), "is box", isBox, "is turret", isTurret, "is kitten", isKitten)
}