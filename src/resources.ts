import { ColliderLayer, Material, PBGltfContainer, TextureWrapMode } from "@dcl/sdk/ecs"

//WALL
let floor_portable: PBGltfContainer = {src: "models/floor_portable.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let floor_unportable: PBGltfContainer = {src: "models/floor_unportable.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let floor_unportable_v1: PBGltfContainer = {src: "models/floor_variation1.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let floor_unportable_v2: PBGltfContainer = {src: "models/floor_variation2.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let wall_portable: PBGltfContainer = {src: "models/wall_portable.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let wall_unportable: PBGltfContainer = {src: "models/wall_unportable.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let glass_default: PBGltfContainer = {src: "models/glass_default.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM3 | ColliderLayer.CL_PHYSICS}
let glass_hole: PBGltfContainer = {src: "models/glass_hole.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM3 | ColliderLayer.CL_PHYSICS}
let flip_wall: PBGltfContainer = {src: "models/flip_wall.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let flip_wall_backarea: PBGltfContainer = {src: "models/flip_wall_backarea.glb"}
//BOX
let box_default: PBGltfContainer = {src: "models/box_default.glb"}
let box_mirror: PBGltfContainer = {src: "models/box_mirror.glb"}
let beamCross: PBGltfContainer = {src: "models/beamCross.glb"}
//GUN
let gun: PBGltfContainer = {src: "models/portalGun.glb"}
let gunBlueGlow: PBGltfContainer = {src: "models/portalGunBlueGlow.glb"}
let gunOrangeGlow: PBGltfContainer = {src: "models/portalGunOrangeGlow.glb"}
let glowTipBlue: PBGltfContainer = {src: "models/glowTipBlue.glb"}
let glowTipOrange: PBGltfContainer = {src: "models/glowTipOrange.glb"}
let gunProjectileBlue: PBGltfContainer = {src: "models/projectileBlue.glb"}
let gunProjectileOrange: PBGltfContainer = {src: "models/projectileOrange.glb"}
let beamShape: PBGltfContainer = {src: "models/beam.glb"}
//PORTAL //TODO: CHANGE NAMING TO GREEN INSTEAD OF BLUE
let portal_blue_inactive: PBGltfContainer = {src: "models/portalGreenInactive.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_NONE}
let portal_blue_active: PBGltfContainer = {src: "models/portalGreenActive.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM4}
let portal_orange_inactive: PBGltfContainer = {src: "models/portalRedInactive.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_NONE}
let portal_orange_active: PBGltfContainer = {src: "models/portalRedActive.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM4}
//BUTTON
let button_floor: PBGltfContainer = {src: "models/button_floor.glb"}
let button_pedestal: PBGltfContainer = {src: "models/button_pedestal.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
//PLATFORM
let platform_half: PBGltfContainer = {src: "models/platform_half.glb"}
let moving_platform_horizontal: PBGltfContainer = {src: "models/moving_platform.glb"}
let moving_platform_vertical: PBGltfContainer = {src: "models/elevator.glb"}
//PLATFORM-STATIC
let moving_platform_rail: PBGltfContainer = {src: "models/moving_platform_rail.glb"}
let base_platform_vertical: PBGltfContainer = {src: "models/elevatorbase.glb"}
//SPECIAL PLATFORM
let light_platform_emitter: PBGltfContainer = {src: "models/light_platform_emmiter.glb"}
let light_platform: PBGltfContainer = {src: "models/light_platform.glb"}

//DOOR
let door: PBGltfContainer = {src: "models/door.glb"}
let door_entrancesign: PBGltfContainer = {src: "models/doorentrancesign.glb"}
let door_exitsign: PBGltfContainer = {src: "models/doorexitsign.glb"}
//STAIR
let stair: PBGltfContainer = {src: "models/stair.glb"}
//LASER
let laser_emitter: PBGltfContainer = {src: "models/laser_emitter.glb"}
let laser_emitter_red: PBGltfContainer = {src: "models/laser_emitter_red.glb"}
let laser_receiver: PBGltfContainer = {src: "models/laser_receiver.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let laser_ray_red: PBGltfContainer = {src: "models/laser_red.glb"}
let laser_ray_green: PBGltfContainer = {src: "models/laser_green.glb"}
let laser_field_emitter: PBGltfContainer = {src: "models/laserField_emitter.glb"}
let laser_field_ray: PBGltfContainer = {src: "models/laserField_ray.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS}

//TELEPORTER
let teleporter: PBGltfContainer = {src: "models/teleporter.glb"}

//LABS
let labStart: PBGltfContainer = {src: "models/LabStartModels.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
let labFinish: PBGltfContainer = {src: "models/LabFinishModels.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
//CONTROL ROOM
let controlRoom: PBGltfContainer = {src: "models/controlroom.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_CUSTOM2 | ColliderLayer.CL_PHYSICS}
//SECURITY CAM
let securityCam: PBGltfContainer = {src: "models/securitycamera.glb"}

//ACID
let acid: PBGltfContainer = {src: "models/acid.glb"}
let acidBubbles: PBGltfContainer = {src: "models/bubbles.glb"}

//TURRET
let turret: PBGltfContainer = {src: "models/turret.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS | ColliderLayer.CL_POINTER}
let turretCharge: PBGltfContainer = {src: "models/turret_shoot_anim.glb"}

//KITTEN
let cat: PBGltfContainer = {src: "models/cat.glb", invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS | ColliderLayer.CL_POINTER}

//DEBUG
let debugArrow: PBGltfContainer = {src: "models/debug/arrow_green.glb"}

//SOUNDS
// GUN
let gunPickup = 'sounds/gun/gunPickup.mp3'
let portalBlast = 'sounds/gun/portal_blast.mp3'
let portalBlast2 = 'sounds/gun/portal_blast2.mp3'
let portalBlast3 = 'sounds/gun/portal_blast3.mp3'
let electricBeam = 'sounds/gun/electric_beam.mp3'

//SFX ATTACH TO PLAYER
let boxDrop = 'sounds/sfx/boxDrop.mp3'
let boxTake = 'sounds/sfx/boxTake.mp3'
let damageTaken = 'sounds/sfx/damagetaken.mp3'
let laserOn = 'sounds/sfx/laserOn.mp3'
let levelDoor = 'sounds/sfx/levelDoor.mp3'
let portalClose = 'sounds/sfx/portalClose.mp3'
let portalOpen = 'sounds/sfx/portalOpen.mp3'
let shot = 'sounds/sfx/shot.mp3'
let teleporterArrive = 'sounds/sfx/teleporterArrive.mp3'
let turretShot = 'sounds/sfx/turretShot.mp3'
let turretZone = 'sounds/sfx/onZone.mp3'
let buttonFloor = 'sounds/sfx/floorbutton.mp3'
let buttonPedestal = 'sounds/sfx/pedestalClick.mp3'
let stairSound = 'sounds/sfx/stair.mp3'
let lightPlatformPassThrough = 'sounds/sfx/lightplatpassthrough.mp3'
let click = 'sounds/click.mp3'
let reward = 'sounds/reward.mp3'
let toggle = 'sounds/toggle.mp3'
let cancel = 'sounds/cancel.mp3'

let playerDie = 'sounds/voice_dead.mp3'
let turretExplosion = 'sounds/sfx/turretExplosion.mp3'

let gunColorSwitch = 'sounds/sfx/gunSwitch.mp3'

    //additional
    let portalPlayerTeleport = 'sounds/sfx/portalTeleport.mp3'
    let portalFailed = 'sounds/sfx/portalFail.mp3'

//SFX ATTACH TO OBJECT
let teleporterSpark = 'sounds/sfx/teleporterSparks.mp3'
let laserEmitterSound = 'sounds/sfx/laseremmiter.mp3'
let platformMotorSound = 'sounds/sfx/platformMotor.mp3'
let laserFieldHummSound = 'sounds/sfx/teleporterSparks.mp3'
let teleporterDoorSound = 'sounds/sfx/teleporterDoor.mp3'

//MUSIC/AMBIENT
let sceneAmbient1 = 'sounds/ambient/ambient2.mp3'

//BUTTON
let buttonDown = 'sounds/button_down.mp3'

//AMBIENT
let ambientHum = 'sounds/ambient/ambient_hum.mp3'


//Textures

let acidColorTexture = Material.Texture.Common({ src: 'images/acid_basecolor.png',wrapMode: TextureWrapMode.TWM_REPEAT})
let acidNormalTexture = Material.Texture.Common({ src: 'images/acid_normal.png',wrapMode: TextureWrapMode.TWM_REPEAT})
let acidAlphaTexture = Material.Texture.Common({ src: 'images/acid_alpha.png',wrapMode: TextureWrapMode.TWM_REPEAT})



export default {
    models:{
        debugArrow,
        floor_portable,
        floor_unportable,
        floor_unportable_v1,
        floor_unportable_v2,
        wall_portable,
        wall_unportable,
        flip_wall,
        flip_wall_backarea,
        glass_default,
        glass_hole,
        box_default,
        box_mirror,
        beamCross,
        gun,
        gunBlueGlow,
        gunOrangeGlow,
        glowTipBlue,
        glowTipOrange,
        gunProjectileBlue,
        gunProjectileOrange,
        beamShape,
        portal_blue_inactive,
        portal_blue_active,
        portal_orange_inactive,
        portal_orange_active,
        button_floor,
        button_pedestal,
        platform_half,
        moving_platform_horizontal,
        moving_platform_vertical,
        moving_platform_rail,
        base_platform_vertical,
        light_platform,
        light_platform_emitter,
        laser_emitter,
        laser_emitter_red,
        laser_receiver,
        laser_field_emitter,
        laser_field_ray,
        laser_ray_red,
        laser_ray_green,
        teleporter,
        labStart,
        labFinish,
        controlRoom,
        securityCam,
        door,
        door_entrancesign,
        door_exitsign,
        stair,
        acid,
        acidBubbles,
        turret,
        turretCharge,
        cat
    },
    sounds:{
        gunPickup,
        portalBlast,
        portalBlast2,
        portalBlast3,
        buttonDown,
        ambientHum,
        electricBeam,
        click,
        cancel,
        toggle,
        reward,

        boxDrop,
        boxTake,
        damageTaken,
        laserOn,
        levelDoor,
        portalClose,
        portalOpen,
        shot,
        teleporterArrive,
        teleporterSpark,
        turretShot,
        turretZone,
        buttonPedestal,
        buttonFloor,
        stairSound,
        gunColorSwitch,
        lightPlatformPassThrough,
        laserEmitterSound,
        platformMotorSound,
        sceneAmbient1,
        laserFieldHummSound,
        teleporterDoorSound,
        
        portalPlayerTeleport,
        portalFailed,
        playerDie,
        turretExplosion
    },
    textures:{
        acidColorTexture,
        acidNormalTexture,
        acidAlphaTexture

    }   
}