import { GltfContainer, Transform, engine } from "@dcl/sdk/ecs";
import { Vector3 } from "@dcl/sdk/math";
import { movePlayerTo } from "~system/RestrictedActions";


export function lockPositionInit(){
    let cube = engine.addEntity()
    Transform.create(cube, {
        position: Vector3.create(4, 4, 4),
        scale: Vector3.One()
    })
    GltfContainer.create(cube, { src: "models/lock_position.glb" })
}

export function lockPlayer(){
    movePlayerTo({newRelativePosition: Vector3.create(4, 4, 4)})
}