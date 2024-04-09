import { GltfContainer, InputAction, PointerEventType, PointerEvents, Schemas, Transform, engine, Entity, Animator, MeshRenderer, Material, MeshCollider, pointerEventsSystem, AudioSource, Billboard, BillboardMode, TextShape, Font, VisibilityComponent } from "@dcl/sdk/ecs"
import resources from "../resources"
import { CONFIG } from "../config"
import { ButtonType, DoorType, IButtonData, IDoorData, IFlipWallData, ILaserFieldData, IPlatformData, IStairData, LaserFieldType, PlatformType, StairType, State, WallType } from "./gameObjectType"
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Vector3 } from "@dcl/sdk/math"
import { activatePlatform, canceltriggerPlatform, createPlatform, deactivatePlatform, triggerPlatform } from "./platform"
import { cancelTriggerDoor, closeDoor, createDoor, openDoor, triggerDoor } from "./door"
import { activateStair, cancelTriggerStair, createStair, deactivateStair, triggerStair } from "./stair"
import { ButtonDataComponent, ButtonTimerComponent, DoorDataComponent, FlipWallDataComponent, LaserFieldDataComponent, PlatformDataComponent, StairDataComponent, TurretDataComponent } from "../components"
import { createButtonFloorPhysicBody } from "../gameSystem/physic/createBody"
import { IsLoadingObject } from "../level/createLevel"
import { GAME_STATE } from "../gameData"
import { activateLaserFieldRay, cancelTriggerLaserFieldRay, createLaserField, deactivateLaserFieldRay, triggerLaserFieldRay } from "./laserField"
import { SFX, playSFXSound } from "./soundFX"
import { cancelTriggerFlipWal, createFlipWall, flipTheWall, triggerFlipWall } from "./flipWall"


let _BUTTON_ACTIVATING_DATA: {[key: Entity]: {entity: Entity, activateFn: Function, deactivateFn: Function}[]} = {}

export function resetButtonData(){
    _BUTTON_ACTIVATING_DATA = {}
}

