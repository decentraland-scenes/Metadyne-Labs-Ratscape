import { InputAction, PBRaycastResult, PointerEventType, RaycastQueryType, Transform, engine, inputSystem, raycastSystem, DeepReadonlyObject, AudioSource, GltfContainer, Entity, RaycastHit, ColliderLayer, MeshRenderer, Material, CameraMode, CameraType } from "@dcl/sdk/ecs"
import { GAME_STATE } from "../gameData"
import { PortalColor, State, WallType } from "../gameObject/gameObjectType"
import { ButtonDataComponent, FlipWallDataComponent, GlowColorComponent, GunDataComponent, PortableFlagComponent, PortalComponent, ProjctileComponent, WallDataComponent } from "../components"
import { Vector3, Quaternion, Color4 } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
import { movePortal } from "../gameObject/portal"
import resources from "../resources"
import { CONFIG } from "../config"
import { spawn } from "~system/PortableExperiences"
import { spawnProjectile } from "../gameObject/projectile"
import helper, { easeOutBack } from "../helper/helper"
import { SFX, playSFXSound } from "../gameObject/soundFX"
import { OBJECT_GRABBED_CONFIG } from "./objectGrabbingSystem"
import { isMenuUIShown } from "../ui/uiControls"
//import { getPhysicBodyByEnitytyId } from "./physic/physicSetup"

/**
 * switch colors
 */
export function colorSystem(dt: number) {
    if(isMenuUIShown()) return
	if (GAME_STATE.gun && inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN)) {
		if (GAME_STATE.activePortal == PortalColor.Blue) {
			GAME_STATE.activePortal = PortalColor.Orange
		} else {
			GAME_STATE.activePortal = PortalColor.Blue
		}

		const glowEntities = engine.getEntitiesWith(GlowColorComponent)
		for (const [entity, glow] of glowEntities) {
			const glowTranform = Transform.getMutable(entity)
			if (glow.color == GAME_STATE.activePortal) {
				glowTranform.scale = Vector3.One()
			} else {
				glowTranform.scale = Vector3.Zero()
			}

            playSFXSound(SFX.gunColorSwitchSoundEntity, true)
		}
	}
}

export function resetGunGlowColor(){
    const glowEntities = engine.getEntitiesWith(GlowColorComponent)
    for (const [entity, glow] of glowEntities) {
        const glowTranform = Transform.getMutable(entity)
        
        if (glow.color == PortalColor.Blue) 
            glowTranform.scale = Vector3.One()
        else 
            glowTranform.scale = Vector3.Zero()
    }
}
/**
 * create portals
 */

let gunRayHitResult: DeepReadonlyObject<RaycastHit> | undefined = undefined
let isProcessingGunRay: boolean = false

//let shootInterval = 0

let neighbor:Entity[] = []

// //WORKAROUND, RAYCAST WITH CONTINUOUS TRUE, 1ST RESULT IS PREVIOUS HIT RAYCAST.
// let previousRayHitPos: Vector3 = Vector3.Zero()

let debugNormal = engine.addEntity()
GltfContainer.create(debugNormal, resources.models.debugArrow)
let debugUpelativeNormal = engine.addEntity()
GltfContainer.create(debugUpelativeNormal, resources.models.debugArrow)

