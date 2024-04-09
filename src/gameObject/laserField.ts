import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, VisibilityComponent, AudioSource, QuaternionType, ColliderLayer } from "@dcl/sdk/ecs"
import { BoxType, ButtonType, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, ILaserFieldData, ITeleporterData, LaserFieldRayState, LaserFieldType, LaserType, TeleporterState, TeleporterType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { ActivatedByComponent, BoxDataComponent, DoorDataComponent, LaserFieldDataComponent, TeleportStatusComponent, TeleporterDataComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic } from "../gameSystem/physic/createBody"
import { GAME_STATE } from "../gameData"
import { IsLoadingObject } from "../level/createLevel"
import { createButton } from "./button"
import { createLaserReceiver } from "./laser"
import { HealthDamageType, _CONFIG_HEALTH } from "../gameSystem/healthSystem"

/*
    NOTE:
    The logic a bit mess here. Activate laser field means TURN OFF the laser field area while Deactivate means TURN ON.
    TO DO: reverse the logic so it won't be confusing later.
*/

export function createLaserField(laserFieldData: ILaserFieldData, controlledByEntity?: Entity){
  //CREATE ENTITY
  let laserField = engine.addEntity()
  Transform.create(laserField, {
      parent: CONFIG.centerEntity,
      position: { x: laserFieldData.position.x, y: laserFieldData.position.y, z: laserFieldData.position.z },
      rotation: { x: laserFieldData.rotation.x, y: laserFieldData.rotation.y, z: laserFieldData.rotation.z, w: laserFieldData.rotation.w }
  })
  
  //ADD Entity to loading system
  IsLoadingObject.create(laserField)
  
//   let humSound = engine.addEntity()
//   Transform.create(humSound, {
//     parent: laserField,
//     position: Vector3.Zero()
//   })
  AudioSource.create(laserField, {
      audioClipUrl: resources.sounds.teleporterSpark,
      loop: true,
      playing: false
  })
//   //ADD Entity to loading system
//   IsLoadingObject.create(humSound)


  //ADD LASER FIELD COMPONENT
  LaserFieldDataComponent.create(laserField, laserFieldData)
  console.log("game play. laser field create init:", LaserFieldDataComponent.get(laserField))
  
  switch(laserFieldData.type){
      case LaserFieldType.LASER_FIELD_EMITTER:
            console.log("load level. create object: laser field emitter:", laserField)
            GltfContainer.create(laserField, resources.models.laser_field_emitter)
            break
            
      case LaserFieldType.LASER_FIELD_RAY:
        console.log("load level. create object: laser field ray:", laserField)
        GltfContainer.create(laserField, resources.models.laser_field_ray).invisibleMeshesCollisionMask = ColliderLayer.CL_PHYSICS
        //SCALE MATCH WITH GLB MODEL DIMENSION
        Transform.getMutable(laserField).scale = {
            x: laserFieldData.dimension.x / 3.4,
            y: laserFieldData.dimension.y / 3.31505,
            z: laserFieldData.dimension.z
        }
        VisibilityComponent.create(laserField).visible = true

        let laserFieldTriggerArea = engine.addEntity()
        Transform.create(laserFieldTriggerArea, {
            parent: laserField,
            position: Vector3.create(0, 0, 0),
        })

        if(laserFieldData.initial_state === LaserFieldRayState.OFF){
            activateLaserFieldRay(laserField)
        }
        else{
            deactivateLaserFieldRay(laserField)
        }

        IsLoadingObject.create(laserFieldTriggerArea)

        let triggerScale = getTriggerAreaScale(laserFieldData.position, laserFieldData.rotation, { x: laserFieldData.dimension.x - 0.5, y: laserFieldData.dimension.y + 0.5, z: 1.5 })

        // let triggerAreaScale = Vector3.Zero()
        
        // if(Math.abs(Vector3.dot(Vector3.rotate(Vector3.Forward(), laserFieldData.rotation), Vector3.Forward())) > 0.99) 
        //     triggerAreaScale = Vector3.create(laserFieldData.dimension.x, laserFieldData.dimension.y, laserFieldData.dimension.z + 1.5)
        // else 
        //     triggerAreaScale = Vector3.create(laserFieldData.dimension.z + 1.5, laserFieldData.dimension.y, laserFieldData.dimension.x)

        let laserFieldDataComponent = LaserFieldDataComponent.getMutable(laserField)
        utils.triggers.addTrigger(
            laserFieldTriggerArea,
            utils.NO_LAYERS,
            utils.LAYER_1,
            [
                {
                    type: 'box',
                    scale: triggerScale
                }
            ],
            (enterEntity)=>{
                laserFieldDataComponent.isPlayerInside = true

                if(laserFieldDataComponent.current_state === LaserFieldRayState.OFF) return
                
                _CONFIG_HEALTH.addDPS(HealthDamageType.LASERFIELD)
            },
            (exitEntity) => {
                laserFieldDataComponent.isPlayerInside = false

                if(laserFieldDataComponent.current_state === LaserFieldRayState.OFF) return

                _CONFIG_HEALTH.removeDPS(HealthDamageType.LASERFIELD)
            },
                Color3.Red()
        )
        GAME_STATE._TRIGGER_AREA_LIST.push(laserFieldTriggerArea)

        if(laserFieldData.activatedBy){
            let laserFieldActivatedByComponent = ActivatedByComponent.create(laserField, {
                listEntities: [],
                currentActiveEntities: []
            })
            
            for(let i = 0; i < laserFieldData.activatedBy.length; i++){
                if (Object.values(ButtonType).includes(laserFieldData.activatedBy[i].type as unknown as ButtonType)) {
                    let entity = createButton(laserFieldData.activatedBy[i] as unknown as IButtonData, laserField)
                    laserFieldActivatedByComponent.listEntities.push(entity)
                }
                else if(Object.values(LaserType).includes(laserFieldData.activatedBy[i].type as unknown as LaserType)) {
                    let entity = createLaserReceiver(laserFieldData.activatedBy[i] as unknown as ILaserData, laserField)
                    laserFieldActivatedByComponent.listEntities.push(entity)
                }
            }
          }
        break
  }
  console.log("laser field data:", laserFieldData)
  

  return laserField
}

export function triggerLaserFieldRay(triggerEntity: Entity, laserFieldRay: Entity){
    let laserFieldDataComponent = ActivatedByComponent.getMutable(laserFieldRay)
  
    if(!laserFieldDataComponent.currentActiveEntities.includes(triggerEntity)) laserFieldDataComponent.currentActiveEntities.push(triggerEntity)
  
    let isTriggeredByAllEntities = true
    for (let i = 0; i < laserFieldDataComponent.listEntities.length; i++){
        if(laserFieldDataComponent.currentActiveEntities.includes(laserFieldDataComponent.listEntities[i])) {}
        else {
            isTriggeredByAllEntities = false
            break
        }
    }
    console.log("LASER FIELD RAY. TRIGGER BY:", triggerEntity)
    console.log("LALSER FIELD RAY. SHOULD BE ACTIVATED BY:", laserFieldDataComponent.listEntities)
    console.log("LASER FIELD RAY. CURRENT ACTIVATED BY ENTITIES:", laserFieldDataComponent.currentActiveEntities, "COMPLETE: ", isTriggeredByAllEntities)
    
    if(isTriggeredByAllEntities){
        activateLaserFieldRay(laserFieldRay)
    }
}

export function cancelTriggerLaserFieldRay(triggerEntity: Entity, laserFieldRay: Entity){
    let laserFieldDataComponent = ActivatedByComponent.getMutable(laserFieldRay)
    
    laserFieldDataComponent.currentActiveEntities = laserFieldDataComponent.currentActiveEntities.filter(item => item !== triggerEntity)
  
    console.log("LASER FIELD RAY. REMOVE TRIGGER FROM:", triggerEntity)
    console.log("LASER FIELD RAY. SHOULD BE ACTIVATED BY:", laserFieldDataComponent.listEntities)
    console.log("LASER FIELD RAY. CURRENT ACTIVATED BY ENTITIES:", laserFieldDataComponent.currentActiveEntities)
  
    let isTriggeredByAllEntities = true
    for (let i = 0; i < laserFieldDataComponent.listEntities.length; i++){
        if(laserFieldDataComponent.currentActiveEntities.includes(laserFieldDataComponent.listEntities[i])) {}
        else {
            isTriggeredByAllEntities = false
            break
        }
    }
    
    if(!isTriggeredByAllEntities){
        deactivateLaserFieldRay(laserFieldRay)
    }
}

export function activateLaserFieldRay(laserFieldRay: Entity){
    let laserFieldDataComponent = LaserFieldDataComponent.getMutable(laserFieldRay)
    if(laserFieldDataComponent.current_state === LaserFieldRayState.OFF) return

    AudioSource.getMutable(laserFieldRay).playing = false
    let laserRayTransform = Transform.get(laserFieldRay)
    utils.tweens.startScaling(
        laserFieldRay, 
        laserRayTransform.scale, 
        {
            x: laserRayTransform.scale.x, 
            y: 0, 
            z: laserRayTransform.scale.z
        }, 
        0.2, 
        utils.InterpolationType.EASESINE, 
        () => {
            VisibilityComponent.getMutable(laserFieldRay).visible = false
            GltfContainer.getMutable(laserFieldRay).invisibleMeshesCollisionMask = ColliderLayer.CL_NONE
    })
    
    if(laserFieldDataComponent.isPlayerInside){
        _CONFIG_HEALTH.removeDPS(HealthDamageType.LASERFIELD)
        //laserFieldDataComponent.isPlayerInside = false
    }
    laserFieldDataComponent.current_state = LaserFieldRayState.OFF

    console.log("game play. laser field activate (turn off). current state:", LaserFieldRayState[laserFieldDataComponent.current_state])
}

export function deactivateLaserFieldRay(laserFieldRay: Entity){
    let laserFieldDataComponent = LaserFieldDataComponent.getMutable(laserFieldRay)
    if(laserFieldDataComponent.current_state === LaserFieldRayState.ON) return

    AudioSource.getMutable(laserFieldRay).playing = true
    let laserRayTransform = Transform.get(laserFieldRay)
    VisibilityComponent.getMutable(laserFieldRay).visible = true
    utils.tweens.startScaling(
        laserFieldRay, 
        laserRayTransform.scale, 
        {
            x: laserFieldDataComponent.dimension.x / 3.4,
            y: laserFieldDataComponent.dimension.y / 3.31505,
            z: laserFieldDataComponent.dimension.z
        }, 
        0.2, 
        utils.InterpolationType.EASESINE, 
        () => { 
            GltfContainer.getMutable(laserFieldRay).invisibleMeshesCollisionMask = ColliderLayer.CL_PHYSICS
        }
    )
    
    if(laserFieldDataComponent.isPlayerInside){
        _CONFIG_HEALTH.addDPS(HealthDamageType.LASERFIELD)
    }
    laserFieldDataComponent.current_state = LaserFieldRayState.ON
    console.log("game play. laser field deactivate (turn on). current state:", LaserFieldRayState[laserFieldDataComponent.current_state])
}

function getTriggerAreaScale(position: Vector3, rotation: Quaternion, dimension: Vector3){
    
    let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity

    for(let i = 0; i < 2; i++){
        let xPos = dimension.x / 2
        if(i % 2) xPos = -1 * dimension.x / 2
        
        for(let j = 0; j < 2; j++){
            let yPos = dimension.y / 2
            if(j % 2) yPos = -1 * dimension.y / 2

            for(let k = 0; k < 2; k++){
                let zPos = dimension.z / 2
                if(k % 2) zPos = -1 * dimension.z / 2

                let cornerPos = Vector3.create(xPos, yPos, zPos)
                let cornerPosRotated = Vector3.rotate(cornerPos, rotation)

                if(cornerPosRotated.x < minX) minX = cornerPosRotated.x
                if(cornerPosRotated.x > maxX) maxX = cornerPosRotated.x
            
                if(cornerPosRotated.y < minY) minY = cornerPosRotated.y
                if(cornerPosRotated.y > maxY) maxY = cornerPosRotated.y
                
                if(cornerPosRotated.z < minZ) minZ = cornerPosRotated.z
                if(cornerPosRotated.z > maxZ) maxZ = cornerPosRotated.z

                //utils.addTestCube({position: Vector3.add(Vector3.add(cornerPosRotated, position), CONFIG.centerGround), scale: Vector3.create(0.2, 0.2, 0.2)}, undefined, undefined, Color4.Blue(), false, true)

            }
        }
    }
    
    return {
        x: maxX - minX,
        y: maxY - minY,
        z: maxZ - minZ
    }
}