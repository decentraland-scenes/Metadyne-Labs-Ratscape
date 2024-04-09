import { MeshRenderer, Transform, engine } from "@dcl/sdk/ecs";
import {  UVScrollComponent } from "../components";
import { GAME_STATE } from "../gameData";
import { State } from "../gameObject/gameObjectType";
import { Vector3 } from "@dcl/sdk/math";

// let _MOVINGPLATFORM_CONFIG = {
//     speed: 1.5 // m/s
// }

export function AcidUVScrollingSystem(dt: number){
    if(GAME_STATE.state !== State.PLAYING) return

    const uvPlanes = engine.getEntitiesWith(UVScrollComponent, MeshRenderer)

    for (const [entity] of uvPlanes) {  
        
        const uvInfo = UVScrollComponent.getMutable(entity)
        uvInfo.vShift +=dt * 0.2 * uvInfo.uSpeed
        uvInfo.uShift +=dt * 0.2 * uvInfo.vSpeed
        //MeshRenderer.deleteFrom
        MeshRenderer.setPlane(entity,  [
            uvInfo.uShift, uvInfo.vShift,
            uvInfo.uShift + uvInfo.multiplier * uvInfo.uMultiplier, uvInfo.vShift,
            uvInfo.uShift + uvInfo.multiplier * uvInfo.uMultiplier, uvInfo.vShift + uvInfo.multiplier * uvInfo.vMultiplier,
            uvInfo.uShift,  uvInfo.vShift + uvInfo.multiplier * uvInfo.vMultiplier,
            uvInfo.uShift, uvInfo.vShift,
            uvInfo.uShift + uvInfo.multiplier * uvInfo.uMultiplier, uvInfo.vShift,
            uvInfo.uShift + uvInfo.multiplier * uvInfo.uMultiplier, uvInfo.vShift + uvInfo.multiplier * uvInfo.vMultiplier,
            uvInfo.uShift,  uvInfo.vShift + uvInfo.multiplier * uvInfo.vMultiplier,

        ])
    }
}