export function gunSystem(dt: number) {
    if(GAME_STATE.state !== State.PLAYING) return
    // if(isMenuUIShown()) return

	const result = inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN)
    //shootInterval += dt * 1000

	if (result && !isProcessingGunRay && GAME_STATE.gun && !GAME_STATE.activeBox && !GAME_STATE.grabbedTurret && !GAME_STATE.grabbedKitten){ //&& shootInterval > 500) {
        isProcessingGunRay = true

        //console.log("game play. gun. pointer down result:", result)
        let delayProcessCount = 0

		raycastSystem.registerGlobalDirectionRaycast(
			{
				entity: engine.CameraEntity,
				opts: {
					queryType: RaycastQueryType.RQT_HIT_FIRST,
					direction: Vector3.rotate(Vector3.Forward(), Transform.get(engine.CameraEntity).rotation),
					maxDistance: 200,
                    collisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_CUSTOM3, //wall and glass wall
                    continuous: true
				},
			},
			function (raycastResult) {
                delayProcessCount += 1
                if(delayProcessCount < 2) return
				//console.log("game play. gun. raycast result:", raycastResult?.hits[0])
                
                if(raycastResult && raycastResult.hits[0] && raycastResult.hits[0].entityId && raycastResult.hits[0].normalHit && raycastResult.hits[0].position){
                    raycastSystem.removeRaycasterEntity(engine.CameraEntity)

                    let isPortable = PortableFlagComponent.getOrNull(raycastResult.hits[0].entityId as Entity) !== null

                    // init recoil only in first person mode                        
                    if(CameraMode.get(engine.CameraEntity).mode == CameraType.CT_FIRST_PERSON){
                        const gunEntites = engine.getEntitiesWith(GunDataComponent)
                        for (const [entity] of gunEntites) {
                            const gunData = GunDataComponent.getMutable(entity)        
                            gunData.active = true
                            gunData.recoilFactor = 0 
                            let audio = resources.sounds.portalBlast
                            switch(Math.floor(Math.random()*3)){
                                case 0: audio = resources.sounds.portalBlast; break;
                                case 1: audio = resources.sounds.portalBlast2; break;
                                case 2: audio = resources.sounds.portalBlast3; break;
                            }
                            AudioSource.createOrReplace(entity, { audioClipUrl: audio , playing: true, loop: false })
                        }
                    }

                    // spawn a projectile
                    if(raycastResult.hits[0].position && !ButtonDataComponent.has(raycastResult.hits[0].entityId as Entity)){
                        const playerPos = Transform.get(engine.PlayerEntity).position
                        const startPosition = Vector3.add(playerPos, Vector3.rotate(Vector3.create(0.35, 0.6,0.1),Transform.get(engine.CameraEntity).rotation))
                        spawnProjectile(startPosition, raycastResult.hits[0].position, GAME_STATE.activePortal )
                    }

                    if(isPortable){
                        //handlePortalRay(raycastResult)
                        gunRayHitResult = raycastResult.hits[0]

                        
                        let hitResult = raycastResult.hits[0]
                        let hitPos = hitResult.position as Vector3
                        let hitPosRelativeCenter = Vector3.subtract(hitPos, CONFIG.centerGround)
                        let normalHit = hitResult.normalHit as Vector3
                        
                        //         for(let i = 0; i < neighbor.length; i++){
                        //             Transform.getMutable(neighbor[i]).scale = Vector3.create(1, 1, 1)
                        //         }

                        // console.log("GUNT TEST. HIT POS: ", hitPos)
                        
                        neighbor = []
                        let foundX = false
                        for(let i = 0; i < OBJECT_GRABBED_CONFIG.collisionEntityList.length; i++){
                            let collisionCheckTransform = Transform.get(OBJECT_GRABBED_CONFIG.collisionEntityList[i])
                            let collisionCheckPos = collisionCheckTransform.position
                            let collisionCheckRot = collisionCheckTransform.rotation
                            
                            if(collisionCheckPos.x < hitPosRelativeCenter.x + 4 && collisionCheckPos.x > hitPosRelativeCenter.x - 4){
                                foundX = true
                                if(collisionCheckPos.z < hitPosRelativeCenter.z + 4 && collisionCheckPos.z > hitPosRelativeCenter.z - 4){
                                    if(collisionCheckPos.y < hitPosRelativeCenter.y + 4 && collisionCheckPos.y > hitPosRelativeCenter.y - 4){
                                        //have to do this, because wall and floor has different original orientation
                                        let wallData = WallDataComponent.get(OBJECT_GRABBED_CONFIG.collisionEntityList[i])
                                        if(wallData.type === WallType.FLOOR_PORTABLE || wallData.type === WallType.FLOOR_UNPORTABLE){ 
                                            collisionCheckRot = Quaternion.multiply(collisionCheckRot, Quaternion.fromEulerDegrees(-90, 0, 0))
                                        }

                                        let isNormalSame = false
                                        if(Vector3.dot(normalHit, Vector3.rotate(Vector3.Forward(), collisionCheckRot)) > 0.9){
                                            isNormalSame = true
                                        }

                                        let isPortable = PortableFlagComponent.getOrNull(OBJECT_GRABBED_CONFIG.collisionEntityList[i]) !== null
                                        if(isPortable && isNormalSame)
                                            neighbor.push(OBJECT_GRABBED_CONFIG.collisionEntityList[i])
                                    }
                                }
                            }
                            else{
                                if(foundX) break
                            }
                        }

                                // console.log("GUNT TEST. NEIGHBOUR: ", neighbor)
                                // for(let i = 0; i < neighbor.length; i++){
                                // Transform.getMutable(neighbor[i]).scale = Vector3.create(0.9, 0.9, 0.9)
                                // }

                        let portalOffset = Vector3.Zero()

                        let hitEntity = hitResult.entityId as Entity
                        let hitEntityTransform = Transform.get(hitEntity)
                        
                        let portalRadius = 1.5
                        if((hitPosRelativeCenter.x + portalRadius) > (hitEntityTransform.position.x + 2))
                            portalOffset.x = (hitPosRelativeCenter.x + portalRadius) - (hitEntityTransform.position.x + 2)
                        else if((hitPosRelativeCenter.x - portalRadius) < (hitEntityTransform.position.x - 2))
                            portalOffset.x = (hitPosRelativeCenter.x - portalRadius) - (hitEntityTransform.position.x - 2)

                        if((hitPosRelativeCenter.y + portalRadius) > (hitEntityTransform.position.y + 2))
                            portalOffset.y = (hitPosRelativeCenter.y + portalRadius) - (hitEntityTransform.position.y + 2)
                        else if((hitPosRelativeCenter.y - portalRadius) < (hitEntityTransform.position.y - 2))
                            portalOffset.y = (hitPosRelativeCenter.y - portalRadius) - (hitEntityTransform.position.y - 2)
                        
                        if((hitPosRelativeCenter.z + portalRadius) > (hitEntityTransform.position.z + 2))
                            portalOffset.z = (hitPosRelativeCenter.z + portalRadius) - (hitEntityTransform.position.z + 2)
                        else if((hitPosRelativeCenter.z - portalRadius) < (hitEntityTransform.position.z - 2))
                            portalOffset.z = (hitPosRelativeCenter.z - portalRadius) - (hitEntityTransform.position.z - 2)
                        
                        let neigborToCheck = {
                            x: false,
                            y: false,
                            z: false
                        }
                        
                        if(portalOffset.x > 0 || portalOffset.x < 0) neigborToCheck.x = true
                        if(portalOffset.y > 0 || portalOffset.y < 0) neigborToCheck.y = true
                        if(portalOffset.z > 0 || portalOffset.z < 0) neigborToCheck.z = true

                        for(let i = 0; i < neighbor.length; i++){
                            if(neighbor[i] === hitEntity) continue

                            let neighborTransform = Transform.get(neighbor[i])
                            if(neigborToCheck.x){
                                if(helper.isNumberABSameSide(neighborTransform.position.x - hitEntityTransform.position.x, portalOffset.x, 0) &&
                                    Math.abs(neighborTransform.position.y - hitEntityTransform.position.y) < 4 &&
                                    Math.abs(neighborTransform.position.z - hitEntityTransform.position.z) < 4
                                ){
                                    portalOffset.x = 0
                                }
                            }
                            if(neigborToCheck.y){
                                if(helper.isNumberABSameSide(neighborTransform.position.y - hitEntityTransform.position.y, portalOffset.y, 0) &&
                                    Math.abs(neighborTransform.position.x - hitEntityTransform.position.x) < 4 &&
                                    Math.abs(neighborTransform.position.z - hitEntityTransform.position.z) < 4
                                ){
                                    portalOffset.y = 0
                                }
                            }
                            if(neigborToCheck.z){
                                if(helper.isNumberABSameSide(neighborTransform.position.z - hitEntityTransform.position.z, portalOffset.z, 0) &&
                                    Math.abs(neighborTransform.position.x - hitEntityTransform.position.x) < 4 &&
                                    Math.abs(neighborTransform.position.y - hitEntityTransform.position.y) < 4
                                ){
                                    portalOffset.z = 0
                                }
                            }
                        }

                        console.log("GUN TEST PORTAL OFFSET:", portalOffset, "HIT POS RELATIVE CENTER:", hitPosRelativeCenter, "ENTITY POS:", hitEntityTransform.position)
                        
                        let isHitFlipWall: boolean = false
                        if(FlipWallDataComponent.has(hitEntity)) isHitFlipWall = true

                        movePortal(GAME_STATE.activePortal, 
                            {
                                position: Vector3.subtract(hitPos, portalOffset), 
                                rotation: Quaternion.fromLookAt(Vector3.Zero(), normalHit),
                                scale: Vector3.scale(Vector3.One(), 1.25)
                            },
                            normalHit,
                            neighbor,
                            isHitFlipWall? hitEntity : undefined
                        )
                        
                        isProcessingGunRay = false
                    }
                    else{
                        isProcessingGunRay = false
                        raycastSystem.removeRaycasterEntity(engine.CameraEntity)
                    }
                }
                else{
                    isProcessingGunRay = false
                    raycastSystem.removeRaycasterEntity(engine.CameraEntity)
    
                    console.log("GUN SHOOT RESET PORTAL RAY CONFIG", isProcessingGunRay)
                }
			}
		)
	}
    else{
        if(result) console.log("GUN SHOOT STILL PROCESSING PREVIOUS RAYCAST", result, !isProcessingGunRay, GAME_STATE.gun, !GAME_STATE.activeBox)//, shootInterval)
    }

    if(GAME_STATE.gun){
        //start recoil animation
        const gunEntites = engine.getEntitiesWith(GunDataComponent)

        for (const [entity, gunData] of gunEntites) {

            if(gunData.active){
                const gunTransform = Transform.getMutable(entity)     
                const gunDataMutable = GunDataComponent.getMutable(entity)    
                
                gunDataMutable.recoilFactor += gunData.recoilSpeed * dt 

                if(gunDataMutable.recoilFactor > 1){
                    //gunDataMutable.recoilFactor = 1
                    gunDataMutable.recoilFactor = 1
                    gunDataMutable.active = false
                }               
                
                //gunTransform.position = Vector3.lerp( gunDataMutable.recoilPosition, gunDataMutable.restPosition, 1 - Math.pow(1 - gunDataMutable.recoilFactor, 3))
                gunTransform.position = Vector3.lerp( gunDataMutable.recoilPosition, gunDataMutable.restPosition, 1 - Math.pow(1 - gunDataMutable.recoilFactor, 3))
                gunTransform.rotation = Quaternion.slerp( gunDataMutable.recoilRotation, gunDataMutable.restRotation,  easeOutBack(gunDataMutable.recoilFactor  ) )
                
            }
                  
        }

        //start projectile animation
        const projectiles = engine.getEntitiesWith(ProjctileComponent)

        for (const [entity, projData] of projectiles) {

            if(projData.active){
                const projTransform = Transform.getMutable(entity)     
                const projDataMutable= ProjctileComponent.getMutable(entity)    
                
                projDataMutable.factor += 5 * dt

                if(projDataMutable.factor > 1){                    
                    projDataMutable.factor = 1
                    projDataMutable.active = false
                    projTransform.scale = Vector3.Zero()
                }

                projTransform.position = Vector3.lerp( projDataMutable.startPosition, projDataMutable.targetPosition, projDataMutable.factor)
                
                
                
            }
                  
        }
    }
}

export function checkGunSystem(){
    if(isMenuUIShown()){
        if(GAME_STATE.getIsGunAdded()){
            GAME_STATE.removeGunSystem()
        }
    }else{
        if(!GAME_STATE.getIsGunAdded() && GAME_STATE.state === State.PLAYING){
            console.log('adding gun system')
            GAME_STATE.addGunSystem()
        }
    }
}