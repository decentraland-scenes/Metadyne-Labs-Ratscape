import { GltfContainer, GltfContainerLoadingState, LoadingState, engine } from "@dcl/sdk/ecs"
import { GAME_STATE } from "../gameData"
import { loadLevel } from "./loadLevelObjects"
import { physicInit, resetPhysicBodies, updatePhysicsSystem, world } from "../gameSystem/physic/physicSetup"
import { resetPortalObjects } from "../gameObject/portal"
import { resetBoxObjects } from "../gameObject/box"
import { BoxGrabbingSystem, grabbedObjectFollowCameraSystem, objectGrabbedCollisionSystemInit, getBoxNeighbourSystem, resetObjectGrabSystemConfig } from "../gameSystem/objectGrabbingSystem"
import { moveStepPhysicBodyStairSystem, resetStairObjects } from "../gameObject/stair"
import { resetLaserObjects } from "../gameObject/laser"
import { LaserRaySystem, manualTriggerLaserRayChain, resetLaserSystemConfig } from "../gameSystem/laserSystem"
import { manualTriggerPlatformRayChain, PlatformLightSystem, resetLightPlatformSystemConfig } from "../gameSystem/lightPlatformSystem"
import { createGun } from "../gameObject/gun"
import * as utils from '@dcl-sdk/utils'
import { colorSystem, gunSystem, resetGunGlowColor } from "../gameSystem/gunAndPortalSystem"
import { movePlayerTo } from "~system/RestrictedActions"
import { resetVoiceOverObjects } from "../gameObject/soundVO"
import { resetDoorObjects } from "../gameObject/door"
import { resetPlatformObjects } from "../gameObject/platform"
import { VISUALINITBODYCHECK } from "../gameSystem/physic/createBody"
import { TurretSystem } from "../gameSystem/turretSystem"
import { playerHealthSystem, resetHealthSystem } from "../gameSystem/healthSystem"
import { ButtonTimerVisualSystem } from "../gameSystem/buttonTimerVisualSystem"
import { resetTurretObjects } from "../gameObject/turret"
import { MovingPlatformSystem } from "../gameSystem/movingPlatformSystem"
import { ResetFallObjectSystem } from "../gameSystem/resetFallObjectSystem"
import { levelConfigCollection } from "./levelData"
import { lockPlayer } from "../gameObject/playerLockPosition"
import { Vector3 } from "@dcl/sdk/math"
import { displays } from "../ui/uiControls"
import { changeLoadingProgressBar } from "../ui/loadingUI"
import { AcidUVScrollingSystem } from "../gameSystem/acidUVSystem"
import { createCheeseShirt } from "../gameObject/cheeseShirt"


export function createLevel(level: number | string){
    console.log("create level. start", level)
    //LOADING GAME
    deleteLevel()
    lockPlayer()
    
    resetPhysicBodies()
    resetPortalObjects()
    resetBoxObjects()
    resetDoorObjects()
    resetPlatformObjects()
    resetObjectGrabSystemConfig()
    resetStairObjects()
    resetLaserObjects()
    resetLaserSystemConfig()
    resetLightPlatformSystemConfig()
    resetVoiceOverObjects()
    resetHealthSystem()
    resetGunGlowColor()
    resetTurretObjects()
    
    //todo: check if need to reset acid, laser field, turret

    // else{
    //     createGun(true)
    // }
    physicInit()
    console.log("create level. physic. start initiallize.")
    loadLevel(level)

    if(level === '0' || level === 0){
        createGun(false, Vector3.create(166, 1.5, 171.75))
    }
    else{
        createGun(true)
    }

    if(level === '13' || level === 13){
        createCheeseShirt()
    }

    console.log("create level. loading objects system. start")
    if(!GAME_STATE.loadingSystem){
        GAME_STATE.loadingSystem = true
        engine.addSystem(loadingObjectsSystem)
    }
    
    // //ADD PHYSIC SYSTEM WITH DELAY
    // utils.timers.setTimeout(() => {
    // }, 4000)
    
    console.log("create level. add all system. start")
    //GUN AND PORTAL SYSTEM
    // engine.addSystem(gunSystem)
    engine.addSystem(colorSystem)
    
    //BOX SYSTEM
    objectGrabbedCollisionSystemInit()
    engine.addSystem(grabbedObjectFollowCameraSystem)
    engine.addSystem(BoxGrabbingSystem)
    engine.addSystem(getBoxNeighbourSystem)
    
    //STAIR SYSTEM
    engine.addSystem(moveStepPhysicBodyStairSystem)

    //LIGHT PLATFORM SYSTEM
    engine.addSystem(PlatformLightSystem)
    
    //LASER EMITTER-RECEIVER SYSTEM
    engine.addSystem(LaserRaySystem)

    //TURRET SYSTEM
    engine.addSystem(TurretSystem)

    //HEALTH SYSTEM
    engine.addSystem(playerHealthSystem)
    
    //BUTTON TIMER VISUAL SYSTEM
    engine.addSystem(ButtonTimerVisualSystem)

    //MOVING PLATFORM SYSTEM
    engine.addSystem(MovingPlatformSystem)

    //TELEPORT TO START POSITION SYSTEM
    engine.addSystem(teleportStartPosSystem)

    //OBJECT FALL BELOW GROUND RESET SYSTEM
    engine.addSystem(ResetFallObjectSystem)

    //ACID UV SCROLL SYSTEM
    engine.addSystem(AcidUVScrollingSystem)

    console.log("create level. add all system. finish")
}

