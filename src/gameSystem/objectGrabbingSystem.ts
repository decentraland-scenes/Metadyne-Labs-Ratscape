
import { AudioSource, AvatarAnchorPointType, AvatarAttach, ColliderLayer, Entity, GltfContainer, InputAction, PointerEventType, Raycast, RaycastQueryType, RaycastResult, Transform, engine, inputSystem, raycastSystem } from "@dcl/sdk/ecs";
import { CONFIG } from "../config";
import { GAME_STATE } from "../gameData";
import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math";
import * as utils from '@dcl-sdk/utils'
import helper from '../helper/helper'
import { BoxDataComponent, TeleportStatusComponent, RemoveGravityComponent, WallDataComponent } from "../components";
import resources from "../resources";
import { BoxType, TeleportStatus, TurretObjectType, WallType } from "../gameObject/gameObjectType";
import { boxBodiesList } from "../gameObject/box"
import * as CANNON from 'cannon/build/cannon'
import { activateBoxBeam, deactivateBoxBeam } from "../gameObject/boxBeam";
import { hideBeam, showBeam } from "../gameObject/gun";
import { SFX, playSFXSound } from "../gameObject/soundFX";
import { turretList } from "../gameObject/turret";
import { grabObject, releaseObject } from "./objectGrabbing";
import { catList } from "../gameObject/kitten";

//CONFIG
export const OBJECT_GRABBED_CONFIG = {
    // boxGrabbedPos: Vector3.Zero(),
    // pitchAngle: 0,
    
    grabbedOffset: {
        boxOffset: Vector3.create(0, -0.5, 1.9),
        kittenOffset: Vector3.create(0, -0.8, 1.9),
        turretOffset: Vector3.create(0, -0.2, 1.9)
    },
    collisionEntityList: [] as Entity[],
    neighbor: [] as Entity[],
    activeBoxBoundary: {
      min: {
          x: null as number | null,
          y: null as number | null,
          z: null as number | null
      },
      max:{
          x: null as number | null,
          y: null as number | null,
          z: null as number | null
      }
    },
    checkRange: 2.5
}

//CALLED EVERYTIME LOAD NEW LEVEL
export function resetObjectGrabSystemConfig(){
    // OBJECT_GRABBED_CONFIG.boxGrabbedPos = Vector3.Zero()
    // OBJECT_GRABBED_CONFIG. pitchAngle = 0

    OBJECT_GRABBED_CONFIG.grabbedOffset = {
        boxOffset: Vector3.create(0, -0.5, 1.9),
        kittenOffset: Vector3.create(0, -0.8, 1.9),
        turretOffset: Vector3.create(0, -0.2, 1.9)
    }
    
    OBJECT_GRABBED_CONFIG.collisionEntityList = [] as Entity[]
    OBJECT_GRABBED_CONFIG.neighbor = [] as Entity[]
    OBJECT_GRABBED_CONFIG.activeBoxBoundary = {
      min: {
          x: null as number | null,
          y: null as number | null,
          z: null as number | null
      },
      max:{
          x: null as number | null,
          y: null as number | null,
          z: null as number | null
      }
    }
    OBJECT_GRABBED_CONFIG.checkRange = 2.5
}

//CALLED BEFORE ADD BoxGrabbingSystem AND SHOULD BE PLACED AFTER CREATE LEVEL (WALL ADDED TO THE SCENE)!
//ONLY SUPPORT WALL AND FLOOR
export function objectGrabbedCollisionSystemInit(){
    OBJECT_GRABBED_CONFIG.collisionEntityList.sort(function(a: Entity, b: Entity){
        let aPos = Transform.get(a)
        let bPos = Transform.get(b)

        //sort in X axis
        let xDiff = aPos.position.x - bPos.position.x
        if(xDiff !== 0) return xDiff
        else{
          let zDiff = aPos.position.z - bPos.position.z
          if(zDiff !== 0) return zDiff
          else{
            let yDiff = aPos.position.y - bPos.position.y
            if(yDiff !== 0) return yDiff
            else return 1
          }
        }
      })
}

