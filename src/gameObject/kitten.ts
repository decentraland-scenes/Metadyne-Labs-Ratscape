import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, AudioSource } from "@dcl/sdk/ecs"
import { BoxType, CatObjectType, IBoxData, ICatObjectData } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { BoxDataComponent, CatDataComponent, TeleportStatusComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Quaternion, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic, createCatPhysicBody } from "../gameSystem/physic/createBody"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import { GAME_STATE } from "../gameData"
import { world } from "../gameSystem/physic/physicSetup"

export let catBodiesList: {[key:number]: CANNON.Body} = {}
export let catList: Entity[] = []

export function resetCatObjects(){
    catBodiesList = {}
    catList = []
}

export function createCat(catData: ICatObjectData){
    //CREATE ENTITY
    let cat = engine.addEntity()
    Transform.create(cat, {
        parent:CONFIG.centerEntity,
        position: { x: catData.position.x, y: catData.position.y, z: catData.position.z },
        rotation: { x: catData.rotation.x, y: catData.rotation.y, z: catData.rotation.z, w: catData.rotation.w }
    })
    
    //ADD Entity to loading system
    IsLoadingObject.create(cat)

    switch(catData.type){
        case CatObjectType.CAT_DEFAULT:
            console.log("load level. create object: cat:", cat)
            GltfContainer.create(cat, resources.models.cat)
            break
    }
    console.log("boxData:", catData)
    
    //SETUP POINTER HOVER
    PointerEvents.create(cat, {
        pointerEvents: [
          {
            eventType: PointerEventType.PET_DOWN,
            eventInfo: {
              button: InputAction.IA_SECONDARY,
              hoverText: 'Pick Up / Put Down',
              maxDistance: 5,
              showFeedback: true
            }
          }
        ]
    })
    GAME_STATE._POINTER_EVENT_LIST.push(cat)
    
    //SETUP BOX TRIGGER
    //create trigger area
    utils.triggers.addTrigger(
        cat,
        utils.LAYER_3,
        utils.NO_LAYERS,
        [
            {
                type: 'box',
                scale: Vector3.create(0.6, 0.6, 0.6),
                position: Vector3.create(0, 0.3, 0)
            }
        ],
        (otherEntity)=>{},
        () => {},
        Color3.Blue()
    )
    GAME_STATE._TRIGGER_AREA_LIST.push(cat)
    
    let audioDiedEntity = engine.addEntity()
    Transform.create(audioDiedEntity, {
        parent: engine.PlayerEntity,
        position: Vector3.Zero()
    })
    AudioSource.create(audioDiedEntity, {
        audioClipUrl: catData.dieVOSource,
        loop: false,
        playing: false
    })
    IsLoadingObject.create(audioDiedEntity)

    let audioSaveEntity = engine.addEntity()
    Transform.create(audioSaveEntity, {
        parent: engine.PlayerEntity,
        position: Vector3.Zero()
    })
    AudioSource.create(audioSaveEntity, {
        audioClipUrl: catData.saveVOSource,
        loop: false,
        playing: false
    })
    IsLoadingObject.create(audioSaveEntity)

    //ADD CAT COMPONENT
    CatDataComponent.create(cat, catData)
    let catDataComponent = CatDataComponent.getMutable(cat)
    catDataComponent.catDieVOEntity = audioDiedEntity
    catDataComponent.catSaveVOEntity = audioSaveEntity

    TeleportStatusComponent.create(cat)

    //SETUP KITTEN PHYSIC
    let catBody = createCatPhysicBody(cat)
    catBodiesList[cat] = catBody
    catList.push(cat)
}

export function catDie(catEnt: Entity){
    let catDataComponent = CatDataComponent.getMutable(catEnt)

    if(catDataComponent.isDied) return

    catDataComponent.isDied = true
    
    AudioSource.getMutable(catDataComponent.catDieVOEntity).playing = true

    console.log("gameplay. cat died. play voice over.", catDataComponent.catDieVOEntity, AudioSource.getMutable(catDataComponent.catDieVOEntity).audioClipUrl)

    utils.tweens.startScaling(catEnt, Vector3.One(), Vector3.Zero(), 0.5, utils.InterpolationType.EASEINEXPO)

    utils.timers.setTimeout(() => {
        GAME_STATE.grabbedKitten = undefined
        GAME_STATE._TRIGGER_AREA_LIST = GAME_STATE._TRIGGER_AREA_LIST.filter(item => item != catEnt)
        GAME_STATE._POINTER_EVENT_LIST = GAME_STATE._POINTER_EVENT_LIST.filter(item => item != catEnt)
        
        world.remove(catBodiesList[catEnt])

        engine.removeEntity(catEnt)
    }, 500)
}