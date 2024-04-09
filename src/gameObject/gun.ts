import { AudioSource, AvatarAnchorPointType, AvatarAttach, Billboard, BillboardMode, CameraMode, CameraType, ColliderLayer, Entity, GltfContainer, InputAction, Transform, VisibilityComponent, engine, pointerEventsSystem } from "@dcl/sdk/ecs"
import { Vector3, Quaternion, Color4 } from "@dcl/sdk/math"
import resources from "../resources"
import { PortalColor } from "./gameObjectType"
import { GlowColorComponent, GunDataComponent } from "../components"
import { GAME_STATE } from "../gameData"
import { createProjectiles } from "./projectile"
import { IsLoadingObject } from "../level/createLevel"
import * as utils from '@dcl-sdk/utils'
import { arrowModel } from "./lab"
import { SFX, playSFXSound } from "./soundFX"
import { displayPopup } from "../ui/popupUI"

let gun: Entity
let gunRootCamera: Entity
let gunRootRightHand: Entity
let gunMuzzleRoot:Entity
let beam: Entity
let previousCameraMode: CameraType

const gunFPSPosition = Vector3.create(0.20, -0.2, 0.15)
const gunFPSScale = Vector3.create(0.5, 0.5, 0.5) 
const gunFPSRotation = Quaternion.fromEulerDegrees(0,0,0)

const gunTPSPosition = Vector3.create(0.05, 0.1, 0)
const gunTPSScale = Vector3.create(0.5, 0.5, 0.5) 
const gunTPSRotation = Quaternion.fromEulerDegrees(-90,0,180)

const gunRecoilAmount = 0.1 

