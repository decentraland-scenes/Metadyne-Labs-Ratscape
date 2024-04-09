import { Entity, Material, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import * as CANNON from 'cannon/build/cannon'
import { world } from "./physicSetup"
import { BoxDataComponent, ButtonDataComponent, CatDataComponent, FlipWallDataComponent, LaserEmitterComponent, PlatformDataComponent, TurretDataComponent, WallDataComponent } from "../../components"
import { physicMaterial } from "./setupCannonMaterial"
import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import { GAME_STATE } from "../../gameData"
import { CONFIG } from "../../config"
import { IFlipWallData, IPlatformData, IWallData, WallType } from "../../gameObject/gameObjectType"


export let VISUALINITBODYCHECK: Entity[] = []

export function createBoxBodyPhysic(box: Entity){
    //SETUP BOX BODY
    const boxData = BoxDataComponent.get(box)
    const boxShape = new CANNON.Box(new CANNON.Vec3(boxData.dimension.x / 2, boxData.dimension.y / 2, boxData.dimension.z / 2))

    const boxBody: CANNON.Body = new CANNON.Body({ mass: 2 })
    boxBody.material = physicMaterial.physicBoxMaterial
    boxBody.id = box.valueOf()
    boxBody.addShape(boxShape)
    boxBody.position.set(boxData.position.x, boxData.position.y, boxData.position.z)
    boxBody.quaternion.set(boxData.rotation.x, boxData.rotation.y, boxData.rotation.z, boxData.rotation.w)

          if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
            let visualCheck =  engine.addEntity()
            Transform.create(visualCheck, {
              parent: CONFIG.centerEntity,
              position: boxData.position,
              rotation: boxData.rotation,
              scale: Vector3.create(boxData.dimension.x, boxData.dimension.y, boxData.dimension.z)
            })
            MeshRenderer.setBox(visualCheck)
            Material.setPbrMaterial(visualCheck, {
              albedoColor: Color4.create(0, 0, 1, 0.8)
            })
            VISUALINITBODYCHECK.push(visualCheck)
          }

    boxBody.linearDamping = 0.6 // Round will keep translating even with friction so you need linearDamping
    boxBody.angularDamping = 0.6 // Round bodies will keep rotating even with friction so you need angularDamping
    boxBody.sleepSpeedLimit = 0.5
    boxBody.sleepTimeLimit = 0.5

    boxBody.allowSleep = true
    world.addBody(boxBody) // Add body to the world
    GAME_STATE._CANNON_BODY_LIST.push(boxBody)
    return boxBody
}