export function BoxGrabbingSystem(dt: number){
    let inputResult = inputSystem.getInputCommand(InputAction.IA_SECONDARY, PointerEventType.PET_DOWN)
    if(GAME_STATE.gun && inputResult && inputResult.hit && inputResult.hit.entityId){
        console.log("game play. grab. result:", inputResult)

        //CHECK IF BOX
        const boxes = engine.getEntitiesWith(BoxDataComponent)
        for (const [box] of boxes){
            if(inputResult.hit.entityId === box){
                if(!GAME_STATE.activeBox && !GAME_STATE.grabbedTurret && !GAME_STATE.grabbedKitten){
                    GAME_STATE.activeBox = box
                    grabObject(box)
                    TeleportStatusComponent.createOrReplace(box, {
                        status: TeleportStatus.Enter
                    })
                }
                else if (GAME_STATE.activeBox && GAME_STATE.activeBox.valueOf() === box.valueOf()){
                    releaseObject(box)
                }
            }
        }

        //CHECK IF TURRET
        if(turretList.includes(inputResult.hit.entityId as Entity)){
          console.log("game play. grab turret:", inputResult.hit.entityId)
          if(!GAME_STATE.activeBox && !GAME_STATE.grabbedTurret && !GAME_STATE.grabbedKitten){
              GAME_STATE.grabbedTurret = inputResult.hit.entityId as Entity

              grabObject(GAME_STATE.grabbedTurret)

              TeleportStatusComponent.createOrReplace(GAME_STATE.grabbedTurret, {
                  status: TeleportStatus.Enter
              })
          }
          else if (GAME_STATE.grabbedTurret && GAME_STATE.grabbedTurret.valueOf() === inputResult.hit.entityId){
              releaseObject(GAME_STATE.grabbedTurret)
          }
        }

        //CHECK IF KITTEN
        if(catList.includes(inputResult.hit.entityId as Entity)){
            console.log("game play. grab kitten:", inputResult.hit.entityId)
          if(!GAME_STATE.activeBox && !GAME_STATE.grabbedTurret && !GAME_STATE.grabbedKitten){
              GAME_STATE.grabbedKitten = inputResult.hit.entityId as Entity

              grabObject(GAME_STATE.grabbedKitten)

              TeleportStatusComponent.createOrReplace(GAME_STATE.grabbedKitten, {
                  status: TeleportStatus.Enter
              })
          }
          else if (GAME_STATE.grabbedKitten && GAME_STATE.grabbedKitten.valueOf() === inputResult.hit.entityId){
              releaseObject(GAME_STATE.grabbedKitten)
          }
        }
    }
}

//let debugPos = utils.addTestCube({parent: CONFIG.centerEntity, position: GAME_STATE.boxGrabbedPosition}, undefined, undefined, Color4.create(0.8, 0.8, 0.8, 0.2), undefined, true)
export function grabbedObjectFollowCameraSystem(dt: number){
    if(!GAME_STATE.activeBox && !GAME_STATE.grabbedTurret && !GAME_STATE.grabbedKitten) return

    let grabbedObject: Entity | undefined

    if(GAME_STATE.activeBox) grabbedObject = GAME_STATE.activeBox
    else if (GAME_STATE.grabbedTurret) grabbedObject = GAME_STATE.grabbedTurret
    else if (GAME_STATE.grabbedKitten) grabbedObject = GAME_STATE.grabbedKitten
    else {
      grabbedObject = undefined
      return
    }
    //console.log("OBJECT ATTACHABLE: ", grabbedObject)

    const boxTransform = Transform.getMutable(grabbedObject)
    let cameraTransform = Transform.get(engine.CameraEntity)


	  let pitchAngle = Vector3.dot(Vector3.rotate(Vector3.Forward(), cameraTransform.rotation), Vector3.Up()) //* Math.PI
    let pitchAngleDeg = Math.acos(pitchAngle) * 180 / Math.PI - 90
    //console.log(pitchAngleDeg)
    
    //boxPitchParent.rotation =  Quaternion.fromEulerDegrees(pitchAngleDeg, 0, 0)//-1 * pitchAngle * 90 * 1 / Math.PI, 0, 0)
    
    if(GAME_STATE.grabbedKitten) 
      boxTransform.rotation = Quaternion.multiply(Quaternion.fromEulerDegrees(0, 180, 0), Quaternion.fromEulerDegrees(pitchAngleDeg * 0.8, 0, 0))
    else 
      boxTransform.rotation = Quaternion.fromEulerDegrees(-pitchAngleDeg * 1, 0, 0)
    // let boxPosition = Vector3.rotate(utils.getWorldPosition(GAME_STATE.activeBox), cameraTransform.rotation)
    // let boxPosGlobalPos = Vector3.add(boxPosition, cameraTransform.position)
    // let boxPosRelativeCenterPos = Vector3.subtract(boxPosGlobalPos, CONFIG.centerGround)

    // OBJECT_GRABBED_CONFIG.boxGrabbedPos = Vector3.subtract(utils.getWorldPosition(grabbedObject), CONFIG.centerGround)
    // OBJECT_GRABBED_CONFIG.pitchAngle = pitchAngleDeg
    //Transform.getMutable(debugPos).position = GAME_STATE.boxGrabbedPosition
}

