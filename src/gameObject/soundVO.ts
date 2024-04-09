import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, AudioSource, Material, MeshRenderer } from "@dcl/sdk/ecs"
import { VoiceOverType, IVoiceOverData, State } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Vector3 } from "@dcl/sdk/math"
import { GAME_STATE } from "../gameData"
import { IsLoadingObject } from "../level/createLevel"


export let _VOICE_OVER_LISTS: {[key:string]: Entity} = {}
export let LastPlayed: Entity | undefined = undefined

export function stopVO(){
    if(LastPlayed && LastPlayed !== undefined){
        AudioSource.getMutable(LastPlayed).playing = false
        resetVoiceOverObjects()
    }
}

export function resetVoiceOverObjects(){
    _VOICE_OVER_LISTS = {}
    LastPlayed = undefined
}

export function createVoiceOverArea(voData: IVoiceOverData){
    //CREATE ENTITY
    let areaEntity = engine.addEntity()
    Transform.create(areaEntity, {
        parent: CONFIG.centerEntity,
        position: { x: voData.position.x, y: voData.position.y, z: voData.position.z },
        scale: { x: voData.dimension.x, y: voData.dimension.y, z: voData.dimension.z }
    })
    
    //ADD Entity to loading system
    IsLoadingObject.create(areaEntity)

    MeshRenderer.setBox(areaEntity)
    Material.setPbrMaterial(areaEntity, { albedoColor: Color4.create(0, 1, 0, CONFIG.DEBUG_SCENE_ENABLED? 0.5 : 0) })

    switch(voData.type){
        case VoiceOverType.VOICEOVER_DEFAULT:
            console.log("load level. create object: voice over area:", areaEntity)
            break
    }

    let voiceOverEntity = engine.addEntity()
    Transform.create(voiceOverEntity, {
        parent: engine.PlayerEntity,
        position: Vector3.Zero()
    })
    //ADD Entity to loading system
    IsLoadingObject.create(voiceOverEntity)

    AudioSource.create(voiceOverEntity, {
        audioClipUrl: voData.audio_src,
        loop: false,
        playing: false
    })

    //SETUP BOX TRIGGER
    //create trigger area
    let isTriggered = false
    utils.triggers.addTrigger(
        areaEntity,
        utils.NO_LAYERS,
        utils.LAYER_1,
        [
            {
                type: 'box',
                scale: Vector3.create(voData.dimension.x, voData.dimension.y, voData.dimension.z)
            }
        ], 
        (playerEnt) => {
            if (!isTriggered && GAME_STATE.sfxSound && GAME_STATE.state === State.PLAYING) {
                if (LastPlayed) AudioSource.getMutable(LastPlayed).playing = false
                LastPlayed = voiceOverEntity
                AudioSource.getMutable(voiceOverEntity).playing = true

                isTriggered = true
            }
        },
        () => {},
        Color3.Blue()
    )
    GAME_STATE._TRIGGER_AREA_LIST.push(areaEntity)
}
