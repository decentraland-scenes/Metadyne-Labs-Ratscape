import { PBTextShape, TextShape, engine } from "@dcl/sdk/ecs";
import { ButtonTimerComponent } from "../components";
import { GAME_STATE } from "../gameData";
import { State } from "../gameObject/gameObjectType";
import { Color4 } from "@dcl/sdk/math";

let redColor = Color4.create(1, 0, 0, 1)
let whiteColor = Color4.create(1, 1, 1, 1)

let intervalCount = 0
let _INTERVAL = 0.3
export function ButtonTimerVisualSystem(dt: number){
    if(GAME_STATE.state !== State.PLAYING) return
    
    intervalCount += dt

    if(intervalCount < _INTERVAL) return
    

    const timerEntities = engine.getEntitiesWith(ButtonTimerComponent)

    for (const [entity] of timerEntities) {
        let timerData = ButtonTimerComponent.getMutable(entity)
        
        if(timerData.isActive){
            timerData.timerCountDown -= intervalCount

            let timerText = TextShape.getMutable(timerData.timerEntity)
            if(timerData.timerCountDown < 0){
                timerText.text = ""
            }
            else{
                timerText.text = Math.round(timerData.timerCountDown).toString()
            }
            if(Number(timerText.text) === 5){
                timerText.textColor = redColor
            }
        }
    }
    
    intervalCount = 0
}