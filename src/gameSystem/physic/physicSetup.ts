// Setup our CANNON world

import { Entity, Transform, engine } from "@dcl/sdk/ecs"
import { IBoxData, PlatformType, State } from "../../gameObject/gameObjectType"
import { Vector3, Quaternion } from "@dcl/sdk/math"
import { ActiveMovingPlatform, BoxDataComponent, CatDataComponent, PlatformDataComponent, RemoveGravityComponent, StairDataComponent, TurretDataComponent, TurretSystemComponent, WallDataComponent } from "../../components"
import * as CANNON from 'cannon/build/cannon'
import { GAME_STATE } from "../../gameData"
import * as utils from '@dcl-sdk/utils'
import { CONFIG } from "../../config"
import { physicMaterial, physicContactMaterial } from "./setupCannonMaterial"
import { stepBodiesList, stepEntitiesList } from "../../gameObject/stair"
import { boxBodiesList } from "../../gameObject/box"
import { platformBodiesList } from "../../gameObject/platform"
import { turretBodiesList } from "../../gameObject/turret"
import { catBodiesList } from "../../gameObject/kitten"
import helper from "../../helper/helper"


export let world: CANNON.World
export let world2: CANNON.World

export function physicInit() {
  world = new CANNON.World()
  world2 = new CANNON.World()
  world.quatNormalizeSkip = 0
  world.quatNormalizeFast = false
  
  world.gravity.set(0, -9.82, 0) // m/s²
  world.broadphase = new CANNON.SAPBroadphase(world)
  //world.broadphase.useBoundingBoxes = true
  
  // Create a ground plane
  const planeShape = new CANNON.Plane()
  const groundBody = new CANNON.Body({ mass: 0  }) // mass === 0 makes the body static

  groundBody.addShape(planeShape)
  groundBody.material = physicMaterial.physicGroundMaterial
  groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2) // Reorient ground plane to be in the y-axis
  groundBody.position.y = 0 // Thickness of ground base model
  //world.addBody(groundBody)

  // world.addContactMaterial(physicContactMaterial.boxToGroundContactMaterial)
  world.addContactMaterial(physicContactMaterial.boxToBoxContactMaterial)
  world.addContactMaterial(physicContactMaterial.boxToWallContactMaterial)

  world.allowSleep = true

  
  world2.quatNormalizeSkip = 0
  world2.quatNormalizeFast = false
  
  world2.gravity.set(0, -9.82, 0) // m/s²
  world2.broadphase = new CANNON.SAPBroadphase(world2)
  //world2.broadphase.useBoundingBoxes = true
}


// export function setBodyCoordinate(entity: Entity, position: Vector3, rotation: Quaternion){
//     const boxBody = world.bodies.find((item) => item.id === entity.valueOf())
//     if(boxBody){
//       boxBody.position.set(position.x, position.y, position.z)
//       boxBody.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w)
//     }
// }

// export function getPhysicBodyByEnitytyId(entity: Entity){
//   return world.bodies.find((item) => item.id === entity.valueOf())
// }

const fixedTimeStep: number = 1.0 / 30.0 // seconds
const maxSubSteps: number = 2

