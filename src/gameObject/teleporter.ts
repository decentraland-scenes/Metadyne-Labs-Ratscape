import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, AudioSource } from "@dcl/sdk/ecs"
import { BoxType, DoorType, IBoxData, IDoorData, ITeleporterData, TeleporterState, TeleporterType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { BoxDataComponent, DoorDataComponent, TeleportStatusComponent, TeleporterDataComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic } from "../gameSystem/physic/createBody"
import { GAME_STATE } from "../gameData"
import { IsLoadingObject } from "../level/createLevel"
import { SFX, playAmbientSound, playSFXSound } from "./soundFX"

export function createTeleporter(teleporterData: ITeleporterData){

    //CREATE ENTITY
    let teleporter = engine.addEntity()
    Transform.create(teleporter, {
        parent:CONFIG.centerEntity,
        position: { x: teleporterData.position.x, y: teleporterData.position.y, z: teleporterData.position.z } ,
        rotation: { x: teleporterData.rotation.x, y: teleporterData.rotation.y, z: teleporterData.rotation.z, w: teleporterData.rotation.w }
    })
    
    //ADD Entity to loading system
    IsLoadingObject.create(teleporter)

    GltfContainer.create(teleporter, resources.models.teleporter)


    let sparkSound = engine.addEntity()
    Transform.create(sparkSound, {
        parent: teleporter,
        position: Vector3.Zero()
    })
    AudioSource.create(sparkSound, {
        audioClipUrl: resources.sounds.teleporterSpark,
        loop: true,
        playing: true
    })
    //ADD Entity to loading system
    IsLoadingObject.create(sparkSound)

    switch(teleporterData.type){
        case TeleporterType.TELEPORTER_START:
            console.log("load level. create object: teleporter start:", teleporter, "start position:", GAME_STATE.levelStartPosition, GAME_STATE.levelStartCameraTarget)
            GAME_STATE.levelStartPosition = Vector3.add(Vector3.add(teleporterData.position, CONFIG.centerGround), Vector3.create(0, 1, 0))
            let forwardRotated = Vector3.rotate(Vector3.Forward(), teleporterData.rotation)
            GAME_STATE.levelStartCameraTarget = Vector3.add(GAME_STATE.levelStartPosition, forwardRotated)
            //GAME_STATE.levelStartCameraTarget = Vector3.add(Vector3.add(teleporterData.position, Vector3.rotate(Vector3.create(0, teleporterData.position.y, 5), teleporterData.rotation)), CONFIG.centerGround)
            break
                
        case TeleporterType.TELEPORTER_FINISH:
            console.log("load level. create object: teleporter finish:", teleporter)
            let finishTriggerArea = engine.addEntity()
            Transform.create(finishTriggerArea, {
                parent: teleporter,
                position: Vector3.create(0, 1, 0)
            })

            let isFinish = false
            utils.triggers.addTrigger(
                finishTriggerArea,
                utils.NO_LAYERS,
                utils.LAYER_1,
                [
                    {
                        type: 'box',
                        scale: Vector3.create(1, 1.5, 1)
                    }
                ],
                async (enterEntity)=>{
                    if(!isFinish){
                        isFinish = true

                        if(GAME_STATE.currentLevel === 13) GAME_STATE.isWin = true

                        console.log("ENTER FINISH TRIGGER!")
                        playSFXSound(SFX.teleporterArriveSoundEntity, true)
                        closeTeleporter(teleporter)
                        console.log("LEVEL FINISHED!")
                        await GAME_STATE.completeLevel()
                    }
                },
                (exitEntity) => {
                },
                Color3.Red()
            )
            GAME_STATE._TRIGGER_AREA_LIST.push(finishTriggerArea)
            break
    }
    console.log("teleporterData:", teleporterData)
  
    Animator.create(teleporter, {
        states:[
        {
            clip: "teleportOpen",
            playing: false,
            loop: false
        },
        {
            clip: "teleportClose",
            playing: false,
            loop: false
        }
        ]
    })
  
    utils.triggers.addTrigger(
        teleporter,
        utils.NO_LAYERS,
        utils.LAYER_1,
        [
            {
                type: 'box',
                scale: (teleporterData.type === TeleporterType.TELEPORTER_START)? Vector3.create(1.5, 5, 1.5) : Vector3.create(5, 5, 5)
            }
        ],
        (enterEntity)=>{
            openTeleporter(teleporter)

            if(teleporterData.type === TeleporterType.TELEPORTER_FINISH) return
            playSFXSound(SFX.teleporterArriveSoundEntity, true)
            playAmbientSound(SFX.sceneAmbient1SoundEntity, true)
        },
        (exitEntity) => {
        },
            
        Color3.Blue()
    )
    GAME_STATE._TRIGGER_AREA_LIST.push(teleporter)

  //ADD TELEPORTER COMPONENT
  TeleporterDataComponent.create(teleporter, teleporterData)

  //SETUP TELEPORTER PHYSIC??

  if(teleporterData.initial_state === TeleporterState.OFF) {
    Animator.stopAllAnimations(teleporter)
    Animator.getClip(teleporter, "teleportClose").playing = true
  }
  else {
    Animator.stopAllAnimations(teleporter)
    Animator.getClip(teleporter, "teleportOpen").playing = true
  }

  return teleporter
}

export function openTeleporter(teleporterEnt: Entity){
    if (TeleporterDataComponent.get(teleporterEnt).current_state === TeleporterState.ON) return
    
    playSFXSound(SFX.teleporterDoorSoundEntity, true, teleporterEnt)
    Animator.stopAllAnimations(teleporterEnt)
    let doorOpenAnim = Animator.getClip(teleporterEnt, "teleportOpen")
    doorOpenAnim.playing = true
    TeleporterDataComponent.getMutable(teleporterEnt).current_state = TeleporterState.ON
}

export function closeTeleporter(teleporterEnt: Entity){
    if (TeleporterDataComponent.get(teleporterEnt).current_state === TeleporterState.OFF) return

    playSFXSound(SFX.teleporterDoorSoundEntity, true, teleporterEnt)
    Animator.stopAllAnimations(teleporterEnt)
    let doorCloseAnim = Animator.getClip(teleporterEnt, "teleportClose")
    doorCloseAnim.playing = true
    TeleporterDataComponent.getMutable(teleporterEnt).current_state = TeleporterState.OFF
}