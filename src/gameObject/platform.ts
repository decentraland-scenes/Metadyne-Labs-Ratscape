import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, AudioSource } from "@dcl/sdk/ecs"
import resources from "../resources"
import { CONFIG } from "../config"
import { ButtonType, IButtonData, ILaserData, IPlatformData, LaserType, PlatformType } from "./gameObjectType"
import { ActivatedByComponent, ActiveMovingPlatform, PlatformDataComponent, PortableFlagComponent, RemoveGravityComponent } from "../components"
import { createElevatorBaseBodyPhysic, createPlatformBodyPhysic } from "../gameSystem/physic/createBody"
import * as utils from '@dcl-sdk/utils'
import { Color4, Vector3 } from "@dcl/sdk/math"
//import { getPhysicBodyByEnitytyId, world } from "../gameSystem/physic/physicSetup"
import * as CANNON from 'cannon/build/cannon'
import { createButton } from "./button"
import { createLaserReceiver } from "./laser"
import { IsLoadingObject } from "../level/createLevel"
import { wallBodiesList } from "./wall"


export let platformBodiesList: {[key:number]: CANNON.Body} = {}

export function resetPlatformObjects(){
  platformBodiesList = {}
}

export function createPlatform(platformData: IPlatformData, controlledByEntity?: Entity){
  //CREATE ENTITY
  let platform = engine.addEntity()
  Transform.create(platform, {
    parent:CONFIG.centerEntity,
    position: { x: platformData.position.x, y: platformData.position.y, z: platformData.position.z },
    rotation: { x: platformData.rotation.x, y: platformData.rotation.y, z: platformData.rotation.z, w: platformData.rotation.w }
  })

   //ADD Entity to loading system
   IsLoadingObject.create(platform)

  //ADD PLATFORM COMPONENT
  PlatformDataComponent.create(platform, platformData)
  console.log("load level. moving platfrom data:", PlatformDataComponent.get(platform))

  switch(platformData.type){
    case PlatformType.PLATFORM_MOVING_H:
        console.log("load level. create object: platform horizontal:", platform)
      GltfContainer.create(platform, resources.models.moving_platform_horizontal)
      
      let motorSoundH = engine.addEntity()
      Transform.create(motorSoundH, {
          parent: platform,
          position: Vector3.Zero()
      })
      AudioSource.create(motorSoundH, {
          audioClipUrl: resources.sounds.platformMotorSound,
          loop: true,
          playing: true
      })
      //ADD Entity to loading system
      IsLoadingObject.create(motorSoundH)

      break

    case PlatformType.PLATFORM_MOVING_V:
        console.log("load level. create object: platform vertical:", platform)
      GltfContainer.create(platform, resources.models.moving_platform_vertical)
      
      let motorSoundV = engine.addEntity()
      Transform.create(motorSoundV, {
          parent: platform,
          position: Vector3.Zero()
      })
      AudioSource.create(motorSoundV, {
          audioClipUrl: resources.sounds.platformMotorSound,
          loop: true,
          playing: true
      })
      //ADD Entity to loading system
      IsLoadingObject.create(motorSoundV)
      
      break
    //STATIC

    case PlatformType.PLATFORM_ELEVATOR_BASE:
        console.log("load level. create object: platform elevator base:", platform)
      GltfContainer.create(platform, resources.models.base_platform_vertical)
      let elevatorBaseBody = createElevatorBaseBodyPhysic(platform)
      wallBodiesList[platform] = elevatorBaseBody
      break

    case PlatformType.PLATFORM_RAIL:
        console.log("load level. create object: platform rail:", platform)
      GltfContainer.create(platform, resources.models.moving_platform_rail)
      break

    case PlatformType.PLATFORM_HALF:
        console.log("load level. create object: half platform:", platform)
      GltfContainer.create(platform, resources.models.platform_half)
      
      break
  }


  //SETUP MOVING PLATFORM PHYSIC
  if((platformData.type === PlatformType.PLATFORM_MOVING_H || platformData.type === PlatformType.PLATFORM_MOVING_V) && platformData.path){
    ActiveMovingPlatform.create(platform,{
      active: false,
      startIdx: 0,
      targetIdx: 1,
      looping: (platformData.looping === false) ? false : true
    })

    if(CONFIG.DEBUG_SCENE_ENABLED){
      for(let i = 0; i < platformData.path.length; i++){
        utils.addTestCube({position: Vector3.add(platformData.path[i], CONFIG.centerGround)}, undefined, undefined, Color4.create(0.5, 0, 0, 0.5), false, true)
      }
    }
    
  }

  //SETUP PLATFORM PHYSIC BODY
  if(platformData.type === PlatformType.PLATFORM_MOVING_H || platformData.type === PlatformType.PLATFORM_MOVING_V || platformData.type === PlatformType.PLATFORM_HALF){
    let platformBody = createPlatformBodyPhysic(platform)
    platformBodiesList[platform] = platformBody
  }

  //SETUP ACTIVATION
  if(platformData.activatedBy){
    let platformActivatedByComponent = ActivatedByComponent.create(platform, {
        listEntities: [],
        currentActiveEntities: []
    })
    
    for(let i = 0; i < platformData.activatedBy.length; i++){
      if (Object.values(ButtonType).includes(platformData.activatedBy[i].type as unknown as ButtonType)) {
          let entity = createButton(platformData.activatedBy[i] as unknown as IButtonData, platform)
          platformActivatedByComponent.listEntities.push(entity)
      }
      else if(Object.values(LaserType).includes(platformData.activatedBy[i].type as unknown as LaserType)) {
          let entity = createLaserReceiver(platformData.activatedBy[i] as unknown as ILaserData, platform)
          platformActivatedByComponent.listEntities.push(entity)
      }
    }
  }

  //NOT CONTROLLED BY ANYTHING, MAKE IT ALWAYS ACTIVE FOLLOWING PATH
  if(!controlledByEntity && !platformData.activatedBy && platformData.path){
    activatePlatform(platform)
  }
  return platform
}

