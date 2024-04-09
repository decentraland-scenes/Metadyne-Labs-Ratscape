import { Transform, engine } from "@dcl/sdk/ecs";
import { ActiveMovingPlatform } from "../components";
import { GAME_STATE } from "../gameData";
import { State } from "../gameObject/gameObjectType";
import { Vector3 } from "@dcl/sdk/math";

let _MOVINGPLATFORM_CONFIG = {
    speed: 1.5 // m/s
}

export function MovingPlatformSystem(dt: number){
    if(GAME_STATE.state !== State.PLAYING) return

    for(const[entity] of engine.getEntitiesWith(ActiveMovingPlatform)){

        const platformTransform = Transform.getMutable(entity)
        let movingPlatformData = ActiveMovingPlatform.getMutable(entity)

        if(movingPlatformData.active){
            console.log("game play. moving platform system.", movingPlatformData.looping)
            let startPosition = movingPlatformData.paths[movingPlatformData.startIdx]
            let targetPosition = movingPlatformData.paths[movingPlatformData.targetIdx]

            let pathDiff = Vector3.subtract(targetPosition, startPosition)
            let currentPos = Vector3.subtract(platformTransform.position, startPosition)

            let dotProduct = Vector3.dot(pathDiff, currentPos)
            let fraction = dotProduct / Vector3.lengthSquared(pathDiff)

            fraction += dt * _MOVINGPLATFORM_CONFIG.speed / Vector3.length(pathDiff)

            if(fraction > 1){ //&& movingPlatformData.looping){
                if(movingPlatformData.deactivate && movingPlatformData.targetIdx === 0){
                    movingPlatformData.active = false
                    movingPlatformData.deactivate = false
                    movingPlatformData.startIdx = 0
                    movingPlatformData.targetIdx = 1
                }
                else {
                    if (movingPlatformData.looping || (!movingPlatformData.looping && movingPlatformData.targetIdx !== movingPlatformData.paths.length - 1)) {
                        movingPlatformData.startIdx = movingPlatformData.targetIdx
                        movingPlatformData.targetIdx = (movingPlatformData.targetIdx + 1) % movingPlatformData.paths.length
                    }
                }
            }
            else{
                platformTransform.position = Vector3.lerp(startPosition, targetPosition, fraction)
            }
        }
    }
}