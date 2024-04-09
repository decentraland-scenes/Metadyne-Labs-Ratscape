import { Animator, Billboard, ColliderLayer, Entity, GltfContainer, RaycastQueryType, Transform, engine, raycastSystem } from "@dcl/sdk/ecs"
import { TurretDataComponent, TurretSystemComponent } from "../components"
import { CONFIG } from "../config"
import { Vector3, Quaternion, Color4 } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
import { HealthDamageType, _CONFIG_HEALTH } from "./healthSystem"
import { SFX, playSFXSound } from "../gameObject/soundFX"
import helper from "../helper/helper"
import { GAME_STATE } from "../gameData"
import { State } from "../gameObject/gameObjectType"
import { createTurretPointerEvent, deleteTurretPointerEvent } from "../gameObject/turret"
import resources from "../resources"



export const degreeVision = 120
const _CONFIG_TURRET = {
    minDegreeVision: 360 - degreeVision / 2,
    maxDegreeVision: 0 + degreeVision / 2,
    turretInnerRadius: 10, //meter
    turretOuterRadius: 50 //meter
}

let playerPrevPos = Vector3.Zero()
let playerSpeed = Vector3.Zero()
let playerPosAhead = Vector3.Zero()
let playerPosAheadEnt = engine.addEntity()

Transform.create(playerPosAheadEnt, {
    position: Vector3.Zero()    
})
// let debugPlayerPosAhead = utils.addTestCube(
//     {position: Vector3.Zero()},
//     undefined,
//     undefined,
//     Color4.Blue(), true,true
// )
// let posDebug = utils.addTestCube({position: Vector3.Zero(), scale: Vector3.create(2, 2, 2)}, undefined, undefined, Color4.create(0, 1, 0, 1), true, true)

export function TurretSystem(dt: number){
    if(GAME_STATE.state !== State.PLAYING) return
    
    let playerTransform = Transform.get(engine.PlayerEntity)
    playerSpeed = Vector3.scale(Vector3.subtract(playerTransform.position, playerPrevPos), 1 / dt)
    
    let timeAhead = 0.1 //aim to calculated player pos 0.15 second ahead
    playerPosAhead = Vector3.add(playerTransform.position, Vector3.scale(playerSpeed, timeAhead))
    Transform.getMutable(playerPosAheadEnt).position = playerPosAhead
    //Transform.getMutable(debugPlayerPosAhead).position = playerPosAhead
    
    Vector3.copyFrom(playerTransform.position, playerPrevPos as Vector3)

    for (const [turret] of engine.getEntitiesWith(TurretSystemComponent)){
        
        if(GAME_STATE.grabbedTurret === turret) continue

        let turretTransform = Transform.getMutable(turret)
        let playerTransform = Transform.get(engine.PlayerEntity)
        let turretDataComponent = TurretDataComponent.get(turret)
        let turretSystemComponent = TurretSystemComponent.getMutable(turret)

        let _playerPosRelativeCenter = Vector3.subtract(playerTransform.position, CONFIG.centerGround)
        let playerPosRelativeTurret = Vector3.subtract(_playerPosRelativeCenter, turretTransform.position)

        let playerPosTurretRotation = helper.rotateVectorRelativeToPoint(playerPosRelativeTurret, Vector3.Zero(), helper.conjugateQuat(turretDataComponent.rotation))
                
                //if(CONFIG.DEBUG_SCENE_ENABLED) Transform.getMutable(posDebug).position = Vector3.add(Vector3.add(playerPosTurretRotation, turretTransform.position), CONFIG.centerGround)

        let distanceSq = Vector3.lengthSquared(playerPosRelativeTurret)
        //offset by -90 degre because angle calculation start from x+ axis while turret facing y+ axis
        let playerAngle = (Math.atan2(playerPosTurretRotation.z, playerPosTurretRotation.x) * 180 / Math.PI - 90 + 360) % 360


        if((//!turretSystemComponent.isHitObstacle && 
            playerAngle < _CONFIG_TURRET.maxDegreeVision || playerAngle > _CONFIG_TURRET.minDegreeVision) && 
            distanceSq < _CONFIG_TURRET.turretOuterRadius * _CONFIG_TURRET.turretOuterRadius
        ){
            turretSystemComponent.playerInVision = true
            turretSystemComponent.lookForPlayer = true
        }
        else{
            turretSystemComponent.playerInVision = false
            if(!turretSystemComponent.playerInRadius) turretSystemComponent.lookForPlayer = false
        }

        if(distanceSq < _CONFIG_TURRET.turretInnerRadius * _CONFIG_TURRET.turretInnerRadius){
            turretSystemComponent.playerInRadius = true
            //console.log("TURRET. PLAYER IN RADIUS", distance)
        }
        else{
            turretSystemComponent.playerInRadius = false
            if(!turretSystemComponent.playerInVision) turretSystemComponent.lookForPlayer = false
        }
        // if(turretSystemComponent.isHitObstacle === false)
        //     console.log("TURRET. ANGLE:", playerAngle, "DISTANCE:", distanceSq, "LOOKING FOR PLAYER:", turretSystemComponent.lookForPlayer, 
        //         "ISHIT OBSTACLE", turretSystemComponent.isHitObstacle, turretDataComponent.rotation)
        
        if(turretSystemComponent.lookForPlayer){
            //enable raycast, detect obstacle.
            enableTurretRaycast(turret)
            deleteTurretPointerEvent(turret)

            if(!turretSystemComponent.isHitObstacle && !turretSystemComponent.turretPhysicMoved){
                turretActiveInit(turret)
                let turretLookRotation = Quaternion.fromLookAt(Vector3.Zero(), playerPosRelativeTurret)
                turretTransform.rotation = Quaternion.rotateTowards(turretTransform.rotation, turretLookRotation, dt * 150)
            }
        }
        else{
            createTurretPointerEvent(turret)
        }
        //rotate to orignal rotation if hit obstacle or if stop look for player.
        if((!turretSystemComponent.lookForPlayer || turretSystemComponent.isHitObstacle) && !turretSystemComponent.turretPhysicMoved){
            if(Quaternion.angle(turretTransform.rotation, turretDataComponent.rotation) < 5){
                turretTransform.rotation.x = turretDataComponent.rotation.x
                turretTransform.rotation.y = turretDataComponent.rotation.y
                turretTransform.rotation.z = turretDataComponent.rotation.z
                turretTransform.rotation.w = turretDataComponent.rotation.w
            }
            else{
                turretTransform.rotation = Quaternion.rotateTowards(turretTransform.rotation, turretDataComponent.rotation, dt * 50)
            }
            turretBacktoIdle(turret)

        }
        //only disable raycast if player outside look for area
        if(!turretSystemComponent.lookForPlayer) disableTurretRaycast(turret)
    }
}