export function triggerPlatform(triggerEntity: Entity, platformEntity: Entity){
  let platformActivatedByComponent = ActivatedByComponent.getMutable(platformEntity)

  if(!platformActivatedByComponent.currentActiveEntities.includes(triggerEntity)) platformActivatedByComponent.currentActiveEntities.push(triggerEntity)

  let isTriggeredByAllEntities = true
  for (let i = 0; i < platformActivatedByComponent.listEntities.length; i++){
      if(platformActivatedByComponent.currentActiveEntities.includes(platformActivatedByComponent.listEntities[i])) {}
      else {
          isTriggeredByAllEntities = false
          break
      }
  }
  console.log("PLATFORM. TRIGGER BY:", triggerEntity)
  console.log("PLATFORM. SHOULD BE ACTIVATED BY:", platformActivatedByComponent.listEntities)
  console.log("PLATFORM. CURRENT ACTIVATED BY ENTITIES:", platformActivatedByComponent.currentActiveEntities, "COMPLETE: ", isTriggeredByAllEntities)
  
  if(isTriggeredByAllEntities){
    activatePlatform(platformEntity)
  }
}

export function canceltriggerPlatform(triggerEntity: Entity, platformEntity: Entity){
  let platformActivatedByComponent = ActivatedByComponent.getMutable(platformEntity)
  
  platformActivatedByComponent.currentActiveEntities = platformActivatedByComponent.currentActiveEntities.filter(item => item !== triggerEntity)

  console.log("PLATFORM. REMOVE TRIGGER FROM:", triggerEntity)
  console.log("PLATFORM. SHOULD BE ACTIVATED BY:", platformActivatedByComponent.listEntities)
  console.log("PLATFORM. CURRENT ACTIVATED BY ENTITIES:", platformActivatedByComponent.currentActiveEntities)

  let isTriggeredByAllEntities = true
  for (let i = 0; i < platformActivatedByComponent.listEntities.length; i++){
      if(platformActivatedByComponent.currentActiveEntities.includes(platformActivatedByComponent.listEntities[i])) {}
      else {
          isTriggeredByAllEntities = false
          break
      }
  }

  if(!isTriggeredByAllEntities){
      deactivatePlatform(platformEntity)
  }
}

export function activatePlatform(platformEnt: Entity){
  console.log("ACTIVATE PLATFORM:", platformEnt)
  let physicBody = platformBodiesList[platformEnt]
  let platformData = PlatformDataComponent.getMutable(platformEnt)
  let movingPlatformData = ActiveMovingPlatform.getMutable(platformEnt)
  movingPlatformData.deactivate = false

  if(movingPlatformData.startIdx > movingPlatformData.targetIdx){
    let start = ActiveMovingPlatform.get(platformEnt).targetIdx
    let target = ActiveMovingPlatform.get(platformEnt).startIdx

    movingPlatformData.startIdx = start
    movingPlatformData.targetIdx = target
  }

  if(physicBody && !movingPlatformData.active && platformData.path){
    movingPlatformData.paths = platformData.path

    physicBody.mass = 10000
    physicBody.updateMassProperties()
    physicBody.wakeUp()
    
    console.log("ACTIVATE PLATFORM. set mass body to allow movement", platformEnt)

    movingPlatformData.active = true
  }
  
  else{
    console.log("physic body NOT FOUND for entity:", platformEnt)
    return
  }
  
}

export function deactivatePlatform(platformEnt: Entity){
  let movingPlatformData = ActiveMovingPlatform.getMutable(platformEnt)
  movingPlatformData.deactivate = true
//   let target = movingPlatformData.targetIdx
  movingPlatformData.startIdx = 1
  movingPlatformData.targetIdx = 0
}
