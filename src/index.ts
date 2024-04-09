import { AvatarModifierArea, AvatarModifierType, CameraModeArea, CameraType, engine, Entity, GltfContainer, Schemas, Transform, VisibilityComponent } from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'
import { GAME_STATE, initGameState } from './gameData'
import { CONFIG, initConfig } from './config'
import { physicInit, resetPhysicBodies, updatePhysicsSystem } from './gameSystem/physic/physicSetup'
import { createGun } from './gameObject/gun'
import * as utils from '@dcl-sdk/utils'
//import { MovingPlatformSystem } from './gameObject/platform'
import { onSceneReadyObservable} from '@dcl/sdk/observables'
import { initPortal } from './gameObject/portal'
import { playerHealthSystem } from './gameSystem/healthSystem'
import { createBoxBeam } from './gameObject/boxBeam'
import { createLevelTesting } from './level/createLevel'
import { lockPositionInit } from './gameObject/playerLockPosition'

export async function main() {
  //ONE TIME INITIALIZATION HERE

  
    //onSceneReadyObservable.add(() => {
    GAME_STATE.isObservableReady = true
    initConfig()
    lockPositionInit()
    initGameState()
    physicInit()
    initPortal()
    //createGun(true)
    createBoxBeam()

    const camModifierEntity = engine.addEntity()
    Transform.create(camModifierEntity, {
        position: CONFIG.centerGround
    })
    CameraModeArea.create(camModifierEntity, {
        area: Vector3.create(CONFIG.dimensionX, CONFIG.dimensionY, CONFIG.dimensionZ),
        mode: CameraType.CT_FIRST_PERSON,
    })

    const avatarModifierEntity = engine.addEntity()
    Transform.create(avatarModifierEntity, {
        position: CONFIG.centerGround
    })
    AvatarModifierArea.create(avatarModifierEntity, {
        excludeIds: [],
        area: Vector3.create(CONFIG.dimensionX, CONFIG.dimensionY, CONFIG.dimensionZ),
        modifiers: [AvatarModifierType.AMT_HIDE_AVATARS]
    })
    //})
  
    if(CONFIG.DEBUG_SCENE_ENABLED){
        utils.triggers.enableDebugDraw(true)

        // let orientationTest = engine.addEntity()
        // Transform.create(orientationTest, {
        //   parent: CONFIG.centerEntity
        // })
        // GltfContainer.create(orientationTest, {src: "models/debug/orientation_test.glb"})
    }


    utils.timers.setTimeout(()=>{
        //createLevelTesting('test') //ONLY FOR TESTING
        console.log('about to start level', GAME_STATE.currentLevel)
        GAME_STATE.tryLevelStart(GAME_STATE.currentLevel)
    }, 5000)
}