//let debugIdealPosition = utils.addTestCube({position: Vector3.Zero()}, undefined, undefined, Color4.Magenta(), true, true)
export function getBoxNeighbourSystem(dt: number){
    let grabbedObject: Entity
    let grabbedOffset: Vector3
    if(GAME_STATE.activeBox) {
        grabbedObject = GAME_STATE.activeBox
        grabbedOffset = OBJECT_GRABBED_CONFIG.grabbedOffset.boxOffset
    }
    else if(GAME_STATE.grabbedKitten) {
        grabbedObject = GAME_STATE.grabbedKitten
        grabbedOffset = OBJECT_GRABBED_CONFIG.grabbedOffset.kittenOffset
    }
    else if (GAME_STATE.grabbedTurret) {
        grabbedObject = GAME_STATE.grabbedTurret
        grabbedOffset = OBJECT_GRABBED_CONFIG.grabbedOffset.turretOffset
    }
    else {
        return
    }
    
    let objectTransform = Transform.getMutable(grabbedObject)

                // for(let i = 0; i < OBJECT_GRABBED_CONFIG.neighbor.length; i++){
                //     Transform.getMutable(OBJECT_GRABBED_CONFIG.neighbor[i]).scale = Vector3.create(1, 1, 1)
                // }

    let cameraTransform = Transform.get(engine.CameraEntity)
    let playerTransform = Transform.get(engine.PlayerEntity)
    let cameraRotation = cameraTransform.rotation
    //let playerRotation = playerTransform.rotation

    let objIdealPos = Vector3.add(Vector3.rotate(grabbedOffset, cameraTransform.rotation), cameraTransform.position)
    let objIdealPosRelativeCenter = Vector3.subtract(objIdealPos, CONFIG.centerGround)
    //Transform.getMutable(debugIdealPosition).position = objIdealPos

    OBJECT_GRABBED_CONFIG.neighbor = []
    let foundX = false
    for(let i = 0; i < OBJECT_GRABBED_CONFIG.collisionEntityList.length; i++){
        let entPos = Transform.get(OBJECT_GRABBED_CONFIG.collisionEntityList[i]).position
        if(entPos.x < objIdealPosRelativeCenter.x + OBJECT_GRABBED_CONFIG.checkRange && entPos.x > objIdealPosRelativeCenter.x - OBJECT_GRABBED_CONFIG.checkRange){
            foundX = true
            if(entPos.z < objIdealPosRelativeCenter.z + OBJECT_GRABBED_CONFIG.checkRange && entPos.z > objIdealPosRelativeCenter.z - OBJECT_GRABBED_CONFIG.checkRange){
                if(entPos.y < objIdealPosRelativeCenter.y + OBJECT_GRABBED_CONFIG.checkRange && entPos.y > objIdealPosRelativeCenter.y - OBJECT_GRABBED_CONFIG.checkRange){
                    OBJECT_GRABBED_CONFIG.neighbor.push(OBJECT_GRABBED_CONFIG.collisionEntityList[i])
                }
            }
        }
        else{
            if(foundX) break
        }
    }


    for(let i = 0; i < OBJECT_GRABBED_CONFIG.neighbor.length; i++){
                    // Transform.getMutable(OBJECT_GRABBED_CONFIG.neighbor[i]).scale = Vector3.create(0.95, 0.95, 0.95)
        
        let wallData = WallDataComponent.get(OBJECT_GRABBED_CONFIG.neighbor[i])
        let wallTransform = Transform.get(OBJECT_GRABBED_CONFIG.neighbor[i])
        //console.log("BOX CHECK", neighbor[i], wallData.type)

        if(wallData.type === WallType.FLOOR_PORTABLE || wallData.type === WallType.FLOOR_UNPORTABLE){
            //if(wallTransform.position.y < BOXGRAB_CONFIG.boxGrabbedPos.y){
            if(!OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y)
            OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y = wallTransform.position.y
            else{
                if(wallTransform.position.y < OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y){
                    OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y = wallTransform.position.y
                }
            }
            //}
        }
        else if (wallData.type === WallType.WALL_GLASS || wallData.type === WallType.WALL_GLASSHOLE || wallData.type === WallType.WALL_PORTABLE || wallData.type === WallType.WALL_UNPORTABLE || wallData.type === WallType.FLIPWALL){
            let normal = Vector3.rotate(Vector3.Forward(), wallTransform.rotation)
            let boxToWallVector = Vector3.normalize(Vector3.subtract(objIdealPosRelativeCenter, wallTransform.position))
            let boxToNormalAlignment = Vector3.dot(boxToWallVector, normal)
            if(boxToNormalAlignment < 0) normal = Vector3.scale(normal, -1)

            //console.log("CHECK BOX COLLISION1", boxToNormalAlignment, normal)
            if(Vector3.dot(Vector3.Forward(), normal) > 0.5){
            let boxAndPlayerSameSide = helper.isNumberABSameSide(Vector3.subtract(playerTransform.position, CONFIG.centerGround).z, objIdealPosRelativeCenter.z, wallTransform.position.z)
            //console.log("CHECK BOX COLLISION2", boxAndPlayerSameSide, Vector3.subtract(playerTransform.position, CONFIG.centerGround).z, wallTransform.position.z, BOXGRAB_CONFIG.boxGrabbedPos.z)
            
            if(boxAndPlayerSameSide) OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z = wallTransform.position.z
            else OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z = wallTransform.position.z
            }
            else if (Vector3.dot(Vector3.Forward(), normal) < -0.5){
            let boxAndPlayerSameSide = helper.isNumberABSameSide(Vector3.subtract(playerTransform.position, CONFIG.centerGround).z, objIdealPosRelativeCenter.z, wallTransform.position.z)
            //console.log("CHECK BOX COLLISION2", boxAndPlayerSameSide, Vector3.subtract(playerTransform.position, CONFIG.centerGround).z, wallTransform.position.z, BOXGRAB_CONFIG.boxGrabbedPos.z)

            if(boxAndPlayerSameSide) OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z = wallTransform.position.z
            else OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z = wallTransform.position.z
            }
            else if (Vector3.dot(Vector3.Right(), normal) > 0.5){
            let boxAndPlayerSameSide = helper.isNumberABSameSide(Vector3.subtract(playerTransform.position, CONFIG.centerGround).x, objIdealPosRelativeCenter.x, wallTransform.position.x)
            if(boxAndPlayerSameSide) OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x = wallTransform.position.x
            else OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x = wallTransform.position.x
            }
            else if (Vector3.dot(Vector3.Right(), normal) < -0.5){
            let boxAndPlayerSameSide = helper.isNumberABSameSide(Vector3.subtract(playerTransform.position, CONFIG.centerGround).x, objIdealPosRelativeCenter.x, wallTransform.position.x)
            if(boxAndPlayerSameSide) OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x = wallTransform.position.x
            else OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x = wallTransform.position.x
            }
            
            //console.log("CHECK BOX COLLISION NORMAL3", Vector3.dot(Vector3.Forward(), normal), BOXGRAB_CONFIG.activeBoxBoundary)
        }
    }
      
    //console.log("GRABBED OBJECT COLLISION BOUNDARY. min:", OBJECT_GRABBED_CONFIG.activeBoxBoundary.min, "max", OBJECT_GRABBED_CONFIG.activeBoxBoundary.max)

    let totalOffset = Vector3.Zero()
    if(OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z !== null && (objIdealPosRelativeCenter.z + 0.6) > OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z){
        utils.tweens.stopTranslation(grabbedObject)
        let diff = (objIdealPosRelativeCenter.z) + 0.6 - OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z
        let forceVector= Vector3.scale(Vector3.Backward(), diff)
        forceVector = Vector3.rotate(forceVector, helper.conjugateQuat(cameraRotation))
        totalOffset = Vector3.add(totalOffset, forceVector)
        //objectTransform.position = Vector3.add(grabbedOffset, forceTransform)
    }
    if(OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z !== null && (objIdealPosRelativeCenter.z - 0.6) < OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z){
        utils.tweens.stopTranslation(grabbedObject)
        let diff = OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z - (objIdealPosRelativeCenter.z - 0.6) 
        let forceVector = Vector3.scale(Vector3.Forward(), diff)
        forceVector = Vector3.rotate(forceVector, helper.conjugateQuat(cameraRotation))
        totalOffset = Vector3.add(totalOffset, forceVector)
    }
    if(OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x !== null && (objIdealPosRelativeCenter.x + 0.6) > OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x){
        utils.tweens.stopTranslation(grabbedObject)
        let diff = (objIdealPosRelativeCenter.x) + 0.6 - OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x
        let forceVector = Vector3.scale(Vector3.Left(), diff)
        forceVector = Vector3.rotate(forceVector, helper.conjugateQuat(cameraRotation))
        totalOffset = Vector3.add(totalOffset, forceVector)
    }
    if(OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x !== null && (objIdealPosRelativeCenter.x - 0.6) < OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x){
        utils.tweens.stopTranslation(grabbedObject)
        let diff = OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x - (objIdealPosRelativeCenter.x - 0.6) 
        let forceVector = Vector3.scale(Vector3.Right(), diff)
        forceVector = Vector3.rotate(forceVector, helper.conjugateQuat(cameraRotation))
        totalOffset = Vector3.add(totalOffset, forceVector)
    }
    if(OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y !== null && (objIdealPosRelativeCenter.y - 0.6) < OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y){
        utils.tweens.stopTranslation(grabbedObject)
        let diff = OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y - (objIdealPosRelativeCenter.y - 0.6)
        let forceVector = Vector3.scale(Vector3.Up(), diff)
        forceVector = Vector3.rotate(forceVector, helper.conjugateQuat(cameraRotation))
        totalOffset = Vector3.add(totalOffset, forceVector)
    }
    
    objectTransform.position = Vector3.add(grabbedOffset, totalOffset)
      
    //move box again to original position if there's enough space between player and wall
    if ((
        (OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z === null || (objIdealPosRelativeCenter.z + 0.75 + 0.1) < OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.z)
        && (OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z === null || (objIdealPosRelativeCenter.z - 0.75 - 0.1) > OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.z)
        && (OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x === null || (objIdealPosRelativeCenter.x + 0.75 + 0.1) < OBJECT_GRABBED_CONFIG.activeBoxBoundary.max.x)
        && (OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x === null || (objIdealPosRelativeCenter.x - 0.75 - 0.1) > OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.x)
        && (OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y === null || (objIdealPosRelativeCenter.y - 0.6 - 0.1) > OBJECT_GRABBED_CONFIG.activeBoxBoundary.min.y)
    )){
        //console.log("move box to original pos", activeBoxMutableTransform.position, boxOffset)
        if(!Vector3.equalsWithEpsilon(objectTransform.position, grabbedOffset)){
            utils.tweens.startTranslation(grabbedObject, objectTransform.position, grabbedOffset, 0.1)
            //activeBoxMutableTransform.rotation = Quaternion.Identity()
            //utils.tweens.startRotation(activeBox, activeBoxMutableTransform.rotation, Quaternion.Identity(), 0.1)
        }
    }
      
    OBJECT_GRABBED_CONFIG.activeBoxBoundary = {
      min: {
          x: null as number | null,
          y: null as number | null,
          z: null as number | null
      },
      max:{
          x: null as number | null,
          y: null as number | null,
          z: null as number | null
      }
    }
}