export function updatePhysicsSystem(dt: number) {
  if(GAME_STATE.state !== State.PLAYING) return

  //console.log("TOTAL PHYSIC BODIES: ", world.bodies.length, dt)

  //TODO: CHANGE fixedTimeStep to dt after some time (to match physic timestep with dt), maybe after all 3D model loads?
  //If set to dt from first, physic bodies haven't fully setup and box will fall below ground


  let clampedTimeStep = helper.clampNumber(dt, 0, 0.06)
  world.step(clampedTimeStep, dt, maxSubSteps)
  if(world2.bodies.length > 0) world2.step(clampedTimeStep, dt, maxSubSteps)

  //console.log("PHYSIC. simulation using timestep:", clampedTimeStep, "dt:", dt)

  // if(dt <= 4 * fixedTimeStep) {
  //   //console.log("PHYSIC. simulation using dt")
  //   world.step(dt, dt, maxSubSteps)
  //   if(world2.bodies.length > 0) world2.step(dt, dt, maxSubSteps)
  // } 
  // else {
  //   //console.log("PHYSIC. simulation using fixedTimeStep", dt)
  //   world.step(fixedTimeStep, dt, maxSubSteps)
  //   if(world2.bodies.length > 0) world2.step(fixedTimeStep, dt, maxSubSteps)
  // }

  // world.step(fixedTimeStep, dt, maxSubSteps)
  // world2.step(fixedTimeStep, dt, maxSubSteps)
  //BOX PHYSIC
  for (const [entity] of engine.getEntitiesWith(BoxDataComponent, Transform)) {
    //const boxBody = world.bodies.find((item) => item.id === entity.valueOf())
    const boxBody = boxBodiesList[entity]
    const transform = Transform.getMutable(entity)
    
    if(boxBody){
      if (entity !== GAME_STATE.activeBox) {
        //boxBody.wakeUp()
        //COPY BOX POSITION AND ROTATION FROM BOX BODY PHYSIC
        transform.position.x = boxBody.position.x
        transform.position.y = boxBody.position.y
        transform.position.z = boxBody.position.z

        transform.rotation.w = boxBody.quaternion.w
        transform.rotation.x = boxBody.quaternion.x
        transform.rotation.y = boxBody.quaternion.y
        transform.rotation.z = boxBody.quaternion.z
      }
      else{
        //SET BOX BODY PHYSIC TO BOX POSITION AND ROTATION
        //boxBody.sleep()
        //const entRelativePos = Vector3.subtract(utils.getWorldPosition(entity), CONFIG.centerGround)
        let cameraTransform = Transform.get(engine.CameraEntity)
        let boxPosition = Vector3.rotate(utils.getWorldPosition(entity), cameraTransform.rotation)
        let boxPosGlobalPos = Vector3.add(boxPosition, cameraTransform.position)
        let boxPosRelativeCenterPos = Vector3.subtract(boxPosGlobalPos, CONFIG.centerGround)
        const entRot = transform.rotation
        boxBody.position.set(boxPosRelativeCenterPos.x, boxPosRelativeCenterPos.y, boxPosRelativeCenterPos.z)
        boxBody.quaternion.set(entRot.x, entRot.y, entRot.z, entRot.w)
        boxBody.velocity.set(0, 0, 0)
      }
    }
  }

  for (const [entity] of engine.getEntitiesWith(TurretDataComponent, Transform)) {
    //const boxBody = world.bodies.find((item) => item.id === entity.valueOf())
    const turretBody = turretBodiesList[entity]
    const transform = Transform.getMutable(entity)
    const turretSystemData = TurretSystemComponent.getMutable(entity)
    const turretDataComponent = TurretDataComponent.get(entity)
    
    if(turretBody){
      if(entity === GAME_STATE.grabbedTurret){
        //SET BOX BODY PHYSIC TO BOX POSITION AND ROTATION
        //boxBody.sleep()
        //const entRelativePos = Vector3.subtract(utils.getWorldPosition(entity), CONFIG.centerGround)
        let cameraTransform = Transform.get(engine.CameraEntity)
        let turretPosition = Vector3.rotate(utils.getWorldPosition(entity), cameraTransform.rotation)
        let turretPosGlobalPos = Vector3.add(turretPosition, cameraTransform.position)
        let turretPosRelativeCenterPos = Vector3.subtract(turretPosGlobalPos, CONFIG.centerGround)
        const entRot = transform.rotation
        turretBody.position.set(turretPosRelativeCenterPos.x, turretPosRelativeCenterPos.y, turretPosRelativeCenterPos.z)
        turretBody.quaternion.set(entRot.x, entRot.y, entRot.z, entRot.w)
        turretBody.velocity.set(0, 0, 0)
      }
      else{
        if(!Vector3.equalsWithEpsilon(transform.position, {x: turretBody.position.x, y: turretBody.position.y, z: turretBody.position.z})){
          turretSystemData.turretPhysicMoved = true
        }
        else{
          turretSystemData.turretPhysicMoved = false
          
          if(!turretSystemData.isTurretPosStabilize){
            turretSystemData.isTurretPosStabilize = true
            console.log("game play. turret. physic. initial position stabilize", entity)
          }
        }
        //console.log("TURRET. LOCATION CHANGED?", turretSystemData.turretPhysicMoved, turretDataComponent.rotation)
        transform.position.x = turretBody.position.x
        transform.position.y = turretBody.position.y
        transform.position.z = turretBody.position.z

        if(turretSystemData.turretPhysicMoved){
          transform.rotation.w = turretBody.quaternion.w
          transform.rotation.x = turretBody.quaternion.x
          transform.rotation.y = turretBody.quaternion.y
          transform.rotation.z = turretBody.quaternion.z
        }
        else{
          turretBody.quaternion.w = transform.rotation.w
          turretBody.quaternion.x = transform.rotation.x
          turretBody.quaternion.y = transform.rotation.y
          turretBody.quaternion.z = transform.rotation.z
        }
        // if (!turretSystemData.lookForPlayer) {
        //   console.log("TURRET FOLLOW CANNON PHYSIC")
        //   //boxBody.wakeUp()
        //   //COPY BOX POSITION AND ROTATION FROM BOX BODY PHYSIC

        // }
        // else{
        //   turretBody.quaternion.w = transform.rotation.w
        //   turretBody.quaternion.x = transform.rotation.x
        //   turretBody.quaternion.y = transform.rotation.y
        //   turretBody.quaternion.z = transform.rotation.z
        // }
      }
    }
  }

  for (const [entity] of engine.getEntitiesWith(CatDataComponent, Transform)) {
    //const boxBody = world.bodies.find((item) => item.id === entity.valueOf())
    const catBody = catBodiesList[entity]
    const transform = Transform.getMutable(entity)
    
    if(catBody){
      if (entity !== GAME_STATE.grabbedKitten) {
        //boxBody.wakeUp()
        //COPY BOX POSITION AND ROTATION FROM BOX BODY PHYSIC
        transform.position.x = catBody.position.x
        transform.position.y = catBody.position.y - 0.5
        transform.position.z = catBody.position.z

        // transform.rotation.w = catBody.quaternion.w
        // transform.rotation.x = catBody.quaternion.x
        // transform.rotation.y = catBody.quaternion.y
        // transform.rotation.z = catBody.quaternion.z
        
        let finRot = helper.getYawRotation(Quaternion.create(catBody.quaternion.x, catBody.quaternion.y, catBody.quaternion.z, catBody.quaternion.w))
        transform.rotation = Quaternion.fromEulerDegrees(0, finRot, 0)
      }
      else{
        //SET BOX BODY PHYSIC TO BOX POSITION AND ROTATION
        //boxBody.sleep()
        //const entRelativePos = Vector3.subtract(utils.getWorldPosition(entity), CONFIG.centerGround)
        let cameraTransform = Transform.get(engine.CameraEntity)
        let catPosition = Vector3.rotate(utils.getWorldPosition(entity), cameraTransform.rotation)
        let catPosGlobalPos = Vector3.add(catPosition, cameraTransform.position)
        let catPosRelativeCenterPos = Vector3.subtract(catPosGlobalPos, CONFIG.centerGround)
        const entRot = transform.rotation
        catBody.position.set(catPosRelativeCenterPos.x, catPosRelativeCenterPos.y, catPosRelativeCenterPos.z)
        catBody.quaternion.set(entRot.x, entRot.y, entRot.z, entRot.w)
        catBody.velocity.set(0, 0, 0)
      }
    }
  }
//   for(const[entity] of engine.getEntitiesWith(ActiveMovingPlatform)){
//     const platformMutableTransform = Transform.getMutable(entity)
//     //const platformBody = world.bodies.find((item) => item.id === entity.valueOf())
//     const platformBody = platformBodiesList[entity]
//     let movingPlatformData = ActiveMovingPlatform.getMutable(entity)
//     let platformType = PlatformDataComponent.get(entity).type

//     if(platformBody && movingPlatformData.active){
//       platformBody.force.y -= platformBody.mass * -9.82
//       platformMutableTransform.position.x = platformBody.position.x
//       platformMutableTransform.position.y = platformBody.position.y
//       platformMutableTransform.position.z = platformBody.position.z

//       platformMutableTransform.rotation.w = platformBody.quaternion.w
//       platformMutableTransform.rotation.x = platformBody.quaternion.x
//       platformMutableTransform.rotation.y = platformBody.quaternion.y
//       platformMutableTransform.rotation.z = platformBody.quaternion.z
//     }

//     if(movingPlatformData.active){
//       let physicBody = platformBodiesList[entity]
//       let transformEntity = Transform.get(entity)
//       let pathData = ActiveMovingPlatform.getMutable(entity)

//       if(physicBody){
//         physicBody.force.y -= physicBody.mass * -9.82
//         if(platformType === PlatformType.PLATFORM_MOVING_H){
//           physicBody.position.y = pathData.paths[pathData.targetIdx].y
//         }
//         let speed = Vector3.normalize(Vector3.subtract(pathData.paths[pathData.targetIdx], {x: physicBody.position.x, y: physicBody.position.y, z: physicBody.position.z}))
        
//         speed = Vector3.scale(speed, 50 * (dt <= fixedTimeStep ? dt : fixedTimeStep)) //(isSceneFinishLoad ? dt: fixedTimeStep))//dt)
//         //console.log("PLATFORM SPEED: ", speed, pathData.paths[pathData.targetIdx], physicBody.position)
        
//         physicBody.velocity.set(speed.x, speed.y, speed.z)
//         physicBody.quaternion.set(platformBody.quaternion.x, platformBody.quaternion.y, platformBody.quaternion.z, platformBody.quaternion.w)
        
//         let lengthDiff = Vector3.length(Vector3.subtract(transformEntity.position, pathData.paths[pathData.targetIdx]))
//         if(lengthDiff < 0.1){
//           pathData.startIdx = pathData.targetIdx
//           pathData.targetIdx = (pathData.targetIdx + 1) % pathData.paths.length

//           if(movingPlatformData.deactivate){
//             movingPlatformData.active = false
//             movingPlatformData.deactivate = false
//             physicBody.mass = 0
//             physicBody.updateMassProperties()
//             physicBody.velocity.set(0, 0, 0)
//             physicBody.angularVelocity.set(0, 0, 0)
//           }
//         }
//       }
//     }
//   }

  //STAIR STEP MATCH VISIBLE ENTITY WITH PHYSIC BODY
  for(const[entity] of engine.getEntitiesWith(StairDataComponent, Transform)){
      let stepEntities =  stepEntitiesList[entity]
      let stepBodies =  stepBodiesList[entity]

      ////////////////////////////////
      for(let i = 0; i < stepBodies.length; i++){
        const stepEntityMutableTransform = Transform.getMutable(stepEntities[i])
        //stepBodies[i].quaternion.setFromEuler(0, 0, 0)

        stepEntityMutableTransform.position.x = stepBodies[i].position.x
        stepEntityMutableTransform.position.y = stepBodies[i].position.y
        stepEntityMutableTransform.position.z = stepBodies[i].position.z

        stepEntityMutableTransform.rotation.w = stepBodies[i].quaternion.w
        stepEntityMutableTransform.rotation.x = stepBodies[i].quaternion.x
        stepEntityMutableTransform.rotation.y = stepBodies[i].quaternion.y
        stepEntityMutableTransform.rotation.z = stepBodies[i].quaternion.z
      }
  }

  //REMOVE GRAVITY FOR ANY ENTITY WITH RemoveGravityComponent
  for(const[entity] of engine.getEntitiesWith(RemoveGravityComponent)){
    const body = world.bodies.find((item) => item.id === entity.valueOf())
    if(body){
      body.force.y -= body.mass * -9.82
      body.velocity.y = body.velocity.y * 0.5 //workaround....
    }
  }
}

export function resetPhysicBodies(){
  let i = 0
  for(i = 0; i < world.bodies.length; i++){
    world.remove(world.bodies[i])
  }
  console.log("REMOVE CANNON BODIES", i, "OBJECTS")
  
  for(let i = 0; i < world2.bodies.length; i++){
    world2.remove(world2.bodies[i])
  }
  //seems like world still calculating body even after remove them. probably need also to remove another properties to make it dissapear.
  //recreating new world instead before load new level
   world.bodies = []
   world2.bodies = []
}