function teleportStartPosSystem(dt: number){
    //console.log("TELEPORT START POSITION SYSTEM:", GAME_STATE.isObservableReady, GAME_STATE.levelStartPosition, GAME_STATE.levelStartCameraTarget, showLoading)
    if(GAME_STATE.isObservableReady && GAME_STATE.levelStartPosition && GAME_STATE.levelStartCameraTarget && displays.active !== "loading"){
      console.log("create level. all setup done. teleport player to:", GAME_STATE.levelStartPosition, GAME_STATE.levelStartCameraTarget)
      movePlayerTo({newRelativePosition: GAME_STATE.levelStartPosition, cameraTarget: GAME_STATE.levelStartCameraTarget})
      engine.removeSystem(teleportStartPosSystem)
    }
  }

//does this already exist? if not, we need it//
export function deleteLevel(){
    console.log("create level. delete all system. start")
    //PHYSIC
    engine.removeSystem(updatePhysicsSystem)
    
    //GUN AND PORTAL SYSTEM
    // engine.removeSystem(gunSystem)
    engine.removeSystem(colorSystem)
    
    //BOX SYSTEM
    engine.removeSystem(grabbedObjectFollowCameraSystem)
    engine.removeSystem(BoxGrabbingSystem)
    engine.removeSystem(getBoxNeighbourSystem)
    
    //STAIR SYSTEM
    engine.removeSystem(moveStepPhysicBodyStairSystem)
    
    //LASER EMITTER-RECEIVER SYSTEM
    engine.removeSystem(LaserRaySystem)

    //LIGHT PLATFORM SYSTEM
    engine.removeSystem(PlatformLightSystem)

    //TURRET SYSTEM
    engine.removeSystem(TurretSystem)

    //HEALTH SYSTEM
    engine.removeSystem(playerHealthSystem)

    //TELEPORT SYSTEM
    engine.removeSystem(teleportStartPosSystem)

    //BUTTON TIMER VISUAL SYSTEM
    engine.removeSystem(ButtonTimerVisualSystem)

    //MOVING PLATFORM SYSTEM
    engine.removeSystem(MovingPlatformSystem)

    //OBJECT FALL BELOW GROUND RESET SYSTEM
    engine.removeSystem(ResetFallObjectSystem)

    //ACID UV SCROLL SYSTEM
    engine.removeSystem(AcidUVScrollingSystem)

    console.log("create level. delete all system. finish")

    console.log("create level. reset game state. start")
    GAME_STATE.reset()
    console.log("create level. reset game state. finish")

    console.log("create level. delete previous level objects. start")
    let count = 0
    for (const [entity] of engine.getEntitiesWith(IsLoadingObject)) {
        count += 1
        engine.removeEntity(entity)
    }
    console.log("create level. delete previous level objects. finish. delete count:", count)

    count = 0
    for(let entity of VISUALINITBODYCHECK){
        count += 1
        engine.removeEntity(entity)
    }
    console.log("create level. delete debug physic body enabled. finish. delete count:", count)
}

export const IsLoadingObject = engine.defineComponent("portal::game::level::object", {})
let timer = 10
let loadProgress = 0
let allObjectLoaded = false
export function loadingObjectsSystem(dt:number){
 

    if(timer > 0){
        timer -= dt
        loadProgress += dt
        changeLoadingProgressBar(loadProgress/10)

    }
    else{
        //GAME_STATE.playLevel()
        timer = 10
        loadProgress = 0
        changeLoadingProgressBar(0.1)
    }

    allObjectLoaded = true
    for (const [entity] of engine.getEntitiesWith(IsLoadingObject)) {
        const loadingState = GltfContainerLoadingState.getOrNull(entity)
        if (loadingState){
          switch (loadingState.currentState) {

              case LoadingState.LOADING:
                //console.log('mesh is LOADING')
                allObjectLoaded = false
              break

              case LoadingState.FINISHED:
                //console.log('mesh is FINISHED')
                // Perform custom logic
                //GAME_STATE.loadedObject(entity)
              break

              case LoadingState.FINISHED_WITH_ERROR:
                //console.log('mesh is FINISHED BUT MAY HAVE PROBLEMS')
              break

              case LoadingState.UNKNOWN:
                //console.log('mesh is in an UNKNOWN STATE')
              break
          }
        }
    }

    if(timer === 10 && allObjectLoaded){
        console.log("create level. loading objects system. finish")
        engine.removeSystem(updatePhysicsSystem)
        engine.addSystem(updatePhysicsSystem)
        console.log("create level. physic. total physic body.", "cannon world bodies:", world.bodies.length, "game state bodies check:", GAME_STATE._CANNON_BODY_LIST.length)  
        console.log("create level. physic. start system.")

        manualTriggerPlatformRayChain() //to get 1st ray hit
        manualTriggerLaserRayChain() //to get 1st ray hit

        GAME_STATE.playLevel()
    }
}


export function createLevelTesting(level: number | string){
    createLevel(level)
    displays.active = "loading"
    utils.timers.setTimeout(() => {
      displays.active = "loading"
    }, 4000)
  }