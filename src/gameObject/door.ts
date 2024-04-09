import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, MeshRenderer, Material, MeshCollider, AudioSource } from "@dcl/sdk/ecs"
import { BoxType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, LaserType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { ActivatedByComponent, BoxDataComponent, DoorDataComponent, TeleportStatusComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic } from "../gameSystem/physic/createBody"
import { createButton } from "./button"
import { createLaserReceiver } from "./laser"
import { IsLoadingObject } from "../level/createLevel"
import { GAME_STATE } from "../gameData"
import { SFX, playSFXSound } from "./soundFX"

//DOOR COLLIDER WORKAROUND, UNTIL COLLIDER WITH ANIMATION FIXED IN SDK 7
export let doorColliderList:  {[key:number]: Entity} = {}

export function resetDoorObjects(){
  doorColliderList = {}
}

export function createDoor(doorData: IDoorData, controlledByEntity?: Entity){
  //CREATE ENTITY
  let door = engine.addEntity()
  Transform.create(door, {
      parent:CONFIG.centerEntity,
      position: { x: doorData.position.x, y: doorData.position.y, z: doorData.position.z },
      rotation: { x: doorData.rotation.x, y: doorData.rotation.y, z: doorData.rotation.z, w: doorData.rotation.w }
  })
  
  //ADD Entity to loading system
  IsLoadingObject.create(door)

  switch(doorData.type){
      case DoorType.DOOR_DEFAULT:
            console.log("load level. create object: door:", door)
            GltfContainer.create(door, resources.models.door)
            break
  }
  console.log("doorData:", doorData)

  let doorColliderOnly = engine.addEntity()
  Transform.create(doorColliderOnly, {
    parent: door,
    position: Vector3.create(0, 2.25, 1.75),
    scale: Vector3.create(4.5, 4.5, 0.2)
  })
  //ADD Entity to loading system
  IsLoadingObject.create(doorColliderOnly)
  
  MeshRenderer.setBox(doorColliderOnly)
  Material.setPbrMaterial(doorColliderOnly, {
      albedoColor: Color4.create(0, 1, 0, 0)
  })
  MeshCollider.setBox(doorColliderOnly)

  doorColliderList[door] = doorColliderOnly
  
  Animator.create(door, {
    states:[
      {
        clip: "open",
        playing: false,
        loop: false,
        speed: 1
      },
      {
        clip: "close",
        playing: false,
        loop: false,
        speed: 1
      }
    ]
  })
  
  AudioSource.create(door, {
      audioClipUrl: resources.sounds.levelDoor,
      loop: false,
      playing: false
  })

  //ADD BOX COMPONENT
  DoorDataComponent.create(door, doorData)

  if(!controlledByEntity && !doorData.activatedBy){
    utils.triggers.addTrigger(
      door,
      utils.NO_LAYERS,
      utils.LAYER_1,
      [
          {
              type: 'sphere',
              radius: 6,
              position: Vector3.create(0, 1, 0)
              //scale: Vector3.create(8, 8, 8)
          }
      ],
      (enterEntity)=>{
        openDoor(door)
      },
      (exitEntity) => {
        
      },
          
      Color3.Blue()
    )
    GAME_STATE._TRIGGER_AREA_LIST.push(door)
  }

  let doorDataComponent = DoorDataComponent.getMutable(door)
  if(doorDataComponent.initial_state === DoorState.OPEN){
    doorDataComponent.current_state = DoorState.CLOSE
    openDoor(door)
  }
  else{
    doorDataComponent.current_state = DoorState.OPEN
    closeDoor(door)
  }
  
  if(doorData.activatedBy){
    let doorActivatedByComponent = ActivatedByComponent.create(door, {
        listEntities: [],
        currentActiveEntities: []
    })
    
    for(let i = 0; i < doorData.activatedBy.length; i++){
        if (Object.values(ButtonType).includes(doorData.activatedBy[i].type as unknown as ButtonType)) {
            let entity = createButton(doorData.activatedBy[i] as unknown as IButtonData, door)
            doorActivatedByComponent.listEntities.push(entity)
        }
        else if(Object.values(LaserType).includes(doorData.activatedBy[i].type as unknown as LaserType)) {
            let entity = createLaserReceiver(doorData.activatedBy[i] as unknown as ILaserData, door)
            doorActivatedByComponent.listEntities.push(entity)
        }
    }
  }
  return door
}

export function triggerDoor(triggerEntity: Entity, doorEntity: Entity){
  let doorActivatedByComponent = ActivatedByComponent.getMutable(doorEntity)

  if(!doorActivatedByComponent.currentActiveEntities.includes(triggerEntity)) doorActivatedByComponent.currentActiveEntities.push(triggerEntity)

  let isTriggeredByAllEntities = true
  for (let i = 0; i < doorActivatedByComponent.listEntities.length; i++){
      if(doorActivatedByComponent.currentActiveEntities.includes(doorActivatedByComponent.listEntities[i])) {}
      else {
          isTriggeredByAllEntities = false
          break
      }
  }
  console.log("DOOR. TRIGGER BY:", triggerEntity)
  console.log("DOOR. SHOULD BE ACTIVATED BY:", doorActivatedByComponent.listEntities)
  console.log("DOOR. CURRENT ACTIVATED BY ENTITIES:", doorActivatedByComponent.currentActiveEntities, "COMPLETE: ", isTriggeredByAllEntities)
  
  if(isTriggeredByAllEntities){
    openDoor(doorEntity)
  }
}

export function cancelTriggerDoor(triggerEntity: Entity, doorEntity: Entity){
  let doorActivatedByComponent = ActivatedByComponent.getMutable(doorEntity)
  
  doorActivatedByComponent.currentActiveEntities = doorActivatedByComponent.currentActiveEntities.filter(item => item !== triggerEntity)

  console.log("DOOR. REMOVE TRIGGER FROM:", triggerEntity)
  console.log("DOOR. SHOULD BE ACTIVATED BY:", doorActivatedByComponent.listEntities)
  console.log("DOOR. CURRENT ACTIVATED BY ENTITIES:", doorActivatedByComponent.currentActiveEntities)

  let isTriggeredByAllEntities = true
  for (let i = 0; i < doorActivatedByComponent.listEntities.length; i++){
      if(doorActivatedByComponent.currentActiveEntities.includes(doorActivatedByComponent.listEntities[i])) {}
      else {
          isTriggeredByAllEntities = false
          break
      }
  }

  if(!isTriggeredByAllEntities){
      closeDoor(doorEntity)
  }
}

export function openDoor(doorEnt: Entity){
    let doorDataComponent = DoorDataComponent.getMutable(doorEnt)
    console.log("DOOR. OPEN, PREV STATE:", DoorState[doorDataComponent.current_state])
    if(doorDataComponent.current_state === DoorState.OPEN) return

    //playSFXSound(SFX.levelDoorSoundEntity, true)//
    AudioSource.getMutable(doorEnt).playing = true
    
    let doorOpenAnim = Animator.getClip(doorEnt, "open")
    let doorCloseAnim = Animator.getClip(doorEnt, "close")

    // Animator.playSingleAnimation(doorEnt, "open", false)
    let msSinceLastAnim = Date.now() - doorDataComponent.animTimeStamp

    if(msSinceLastAnim < 1500){
        doorOpenAnim.speed = 1
        doorCloseAnim.speed = -1
    }
    else{
        doorOpenAnim.speed = 1
        doorCloseAnim.speed = 1
        Animator.playSingleAnimation(doorEnt, "open", false)
    }
    doorDataComponent.animTimeStamp = Date.now()

    MeshCollider.deleteFrom(doorColliderList[doorEnt])
    doorDataComponent.current_state = DoorState.OPEN
}

export function closeDoor(doorEnt: Entity){
    let doorDataComponent = DoorDataComponent.getMutable(doorEnt)
    console.log("DOOR. CLOSE, PREV STATE:", DoorState[doorDataComponent.current_state])
    if(doorDataComponent.current_state === DoorState.CLOSE) return

    //playSFXSound(SFX.levelDoorSoundEntity, true)
    AudioSource.getMutable(doorEnt).playing = true

    let doorOpenAnim = Animator.getClip(doorEnt, "open")
    let doorCloseAnim = Animator.getClip(doorEnt, "close")
    
    // Animator.playSingleAnimation(doorEnt, "open", false)
    let msSinceLastAnim = Date.now() - doorDataComponent.animTimeStamp

    if(msSinceLastAnim < 1500){
        doorOpenAnim.speed = -1
        doorCloseAnim.speed = 1
    }
    else{
        doorOpenAnim.speed = 1
        doorCloseAnim.speed = 1
        Animator.playSingleAnimation(doorEnt, "close", false)
    }
    doorDataComponent.animTimeStamp = Date.now()

    MeshCollider.setBox(doorColliderList[doorEnt])
    doorDataComponent.current_state = DoorState.CLOSE
}