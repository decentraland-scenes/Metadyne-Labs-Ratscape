import { Animator, AudioSource, ColliderLayer, Entity, GltfContainer, Material, MeshCollider, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import { AcidObjectType, IAcidObjectData, ILabData, IMiscObjectData, LabType, MiscObjectType } from "./gameObjectType"
import resources from "../resources"
import { CONFIG } from "../config"
import { BoxDataComponent, CatDataComponent, PortableFlagComponent, UVScrollComponent, WallDataComponent } from "../components"
import { createGlassHolePhysicBody, createWallBodyPhysic } from "../gameSystem/physic/createBody"
import { Color3, Color4, Quaternion, Vector3 } from "@dcl/sdk/math"
import * as CANNON from 'cannon/build/cannon'
import { IsLoadingObject } from "../level/createLevel"
import * as utils from '@dcl-sdk/utils'
import { GAME_STATE } from "../gameData"
import { HealthDamageType, _CONFIG_HEALTH } from "../gameSystem/healthSystem"
import { SFX, playSFXSound } from "./soundFX"
import { catDie } from "./kitten"
import { boxBodiesList } from "./box"
import { world } from "../gameSystem/physic/physicSetup"
import { stopVO } from "./soundVO"

export function createAcidObj(acidData: IAcidObjectData){

    //check if acid was placed upsidedown before export (plane export should be fixed later on)
    let acidDir =  Vector3.rotate(Vector3.Up(), acidData.rotation)    
    let acidY = (acidDir.y >0)?(acidData.position.y +  acidData.dimension.y):acidData.position.y
    
    let acid = engine.addEntity()    
    Transform.create(acid, {
        parent:CONFIG.centerEntity,
        position: { x: acidData.position.x, y: acidY , z: acidData.position.z},
        rotation:  Quaternion.multiply( Quaternion.create(acidData.rotation.x, acidData.rotation.y,acidData.rotation.z,acidData.rotation.w),Quaternion.fromEulerDegrees(-90,0,0)),
        scale: { x: acidData.dimension.x , y: acidData.dimension.z , z: acidData.dimension.y }
    })

    let acid2 = engine.addEntity()  

    Transform.create(acid2, {
        parent:CONFIG.centerEntity,
        position: { x: acidData.position.x, y: acidY - 1, z: acidData.position.z},
        rotation:  Quaternion.multiply( Quaternion.create(acidData.rotation.x, acidData.rotation.y,acidData.rotation.z,acidData.rotation.w),Quaternion.fromEulerDegrees(-90,0,0)),
        scale: { x: acidData.dimension.x , y: acidData.dimension.z , z: acidData.dimension.y }
    })

    let acid3 = engine.addEntity()    
    Transform.create(acid3, {
        parent:CONFIG.centerEntity,
        position: { x: acidData.position.x, y: acidY - 2, z: acidData.position.z},
        rotation:  Quaternion.multiply( Quaternion.create(acidData.rotation.x, acidData.rotation.y,acidData.rotation.z,acidData.rotation.w),Quaternion.fromEulerDegrees(-90,0,0)),
        scale: { x: acidData.dimension.x , y: acidData.dimension.z , z: acidData.dimension.y }
    })
    
    //ADD Entity to loading system
    IsLoadingObject.create(acid)
    IsLoadingObject.create(acid2)
    IsLoadingObject.create(acid3)
    
    switch(acidData.type){
        case AcidObjectType.ACID_DEFAULT:
            console.log("load level. create object: acid:", acid)

            
            //GltfContainer.create(acid, resources.models.acid)
            MeshRenderer.setPlane(acid)
            Material.setPbrMaterial(acid, {
                texture: resources.textures.acidColorTexture,
                bumpTexture: resources.textures.acidNormalTexture,
                metallic:0.8,
                roughness:0.05,
                specularIntensity: 1,
                alphaTexture: resources.textures.acidAlphaTexture,
                castShadows: false
            })
            UVScrollComponent.create(acid ,{
                uShift: 0,
                vShift: 0,
                multiplier: 1,
                uMultiplier: 0.3 * acidData.dimension.z,
                vMultiplier:0.3 * acidData.dimension.x,
                uSpeed: 0.4,
                vSpeed: 0.3,
            })

            MeshRenderer.setPlane(acid2)
            Material.setPbrMaterial(acid2, {
                texture: resources.textures.acidColorTexture,
                bumpTexture: resources.textures.acidNormalTexture,
                metallic:0.8,
                roughness:0.05,
                specularIntensity: 1,
                alphaTexture: resources.textures.acidAlphaTexture,
                castShadows: false
            })
            UVScrollComponent.create(acid2 ,{
                uShift: 0,
                vShift: 0,
                multiplier: 1,
                uMultiplier: 0.2 * acidData.dimension.z,
                vMultiplier:0.2 * acidData.dimension.x,
                uSpeed: 0.5,
                vSpeed: -0.2
            })

            MeshRenderer.setPlane(acid3)
            Material.setPbrMaterial(acid3, {
                texture: resources.textures.acidColorTexture,
                bumpTexture: resources.textures.acidNormalTexture,
                metallic:0.8,
                roughness:0.05,
                alphaTexture: resources.textures.acidAlphaTexture
            })
            UVScrollComponent.create(acid3 ,{
                uShift: 0,
                vShift: 0,
                multiplier: 1,
                uMultiplier: 0.15 * acidData.dimension.z,
                vMultiplier:0.15 * acidData.dimension.x,
                uSpeed: -0.8,
                vSpeed: -0.1
            })

            let acidTriggerAreaEntity = engine.addEntity()
            Transform.create(acidTriggerAreaEntity, {
                parent:CONFIG.centerEntity,
                position: { x: acidData.position.x, y: acidData.position.y, z: acidData.position.z}
            })
            IsLoadingObject.create(acidTriggerAreaEntity)

            utils.triggers.addTrigger(
                acidTriggerAreaEntity,
                utils.NO_LAYERS,
                utils.LAYER_1 | utils.LAYER_3 | utils.LAYER_2,
                [
                    {
                        type: 'box',
                        position: { x: 0, y: acidData.dimension.y / 2, z: 0},
                        scale: { x: Math.abs(acidData.dimension.x) - 0.5, y: Math.abs(acidData.dimension.y) - 0.5, z: Math.abs(acidData.dimension.z) - 0.5 }
                    }
                ],
                (enterEntity)=>{
                    if(enterEntity === 1){
                        console.log("gameplay. player enter acid:", enterEntity)
                        stopVO()
                        _CONFIG_HEALTH.isAcidDamage = true
                        _CONFIG_HEALTH.addDPS(HealthDamageType.ACID)
                    }
                    else{
                        console.log("gameplay. object enter acid:", enterEntity)
                        if(CatDataComponent.getOrNull(enterEntity)){
                            catDie(enterEntity)
                        }
                        if(BoxDataComponent.getOrNull(enterEntity)){
                            
                            let boxStartPosition = BoxDataComponent.get(enterEntity).position
                            Transform.getMutable(enterEntity).scale = Vector3.Zero()
                            
                            boxBodiesList[enterEntity].position.set(boxStartPosition.x, boxStartPosition.y, boxStartPosition.z)
                            boxBodiesList[enterEntity].velocity.set(0, 0, 0)
                            world.remove(boxBodiesList[enterEntity])

                            utils.tweens.startScaling(enterEntity, Vector3.Zero(), Vector3.One(), 0.5, utils.InterpolationType.EASEINEXPO, () => {
                                world.addBody(boxBodiesList[enterEntity])
                            })
                        }
                    }
                },
                (exitEntity) => {
                    if(exitEntity === 1){
                        if(CONFIG.DEBUG_SCENE_ENABLED) _CONFIG_HEALTH.removeDPS(HealthDamageType.ACID)
                    }
                },
                    Color3.Magenta()
            )
            GAME_STATE._TRIGGER_AREA_LIST.push(acidTriggerAreaEntity)
            
            //Remove this if bubble not needed
            createAcidBubble(acidData.position, acidData.dimension)

            break
    }
    return acid
}

function createAcidBubble(centerPos: Vector3, dimension: Vector3){
    console.log("load level. create acid bubble", centerPos, dimension)
    let maxRangeX = dimension.x / 2 - 1.5
    let maxRangeZ = dimension.z / 2 - 1.5
    
    let totalBubbles = 1 + Math.floor(dimension.x * dimension.z / 9 / 4)
    console.log("load level. create acid bubble:", maxRangeX, maxRangeZ, totalBubbles, centerPos.y + dimension.y - 5)

    for(let i = 0; i < totalBubbles; i++){
        let bubble = engine.addEntity()
        GltfContainer.create(bubble, resources.models.acidBubbles)

        let xPos = centerPos.x + dimension.x * Math.random() - dimension.x / 2
        let zPos = centerPos.z + dimension.z * Math.random() - dimension.z / 2
        let yPos = centerPos.y + dimension.y - 6 + Math.random()

        Animator.create(bubble, {
            states:[
                {
                clip: "Animation",
                playing: false,
                loop: true
                },
            ]
            })

        Transform.create(bubble, {
            parent: CONFIG.centerEntity,
            position: Vector3.create(xPos, yPos, zPos),
            scale: Vector3.scale(Vector3.One(), 0.3 * Math.random() + 0.8),
            rotation: Quaternion.create(0, 360 * Math.random(), 0)
        })

        IsLoadingObject.create(bubble)
            
        utils.timers.setTimeout(() => {
            let bubbleAnim = Animator.getClip(bubble, "Animation")
            bubbleAnim.speed = 0.4 + Math.random() * 0.6
            bubbleAnim.playing = true
        }, 5000 * Math.random())
    }
}