// let isTurretInit = false
// let isTurretFinishInit = false
// let turretInitTimer: number| undefined = undefined
function turretActiveInit(turret: Entity){
    console.log("game play. turret. shoot initiation.", turret)
    let turretSystemComponent = TurretSystemComponent.getMutable(turret)

    if(turretSystemComponent.isStartInit) return
    turretSystemComponent.isStartInit = true
    
    playSFXSound(SFX.onTurretZoneSoundEntity, true)

    Transform.getMutable(turretSystemComponent.turretChargeVFX).scale = {x: 1.25, y: 1.25, z: 1.25}
    Animator.getClip(turretSystemComponent.turretChargeVFX, "aim_anim").playing = true
    
    if(turretSystemComponent.turretInitTimer) utils.timers.clearTimeout(turretSystemComponent.turretInitTimer)
    turretSystemComponent.turretInitTimer = utils.timers.setTimeout(() => {
        turretSystemComponent.isFinishInit = true
    }, 750)
}

function turretBacktoIdle(turret: Entity){
    let turretSystemComponent = TurretSystemComponent.getMutable(turret)

    if(!turretSystemComponent.isStartInit) return

    console.log("game play. turret. deactivate, back to idle.", turret)

    if(turretSystemComponent.turretInitTimer) utils.timers.clearTimeout(turretSystemComponent.turretInitTimer)
    turretSystemComponent.isFinishInit = false
    turretSystemComponent.isStartInit = false
}