export function createGun(isAttachToPlayer: boolean, position?: Vector3){	

	gun = engine.addEntity()
	Transform.create(gun, {position: Vector3.create(8, -2, 8)})
	GltfContainer.create(gun, resources.models.gun)

    IsLoadingObject.create(gun)

	gunMuzzleRoot = engine.addEntity()
	Transform.create(gunMuzzleRoot,  {
		parent: gun,
		position: Vector3.create(0,0, 0),
		scale: Vector3.create(1, 1, 1)
	})

    IsLoadingObject.create(gunMuzzleRoot)
    
	const blueGlow = engine.addEntity()
	const orangeGlow = engine.addEntity()
	const glowTipBlue = engine.addEntity()
	const glowTipOrange = engine.addEntity()

    IsLoadingObject.create(blueGlow)
    IsLoadingObject.create(orangeGlow)
    IsLoadingObject.create(glowTipBlue)
    IsLoadingObject.create(glowTipOrange)

	GlowColorComponent.create(blueGlow, { color: PortalColor.Blue })
	GltfContainer.create(blueGlow, resources.models.gunBlueGlow)
	Transform.create(blueGlow,  {
		parent: gun,
		scale: Vector3.One()
	})

	GlowColorComponent.create(orangeGlow, { color: PortalColor.Orange })
	GltfContainer.create(orangeGlow, resources.models.gunOrangeGlow)
	Transform.create(orangeGlow, {
		parent: gun,
		scale: Vector3.Zero()
	})

	GlowColorComponent.create(glowTipBlue, { color: PortalColor.Blue })
	GltfContainer.create(glowTipBlue, resources.models.glowTipBlue)
	Transform.create(glowTipBlue,  {
		parent: gunMuzzleRoot,
		scale: Vector3.Zero()
	})

	GlowColorComponent.create(glowTipOrange, { color: PortalColor.Orange })
	GltfContainer.create(glowTipOrange, resources.models.glowTipOrange)
	Transform.create(glowTipOrange, {
		parent: gunMuzzleRoot,
		scale: Vector3.Zero()
	})

	
	
	
	beam = engine.addEntity()
	Transform.create(beam,  {
		parent: gun,
		position: Vector3.create(0,0.16, 0.80),
		scale: Vector3.create(0.9, 0.9, 0.5)
	})
	GltfContainer.create(beam, resources.models.beamShape)
	VisibilityComponent.create(beam, {visible:false})
    IsLoadingObject.create(beam)

    gunRootCamera = engine.addEntity()
    gunRootRightHand = engine.addEntity()
    IsLoadingObject.create(gunRootCamera)
    IsLoadingObject.create(gunRootRightHand)

    Transform.create(gunRootCamera, {
        parent: engine.CameraEntity
    })
    Transform.create(gunRootRightHand, {})

    AvatarAttach.createOrReplace(gunRootRightHand, { anchorPointId: AvatarAnchorPointType.AAPT_RIGHT_HAND })

    GunDataComponent.create(gun, {
        active: false,
        recoilFactor: 0,
        recoilSpeed: 2,
        recoilPosition: Vector3.create(gunFPSPosition.x+0.1, gunFPSPosition.y-0.08, gunFPSPosition.z - 0.05),
        restPosition: Vector3.create(gunFPSPosition.x, gunFPSPosition.y, gunFPSPosition.z),
        restRotation:  Quaternion.create(gunFPSRotation.x, gunFPSRotation.y, gunFPSRotation.z, gunFPSRotation.w),
        recoilRotation: Quaternion.multiply(Quaternion.create(gunFPSRotation.x, gunFPSRotation.y, gunFPSRotation.z, gunFPSRotation.w), Quaternion.fromEulerDegrees(-30,-10,20))

    })
    createProjectiles()

    if(isAttachToPlayer){
        //// TODO: move audio source to resources
		
        const gunTranform = Transform.getMutable(gun)       
        gunTranform.parent = gunRootCamera		
        Vector3.copyFrom(gunFPSPosition, gunTranform.position)
		gunTranform.scale = gunFPSScale
		gunTranform.rotation = gunFPSRotation

        Transform.getMutable(glowTipBlue).scale = Vector3.One()
        GAME_STATE.gun = gun
    }
    else{
        //load gun on position
        let gunRotationCenter = engine.addEntity()
        Transform.create(gunRotationCenter, {
            position: position
        })
        utils.perpetualMotions.startRotation(gunRotationCenter, Quaternion.fromEulerDegrees(0, -60, 0))

        IsLoadingObject.create(gunRotationCenter)

        let gunTransform = Transform.getMutable(gun)
        gunTransform.parent = gunRotationCenter
        gunTransform.position = Vector3.create(0, 0, -0.4)
        gunTransform.scale = Vector3.scale(Vector3.One(), 1.4)

        GltfContainer.getMutable(gun).visibleMeshesCollisionMask = ColliderLayer.CL_POINTER
        pointerEventsSystem.onPointerDown({
            entity: gun,
            opts:{
                button: InputAction.IA_POINTER,
                hoverText: "Pick Up"
            }},
            function(){
                playSFXSound(SFX.boxTakeSoundEntity, true)
    
                Transform.getMutable(glowTipBlue).scale = Vector3.One()
                utils.perpetualMotions.stopRotation(gunRotationCenter)
                const gunTranform = Transform.getMutable(gun)       
                gunTranform.parent = gunRootCamera		
                gunTranform.scale = Vector3.One()
                Vector3.copyFrom(gunFPSPosition, gunTranform.position)
                gunTranform.scale = gunFPSScale
                gunTranform.rotation = gunFPSRotation

                utils.timers.setTimeout(() => {
                    Transform.getMutable(arrowModel).scale = Vector3.Zero()
                    GAME_STATE.gun = gun
                }, 500)


                displayPopup('popup1')
        })

        // utils.triggers.addTrigger(gun, 1, 1, [{ type: 'box', scale: Vector3.scale(Vector3.One(), 1.5) }], () => {
        //     AudioSource.createOrReplace(gun, { audioClipUrl: resources.sounds.gunPickup, playing: true, loop: false })

        //     Transform.getMutable(glowTipBlue).scale = Vector3.One()
        //     utils.perpetualMotions.stopRotation(gunRotationCenter)
        //     const gunTranform = Transform.getMutable(gun)       
        //     gunTranform.parent = gunRootCamera		
        //     gunTranform.scale = Vector3.One()
        //     Vector3.copyFrom(gunFPSPosition, gunTranform.position)
        //     gunTranform.scale = gunFPSScale
        //     gunTranform.rotation = gunFPSRotation
    
        //     GAME_STATE.gun = gun
        //   })
    }
	//engine.addSystem(cameraModeAdjust )
}

export function showBeam(){
	VisibilityComponent.getMutable(beam).visible = true
	Transform.getMutable(gun).position.z =  gunFPSPosition.z-0.1
	Transform.getMutable(gunMuzzleRoot).scale = Vector3.Zero()
}
export function hideBeam(){
	VisibilityComponent.getMutable(beam).visible = false
	Transform.getMutable(gun).position.z = gunFPSPosition.z
	Transform.getMutable(gunMuzzleRoot).scale = Vector3.One()

	
}

function cameraModeAdjust(dt: number) {
  let cameraEntity = CameraMode.get(engine.CameraEntity)

  if (!cameraEntity) return

  if (cameraEntity.mode !== previousCameraMode) {
    previousCameraMode = cameraEntity.mode
    if (cameraEntity.mode == CameraType.CT_THIRD_PERSON) {
      //console.log("The player is using the 3rd person camera")

	  const gunTranform = Transform.getMutable(gun)       
		gunTranform.parent = gunRootRightHand		
        gunTranform.position = gunTPSPosition
        gunTranform.scale = gunTPSScale
        gunTranform.rotation = gunTPSRotation
	  

    } else {
      //console.log("The player is using the 1st person camera")
	  
	  const gunTranform = Transform.getMutable(gun)       
	  gunTranform.parent = gunRootCamera		
	  Vector3.copyFrom(gunFPSPosition, gunTranform.position)
	  gunTranform.scale = gunFPSScale
	  gunTranform.rotation = gunFPSRotation
	  

    }
  }
}