export function createButton(buttonData: IButtonData, controlledObject?: Entity){
    //CREATE ENTITY
    let button = engine.addEntity()
    Transform.create(button, {
        parent:CONFIG.centerEntity,
        position: { x: buttonData.position.x, y: buttonData.position.y, z: buttonData.position.z },
        rotation: { x: buttonData.rotation.x, y: buttonData.rotation.y, z: buttonData.rotation.z, w: buttonData.rotation.w }
    })
    ButtonDataComponent.create(button, buttonData)
    
    //ADD Entity to loading system
    IsLoadingObject.create(button)

    _BUTTON_ACTIVATING_DATA[button] = []

    if(buttonData.activating){

        for(let i = 0; i < buttonData.activating.length; i++){
            if (Object.values(PlatformType).includes(buttonData.activating[i].type as unknown as PlatformType)) {
                let entity = createPlatform(buttonData.activating[i] as unknown as IPlatformData, button)

                _BUTTON_ACTIVATING_DATA[button].push({
                    entity: entity,
                    activateFn: activatePlatform,
                    deactivateFn: deactivatePlatform
                })
            }
            else if(Object.values(DoorType).includes(buttonData.activating[i].type as unknown as DoorType)){
                let entity = createDoor(buttonData.activating[i] as unknown as IDoorData, button)

                _BUTTON_ACTIVATING_DATA[button].push({
                    entity: entity,
                    activateFn: openDoor,
                    deactivateFn: closeDoor
                })
            }
            else if(Object.values(StairType).includes(buttonData.activating[i].type as unknown as StairType)){
                let entity = createStair(buttonData.activating[i] as unknown as IStairData)
                
                _BUTTON_ACTIVATING_DATA[button].push({
                    entity: entity,
                    activateFn: activateStair,
                    deactivateFn: deactivateStair
                })
            }
            else if(Object.values(LaserFieldType).includes(buttonData.activating[i].type as unknown as LaserFieldType)){
                let entity = createLaserField(buttonData.activating[i] as unknown as ILaserFieldData, button)
                
                _BUTTON_ACTIVATING_DATA[button].push({
                    entity: entity,
                    activateFn: activateLaserFieldRay,
                    deactivateFn: deactivateLaserFieldRay
                })
            }
            else if(Object.values(WallType).includes(buttonData.activating[i].type as unknown as WallType)){
                if(buttonData.activating[i].type === WallType.FLIPWALL){
                    let entity = createFlipWall(buttonData.activating[i] as unknown as IFlipWallData, button)
                    
                _BUTTON_ACTIVATING_DATA[button].push({
                        entity: entity,
                        activateFn: flipTheWall,
                        deactivateFn: flipTheWall
                    })
                }
            }
            //PUT ANOTHER TYPE HERE
            //else if()
        }
    }
    
    if(controlledObject){
        if(StairDataComponent.getMutableOrNull(controlledObject)){
            _BUTTON_ACTIVATING_DATA[button].push({
                entity : controlledObject,
                activateFn: triggerStair,
                deactivateFn: cancelTriggerStair
            })
        }
        else if(DoorDataComponent.getMutableOrNull(controlledObject)){
            _BUTTON_ACTIVATING_DATA[button].push({
                entity : controlledObject,
                activateFn: triggerDoor,
                deactivateFn: cancelTriggerDoor
            })
        }
        else if(PlatformDataComponent.getMutableOrNull(controlledObject)){
            _BUTTON_ACTIVATING_DATA[button].push({
                entity : controlledObject,
                activateFn: triggerPlatform,
                deactivateFn: canceltriggerPlatform
            })
        }
        else if(LaserFieldDataComponent.getMutableOrNull(controlledObject)){
            _BUTTON_ACTIVATING_DATA[button].push({
                entity : controlledObject,
                activateFn: triggerLaserFieldRay,
                deactivateFn: cancelTriggerLaserFieldRay
            })
        }
        else if(FlipWallDataComponent.getMutableOrNull(controlledObject)){
            _BUTTON_ACTIVATING_DATA[button].push({
                entity : controlledObject,
                activateFn: triggerFlipWall,
                deactivateFn: cancelTriggerFlipWal
            })
        }
        //PUT ANOTHER TYPE HERE
        //else if()
    }


    switch(buttonData.type){
        case ButtonType.BUTTON_FLOOR:
            GltfContainer.create(button, resources.models.button_floor)
            console.log("load level. create object: button floor:", button)

            Animator.create(button, {
                states: [
                    {
                        clip: "press",
                        playing: false,
                        loop: false
                    },
                    {
                        clip: "unpress",
                        playing: true,
                        loop: false
                    }
                ]
            })

            let triggerCount = 0
            let activationTimer = -1
            //create trigger area
            utils.triggers.addTrigger(
                button,
                utils.NO_LAYERS,
                utils.LAYER_2|utils.LAYER_1,
                [
                    {
                        type: 'sphere',
                        radius: 0.75
                    }
                ],
                (enterEntity)=>{
                    if(triggerCount === 0){
                        if(TurretDataComponent.getOrNull(enterEntity)) return
                        playSFXSound(SFX.floorButtonSoundEntity, true)
                        
                        activateButton(button, controlledObject)
                    }
                    triggerCount += 1
                },
                (exitEntity) => {
                    triggerCount -= 1
                    if(triggerCount === 0){
                        if(TurretDataComponent.getOrNull(exitEntity)) return
                        playSFXSound(SFX.floorButtonSoundEntity, true)
                        
                        deactivateButton(button, controlledObject)
                    }
                    else{
                    }
                },
                    
                Color3.Blue()
            )
            GAME_STATE._TRIGGER_AREA_LIST.push(button)
            createButtonFloorPhysicBody(button)
            break

        case ButtonType.BUTTON_PEDESTAL:
            GltfContainer.create(button, resources.models.button_pedestal)
            console.log("load level. create object: button pedestal:", button)

            Animator.create(button, {
                states: [
                    {
                        clip: "pressPedestal",
                        playing: false,
                        loop: false
                    }
                ]
            })

            let buttonClickEntity = engine.addEntity()
            Transform.create(buttonClickEntity, {
                parent: button,
                position: Vector3.create(0, 1.4, 0),
                scale: Vector3.create(0.4, 0.4, 0.4)
            })
            //ADD Entity to loading system
            IsLoadingObject.create(buttonClickEntity)

            MeshRenderer.setBox(buttonClickEntity)
            Material.setPbrMaterial(buttonClickEntity, {
                albedoColor: Color4.create(0, 0, 1, CONFIG.DEBUG_SCENE_ENABLED? 0.5 : 0)
            })
            MeshCollider.setBox(buttonClickEntity)
            
            if(buttonData.timer_second){
                let timerSignEntity = engine.addEntity()
                IsLoadingObject.create(timerSignEntity)

                Transform.create(timerSignEntity, {
                    parent: button,
                    position: Vector3.create(0, 1.8, 0)
                })
                Material.setPbrMaterial(timerSignEntity, {
                    emissiveColor: Color4.White(),
                    emissiveIntensity: 2
                  })
                Billboard.create(timerSignEntity, {
                    billboardMode: BillboardMode.BM_Y
                })
                TextShape.create(timerSignEntity, {
                    text: "",
                    textColor: (buttonData.timer_second > 5) ? Color4.create(1, 1, 1, 1) : Color4.create(1, 0, 0, 1),
                    fontSize: 5,
                    font: Font.F_MONOSPACE
                })

                ButtonTimerComponent.create(button, {
                    buttonEntity: button,
                    timerEntity: timerSignEntity,
                    timerCountDown: buttonData.timer_second,
                    isActive: false
                })
            }

            let isActivate = false
            
            pointerEventsSystem.onPointerDown({
                entity: buttonClickEntity,
                opts:{
                    button: InputAction.IA_POINTER,
                    hoverText: "ACTIVATE"
                }
                },
                function(){
                    if(!isActivate){
                        activateButton(button, controlledObject)

                        if(buttonData.timer_second){
                            let buttonTimerComponent = ButtonTimerComponent.getMutable(button)
                            buttonTimerComponent.timerCountDown = buttonData.timer_second
                            buttonTimerComponent.isActive = true

                            let timerTextShape = TextShape.getMutable(buttonTimerComponent.timerEntity)
                            if(buttonData.timer_second <= 5){
                                timerTextShape.textColor = Color4.create(1, 0, 0, 1)
                            }
                            else{
                                timerTextShape.textColor = Color4.create(1, 1, 1, 1)
                            }


                            buttonTimerComponent.timerTimeout = utils.timers.setTimeout(() => {
                                deactivateButton(button, controlledObject)

                                playSFXSound(SFX.pedestalButtonSoundEntity, true)

                                isActivate = false
                                buttonTimerComponent.isActive = false

                                TextShape.getMutable(buttonTimerComponent.timerEntity).text = ''
                            }, buttonData.timer_second * 1000)

                            GAME_STATE._SETTIMEOUT_LIST.push(buttonTimerComponent.timerTimeout)
                            console.log("button pedestal activate", button, "settimeout list:", GAME_STATE._SETTIMEOUT_LIST)
                        }
                        
                        isActivate = true
                    }
                }
            )
            GAME_STATE._ONPOINTERDOWNSYSTEM_LIST.push(buttonClickEntity)
            break
    }
    
    if(buttonData.connector_line){
        let buttonDataComponent = ButtonDataComponent.getMutable(button)

        let connector_line_active = engine.addEntity()
        GltfContainer.create(connector_line_active, {src: "models/connector_line/" + buttonData.connector_line + "_active.glb"})
        Transform.create(connector_line_active, {
            parent: CONFIG.centerEntity
        })
        VisibilityComponent.create(connector_line_active, {
            visible: false
        })
        buttonDataComponent.connector_line_active = connector_line_active

        let connector_line_inactive = engine.addEntity()
        GltfContainer.create(connector_line_inactive, {src: "models/connector_line/" +  buttonData.connector_line + "_inactive.glb"})
        Transform.create(connector_line_inactive, {
            parent: CONFIG.centerEntity
        })
        VisibilityComponent.create(connector_line_inactive, {
            visible: true
        })
        buttonDataComponent.connector_line_inactive = connector_line_inactive

        IsLoadingObject.create(connector_line_active)
        IsLoadingObject.create(connector_line_inactive)
    }
    return button
}

