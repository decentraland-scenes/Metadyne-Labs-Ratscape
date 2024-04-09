import { Transform, engine } from "@dcl/sdk/ecs"
import { BoxDataComponent, CatDataComponent } from "../components"
import * as utils from '@dcl-sdk/utils'
import { Vector3 } from "@dcl/sdk/math"
import { boxBodiesList, boxList } from "../gameObject/box"
import { world } from "./physic/physicSetup"
import { catBodiesList } from "../gameObject/kitten"
import { GAME_STATE } from "../gameData"
import { State } from "../gameObject/gameObjectType"
import { movePlayerTo } from "~system/RestrictedActions"


//Objects: box, cat
let checkInterval = 2 //check every 2 second
let intervalCount = 0
export function ResetFallObjectSystem(dt: number){
    intervalCount += dt
    if(intervalCount < checkInterval) return

    intervalCount = 0

    for (const [boxEnt] of engine.getEntitiesWith(BoxDataComponent, Transform)) {
        let boxYPos = Transform.get(boxEnt).position.y

        if(boxYPos > -1) continue

        console.log("gameplay. box fall below ground.", Transform.get(boxEnt).position, BoxDataComponent.get(boxEnt).position)
        
        let boxStartPosition = BoxDataComponent.get(boxEnt).position
        Transform.getMutable(boxEnt).scale = Vector3.Zero()
        
        boxBodiesList[boxEnt].position.set(boxStartPosition.x, boxStartPosition.y, boxStartPosition.z)
        boxBodiesList[boxEnt].velocity.set(0, 0, 0)
        world.remove(boxBodiesList[boxEnt])

        utils.tweens.startScaling(boxEnt, Vector3.Zero(), Vector3.One(), 0.5, utils.InterpolationType.EASEINEXPO, () => {
            world.addBody(boxBodiesList[boxEnt])
        })
    }
    
    for (const [catEnt] of engine.getEntitiesWith(CatDataComponent, Transform)) {
        let catYPos = Transform.get(catEnt).position.y

        if(catYPos > -1) continue

        console.log("gameplay. cat fall below ground.", Transform.get(catEnt).position, CatDataComponent.get(catEnt).position)
        
        let catxStartPosition = CatDataComponent.get(catEnt).position
        Transform.getMutable(catEnt).scale = Vector3.Zero()

        catBodiesList[catEnt].position.set(catxStartPosition.x, catxStartPosition.y, catxStartPosition.z)
        catBodiesList[catEnt].velocity.set(0, 0, 0)
        world.remove(catBodiesList[catEnt])

        utils.tweens.startScaling(catEnt, Vector3.Zero(), Vector3.One(), 0.5, utils.InterpolationType.EASEINEXPO, () => {
            world.addBody(catBodiesList[catEnt])
        })
    }
    
    if(GAME_STATE.currentLevel > 0 && GAME_STATE.state === State.PLAYING && Transform.get(engine.PlayerEntity).position.y < 1.75){
        console.log("gameplay. player fall outside scene level", Transform.get(engine.PlayerEntity).position, State[GAME_STATE.state], GAME_STATE.currentLevel)
        movePlayerTo({newRelativePosition: GAME_STATE.levelStartPosition, cameraTarget: GAME_STATE.levelStartCameraTarget})
    }
}