export function createWallBodyPhysic(wall: Entity){
    //SETUP WALL BODY
    let wallData: IFlipWallData | IWallData
    if(WallDataComponent.getOrNull(wall))
        wallData = WallDataComponent.get(wall)
    else if(FlipWallDataComponent.getOrNull(wall))
        wallData = FlipWallDataComponent.get(wall)
    else
        return

    //had to do this to make wall & floor thicker (avoid physic object going pass through wall/floor)
    //TODO: dimension should be change in Blender script, but have to re-export all levels.
    let boxShape: CANNON.Box
    if (wallData.type === WallType.FLOOR_PORTABLE || wallData.type === WallType.FLOOR_UNPORTABLE || wallData.type === WallType.FLOOR_UNPORTABLE_V1 || wallData.type === WallType.FLOOR_UNPORTABLE_V2){
        boxShape = new CANNON.Box(new CANNON.Vec3(wallData.dimension.x / 2, wallData.dimension.y, wallData.dimension.z / 2))
    }
    else{
        boxShape = new CANNON.Box(new CANNON.Vec3(wallData.dimension.x / 2, wallData.dimension.y / 2, wallData.dimension.z))
    }

  const wallBody: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  wallBody.material = physicMaterial.physicWallMaterial
  wallBody.id = wall.valueOf()
  wallBody.addShape(boxShape)
  wallBody.position.set(wallData.position.x, wallData.position.y, wallData.position.z)
  wallBody.quaternion.set(wallData.rotation.x, wallData.rotation.y, wallData.rotation.z, wallData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: wallData.position,
            rotation: wallData.rotation,
            scale: wallData.dimension
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

  wallBody.sleepSpeedLimit = 0.5
  wallBody.sleepTimeLimit = 0.5
  
  wallBody.allowSleep = true
  world.addBody(wallBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(wallBody)

  return wallBody
}

export function createPlatformBodyPhysic(platform: Entity){
  //SETUP PLATFORM BODY
  const platformData = PlatformDataComponent.get(platform)
  const boxShape = new CANNON.Box(new CANNON.Vec3(platformData.dimension.x / 2 - 0.4, platformData.dimension.y / 2, platformData.dimension.z / 2 - 0.4))

  const platformBody: CANNON.Body = new CANNON.Body({ mass: 10000 }) // mass === 0 makes the body static
  platformBody.type = CANNON.Body.DYNAMIC
  platformBody.material = physicMaterial.physicWallMaterial
  platformBody.id = platform.valueOf()
  platformBody.addShape(boxShape)
  platformBody.position.set(platformData.position.x, platformData.position.y, platformData.position.z)
  platformBody.quaternion.set(platformData.rotation.x, platformData.rotation.y, platformData.rotation.z, platformData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: platformData.position,
            rotation: platformData.rotation,
            scale: Vector3.create((platformData.dimension.x - 0.8, platformData.dimension.y, platformData.dimension.z - 0.8))
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
      }

  platformBody.sleepSpeedLimit = 0.5
  platformBody.sleepTimeLimit = 0.5
  
  platformBody.mass = 0
  platformBody.updateMassProperties()

  platformBody.allowSleep = true
  world.addBody(platformBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(platformBody)

  return platformBody
}

export function createStairStepBodyPhysic(step: Entity){
  //SETUP PLATFORM BODY
  const stepData = Transform.get(step)
 // const boxShape = new CANNON.Box(new CANNON.Vec3(3.8 / 2, 4 / 2, 1.2 / 2))
 const boxShape = new CANNON.Box(new CANNON.Vec3(stepData.scale.x / 2 - 0.2, stepData.scale.y / 2, stepData.scale.z / 2 - 0.2))

  const stepBody: CANNON.Body = new CANNON.Body({ mass: 10000 }) // mass === 0 makes the body static
  stepBody.type = CANNON.Body.DYNAMIC
  stepBody.material = physicMaterial.physicWallMaterial
  stepBody.id = step.valueOf()
  stepBody.addShape(boxShape)
  stepBody.position.set(stepData.position.x, stepData.position.y, stepData.position.z)
  stepBody.quaternion.set(stepData.rotation.x, stepData.rotation.y, stepData.rotation.z, stepData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: stepData.position,
            rotation: stepData.rotation,
            scale: Vector3.create(stepData.scale.x - 0.4, stepData.scale.y, stepData.scale.z - 0.4)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }
  
  stepBody.mass = 0
  stepBody.updateMassProperties()
  
  stepBody.allowSleep = true
  world.addBody(stepBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(stepBody)

  return stepBody
}

export function createGlassHolePhysicBody(wall: Entity){
  //SETUP WALL BODY
  const wallData = WallDataComponent.get(wall)
  //create 4 box physic body

  const wallBodyTop: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  wallBodyTop.material = physicMaterial.physicWallMaterial
  //wallBodyTop.id = wall.valueOf()
  wallBodyTop.addShape(new CANNON.Box(new CANNON.Vec3(4 / 2, 0.96 / 2, wallData.dimension.z / 2)))
  wallBodyTop.position.set(wallData.position.x, wallData.position.y + 1.5154, wallData.position.z)
  wallBodyTop.quaternion.set(wallData.rotation.x, wallData.rotation.y, wallData.rotation.z, wallData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: Vector3.create(wallData.position.x, wallData.position.y + 1.5154, wallData.position.z),
            rotation: wallData.rotation,
            scale: Vector3.create(4 / 2, 0.96 / 2, wallData.dimension.z / 2)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }
  
  const wallBodyBottom: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  wallBodyBottom.material = physicMaterial.physicWallMaterial
  //wallBodyBottom.id = wall.valueOf()
  wallBodyBottom.addShape(new CANNON.Box(new CANNON.Vec3(4 / 2, 0.96 / 2, wallData.dimension.z / 2)))
  wallBodyBottom.position.set(wallData.position.x, wallData.position.y - 1.5154, wallData.position.z)
  wallBodyBottom.quaternion.set(wallData.rotation.x, wallData.rotation.y, wallData.rotation.z, wallData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: Vector3.create(wallData.position.x, wallData.position.y - 1.5154, wallData.position.z),
            rotation: wallData.rotation,
            scale: Vector3.create(4 / 2, 0.96 / 2, wallData.dimension.z / 2)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

  const wallBodyLeft: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  wallBodyLeft.material = physicMaterial.physicWallMaterial
  //wallBodyLeft.id = wall.valueOf()
  wallBodyLeft.addShape(new CANNON.Box(new CANNON.Vec3(2.04 / 2, 0.96 / 2, wallData.dimension.z / 2)))
  wallBodyLeft.position.set(wallData.position.x - 1.5154, wallData.position.y, wallData.position.z)
  wallBodyLeft.quaternion.set(wallData.rotation.x, wallData.rotation.y, wallData.rotation.z, wallData.rotation.w)
  
        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: Vector3.create(wallData.position.x - 1.5154, wallData.position.y, wallData.position.z),
            rotation: wallData.rotation,
            scale: Vector3.create(2.04 / 2, 0.96 / 2, wallData.dimension.z / 2)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }


  const wallBodRight: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  wallBodRight.material = physicMaterial.physicWallMaterial
  //wallBodRight.id = wall.valueOf()
  wallBodRight.addShape(new CANNON.Box(new CANNON.Vec3(2.04 / 2, 0.96 / 2, wallData.dimension.z / 2)))
  wallBodRight.position.set(wallData.position.x + 1.5154, wallData.position.y, wallData.position.z)
  wallBodRight.quaternion.set(wallData.rotation.x, wallData.rotation.y, wallData.rotation.z, wallData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: Vector3.create(wallData.position.x + 1.5154, wallData.position.y, wallData.position.z),
            rotation: wallData.rotation,
            scale: Vector3.create(2.04 / 2, 0.96 / 2, wallData.dimension.z / 2)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

  world.addBody(wallBodyTop) // Add body to the world
  world.addBody(wallBodyBottom) // Add body to the world
  world.addBody(wallBodyLeft) // Add body to the world
  world.addBody(wallBodRight) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(wallBodyTop)
  GAME_STATE._CANNON_BODY_LIST.push(wallBodyBottom)
  GAME_STATE._CANNON_BODY_LIST.push(wallBodyLeft)
  GAME_STATE._CANNON_BODY_LIST.push(wallBodRight)

  return [wallBodyTop, wallBodyBottom, wallBodyLeft, wallBodRight]
}

export function createButtonFloorPhysicBody(button: Entity){
  //SETUP WALL BODY
  const buttonData = ButtonDataComponent.get(button)
  //const boxShape = new CANNON.C(new CANNON.Vec3(wallData.dimension.x / 2, wallData.dimension.y / 2, wallData.dimension.z / 2))
  const cylinderShape = new CANNON.Cylinder(1., 1.4, 0.3, 6)
  let adjustCylinderrotation = Quaternion.multiply(buttonData.rotation, Quaternion.fromAngleAxis(90, Vector3.Right()))

  const buttonBody: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  buttonBody.material = physicMaterial.physicWallMaterial
  buttonBody.id = button.valueOf()
  buttonBody.addShape(cylinderShape)
  buttonBody.position.set(buttonData.position.x, buttonData.position.y + 0.15, buttonData.position.z)
  buttonBody.quaternion.set(adjustCylinderrotation.x, adjustCylinderrotation.y, adjustCylinderrotation.z, adjustCylinderrotation.w)
  
  world.addBody(buttonBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(buttonBody)
  
  return buttonData
}

export function createTurretBodyPhysic(box: Entity){
  //SETUP BOX BODY
  const turretData = TurretDataComponent.get(box)
  const boxShape = new CANNON.Box(new CANNON.Vec3(turretData.dimension.x / 3, turretData.dimension.y / 3, turretData.dimension.z / 3))

  const boxBody: CANNON.Body = new CANNON.Body({ mass: 2 })
  boxBody.material = physicMaterial.physicBoxMaterial
  boxBody.id = box.valueOf()
  boxBody.addShape(boxShape)
  boxBody.position.set(turretData.position.x, turretData.position.y, turretData.position.z)
  boxBody.quaternion.set(turretData.rotation.x, turretData.rotation.y, turretData.rotation.z, turretData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: turretData.position,
            rotation: turretData.rotation,
            scale: Vector3.create(turretData.dimension.x / 3 * 2, turretData.dimension.y / 3 * 2, turretData.dimension.z / 3 * 2)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

  boxBody.linearDamping = 0.6 // Round will keep translating even with friction so you need linearDamping
  boxBody.angularDamping = 0.6 // Round bodies will keep rotating even with friction so you need angularDamping
  boxBody.sleepSpeedLimit = 0.5
  boxBody.sleepTimeLimit = 0.5

  boxBody.allowSleep = true
  world.addBody(boxBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(boxBody)
  return boxBody
}

export function createLaserEmitterBodyPhysic(emitter: Entity){
  //SETUP BOX BODY
  const emitterData = LaserEmitterComponent.get(emitter)
  const boxShape = new CANNON.Box(new CANNON.Vec3(emitterData.dimension.x /2 * 0.75, emitterData.dimension.y / 2 * 0.75, emitterData.dimension.z / 2 * 3.5))

  const boxBody: CANNON.Body = new CANNON.Body({ mass: 0 })
  boxBody.material = physicMaterial.physicWallMaterial
  boxBody.id = emitter.valueOf()
  boxBody.addShape(boxShape)
  boxBody.position.set(emitterData.position.x, emitterData.position.y, emitterData.position.z)
  boxBody.quaternion.set(emitterData.rotation.x, emitterData.rotation.y, emitterData.rotation.z, emitterData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: Vector3.create(emitterData.position.x, emitterData.position.y, emitterData.position.z),
            rotation: emitterData.rotation,
            scale: Vector3.create(emitterData.dimension.x * 0.75, emitterData.dimension.y * 0.75, emitterData.dimension.z * 3.5)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

  boxBody.linearDamping = 0.6 // Round will keep translating even with friction so you need linearDamping
  boxBody.angularDamping = 0.6 // Round bodies will keep rotating even with friction so you need angularDamping
  boxBody.sleepSpeedLimit = 0.5
  boxBody.sleepTimeLimit = 0.5

  boxBody.allowSleep = true
  world.addBody(boxBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(boxBody)
  return boxBody
}

export function createCatPhysicBody(cat: Entity){
  //SETUP BOX BODY
  const catData = CatDataComponent.get(cat)
  const boxShape = new CANNON.Box(new CANNON.Vec3(catData.dimension.x / 2, catData.dimension.y / 2, catData.dimension.z / 2))

  const catBody: CANNON.Body = new CANNON.Body({ mass: 2 })
  catBody.material = physicMaterial.physicBoxMaterial
  catBody.id = cat.valueOf()
  catBody.addShape(boxShape)
  catBody.position.set(catData.position.x, catData.position.y, catData.position.z)
  catBody.quaternion.set(catData.rotation.x, catData.rotation.y, catData.rotation.z, catData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: catData.position,
            rotation: catData.rotation,
            scale: Vector3.create(catData.dimension.x, catData.dimension.y, catData.dimension.z)
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

  catBody.linearDamping = 0.6 // Round will keep translating even with friction so you need linearDamping
  catBody.angularDamping = 0.6 // Round bodies will keep rotating even with friction so you need angularDamping
  catBody.sleepSpeedLimit = 0.5
  catBody.sleepTimeLimit = 0.5

  catBody.allowSleep = true
  world.addBody(catBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(catBody)
  return catBody
}

export function createElevatorBaseBodyPhysic(elevatorBase: Entity){
    //SETUP WALL BODY
    let platformData = PlatformDataComponent.get(elevatorBase)

    //had to do this to make wall & floor thicker (avoid physic object going pass through wall/floor)
    //TODO: dimension should be change in Blender script, but have to re-export all levels.
    let boxShape = new CANNON.Box(new CANNON.Vec3(platformData.dimension.x / 2, platformData.dimension.y / 2, platformData.dimension.z))

  const platformBody: CANNON.Body = new CANNON.Body({ mass: 0 }) // mass === 0 makes the body static
  platformBody.material = physicMaterial.physicWallMaterial
  platformBody.id = elevatorBase.valueOf()
  platformBody.addShape(boxShape)
  platformBody.position.set(platformData.position.x, platformData.position.y, platformData.position.z)
  platformBody.quaternion.set(platformData.rotation.x, platformData.rotation.y, platformData.rotation.z, platformData.rotation.w)

        if(CONFIG.DEBUG_PHYSIC_BODY_ENABLED){
          let visualCheck =  engine.addEntity()
          Transform.create(visualCheck, {
            parent: CONFIG.centerEntity,
            position: platformData.position,
            rotation: platformData.rotation,
            scale: platformData.dimension
          })
          MeshRenderer.setBox(visualCheck)
          Material.setPbrMaterial(visualCheck, {
            albedoColor: Color4.create(0, 0, 1, 0.8)
          })
          VISUALINITBODYCHECK.push(visualCheck)
        }

    platformBody.sleepSpeedLimit = 0.5
    platformBody.sleepTimeLimit = 0.5
  
    platformBody.allowSleep = true
  world.addBody(platformBody) // Add body to the world
  GAME_STATE._CANNON_BODY_LIST.push(platformBody)

  return platformBody
}