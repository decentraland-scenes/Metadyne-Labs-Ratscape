import { Animator, AudioSource, Entity, GltfContainer, RaycastHit, Transform, TransformType, engine, MeshRenderer, Material, PBAnimationState } from '@dcl/sdk/ecs'
import * as utils from '@dcl-sdk/utils'
import { Color3, Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { movePlayerTo } from '~system/RestrictedActions'
import { PortalColor, TeleportStatus } from './gameObjectType'
import { BoxDataComponent, PortalComponent, TeleportStatusComponent, RemoveGravityComponent, TurretDataComponent, TurretSystemComponent, FlipWallDataComponent } from '../components'
import { GAME_STATE } from '../gameData'
import resources from '../resources'
import { world, world2 } from '../gameSystem/physic/physicSetup'
import { CONFIG } from '../config'
import * as CANNON from 'cannon/build/cannon'
import { boxBodiesList } from './box'
import { wallBodiesList } from './wall'
import { SFX, playSFXSound } from './soundFX'
import { turretBodiesList } from './turret'


const DELAY_TIME = 1500 // In milliseconds
let initTransform: Partial<TransformType> = {position: Vector3.create(8, -8, 8), scale: Vector3.create(1.25, 1.25, 1.25)}
let portals = {
	portalBlue: engine.addEntity(),
	portalOrange: engine.addEntity(),
	portalBlueDissapear: engine.addEntity(),
	portalOrangeDissapear: engine.addEntity(),
	portalBlueInactive: engine.addEntity(),
	portalOrangeInactive: engine.addEntity(),
}
console.log("PORTAL. BLUE:", portals.portalBlue, "ORANGE:", portals.portalOrange)

//ONE TIME INIT
export function initPortal(){
	Transform.create(portals.portalBlue, initTransform)
	Transform.create(portals.portalOrange, initTransform)
	Transform.create(portals.portalBlueDissapear, initTransform)
	Transform.create(portals.portalOrangeDissapear, initTransform)
	Transform.create(portals.portalBlueInactive, initTransform)
	Transform.create(portals.portalOrangeInactive, initTransform)

	GltfContainer.create(portals.portalBlue, resources.models.portal_blue_active)
	GltfContainer.create(portals.portalOrange, resources.models.portal_orange_active)
	GltfContainer.create(portals.portalBlueDissapear, resources.models.portal_blue_active)
	GltfContainer.create(portals.portalOrangeDissapear, resources.models.portal_orange_active)
	GltfContainer.create(portals.portalBlueInactive, resources.models.portal_blue_inactive)
	GltfContainer.create(portals.portalOrangeInactive, resources.models.portal_orange_inactive)

	PortalComponent.create(portals.portalBlue, { color: PortalColor.Blue, ready: true })
	PortalComponent.create(portals.portalOrange, { color: PortalColor.Orange, ready: true })
	PortalComponent.create(portals.portalBlueInactive, { color: PortalColor.Blue, ready: false })
	PortalComponent.create(portals.portalOrangeInactive, { color: PortalColor.Orange, ready: false })

	Animator.create(portals.portalBlue, { states: [
		{ clip: 'portalIdle', loop: true, playing: false},//, shouldReset: true},
		{ clip: 'portalIn', loop: false, playing: false},//, shouldReset: true},
		{ clip: 'portalOut', loop: false, playing: false}//, shouldReset: true}
	]})
	Animator.create(portals.portalOrange, { states: [
		{ clip: 'portalIdle', loop: true, playing: false},//, shouldReset: true},
		{ clip: 'portalIn', loop: false, playing: false},//, shouldReset: true},
		{ clip: 'portalOut', loop: false, playing: false}//, shouldReset: true}
	]})
	Animator.create(portals.portalBlueDissapear, { states: [
		{ clip: 'portalIdle', loop: true, playing: false},//, shouldReset: true},
		{ clip: 'portalIn', loop: false, playing: false},//, shouldReset: true},
		{ clip: 'portalOut', loop: false, playing: false}//, shouldReset: true}
	]})
	Animator.create(portals.portalOrangeDissapear, { states: [
		{ clip: 'portalIdle', loop: true, playing: false},//, shouldReset: true},
		{ clip: 'portalIn', loop: false, playing: false},//, shouldReset: true},
		{ clip: 'portalOut', loop: false, playing: false}//, shouldReset: true}
	]})
	Animator.create(portals.portalBlueInactive, { states: [
		{ clip: 'portalIdle', loop: true, playing: false},//, shouldReset: true},
		{ clip: 'portalIn', loop: false, playing: false},//, shouldReset: true},
		{ clip: 'portalOut', loop: false, playing: false}//, shouldReset: true}
	]})
	Animator.create(portals.portalOrangeInactive, { states: [
		{ clip: 'portalIdle', loop: true, playing: false},//, shouldReset: true},
		{ clip: 'portalIn', loop: false, playing: false},//, shouldReset: true},
		{ clip: 'portalOut', loop: false, playing: false}//, shouldReset: true}
	]})

	initTrigger()

	GAME_STATE.portalBlue = portals.portalBlueInactive
	GAME_STATE.portalOrange = portals.portalOrangeInactive
}

//CALLED EVERYTIME LOAD NEW LEVEL
export function resetPortalObjects(){
	initTransform = {position: Vector3.create(8, -8, 8), scale: Vector3.create(1.25, 1.25, 1.25)}
	Transform.createOrReplace(portals.portalBlue, initTransform)
	Transform.createOrReplace(portals.portalOrange, initTransform)
	Transform.createOrReplace(portals.portalBlueDissapear, initTransform)
	Transform.createOrReplace(portals.portalOrangeDissapear, initTransform)
	Transform.createOrReplace(portals.portalBlueInactive, initTransform)
	Transform.createOrReplace(portals.portalOrangeInactive, initTransform)

	PortalComponent.createOrReplace(portals.portalBlue, { color: PortalColor.Blue, ready: true })
	PortalComponent.createOrReplace(portals.portalOrange, { color: PortalColor.Orange, ready: true })
	PortalComponent.createOrReplace(portals.portalBlueInactive, { color: PortalColor.Blue, ready: false })
	PortalComponent.createOrReplace(portals.portalOrangeInactive, { color: PortalColor.Orange, ready: false })

	GAME_STATE.portalBlue = portals.portalBlueInactive
	GAME_STATE.portalOrange = portals.portalOrangeInactive

	utils.triggers.removeTrigger(portals.portalBlue)
	utils.triggers.removeTrigger(portals.portalOrange)

	initTrigger()
}

function initTrigger(){
	utils.triggers.addTrigger(
		portals.portalBlue,
		utils.NO_LAYERS,
		utils.LAYER_1 | utils.LAYER_2, //CAN ONLY TRIGGER BY PLAYER (LAYER 1) AND BY BOX (LAYER 2) 
		[
			{
				type: 'box',
				scale: Vector3.create(1, 1, 1)
			}
		],
		() => {}
	)
	utils.triggers.addTrigger(
		portals.portalOrange,
		utils.NO_LAYERS,
		utils.LAYER_1 | utils.LAYER_2, //CAN ONLY TRIGGER BY PLAYER (LAYER 1) AND BY BOX (LAYER 2) 
		[
			{
				type: 'box',
				scale: Vector3.create(1, 1, 1)
			}
		],
		() => {}
	)
}

function resetPortalTrigger(portal: Entity){
	utils.triggers.removeTrigger(portal)

	utils.triggers.addTrigger(
		portal,
		utils.NO_LAYERS,
		utils.LAYER_1 | utils.LAYER_2, //CAN ONLY TRIGGER BY PLAYER (LAYER 1) AND BY BOX (LAYER 2) 
		[
			{
				type: 'sphere',
				radius: 1.1//0.85
			}
		],
		(enterEntity)=>{
			portalTriggerCallback(enterEntity, portal)
		}
	)
}

function getPortalEntities(color: PortalColor){
	let portal: Entity
	let otherPortal: Entity

	if(color === PortalColor.Blue) {
		portal = GAME_STATE.portalBlue as unknown as Entity
		otherPortal = GAME_STATE.portalOrange as unknown as Entity
	}
	else {
		portal = GAME_STATE.portalOrange as unknown as Entity
		otherPortal = GAME_STATE.portalBlue as unknown as Entity
	}
	
	return{
		portal: portal,
		otherPortal: otherPortal
	}
}

//this function called when there's portal in the flip-wall that change state from portable to unportable
export function removePortal(color: PortalColor){
	let portalEntities = getPortalEntities(color)

	let portalToRemove = portalEntities.portal
	let otherPortal = portalEntities.otherPortal

    console.log("game play. remove portal. portals list:", portals)
    console.log("game play. remove portal. color:", PortalColor[color], portalToRemove, otherPortal)

    let portalToRemoveTransform = Transform.getMutable(portalToRemove)
    let otherPortalTransform = Transform.get(otherPortal)

    portalToRemoveTransform.position = Vector3.create(8, -8, 8)

    if(color === PortalColor.Blue){
        GAME_STATE.portalBlue = portals.portalBlueInactive
        Transform.getMutable(GAME_STATE.portalBlue).position = Vector3.create(8, -8, 8)
        let portalInactiveComponent = PortalComponent.getMutable(GAME_STATE.portalBlue)
        portalInactiveComponent.ready = false

        if(GAME_STATE.portalOrange !== portals.portalOrangeInactive){
            GAME_STATE.portalOrange = portals.portalOrangeInactive
            Transform.getMutable(portals.portalOrangeInactive).position = otherPortalTransform.position
            Transform.getMutable(portals.portalOrangeInactive).rotation = otherPortalTransform.rotation
            Transform.getMutable(otherPortal).position = Vector3.create(8, -8, 8)

            Animator.getClip(portals.portalOrangeInactive, 'portalIn').playing = true
            Animator.getClip(portals.portalOrangeInactive, 'portalIn').speed = 2
        }
    }
    else{
        GAME_STATE.portalOrange = portals.portalOrangeInactive
        Transform.getMutable(GAME_STATE.portalOrange).position = Vector3.create(8, -8, 8)
        let portalInactiveComponent = PortalComponent.getMutable(GAME_STATE.portalOrange)
        portalInactiveComponent.ready = false

        if(GAME_STATE.portalBlue !== portals.portalBlueInactive){
            GAME_STATE.portalBlue = portals.portalBlueInactive
            Transform.getMutable(portals.portalBlueInactive).position = otherPortalTransform.position
            Transform.getMutable(portals.portalBlueInactive).rotation = otherPortalTransform.rotation
            Transform.getMutable(otherPortal).position = Vector3.create(8, -8, 8)

            Animator.getClip(portals.portalBlueInactive, 'portalIn').playing = true
            Animator.getClip(portals.portalBlueInactive, 'portalIn').speed = 2
        }
    }

    // Transform.getMutable(portalToRemove).position = Vector3.create(0, -50, 0)
    // Transform.getMutable(GAME_STATE.portalBlue as Entity).position = Vector3.create(0, -50, 0)
    // Transform.getMutable(GAME_STATE.portalOrange as Entity).position = Vector3.create(0, -50, 0)

    // GAME_STATE.portalOrange = portals.portalOrangeInactive
    // GAME_STATE.portalBlue = portals.portalBlueInactive

    console.log("game play. remove portal.",
        "\ngame portal blue", GAME_STATE.portalBlue, "position:", Transform.get(GAME_STATE.portalBlue as Entity).position, 
        "\ngame portal orange", GAME_STATE.portalOrange, "position:", Transform.get(GAME_STATE.portalOrange as Entity).position
    )
}

//neighbour isn't needed, will delete later if it is not used
export function movePortal(color: PortalColor, newTransform: TransformType, normal: Vector3, neigbour: Entity[], flipWall?: Entity){
	console.log("PORTAL. BLUE:", portals.portalBlue, "ORANGE:", portals.portalOrange)

	let portalEntities = getPortalEntities(color)
	let portal = portalEntities.portal
	let otherPortal = portalEntities.otherPortal

	let portalPrevTransform = Transform.get(portal)
	let otherPortalPrevTransform = Transform.get(otherPortal)
	let dissapearFX: Entity

	//portal can't pile up each other
	let portalsDistSq = Vector3.distanceSquared(newTransform.position, Transform.get(otherPortal).position)
	if(portalsDistSq < 5) return

	GAME_STATE.levelPortals += 1
	
    if(flipWall) {
        let flipWallDataComponent = FlipWallDataComponent.getMutable(flipWall) 
        flipWallDataComponent.portalColor = color
        console.log("game play. portal move to flip wall. flip wall data:", FlipWallDataComponent.get(flipWall))
    }

	let portalMutableComponent = PortalComponent.getMutable(portal)
	let otherPortalMutableComponent = PortalComponent.getMutable(otherPortal)
	let otherPortalPrevNormal = otherPortalMutableComponent.normal

	if(!portalMutableComponent.ready){
		portalMutableComponent.ready = true
		if(otherPortalMutableComponent.ready){
			Animator.stopAllAnimations(otherPortal)
			Animator.getClip(otherPortal, 'portalOut').speed = 3
			Animator.getClip(otherPortal, 'portalOut').playing = true

			playSFXSound(SFX.portalCloseSoundEntity, true)

			utils.timers.setTimeout(() => {
				Transform.createOrReplace(otherPortal, {position: initTransform.position})
			}, 200)
			
			GAME_STATE.portalBlue = portals.portalBlue
			GAME_STATE.portalOrange = portals.portalOrange

			if(color === PortalColor.Blue){
				portal = GAME_STATE.portalBlue as Entity
				otherPortal = GAME_STATE.portalOrange as Entity	
			}
			else{
				portal = GAME_STATE.portalOrange as Entity
				otherPortal = GAME_STATE.portalBlue as Entity
			}
			portalMutableComponent = PortalComponent.getMutable(portal)
			otherPortalMutableComponent = PortalComponent.getMutable(otherPortal)
			otherPortalMutableComponent.normal = otherPortalPrevNormal

			portalMutableComponent.active = true
			otherPortalMutableComponent.active = true

			utils.timers.setTimeout(() => {
				Transform.createOrReplace(otherPortal, otherPortalPrevTransform)
				Animator.stopAllAnimations(otherPortal)
				Animator.getClip(otherPortal, 'portalIn').playing = true
				Animator.getClip(otherPortal, 'portalIn').speed = 2
				
				playSFXSound(SFX.portalOpenSoundEntity, true)

				utils.timers.setTimeout(() => {
					Animator.stopAllAnimations(otherPortal)
					Animator.getClip(otherPortal, 'portalIdle').playing = true
					
					resetPortalTrigger(portal)
					resetPortalTrigger(otherPortal)
				}, 300)
			}, 300)
			console.log("PORTAL. ACTIVATE BOTH PORTALS. BLUE:", GAME_STATE.portalBlue, "ORANGE:", GAME_STATE.portalOrange)
				
		}
	}
	else if(portalMutableComponent.active && otherPortalMutableComponent.active){
		dissapearFX = (color === PortalColor.Blue) ? portals.portalBlueDissapear : portals.portalOrangeDissapear
		
		Transform.createOrReplace(dissapearFX, portalPrevTransform)
		Animator.stopAllAnimations(dissapearFX)
		Animator.getClip(dissapearFX, 'portalOut').speed = 3
		Animator.getClip(dissapearFX, 'portalOut').playing = true

		playSFXSound(SFX.portalCloseSoundEntity, true)

		utils.timers.setTimeout(() => {
			Transform.createOrReplace(dissapearFX, {position: initTransform.position})
		}, 300)
		
		resetPortalTrigger(portal)
	}

	portalMutableComponent.normal = normal
	portalMutableComponent.neighbourEntities = neigbour
	console.log("MOVE PORTAL. PORTAL DATA COMPONENT:", portalMutableComponent)

	Transform.createOrReplace(portal, newTransform)

	Animator.stopAllAnimations(portal)
	Animator.getClip(portal, 'portalIn').playing = true
	Animator.getClip(portal, 'portalIn').speed = 2

	playSFXSound(SFX.portalOpenSoundEntity, true)

	utils.timers.setTimeout(() => {
		Animator.stopAllAnimations(portal)
		Animator.getClip(portal, 'portalIdle').playing = true
	}, 300)
	
	console.log("BLUE", GAME_STATE.portalBlue, PortalComponent.get(GAME_STATE.portalBlue as Entity).active, "ORANGE", GAME_STATE.portalOrange, PortalComponent.get(GAME_STATE.portalOrange as Entity).active)
	
}


function portalTriggerCallback(enterEntity: Entity, portal: Entity){

	if(!GAME_STATE.portalBlue || !GAME_STATE.portalOrange) return
	if(!PortalComponent.get(GAME_STATE.portalBlue).active || !PortalComponent.get(GAME_STATE.portalOrange).active) return
	
	if(enterEntity === 1){
		//USER
		if (PortalComponent.get(portal).coolDown) return
		teleport(portal)
	}
	else if(enterEntity === GAME_STATE.activeBox){
		if (PortalComponent.get(portal).coolDown) return
		//GRABBED BOX + USER
		teleport(portal)
	}
	else{
		//INACTIVE BOX
		console.log("PORTAL. ONLY BOX ENTER PORTAL")
		let portalComponent = PortalComponent.get(portal)
		let teleportStatus = TeleportStatusComponent.getMutableOrNull(enterEntity)

		let isTurret = false

		let objPhysicBody: CANNON.Body
		if(BoxDataComponent.getOrNull(enterEntity)){
			objPhysicBody = boxBodiesList[enterEntity]

			for (const [boxEnt] of engine.getEntitiesWith(BoxDataComponent, Transform)) {
				if (boxEnt !== enterEntity) {
					boxBodiesList[boxEnt].wakeUp()
				}
			}
		}
		else if(TurretDataComponent.getOrNull(enterEntity)){
			//THIS HAS TO BE TURRET
			isTurret = true
			objPhysicBody = turretBodiesList[enterEntity]
		}
		else
			return
		//let boxPhysicBody = boxBodiesList[enterEntity]

		objPhysicBody.wakeUp()

		if(teleportStatus && teleportStatus.status === TeleportStatus.Exit){
			teleportStatus.status = TeleportStatus.Enter

			console.log("PORTAL. BOX. APPEAR FROM PORTAL", portalComponent)

			let velocityMagnitude = 6
			let angVelocityMagnitude = 3
			let velocity = Vector3.scale(portalComponent.normal, velocityMagnitude)
			objPhysicBody.velocity.set(velocity.x, velocity.y, velocity.z)

			console.log("PORTAL. BOX. THROWN SPPED", portalComponent.normal, Vector3.length(velocity))
			objPhysicBody.angularVelocity.set(Math.random() * angVelocityMagnitude, Math.random() * angVelocityMagnitude, Math.random() * angVelocityMagnitude)

			//RESET TRIGGER, INCASE BOX NOT EXIT TRIGGER AREA. FORCE IT TO ENTER PORTAL AGAIN
			utils.timers.setTimeout(() => {
				resetPortalTrigger(portal)
			}, 2000)
		}
		else if(teleportStatus && teleportStatus.status === TeleportStatus.Enter){
			let destinationPortal = (portal === GAME_STATE.portalBlue) ? GAME_STATE.portalOrange : GAME_STATE.portalBlue
			let portalPosition = Transform.get(portal).position
			let boxPosition = Transform.get(enterEntity).position

			console.log("PORTAL. BOX. TO WORLD 2")
			world.remove(objPhysicBody)
			world2.addBody(objPhysicBody)

			//DRAG BOX TO CENTER OF THE PORTAL
			let velocityMagnitude = 3
			let angVelocityMagnitude = 3
			let dragToPortalCenter = Vector3.subtract(Vector3.subtract(portalPosition, CONFIG.centerGround), boxPosition)
			dragToPortalCenter = Vector3.scale(Vector3.normalize(dragToPortalCenter), velocityMagnitude)
			objPhysicBody.velocity.set(dragToPortalCenter.x, dragToPortalCenter.y, dragToPortalCenter.z)
			objPhysicBody.angularVelocity.set(Math.random() * angVelocityMagnitude, Math.random() * angVelocityMagnitude, Math.random() * angVelocityMagnitude)
			
			console.log("PORTAL. BOX. DRAG TO PORTAL. VELOCITY", Vector3.length(dragToPortalCenter))

			utils.timers.clearTimeout(TeleportStatusComponent.get(enterEntity).teleportDelayTimer)
			TeleportStatusComponent.getMutable(enterEntity).teleportDelayTimer = utils.timers.setTimeout(() => {

				// if(enterEntity !== GAME_STATE.activeBox){
				TeleportStatusComponent.getMutable(enterEntity).status = TeleportStatus.Exit
				//MOVE BOX TO OTHER PORTAL
				let destinationPortalNormal = PortalComponent.get(destinationPortal).normal
				const destination = Vector3.add(Transform.get(destinationPortal).position, Vector3.scale(destinationPortalNormal, 1.25))
				const destRelativeCenter = Vector3.subtract(destination, CONFIG.centerGround)
				console.log("PORTAL. BOX. TELEPORT TO: ", destRelativeCenter)
				objPhysicBody.position.set(destRelativeCenter.x, destRelativeCenter.y, destRelativeCenter.z)
				objPhysicBody.velocity.set(0, 0, 0)

				console.log("PORTAL. BOX. MOVE BACK TO MAIN WORLD")
				
				world2.remove(objPhysicBody)
				world.addBody(objPhysicBody)
				// utils.timers.setTimeout(() => {
				// }, 100)
				// }
				
				// console.log("PORTAL. BOX. APPEAR FROM PORTAL", portalComponent)

				// let velocityMagnitude = 6
				// let angVelocityMagnitude = 3
				// let velocity = Vector3.scale(destinationPortalNormal, velocityMagnitude)
				// objPhysicBody.velocity.set(velocity.x, velocity.y, velocity.z)

				// console.log("PORTAL. BOX. THROWN SPPED", portalComponent.normal, Vector3.length(velocity))
			}, 300)
		}
	}
}

function teleport(portalEntity: Entity) {
	const portalData = PortalComponent.getMutable(portalEntity)
	portalData.coolDown = true
	const portalColor = portalData.color

	const activePortals = engine.getEntitiesWith(PortalComponent)

	let destinationEntity = (portalEntity === GAME_STATE.portalBlue) ? GAME_STATE.portalOrange : GAME_STATE.portalBlue

	//for (const [destinationEntity, portal] of activePortals) {
	//	if (portal.color != portalColor) {
			const destination = Transform.get(destinationEntity as Entity).position
			const direction = Transform.get(destinationEntity as Entity).rotation
			
			let cameraTarget: Vector3 | undefined = undefined
			let vectorDirection = Vector3.rotate(Vector3.Forward(), direction) 
			if(Vector3.equalsWithEpsilon(vectorDirection, Vector3.Up())){

			}
			else{
				const fiveMetersForward = Vector3.scale(vectorDirection, 5)
				cameraTarget = Vector3.add(destination, fiveMetersForward)
			}
			const destinationPortalData = PortalComponent.getMutable(destinationEntity as Entity)

			movePlayerTo({ newRelativePosition: Vector3.add(destination, Vector3.scale(vectorDirection, 1)), cameraTarget: cameraTarget })


			destinationPortalData.coolDown = true
			utils.timers.setTimeout(() => {
				destinationPortalData.coolDown = false
			}, DELAY_TIME)

			playSFXSound(SFX.portalTeleportSoundEntity, true)
			// AudioSource.createOrReplace(destinationEntity as Entity, {
			// 	audioClipUrl: 'sounds/teleport.mp3',
			// 	playing: true,
			// 	loop: false
			// })
	//	}
	//}

	utils.timers.setTimeout(() => {
		portalData.coolDown = false
	}, DELAY_TIME)
}