function activateButton(button: Entity, controlledObject?: Entity){
    console.log("gameplay. button. activate", button)
    let buttonData = ButtonDataComponent.get(button)

    let buttonAnimationName = ''
    if(buttonData.type === ButtonType.BUTTON_FLOOR) buttonAnimationName = 'press'
    else if(buttonData.type === ButtonType.BUTTON_PEDESTAL) buttonAnimationName = 'pressPedestal'

    Animator.playSingleAnimation(button, buttonAnimationName)

    for(let i = 0; i < _BUTTON_ACTIVATING_DATA[button].length; i++){
        //TRIGGER ONLY, BUT NOT YET ACTIVATED
        if(controlledObject) _BUTTON_ACTIVATING_DATA[button][i].activateFn(button, _BUTTON_ACTIVATING_DATA[button][i].entity)
        //ACTIVATE OBJECT DIRECTLY
        else _BUTTON_ACTIVATING_DATA[button][i].activateFn(_BUTTON_ACTIVATING_DATA[button][i].entity)
    }

    if(buttonData.connector_line_active && buttonData.connector_line_inactive){
        VisibilityComponent.getMutable(buttonData.connector_line_active).visible = true
        VisibilityComponent.getMutable(buttonData.connector_line_inactive).visible = false
    }
}

function deactivateButton(button: Entity, controlledObject?: Entity){
    if(GAME_STATE.state !== State.PLAYING) return
    
    console.log("gameplay. button. deactivate", button)
    let buttonData = ButtonDataComponent.get(button)

    let buttonAnimationName = ''
    if(buttonData.type === ButtonType.BUTTON_FLOOR) buttonAnimationName = 'unpress'
    else if(buttonData.type === ButtonType.BUTTON_PEDESTAL) buttonAnimationName = 'pressPedestal'
    
    Animator.playSingleAnimation(button, buttonAnimationName)
    
    for(let i = 0; i < _BUTTON_ACTIVATING_DATA[button].length; i++){
        //TRIGGER ONLY, BUT NOT YET ACTIVATED
        if(controlledObject) _BUTTON_ACTIVATING_DATA[button][i].deactivateFn(button, _BUTTON_ACTIVATING_DATA[button][i].entity)
        //ACTIVATE OBJECT DIRECTLY
        else _BUTTON_ACTIVATING_DATA[button][i].deactivateFn(_BUTTON_ACTIVATING_DATA[button][i].entity)
    }

    if(buttonData.timer_second){
        GAME_STATE._SETTIMEOUT_LIST = GAME_STATE._SETTIMEOUT_LIST.filter(item => item !== ButtonTimerComponent.get(button).timerTimeout)
    }
    
    if(buttonData.connector_line_active && buttonData.connector_line_inactive){
        VisibilityComponent.getMutable(buttonData.connector_line_active).visible = false
        VisibilityComponent.getMutable(buttonData.connector_line_inactive).visible = true
    }
}