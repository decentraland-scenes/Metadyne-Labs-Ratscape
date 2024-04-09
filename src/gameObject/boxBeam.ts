import { Entity, GltfContainer, Transform, engine, Billboard, AudioSource } from "@dcl/ecs";
import { Vector3 } from "@dcl/ecs-math";
import { PortalColor } from "./gameObjectType";
import resources from "../resources";
import { ProjctileComponent } from "../components";

let boxBeam:Entity


export function createBoxBeam(){
    boxBeam = engine.addEntity()     

    Transform.create(boxBeam, {
        position: Transform.get(engine.PlayerEntity).position,        
        scale: Vector3.Zero()
    })
    GltfContainer.create(boxBeam, resources.models.beamCross)
    Billboard.create(boxBeam)

    
}


export function activateBoxBeam(entity:Entity){    
        
        const transform = Transform.getMutable(boxBeam)
        transform.position = Vector3.Zero()
        transform.scale = Vector3.One()
        transform.parent = entity

        AudioSource.createOrReplace(boxBeam, { audioClipUrl: resources.sounds.electricBeam, playing: true, loop: true })

}

export function deactivateBoxBeam(entity:Entity){    
        
        const transform = Transform.getMutable(boxBeam)
        transform.position = Vector3.Zero()
        transform.scale = Vector3.Zero()
        transform.parent = entity
        AudioSource.getMutable(boxBeam).playing = false

}