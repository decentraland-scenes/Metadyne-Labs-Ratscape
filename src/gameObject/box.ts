import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity } from "@dcl/sdk/ecs"
import { BoxType, IBoxData } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { BoxDataComponent, TeleportStatusComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Color3, Quaternion, Vector3 } from "@dcl/sdk/math"
import { createBoxBodyPhysic } from "../gameSystem/physic/createBody"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import { GAME_STATE } from "../gameData"
import { createBoxBeam } from "./boxBeam"

export let boxBodiesList: {[key:number]: CANNON.Body} = {}
export let boxList: Entity[] = []

export function resetBoxObjects(){
    boxBodiesList = {}
    boxList = []
}

export function createBox(boxData: IBoxData){
    //CREATE ENTITY
    let box = engine.addEntity()
    Transform.create(box, {
        parent:CONFIG.centerEntity,
        position: { x: boxData.position.x, y: boxData.position.y, z: boxData.position.z },
        rotation: { x: boxData.rotation.x, y: boxData.rotation.y, z: boxData.rotation.z, w: boxData.rotation.w } 
    })
    
    //ADD Entity to loading system
    IsLoadingObject.create(box)

    switch(boxData.type){
        case BoxType.BOX_DEFAULT:
            console.log("load level. create object: box default:", box)
            GltfContainer.create(box, resources.models.box_default)
            break

        case BoxType.BOX_MIRROR:
            console.log("load level. create object: box mirror:", box)
            GltfContainer.create(box, resources.models.box_mirror)
            break
    }
    
    //SETUP POINTER HOVER
    PointerEvents.create(box, {
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
    GAME_STATE._POINTER_EVENT_LIST.push(box)
    
    //SETUP BOX TRIGGER
    //create trigger area
    utils.triggers.addTrigger(
        box,
        utils.LAYER_2,
        utils.NO_LAYERS,
        [
            {
                type: 'box',
                scale: Vector3.create(0.8, 0.8, 0.8)
            }
        ],
        (otherEntity)=>{},
        () => {},
        Color3.Blue()
    )
    GAME_STATE._TRIGGER_AREA_LIST.push(box)
    
    //ADD BOX COMPONENT
    BoxDataComponent.create(box, boxData)
    TeleportStatusComponent.create(box)

    //SETUP BOX PHYSIC
    let boxBody = createBoxBodyPhysic(box)
    boxBodiesList[box] = boxBody
    boxList.push(box)
    
    //move this to index.ts initialization
    // //ADD GRABBING BEAM EFFECT
    // createBoxBeam()
}

export function isMirrorBox(entity: Entity){
    let boxData = BoxDataComponent.getOrNull(entity)
    if(boxData && boxData.type === BoxType.BOX_MIRROR) return true
    return false
}