import { Entity, GltfContainer, Transform, engine } from "@dcl/ecs";
import { Vector3 } from "@dcl/ecs-math";
import { PortalColor } from "./gameObjectType";
import resources from "../resources";
import { ProjctileComponent } from "../components";
import { IsLoadingObject } from "../level/createLevel";

let projectileBlue:Entity
let projectileOrange:Entity

export function createProjectiles(){
     projectileBlue = engine.addEntity()
     IsLoadingObject.create(projectileBlue)

    Transform.create(projectileBlue, {
        position: Transform.get(engine.PlayerEntity).position,
        rotation: Transform.get(engine.CameraEntity).rotation,
        scale: Vector3.Zero()
    })
    GltfContainer.create(projectileBlue, resources.models.gunProjectileBlue)

    projectileOrange = engine.addEntity()
    IsLoadingObject.create(projectileOrange)

    Transform.create(projectileOrange, {
        position: Transform.get(engine.PlayerEntity).position,
        rotation: Transform.get(engine.CameraEntity).rotation,
        scale: Vector3.Zero()
    })
    GltfContainer.create(projectileOrange, resources.models.gunProjectileOrange)
}


export function spawnProjectile(startPos:Vector3, targePos:Vector3, color: PortalColor){

    

    

    if(color == PortalColor.Blue){
        
        const transform = Transform.getMutable(projectileBlue)
        transform.rotation = Transform.get(engine.CameraEntity).rotation
        transform.scale = Vector3.create(1,1,3)
        ProjctileComponent.createOrReplace(projectileBlue, {
            active: true,
            factor: 0,
            startPosition: startPos,
            targetPosition: targePos
        })

    }
    else{
        const transform = Transform.getMutable(projectileOrange)
        transform.rotation = Transform.get(engine.CameraEntity).rotation
        transform.scale = Vector3.create(1,1,3)
        ProjctileComponent.createOrReplace(projectileOrange, {
            active: true,
            factor: 0,
            startPosition: startPos,
            targetPosition: targePos
        })
    }

    


}