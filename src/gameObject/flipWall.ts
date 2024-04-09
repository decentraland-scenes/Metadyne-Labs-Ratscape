import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, MeshRenderer, Material, MeshCollider } from "@dcl/sdk/ecs"
import { BoxType, ButtonType, DoorState, DoorType, FlipWallState, IBoxData, IButtonData, IDoorData, IFlipWallData, ILaserData, LaserType, PortalColor, WallType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { ActivatedByComponent, BoxDataComponent, DoorDataComponent, FlipWallDataComponent, PortableFlagComponent, TeleportStatusComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { createButton } from "./button"
import { createLaserReceiver } from "./laser"
import { IsLoadingObject } from "../level/createLevel"
import { GAME_STATE } from "../gameData"
import { SFX, playSFXSound } from "./soundFX"
import * as CANNON from 'cannon/build/cannon'
import { wallBodiesList } from "./wall"
import { removePortal } from "./portal"


export function createFlipWall(flipWallData: IFlipWallData, controlledByEntity?: Entity) {
    //CREATE ENTITY
    let flipWall = engine.addEntity()
    Transform.create(flipWall, {
        parent: CONFIG.centerEntity,
        position: { x: flipWallData.position.x, y: flipWallData.position.y, z: flipWallData.position.z - 0.02 }, //Vector3.add(flipWallData.position, Vector3.create(0, 0, -0.02)),
        rotation: { x: flipWallData.rotation.x, y: flipWallData.rotation.y, z: flipWallData.rotation.z, w: flipWallData.rotation.w }
    })
    //ADD Entity to loading system
    IsLoadingObject.create(flipWall)


    //CREATE ENTITY
    let flipWallBackArea = engine.addEntity()
    GltfContainer.create(flipWallBackArea, resources.models.flip_wall_backarea)
    Transform.create(flipWallBackArea, {
        parent: CONFIG.centerEntity,
        position: flipWallData.position,
        rotation: flipWallData.rotation
    })
    //ADD Entity to loading system
    IsLoadingObject.create(flipWallBackArea)

    if(CONFIG.DEBUG_WALL_ORIENTATION_ENABLED){
        let debugOrientation = engine.addEntity()
        GltfContainer.create(debugOrientation, resources.models.debugArrow)
        Transform.create(debugOrientation, {
            parent: CONFIG.centerEntity,
            position: flipWallData.position,
            rotation: flipWallData.rotation,
            scale: Vector3.create(0.5, 0.5, 0.5)
        })
    }

    switch (flipWallData.type) {
        case WallType.FLIPWALL:
            console.log("load level. create object: flip wall:", flipWall)
            GltfContainer.create(flipWall, resources.models.flip_wall)
            break
    }

    //ADD FLIP WALL COMPONENT
    FlipWallDataComponent.create(flipWall, flipWallData)

    //SETUP FLIP WALL PHYSIC
    let boxBody: CANNON.Body = createWallBodyPhysic(flipWall) as CANNON.Body
    wallBodiesList[flipWall] = boxBody
    
    let flipWallDataComponent = FlipWallDataComponent.getMutable(flipWall)
    
    if(flipWallDataComponent.initial_state !== flipWallDataComponent.current_state){
        flipTheWall(flipWall)
    }

    if (flipWallData.activatedBy) {
        let flipWallDataComponent = ActivatedByComponent.create(flipWall, {
            listEntities: [],
            currentActiveEntities: []
        })

        for (let i = 0; i < flipWallData.activatedBy.length; i++) {
            if (Object.values(ButtonType).includes(flipWallData.activatedBy[i].type as unknown as ButtonType)) {
                let entity = createButton(flipWallData.activatedBy[i] as unknown as IButtonData, flipWall)
                flipWallDataComponent.listEntities.push(entity)
            }
            else if (Object.values(LaserType).includes(flipWallData.activatedBy[i].type as unknown as LaserType)) {
                let entity = createLaserReceiver(flipWallData.activatedBy[i] as unknown as ILaserData, flipWall)
                flipWallDataComponent.listEntities.push(entity)
            }
        }
    }
    return flipWall
}

export function triggerFlipWall(triggerEntity: Entity, flipWallEntity: Entity) {
    let flipWallActivatedByComponent = ActivatedByComponent.getMutable(flipWallEntity)

    if(!flipWallActivatedByComponent.currentActiveEntities.includes(triggerEntity)) flipWallActivatedByComponent.currentActiveEntities.push(triggerEntity)
  
    let isTriggeredByAllEntities = true
    for (let i = 0; i < flipWallActivatedByComponent.listEntities.length; i++){
        if(flipWallActivatedByComponent.currentActiveEntities.includes(flipWallActivatedByComponent.listEntities[i])) {}
        else {
            isTriggeredByAllEntities = false
            break
        }
    }
    console.log("FLIP WALL. TRIGGER BY:", triggerEntity)
    console.log("FLIP WALL. SHOULD BE ACTIVATED BY:", flipWallActivatedByComponent.listEntities)
    console.log("FLIP WALL. CURRENT ACTIVATED BY ENTITIES:", flipWallActivatedByComponent.currentActiveEntities, "COMPLETE: ", isTriggeredByAllEntities)
    
    if(isTriggeredByAllEntities){
      flipTheWall(flipWallEntity)
    }
}

export function cancelTriggerFlipWal(triggerEntity: Entity, flipWallEntity: Entity) {
    let flipWallActivatedByComponent = ActivatedByComponent.getMutable(flipWallEntity)
  
    flipWallActivatedByComponent.currentActiveEntities = flipWallActivatedByComponent.currentActiveEntities.filter(item => item !== triggerEntity)
  
    console.log("FLIP WALL. REMOVE TRIGGER FROM:", triggerEntity)
    console.log("FLIP WALL. SHOULD BE ACTIVATED BY:", flipWallActivatedByComponent.listEntities)
    console.log("FLIP WALL. CURRENT ACTIVATED BY ENTITIES:", flipWallActivatedByComponent.currentActiveEntities)
  
    let isTriggeredByAllEntities = true
    for (let i = 0; i < flipWallActivatedByComponent.listEntities.length; i++){
        if(flipWallActivatedByComponent.currentActiveEntities.includes(flipWallActivatedByComponent.listEntities[i])) {}
        else {
            isTriggeredByAllEntities = false
            break
        }
    }
    
    if(!isTriggeredByAllEntities){
        flipTheWall(flipWallEntity)
    }
}
    
export function flipTheWall(flipWallEntity: Entity) {
    let flipWallDataComponent = FlipWallDataComponent.getMutable(flipWallEntity)
    let flipWallTransform = Transform.get(flipWallEntity)

    console.log("FLIP WALL. current:", flipWallDataComponent.current_state, "initial:", flipWallDataComponent.initial_state)

    let rotationTarget: Quaternion = Quaternion.Identity()
    if(flipWallDataComponent.current_state === FlipWallState.PORTABLE){
        flipWallDataComponent.current_state = FlipWallState.UNPORTABLE
        rotationTarget = Quaternion.multiply(flipWallDataComponent.rotation, Quaternion.fromEulerDegrees(0, 0, 0))
        utils.tweens.stopRotation(flipWallEntity)
        console.log("FLIP WALL. PORTABLE TO UNPORTABLE", flipWallDataComponent.rotation, rotationTarget)

        utils.tweens.startRotation(
            flipWallEntity,
            flipWallTransform.rotation,
            rotationTarget,
            0.5,
            utils.InterpolationType.EASEEXPO,
            () => {
                if(PortableFlagComponent.getOrNull(flipWallEntity)){
                    PortableFlagComponent.deleteFrom(flipWallEntity)
                }
                if(flipWallDataComponent.portalColor !== -1){
                    
                    removePortal(flipWallDataComponent.portalColor)
                    flipWallDataComponent.portalColor = -1
                }
            }
        )
    }
    else if(flipWallDataComponent.current_state === FlipWallState.UNPORTABLE){
        flipWallDataComponent.current_state = FlipWallState.PORTABLE
        rotationTarget = Quaternion.multiply(flipWallDataComponent.rotation, Quaternion.fromEulerDegrees(0, 180, 0))
        utils.tweens.stopRotation(flipWallEntity)
        console.log("FLIP WALL. UNPORTABLE TO PORTABLE", flipWallDataComponent.rotation, rotationTarget)
        utils.tweens.startRotation(
            flipWallEntity,
            flipWallTransform.rotation,
            rotationTarget,
            0.5,
            utils.InterpolationType.EASEEXPO,
            () => {
                PortableFlagComponent.createOrReplace(flipWallEntity, {
                    dimension: flipWallDataComponent.dimension
                })
            }
        )
    }
}