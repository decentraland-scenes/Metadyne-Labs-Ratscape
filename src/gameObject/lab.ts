import { AudioSource, ColliderLayer, Entity, GltfContainer, Material, MeshCollider, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import { ILabData, LabType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { CatDataComponent, PortableFlagComponent, WallDataComponent } from "../components"
import { createGlassHolePhysicBody, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { Color3, Color4, Vector3 } from "@dcl/sdk/math"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import * as utils from '@dcl-sdk/utils'
import helper from "../helper/helper"
import { GAME_STATE, levelTimerSystem } from "../gameData"
import { manualTriggerLaserRayChain } from "../gameSystem/laserSystem"
import { manualTriggerPlatformRayChain } from "../gameSystem/lightPlatformSystem"
import { displayPopup } from "../ui/popupUI"
import { displays } from "../ui/uiControls"
import { claimToken } from "../claim-dropin/claim"
import { rewardsdata } from "../rewardData"
import { updateWonReward } from "../ui/wonRewardUI"

//export const labBodiesList: {[key:number]: CANNON.Body} = {}

export let arrowModel: Entity

export function createLab(labData: ILabData){
    let lab = engine.addEntity()
    Transform.create(lab, {
        parent:CONFIG.centerEntity,
        position: { x: labData.position.x, y: labData.position.y, z: labData.position.z },
        rotation: { x: labData.rotation.x, y: labData.rotation.y, z: labData.rotation.z, w: labData.rotation.w }
    })

    //ADD Entity to loading system
    IsLoadingObject.create(lab)

    switch(labData.type){
        case LabType.LAB_START:
            console.log("load level. create object: lab start:", lab)
            if(Number(GAME_STATE.currentLevel) === 0){
                GltfContainer.create(lab, { src: "models/labStartLevel0.glb" })
            }
            else GltfContainer.create(lab, resources.models.labStart)
            break

        case LabType.LAB_FINISH:
            console.log("load level. create object: lab finish:", lab)
            GltfContainer.create(lab, resources.models.labFinish)
            break
    }

    if(labData.type === LabType.LAB_START && Number(GAME_STATE.currentLevel) === 0){
        arrowModel = engine.addEntity()
        GltfContainer.create(arrowModel, { src: "models/LabArrow.glb" })
        Transform.create(arrowModel, {
            parent: CONFIG.centerEntity,
            position: { x: labData.position.x, y: labData.position.y, z: labData.position.z },
            rotation: { x: labData.rotation.x, y: labData.rotation.y, z: labData.rotation.z, w: labData.rotation.w }
        })

        IsLoadingObject.create(arrowModel)
    }

    let playerAlreadyEntered = false
    let playerAlreadyExit = false
    utils.triggers.addTrigger(
        lab,
        utils.NO_LAYERS,
        utils.LAYER_1 | utils.LAYER_3,
        [
            {
                type: 'box',
                position: Vector3.create(0, 0, -10), //Vector3.Zero(),
                scale: Vector3.create(20, 20, 20)
            }
        ],
        (enterEntity)=>{
            if(!GAME_STATE.levelStartPosition || !GAME_STATE.levelStartCameraTarget) return
            
            if(labData.type !== LabType.LAB_FINISH) return

            console.log("gameplay. object enter lab finish:", enterEntity)
            if(enterEntity === 1){
                if(playerAlreadyEntered) return
                
                playerAlreadyEntered = true
                engine.removeSystem(levelTimerSystem)
            }
            else{
                if(CatDataComponent.getOrNull(enterEntity)){
                    
                    let catDataComponent = CatDataComponent.getMutable(enterEntity)
                    
                    AudioSource.getMutable(catDataComponent.catSaveVOEntity).playing = true
                    
                    console.log("gameplay. cat saved. play voice over.", catDataComponent.catSaveVOEntity, AudioSource.getMutable(catDataComponent.catSaveVOEntity).audioClipUrl)

                    let reward = rewardsdata.find((r:any)=> r.id === "bowl")
                    console.log("claim reward shirt. img data:", reward)
                    updateWonReward(reward.img)
                    claimToken('bowl')
                    displays.active = "wonreward"
                }
            }
        },
        (exitEntity) => {
            if(!GAME_STATE.levelStartPosition || !GAME_STATE.levelStartCameraTarget) return
            if(playerAlreadyExit) return
            
            playerAlreadyExit = true

            engine.removeSystem(levelTimerSystem)

            manualTriggerPlatformRayChain() //to update ray hit incase init not updated
            manualTriggerLaserRayChain() //to update ray hit incase init not updated

            if (labData.type === LabType.LAB_START) {
                //console.log("LEVEL TIMER SYSTEM. ADDED FROM LAB")
                engine.addSystem(levelTimerSystem)

                if(GAME_STATE.currentLevel === 0){
                    displays.active = ""
                }

                if(GAME_STATE.currentLevel === 2){
                    displayPopup('popup2')
                }
                if(GAME_STATE.currentLevel === 8){
                    displayPopup('popup4')
                }
            }
        },
            
        Color3.Green()
    )

    GAME_STATE._TRIGGER_AREA_LIST.push(lab)

    return lab
}