function enableTurretRaycast(turret: Entity){
    let turretSystemComponent = TurretSystemComponent.getMutable(turret)
    let turretDataComponent = TurretDataComponent.get(turret)

    if(!turretSystemComponent.raycastEnable){
        console.log("game play. turret. enable raycast", turret)
        turretSystemComponent.raycastEnable = true
        
        let delayProcessCount = 0
        raycastSystem.registerTargetEntityRaycast(
            {
                entity: turret,
                opts: {
                    queryType: RaycastQueryType.RQT_HIT_FIRST,
                    //target: playerPosAhead,
                    //globalTarget: playerPosAhead,
                    targetEntity: engine.PlayerEntity,//playerPosAheadEnt, //
                    // direction: Vector3.Forward(),
                    maxDistance: 1000,
                    continuous: true
                },
            },
            function (raycastResult) {
            //console.log("TURRET. RAYCAST RESULT:", raycastResult.hits[0]?.meshName)
            // delayProcessCount += 1
            // if(delayProcessCount < 2) return
                
            if(raycastResult.hits[0]){
                let playerTransform = Transform.get(engine.PlayerEntity)
                let hitResult = raycastResult.hits[0]
                
                let _playerPosRelativeCenter = Vector3.subtract(playerTransform.position, CONFIG.centerGround)
                let playerPosRelativeTurret = Vector3.subtract(_playerPosRelativeCenter, turretDataComponent.position)

                turretSystemComponent.raycastHitPos = hitResult.position as Vector3
                if(Vector3.distanceSquared(hitResult.position as Vector3, Vector3.add(turretDataComponent.position, CONFIG.centerGround)) <
                    Vector3.lengthSquared(playerPosRelativeTurret)
                ){
                    turretSystemComponent.isHitObstacle = true
                }
                else{
                    turretSystemComponent.isHitObstacle = false
                    
                    if(!turretSystemComponent.isFireLaser && !turretSystemComponent.turretPhysicMoved && turretSystemComponent.isFinishInit){
                        //console.log("TURRET. FIRE LASER")
                        fireLaser(
                            turret,
                            hitResult.position as Vector3,//playerPosAhead,
                            turretSystemComponent.raycastHitPos
                        )
                    }
                }
                //console.log("TURRET. RAYCAST HIT OBSTACALE:", turretSystemComponent.isHitObstacle)
            }
            else{
                //console.log("TURRET RAYCAST NOT HIT ANYTHING. THIS SHOULD NOT BE THE CASE")
                    
                if(!turretSystemComponent.isFireLaser && turretSystemComponent.isFinishInit){
                    //console.log("TURRET. FIRE LASER")
                    fireLaser(
                        turret,
                        playerPosAhead,
                        undefined
                    )
                }
                turretSystemComponent.isHitObstacle = false
            }
            }
        )
    }
}

function disableTurretRaycast(turret: Entity){
    let turretSystemComponent = TurretSystemComponent.getMutable(turret)
    
    if(turretSystemComponent.raycastEnable){
        console.log("game play. turret. disable raycast", turret)
        turretSystemComponent.raycastEnable = false
        raycastSystem.removeRaycasterEntity(turret)
    }
}

function fireLaser(turret: Entity, endPos: Vector3, raycastHitPos: Vector3 | undefined){
    let turretSystemComponent = TurretSystemComponent.getMutable(turret)
    let turretDataComponent = TurretDataComponent.get(turret)
    let turretTransform = Transform.get(turret)

    //utils.timers.setTimeout(() => {
        if(turretSystemComponent.isHitObstacle){
            turretSystemComponent.isFireLaser = false
            return
        }
        let startPos = Vector3.add(Vector3.subtract(turretTransform.position, Vector3.create(0, 0.2, 0)), CONFIG.centerGround) 
        turretSystemComponent.isFireLaser = true
        //let distance = Math.sqrt(distancesq)
        let turretProjectile = engine.addEntity()
        GltfContainer.create(turretProjectile, {src: "models/laser_red.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_NONE})
        
        let distanceHit = 100
        if(raycastHitPos) distanceHit = Vector3.distance(raycastHitPos, startPos)
        //console.log("TURRET. FIRE LASER", raycastHitPos, startPos, distanceHit)

        playSFXSound(SFX.turretShotSoundEntity, true)

        Transform.create(turretProjectile, {
            position: startPos, 
            scale: Vector3.create(2, 2, distanceHit), 
            rotation: Quaternion.fromLookAt(startPos, endPos)}
        )

        _CONFIG_HEALTH.addDPS(HealthDamageType.TURRET)
        
        Transform.getMutable(turretSystemComponent.turretChargeVFX).scale = Vector3.create(0.75, 0.75, 0.75)
        Animator.getClip(turretSystemComponent.turretChargeVFX, "shot_anim").playing = true
        
        utils.tweens.startScaling(
            turretProjectile,
            Vector3.create(4, 4, distanceHit), 
            Vector3.create(0, 0, distanceHit),
            0.2,
            utils.InterpolationType.EASEEXPO,
            () => {
                engine.removeEntity(turretProjectile)

                _CONFIG_HEALTH.removeDPS(HealthDamageType.TURRET)
                playSFXSound(SFX.turretShotSoundEntity, false)
            }
        )
        // utils.tweens.startTranslation(
        //     turretProjectile,
        //     startPos,
        //     endPos,
        //     0.2,
        //     utils.InterpolationType.LINEAR,
        //     () => {
        //         engine.removeEntity(turretProjectile)
        //     }
        // )
        
        let randomInterval = 300 //+ Math.random() * 100
        utils.timers.setTimeout(() => {
            turretSystemComponent.isFireLaser = false
        }, randomInterval)

    //}, 40)
}