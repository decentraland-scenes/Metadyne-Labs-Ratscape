import { AudioSource, AvatarAnchorPointType, AvatarAttach, Entity, GltfContainer, RaycastQueryType, Schemas, Transform, engine, raycastSystem } from "@dcl/sdk/ecs"
import resources from "../resources"
import { Vector3 } from "@dcl/sdk/math"
import { GAME_STATE } from "../gameData"

let SFX_VOLUME_CONTROL = 1
let MUSIC_VOLUME_CONTROL = 1

const boxDropSoundEntity = engine.addEntity()
Transform.create(boxDropSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(boxDropSoundEntity, {
    audioClipUrl: resources.sounds.boxDrop,
    loop: false,
    playing: false
})

const boxTakeSoundEntity = engine.addEntity()
Transform.create(boxTakeSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(boxTakeSoundEntity, {
    audioClipUrl: resources.sounds.boxTake,
    loop: false,
    playing: false
})

const turretShotSoundEntity = engine.addEntity()
Transform.create(turretShotSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(turretShotSoundEntity, {
    audioClipUrl: resources.sounds.turretShot,
    loop: false,
    playing: false
})

const onTurretZoneSoundEntity = engine.addEntity()
Transform.create(onTurretZoneSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(onTurretZoneSoundEntity, {
    audioClipUrl: resources.sounds.turretZone,
    loop: false,
    playing: false
})

const damageTakenSoundEntity = engine.addEntity()
Transform.create(damageTakenSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(damageTakenSoundEntity, {
    audioClipUrl: resources.sounds.damageTaken,
    loop: false,
    playing: false
})

const pedestalButtonSoundEntity = engine.addEntity()
Transform.create(pedestalButtonSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(pedestalButtonSoundEntity, {
    audioClipUrl: resources.sounds.buttonPedestal,
    loop: false,
    playing: false
})

const floorButtonSoundEntity = engine.addEntity()
Transform.create(floorButtonSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(floorButtonSoundEntity, {
    audioClipUrl: resources.sounds.buttonFloor,
    loop: false,
    playing: false
})

const stairSoundEntity = engine.addEntity()
Transform.create(stairSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(stairSoundEntity, {
    audioClipUrl: resources.sounds.stairSound,
    loop: false,
    playing: false
})

const portalCloseSoundEntity = engine.addEntity()
Transform.create(portalCloseSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(portalCloseSoundEntity, {
    audioClipUrl: resources.sounds.portalClose,
    loop: false,
    playing: false
})

const portalOpenSoundEntity = engine.addEntity()
Transform.create(portalOpenSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(portalOpenSoundEntity, {
    audioClipUrl: resources.sounds.portalOpen,
    loop: false,
    playing: false
})

const portalTeleportSoundEntity = engine.addEntity()
Transform.create(portalTeleportSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(portalTeleportSoundEntity, {
    audioClipUrl: resources.sounds.portalPlayerTeleport,
    loop: false,
    playing: false
})

const portalFailedSoundEntity = engine.addEntity()
Transform.create(portalFailedSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(portalFailedSoundEntity, {
    audioClipUrl: resources.sounds.portalPlayerTeleport,
    loop: false,
    playing: false
})

const levelDoorSoundEntity = engine.addEntity()
Transform.create(levelDoorSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(levelDoorSoundEntity, {
    audioClipUrl: resources.sounds.levelDoor,
    loop: false,
    playing: false
})

const gunColorSwitchSoundEntity = engine.addEntity()
Transform.create(gunColorSwitchSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(gunColorSwitchSoundEntity, {
    audioClipUrl: resources.sounds.gunColorSwitch,
    loop: false,
    playing: false
})

const teleporterArriveSoundEntity = engine.addEntity()
Transform.create(teleporterArriveSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(teleporterArriveSoundEntity, {
    audioClipUrl: resources.sounds.teleporterArrive,
    loop: false,
    playing: false
})

const lightPlatformSoundEntity = engine.addEntity()
Transform.create(lightPlatformSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(lightPlatformSoundEntity, {
    audioClipUrl: resources.sounds.lightPlatformPassThrough,
    loop: false,
    playing: false
})

const teleporterDoorSoundEntity = engine.addEntity()
Transform.create(teleporterDoorSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(teleporterDoorSoundEntity, {
    audioClipUrl: resources.sounds.teleporterDoorSound,
    loop: false,
    playing: false
})

const turretExplosionSoundEntity = engine.addEntity()
Transform.create(turretExplosionSoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(turretExplosionSoundEntity, {
    audioClipUrl: resources.sounds.turretExplosion,
    loop: false,
    playing: false
})
// const laserOnSoundEntity = engine.addEntity()
// AvatarAttach.create(laserOnSoundEntity,{
//     anchorPointId: AvatarAnchorPointType.AAPT_POSITION,
// })
// const laserOnSound = AudioSource.create(laserOnSoundEntity, {
//     audioClipUrl: resources.sounds.laserOn
// })

// const shotSoundEntity = engine.addEntity()
// AvatarAttach.create(shotSoundEntity,{
//     anchorPointId: AvatarAnchorPointType.AAPT_POSITION,
// })
// const shotSound = AudioSource.create(shotSoundEntity, {
//     audioClipUrl: resources.sounds.shot
// })


const clickUISoundEntity = engine.addEntity()
Transform.create(clickUISoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(clickUISoundEntity, {
    audioClipUrl: resources.sounds.click,
    loop: false,
    playing: false
})

const toggleUISoundEntity = engine.addEntity()
Transform.create(toggleUISoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(toggleUISoundEntity, {
    audioClipUrl: resources.sounds.toggle,
    loop: false,
    playing: false
})

const rewardUISoundEntity = engine.addEntity()
Transform.create(rewardUISoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(rewardUISoundEntity, {
    audioClipUrl: resources.sounds.reward,
    loop: false,
    playing: false
})

const cancelUISoundEntity = engine.addEntity()
Transform.create(cancelUISoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(cancelUISoundEntity, {
    audioClipUrl: resources.sounds.cancel,
    loop: false,
    playing: false
})

const playerDieVoiceEntity = engine.addEntity()
Transform.create(playerDieVoiceEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(playerDieVoiceEntity, {
    audioClipUrl: resources.sounds.playerDie,
    loop: false,
    playing: false
})

const sceneAmbient1SoundEntity = engine.addEntity()
Transform.create(sceneAmbient1SoundEntity, {
    parent: engine.PlayerEntity,
    position: Vector3.Zero()
})
AudioSource.create(sceneAmbient1SoundEntity, {
    audioClipUrl: resources.sounds.sceneAmbient1,
    loop: true,
    playing: false
}) 

export const SFX = {
    boxDropSoundEntity,
    boxTakeSoundEntity,
    damageTakenSoundEntity,
    // laserOnSound,
    levelDoorSoundEntity,

    portalCloseSoundEntity,
    portalOpenSoundEntity,
    portalTeleportSoundEntity,
    portalFailedSoundEntity,
    // shotSound,
    teleporterArriveSoundEntity,
    turretShotSoundEntity,
    onTurretZoneSoundEntity,
    pedestalButtonSoundEntity,
    floorButtonSoundEntity,
    stairSoundEntity,
    lightPlatformSoundEntity,

    teleporterDoorSoundEntity,
    turretExplosionSoundEntity,
    
    gunColorSwitchSoundEntity,
    clickUISoundEntity,
    cancelUISoundEntity,
    toggleUISoundEntity,
    rewardUISoundEntity,
    
    //AMBIENT
    sceneAmbient1SoundEntity,

    //voice
    playerDieVoiceEntity
}

export function playSFXSound(sfxEntity: Entity, playing: boolean, parent?: Entity){
    if(GAME_STATE.sfxSound){
        let sfxAudio = AudioSource.getMutable(sfxEntity)
        
        if(parent) Transform.getMutable(sfxEntity).parent = parent
        else Transform.getMutable(sfxEntity).parent = engine.PlayerEntity

        if(playing) sfxAudio.playing = false
        //console.log("SFX PLAYING")
        sfxAudio.volume = SFX_VOLUME_CONTROL
        sfxAudio.playing = playing
    }
}

export function setSFXVolume(vol: number){
    SFX_VOLUME_CONTROL = vol
}



export function playAmbientSound(ambientEntity: Entity, playing: boolean){
    if(GAME_STATE.sfxSound){
        let ambientAudio = AudioSource.getMutable(ambientEntity)
        //if(playing) sfxAudio.playing = false
        //ambientEntity.volume = SFX_VOLUME_CONTROL
        ambientAudio.loop = true
        ambientAudio.playing = playing
    }
}


export function stopAllAmbientSounds(){
    let ambientAudio = AudioSource.getMutable(sceneAmbient1SoundEntity)
    ambientAudio.playing = false
}