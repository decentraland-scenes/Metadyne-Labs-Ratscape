import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, MeshRenderer, Material, MeshCollider, ColliderLayer, AudioSource } from "@dcl/sdk/ecs"
import { BoxType, ButtonType, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IStairData, LaserType, StairState, StairType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { ActivatedByComponent, BoxDataComponent, DoorDataComponent, StairDataComponent, TeleportStatusComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic, createStairStepBodyPhysic } from "../gameSystem/physic/createBody"
import helper from "../helper/helper"
import * as CANNON from 'cannon/build/cannon'
import { createButton } from "./button"
import { createLaserReceiver } from "./laser"
import { IsLoadingObject } from "../level/createLevel"
import { SFX, playSFXSound } from "./soundFX"

//STAIR COLLIDER WORKAROUND, UNTIL COLLIDER WITH ANIMATION FIXED IN SDK 7
export let stepEntitiesList: {[key:number]: Entity[]} = {}
export let stepBodiesList: {[key:number]: CANNON.Body[]} = {}
//NOTE: Cant't replicate animation movement because movement not linear. Make it at least objects on top of step not going pass through step
const STAIR_STEP_CONFIG = {
    entitiesAddedToPhysicSim: [] as Entity[],
    stepRestRelativeHeight: 0.4,
    stepActivateRelativeHeight: [3.45, 2.7, 1.97, 1.22, 0.6],
    stepUpDelayStart: [700, 500, 366, 233, 100], //[100, 233, 366, 500, 700]
    stepUpSpeedAdjut: [4, 3.5, 2.5, 1.5, 1],
    stepDownDelayStart: [333 + 10, 533 + 10, 666 + 10, 800 + 10, 933 + 10], //[933, 800, 666, 533, 333]
    stepDownSpeedAdjut: [-2.5, -2, -1.5, -1, -0.5],
    finalAngleRotation: Quaternion.fromEulerDegrees(18, 0, 0)
}

export function resetStairObjects(){
    stepEntitiesList = {}
    stepBodiesList = {}
    STAIR_STEP_CONFIG.entitiesAddedToPhysicSim = []
    STAIR_STEP_CONFIG.stepRestRelativeHeight = 0.4
    STAIR_STEP_CONFIG.stepActivateRelativeHeight = [3.45, 2.7, 1.97, 1.22, 0.6]
    STAIR_STEP_CONFIG.stepUpDelayStart = [700, 500, 366, 233, 100] //[100, 233, 366, 500, 700]
    STAIR_STEP_CONFIG.stepUpSpeedAdjut = [4, 3.5, 2.5, 1.5, 2]
    STAIR_STEP_CONFIG.stepDownDelayStart = [333 + 10, 533 + 10, 666 + 10, 800 + 10, 933 + 10] //[933, 800, 666, 533, 333]
    STAIR_STEP_CONFIG.stepDownSpeedAdjut = [-2.5, -2, -1.5, -1, -0.5]
    STAIR_STEP_CONFIG.finalAngleRotation = Quaternion.fromEulerDegrees(18, 0, 0)
}

export function createStair(stairData: IStairData){
    //CREATE ENTITY
    let stair = engine.addEntity()
    Transform.create(stair, {
        parent:CONFIG.centerEntity,
        position: { x: stairData.position.x, y: stairData.position.y, z: stairData.position.z },
        rotation: { x: stairData.rotation.x, y: stairData.rotation.y, z: stairData.rotation.z, w: stairData.rotation.w } 
    })

    //ADD Entity to loading system
  IsLoadingObject.create(stair)

    switch(stairData.type){
        case StairType.STAIR_DEFAULT:
            console.log("load level. create object: stair default:", stair)
            GltfContainer.create(stair, resources.models.stair)
            break
    }
    console.log("STAIR. DATA:", stairData)
  
    Animator.create(stair, {
        states:[
            {
                clip: "on",
                playing: false,
                loop: false,
                speed: 1
            },
            {
                clip: "off",
                playing: false,
                loop: false,
                speed: 1
            }
        ]
    })
    
    AudioSource.create(stair, {
        audioClipUrl: resources.sounds.stairSound,
        loop: false,
        playing: false
    })

    //ADD BOX COMPONENT
    let stairDataComponent = StairDataComponent.create(stair, stairData)
  
    createStairStepBody(stair, stairData)

    //FOR TRIGGER 1ST INITIALIZATION
    if(stairData.initial_state === StairState.OFF){
        stairDataComponent.current_state = StairState.ON
        deactivateStair(stair)
    }
    else{
        stairDataComponent.current_state = StairState.OFF
        activateStair(stair)
    }
    stairDataComponent.movingCounter = 0

    if(stairData.activatedBy){
        let stairActivatedByComponent = ActivatedByComponent.create(stair, {
            listEntities: [],
            currentActiveEntities: []
        })
        for(let i = 0; i < stairData.activatedBy.length; i++){
            if (Object.values(ButtonType).includes(stairData.activatedBy[i].type as unknown as ButtonType)) {
                let entity = createButton(stairData.activatedBy[i] as unknown as IButtonData, stair)
                stairActivatedByComponent.listEntities.push(entity)
            }
            else if(Object.values(LaserType).includes(stairData.activatedBy[i].type as unknown as LaserType)) {
                let entity = createLaserReceiver(stairData.activatedBy[i] as unknown as ILaserData, stair)
                stairActivatedByComponent.listEntities.push(entity)
            }
        }
    }
    return stair
}

export function triggerStair(triggerEntity: Entity, stairEntity: Entity){
    let stairActivatedByComponent = ActivatedByComponent.getMutable(stairEntity)

    if(!stairActivatedByComponent.currentActiveEntities.includes(triggerEntity)) stairActivatedByComponent.currentActiveEntities.push(triggerEntity)

    let isTriggeredByAllEntities = true
    for (let i = 0; i < stairActivatedByComponent.listEntities.length; i++){
        if(stairActivatedByComponent.currentActiveEntities.includes(stairActivatedByComponent.listEntities[i])) {}
        else {
            isTriggeredByAllEntities = false
            break
        }
    }
    console.log("STAIR. TRIGGER BY:", triggerEntity)
    console.log("STAIR. SHOULD BE ACTIVATED BY:", stairActivatedByComponent.listEntities)
    console.log("STAIR. CURRENT ACTIVATED BY ENTITIES:", stairActivatedByComponent.currentActiveEntities, "COMPLETE: ", isTriggeredByAllEntities)
    
    if(isTriggeredByAllEntities){
        activateStair(stairEntity)
    }
    // return isTriggeredByAllEntities
}

export function cancelTriggerStair(triggerEntity: Entity, stairEntity: Entity){
    let stairActivatedByComponent = ActivatedByComponent.getMutable(stairEntity)
    
    stairActivatedByComponent.currentActiveEntities = stairActivatedByComponent.currentActiveEntities.filter(item => item !== triggerEntity)

    console.log("STAIR. REMOVE TRIGGER FROM:", triggerEntity)
    console.log("STAIR. SHOULD BE ACTIVATED BY:", stairActivatedByComponent.listEntities)
    console.log("STAIR. CURRENT ACTIVATED BY ENTITIES:", stairActivatedByComponent.currentActiveEntities)

    let isTriggeredByAllEntities = true
    for (let i = 0; i < stairActivatedByComponent.listEntities.length; i++){
        if(stairActivatedByComponent.currentActiveEntities.includes(stairActivatedByComponent.listEntities[i])) {}
        else {
            isTriggeredByAllEntities = false
            break
        }
    }

    if(!isTriggeredByAllEntities){
        deactivateStair(stairEntity)
    }
}

function createStairStepBody(entity:Entity, stairData: IStairData){
    //5 STAIR STEP
    //STAIR LENGTH: 4m, STAIR WIDTH: 1.6m
    let stepsEntity: Entity[] = []
    let stepPhysicBodies: CANNON.Body[] = []

    for(let i = 0; i < 5; i++){
        let step = engine.addEntity()
        
        //ADD Entity to loading system
        IsLoadingObject.create(step)

        let stepPos = Vector3.create(stairData.position.x, stairData.position.y + STAIR_STEP_CONFIG.stepRestRelativeHeight, stairData.position.z - 3.2 + (i * 1.6))
        stepPos = helper.rotateVectorRelativeToPoint(stepPos, stairData.position, stairData.rotation)

        Transform.create(step, {
            parent: CONFIG.centerEntity,
            position: stepPos,
            rotation: Quaternion.create(stairData.rotation.x, stairData.rotation.y, stairData.rotation.z, stairData.rotation.w),
            
            scale: Vector3.create(3.8, 0.2, 1.5)
        })

        //if(CONFIG.DEBUG_SCENE_ENABLED){
            MeshRenderer.setBox(step)
            Material.setPbrMaterial(step, {
                albedoColor: Color4.create(0, 0, 1, CONFIG.DEBUG_SCENE_ENABLED ? 0.5 : 0),
            })
            
            MeshCollider.setBox(step, ColliderLayer.CL_PHYSICS)
        //}

        let stepBody = createStairStepBodyPhysic(step)

        stepPhysicBodies.push(stepBody)
        stepsEntity.push(step)
    }
    stepEntitiesList[entity] = stepsEntity
    stepBodiesList[entity] = stepPhysicBodies

    console.log("STAIR BODYY: ", stepBodiesList[entity])
}

export function activateStair(stairEnt: Entity){
    let stairDataComponent = StairDataComponent.getMutable(stairEnt)
    if(stairDataComponent.current_state === StairState.ON) return

    //playSFXSound(SFX.stairSoundEntity, true)
    AudioSource.getMutable(stairEnt).playing = true
    
    let stairOnAnim = Animator.getClip(stairEnt, "on")
    let stairOffAnim = Animator.getClip(stairEnt, "off")

    let msSinceLastAnim = Date.now() - stairDataComponent.animTimeStamp

    if(msSinceLastAnim < 1500){
        stairOnAnim.speed = 1
        stairOffAnim.speed = -1
    }
    else{
        stairOnAnim.speed = 1
        stairOffAnim.speed = 1
        Animator.playSingleAnimation(stairEnt, "on", false)
    }
    stairDataComponent.animTimeStamp = Date.now()

    if(!STAIR_STEP_CONFIG.entitiesAddedToPhysicSim.includes(stairEnt)) STAIR_STEP_CONFIG.entitiesAddedToPhysicSim.push(stairEnt)
    for(let i = 0; i < 5; i++){
        let physicBody = stepBodiesList[stairEnt][i]
        physicBody.mass = 0
        physicBody.updateMassProperties()
    }

    stairDataComponent.current_state = StairState.ON
    stairDataComponent.isMoving = true
}

export function deactivateStair(stairEnt: Entity){
    let stairDataComponent = StairDataComponent.getMutable(stairEnt)
    if(stairDataComponent.current_state === StairState.OFF) return

    let stairOnAnim = Animator.getClip(stairEnt, "on")
    let stairOffAnim = Animator.getClip(stairEnt, "off")
    
    let msSinceLastAnim = Date.now() - stairDataComponent.animTimeStamp

    if(msSinceLastAnim < 1500){
        stairOnAnim.speed = -1
        stairOffAnim.speed = 1
    }
    else{
        stairOnAnim.speed = 1
        stairOffAnim.speed = 1
        Animator.playSingleAnimation(stairEnt, "off", false)
    }
    stairDataComponent.animTimeStamp = Date.now()
    
    AudioSource.getMutable(stairEnt).playing = true
    
    if(!STAIR_STEP_CONFIG.entitiesAddedToPhysicSim.includes(stairEnt)) STAIR_STEP_CONFIG.entitiesAddedToPhysicSim.push(stairEnt)
    for(let i = 0; i < 5; i++){
        let physicBody = stepBodiesList[stairEnt][i]
        physicBody.velocity.set(0, 0, 0)
        physicBody.mass = 0
        physicBody.updateMassProperties()
    }

    stairDataComponent.current_state = StairState.OFF
    stairDataComponent.isMoving = true
}

export function moveStepPhysicBodyStairSystem(dt: number){
    //console.log("STAIR ENTITY TO ACTIVATE: ", entityToActivate)
    for(let entity of STAIR_STEP_CONFIG.entitiesAddedToPhysicSim){
        let stairTransform = Transform.get(entity)
        let stepBodies = stepBodiesList[entity]
        
        let stairDataComponent = StairDataComponent.get(entity)
        //let state = ActivateStairComponent.getOrNull(entity)

        if(stairDataComponent.isMoving){
            let stairMutableTransform = StairDataComponent.getMutable(entity)
            stairMutableTransform.movingCounter += dt * 1000
            //console.log(stairMutableTransform.movingCounter)
            let stepOnFinalRotation = Quaternion.multiply(stairDataComponent.rotation, STAIR_STEP_CONFIG.finalAngleRotation)
            
            if(stairDataComponent.current_state === StairState.ON){
                let isComplete = true
                for(let i = 0; i < 5; i++){
                    let physicBody = stepBodies[i]
                    // physicBody.force.y -= physicBody.mass * -9.82
                    //console.log("STAIR STEP_0:", physicBody.position.y, stepActivateRelativeHeight[i] + stairTransform.position.y)
                    if(physicBody.position.y >= STAIR_STEP_CONFIG.stepActivateRelativeHeight[i] + stairTransform.position.y){
                        physicBody.quaternion.set(stepOnFinalRotation.x, stepOnFinalRotation.y, stepOnFinalRotation.z, stepOnFinalRotation.w)
                        physicBody.position.y = STAIR_STEP_CONFIG.stepActivateRelativeHeight[i] + stairTransform.position.y
                        physicBody.velocity.set(0, 0, 0)
                        physicBody.angularVelocity.set(0, 0, 0)
                        physicBody.mass = 0
                        physicBody.updateMassProperties()
                    }
                    else {
                        isComplete = false

                        if(stairDataComponent.movingCounter > STAIR_STEP_CONFIG.stepUpDelayStart[i]){
                            if(physicBody.mass === 0){
                                stepBodies[i].mass = 10000
                                stepBodies[i].updateMassProperties()
                                stepBodies[i].wakeUp()
                            }
                            physicBody.velocity.set(0, STAIR_STEP_CONFIG.stepUpSpeedAdjut[i], 0)
                        }
                        else{
                            if(physicBody.mass !== 0){
                                stepBodies[i].mass = 0
                                stepBodies[i].updateMassProperties()
                            }
                        }
                        physicBody.quaternion.set(
                            stairDataComponent.rotation.x,
                            stairDataComponent.rotation.y,
                            stairDataComponent.rotation.z,
                            stairDataComponent.rotation.w,
                        )
                    }
                }
                if(isComplete){
                    console.log("STAIR MOVE UP COMPLETE")
                    //REMOVE ENTITY FROM ACTIVATE LIST

                    STAIR_STEP_CONFIG.entitiesAddedToPhysicSim = STAIR_STEP_CONFIG.entitiesAddedToPhysicSim.filter(item => item !== entity)
                    stairMutableTransform.isMoving = false
                    stairMutableTransform.movingCounter = 0
                }
            }
            else {
                let isComplete = true
                for(let i = 0; i < 5; i++){
                    let physicBody = stepBodies[i]
                    // physicBody.force.y -= physicBody.mass * -9.82
                    //console.log("STEP_0:", physicBody.position.y, stepRestRelativeHeight + stairTransform.position.y)
                    if(physicBody.position.y <= STAIR_STEP_CONFIG.stepRestRelativeHeight + stairTransform.position.y){
                        physicBody.position.y = STAIR_STEP_CONFIG.stepRestRelativeHeight + stairTransform.position.y
                        physicBody.velocity.set(0, 0, 0)
                        physicBody.mass = 0
                        physicBody.updateMassProperties()
                    }
                    else{
                        isComplete = false
                        
                        if(stairDataComponent.movingCounter > STAIR_STEP_CONFIG.stepDownDelayStart[i]){
                            if(physicBody.mass === 0){
                                stepBodies[i].mass = 10000
                                stepBodies[i].updateMassProperties()
                                stepBodies[i].wakeUp()
                            }

                            physicBody.velocity.set(0, STAIR_STEP_CONFIG.stepDownSpeedAdjut[i], 0)
                        }
                        else{
                            if(physicBody.mass !== 0){
                                stepBodies[i].mass = 0
                                stepBodies[i].updateMassProperties()
                            }
                        }
                        physicBody.quaternion.set(
                            stairDataComponent.rotation.x,
                            stairDataComponent.rotation.y,
                            stairDataComponent.rotation.z,
                            stairDataComponent.rotation.w,
                        )
                    }
                }
                if(isComplete){
                    console.log("STAIR MOVE DOWN COMPLETE")
                    //REMOVE ENTITY FROM ACTIVATE LIST
                    STAIR_STEP_CONFIG.entitiesAddedToPhysicSim = STAIR_STEP_CONFIG.entitiesAddedToPhysicSim.filter(item => item !== entity)
                    stairMutableTransform.isMoving = false
                    stairMutableTransform.movingCounter = 0
                }
            }
        }
    }
}