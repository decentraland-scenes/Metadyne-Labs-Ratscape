import { Animator, ColliderLayer, Entity, GltfContainer, InputAction, Material, MeshCollider, MeshRenderer, PointerEventType, PointerEvents, Transform, engine } from "@dcl/sdk/ecs"
import { AcidObjectType, IAcidObjectData, ILabData, IMiscObjectData, ITurretObjectData, LabType, MiscObjectType, TurretObjectType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { PortableFlagComponent, TeleportStatusComponent, TurretDataComponent, TurretSystemComponent, WallDataComponent } from "../components"
import { createGlassHolePhysicBody, createTurretBodyPhysic, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { Color3, Color4, Vector3, Quaternion } from "@dcl/sdk/math"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import * as utils from '@dcl-sdk/utils'
import { GAME_STATE } from "../gameData"
import { world, world2 } from "../gameSystem/physic/physicSetup"
import { degreeVision } from "../gameSystem/turretSystem"
import { SFX, playSFXSound } from "./soundFX"

export let turretBodiesList: {[key:number]: CANNON.Body} = {}
export let turretList: Entity[] = []

export function resetTurretObjects(){
    for(let i = 0; i < turretList.length; i++){
        turretBodiesList[turretList[i]].removeEventListener("collide", () => {})
    }
    turretBodiesList = {}
    turretList = []
}

export function createTurretObj(turretData: ITurretObjectData){
    let turret = engine.addEntity()
    Transform.create(turret, {
        parent:CONFIG.centerEntity,
        position: {x: turretData.position.x, y: turretData.position.y, z: turretData.position.z},
        rotation: {x: turretData.rotation.x, y: turretData.rotation.y, z: turretData.rotation.z, w: turretData.rotation.w},
        scale: Vector3.create(1, 1, 1)
    })

    //ADD Entity to loading system
    IsLoadingObject.create(turret)

    console.log("load level. create object: turret:", turret)

    //FOR LASER MODEL INITIALILZATION
    let turretProjectile = engine.addEntity()
    GltfContainer.create(turretProjectile, {src: "models/laser_red.glb"})
    Transform.create(turretProjectile, {
        parent:CONFIG.centerEntity,
        position: Vector3.create(0, -20, 0),
    })
    //ADD Entity to loading system
    IsLoadingObject.create(turretProjectile)

        if(CONFIG.DEBUG_SCENE_ENABLED){
            let debugArea1 = engine.addEntity()
            GltfContainer.create(debugArea1, {src: "models/debug_plane.glb"})
            Transform.create(debugArea1, {
            //parent: turret,
            position: Vector3.add(turretData.position, CONFIG.centerGround),//Vector3.Zero(),
            scale: Vector3.create(1, 0.25, 20),
            rotation: Quaternion.fromEulerDegrees(0, -1 * degreeVision / 2, 0)
            })
            let debugArea2 = engine.addEntity()
            GltfContainer.create(debugArea2, {src: "models/debug_plane.glb"})
            Transform.create(debugArea2, {
            //parent: turret,
            position: Vector3.add(turretData.position, CONFIG.centerGround),
            scale: Vector3.create(1, 0.25, 20),
            rotation: Quaternion.fromEulerDegrees(0, degreeVision / 2, 0)
            })
        }
    
    switch(turretData.type){
        case TurretObjectType.TURRET_DEFAULT:
            console.log("load level. create object: turret:", turret)
            GltfContainer.create(turret, resources.models.turret)
            break
    }

    Animator.create(turret, {
      states:[
        {
          clip: "Animation",
          playing: false,
          loop: false
        }
      ]
    })

    //SETUP BOX TRIGGER
    //create trigger area
    utils.triggers.addTrigger(
      turret,
      utils.LAYER_2, //FOR INTERACTION WITH PORTAL
      utils.NO_LAYERS,
      [
          {
              type: 'box',
              scale: Vector3.create(2, 2, 2)
          }
      ],
      (otherEntity)=>{},
      () => {},
      Color3.Blue()
    )
    GAME_STATE._TRIGGER_AREA_LIST.push(turret)
  
    TurretSystemComponent.create(turret)
    TurretDataComponent.create(turret, turretData)
    TeleportStatusComponent.create(turret)

    
    let turretCharge = engine.addEntity()
    GltfContainer.create(turretCharge, resources.models.turretCharge)
    Transform.create(turretCharge, {
        parent: turret,
        position: Vector3.create(0, -0.2, 1.8),
        scale: Vector3.Zero()
    })
    Animator.create(turretCharge, {
      states:[
        {
            clip: "aim_anim",
            playing: false,
            loop: false,
            speed: 1
        },
        {
            clip: "shot_anim",
            playing: false,
            loop: false,
            speed: 1
        }
      ]
    })
    //ADD Entity to loading system
    IsLoadingObject.create(turretCharge)

    TurretSystemComponent.getMutable(turret).turretChargeVFX = turretCharge

    //SETUP TURRET PHYSIC
    let turretBody = createTurretBodyPhysic(turret)
    turretBodiesList[turret] = turretBody
    turretList.push(turret)

    
    turretBody.addEventListener("collide", function(e: CANNON.ICollisionEvent){
        //console.log("TURRET. COLLIDE EVENT LISTENER", e.body.id, e.contact.id, e.contact.getImpactVelocityAlongNormal())

        if(e.contact.getImpactVelocityAlongNormal() > 5){
          destroyTurret(turret)
        }
        if (e.contact.getImpactVelocityAlongNormal() > 0.075 && TurretSystemComponent.get(turret).isTurretPosStabilize){
            destroyTurret(turret)
        }
        // let contactTransform = Transform.get(e.body.id as Entity)
        // console.log("COLLIDE EVENT LISTENER", contactTransform.position, Quaternion.toEulerAngles(contactTransform.rotation))
    })
    return turret
}

export function destroyTurret(turret: Entity){
    if(TurretSystemComponent.get(turret).isDestroyed) return

    TurretSystemComponent.getMutable(turret).isDestroyed = true
    playSFXSound(SFX.turretExplosionSoundEntity, true)

    Animator.playSingleAnimation(turret, "Animation")

    turretBodiesList[turret].removeEventListener("collide", () => {})

    console.log("game play. turret. destroy:", turret)

    utils.timers.setTimeout(() => {
        if(GAME_STATE.grabbedTurret === turret) GAME_STATE.grabbedTurret = undefined
        world.remove(turretBodiesList[turret])
        world2.remove(turretBodiesList[turret])

        IsLoadingObject.deleteFrom(turret)
        
        GAME_STATE._TRIGGER_AREA_LIST = GAME_STATE._TRIGGER_AREA_LIST.filter(item => item !== turret)
        GAME_STATE._POINTER_EVENT_LIST = GAME_STATE._POINTER_EVENT_LIST.filter(item => item !== turret)

        turretList = turretList.filter(item => item !== turret)
        delete turretBodiesList[turret]
        
        engine.removeEntity(turret)

        console.log("game play. turret.", "remaining turret:", turretList)
    },400)
}

export function createTurretPointerEvent(turret: Entity){
    if(PointerEvents.has(turret)) return
    //SETUP POINTER HOVER
    PointerEvents.create(turret, {
      pointerEvents: [
        {
          eventType: PointerEventType.PET_DOWN,
          eventInfo: {
            button: InputAction.IA_SECONDARY,
            hoverText: 'Pick Up / Put Down',
            maxDistance: 3,
            showFeedback: true
          }
        }
      ]
    })
    GAME_STATE._POINTER_EVENT_LIST.push(turret)
}

export function deleteTurretPointerEvent(turret: Entity){
    if(!PointerEvents.has(turret)) return
    
    PointerEvents.deleteFrom(turret)
}