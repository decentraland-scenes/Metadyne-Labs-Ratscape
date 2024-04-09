import { ColliderLayer, GltfContainer, InputAction, Transform, engine, pointerEventsSystem } from "@dcl/sdk/ecs";
import { Vector3 } from "@dcl/sdk/math";
import { CONFIG } from "../config";
import { claimToken } from "../claim-dropin/claim";
import { updateWonReward } from "../ui/wonRewardUI";
import { rewardsdata } from "../rewardData";
import { displays } from "../ui/uiControls";


export function createCheeseShirt(){
    let cheeseShirt = engine.addEntity()
    GltfContainer.create(cheeseShirt, {
        src: 'models/cheese_shirt/cheeseTshirtRewardModel.glb',
        visibleMeshesCollisionMask: ColliderLayer.CL_POINTER | ColliderLayer.CL_PHYSICS
    })
    Transform.create(cheeseShirt, {
        parent: CONFIG.centerEntity,
        position: Vector3.create(0, 56, -90),
        scale: Vector3.create(2.5, 2.5, 2.5)
    })

    pointerEventsSystem.onPointerDown(
        {
            entity: cheeseShirt,
            opts:{
                button: InputAction.IA_POINTER,
                hoverText: "claim!"
                }
        },
        function(){
            let reward = rewardsdata.find((r:any)=> r.id === "thsirt")
            console.log("claim reward shirt. img data:", reward)
            updateWonReward(reward.img)
            claimToken('cheeseshirt')
            displays.active = "wonreward"

            pointerEventsSystem.removeOnPointerDown(cheeseShirt)
        }
    )
}