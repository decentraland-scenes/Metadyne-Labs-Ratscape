import { Transform, engine } from "@dcl/sdk/ecs"
import { Quaternion, Vector3 } from "@dcl/sdk/math"

const ENV = "prod"
const DEBUG_FLAGS: Record<string,boolean> = {
    "local":true,
    "prd":false
}

const ParcelCountX: number = 20
const ParcelCountZ: number = 20
const sceneYRotation: number = 0

class Config {
    DEBUG_SCENE_ENABLED = DEBUG_FLAGS[ENV]
    DEBUG_PHYSIC_BODY_ENABLED = false
    DEBUG_WALL_ORIENTATION_ENABLED = false
    DEBUG_UNLOCKLEVELS_ENABLED = false
    DEBUG_PLAYER_IMMORTAL = false

    sizeXParcels: number = ParcelCountX
    sizeZParcels: number = ParcelCountZ
    dimensionX!: number
    dimensionY!: number
    dimensionZ!: number
    
    initAlready: boolean = false

    IN_PREVIEW = false
    FORCE_PREVIEW_ENABLED = true

    center!: Vector3
    centerGround!: Vector3

    centerEntity = engine.addEntity()

    prodServer:string = "https://us-central1-dcl-portal-game.cloudfunctions.net/app/"
    // debugServer:string = "http://127.0.0.1:5001/dcl-portal-game/us-central1/app/"
    debugServer:string = "https://us-central1-dcl-portal-game.cloudfunctions.net/app/"

    CONFIG_CLAIM_TESTING_ENABLED = DEBUG_FLAGS[ENV]

    init() {
        this.dimensionX = ParcelCountX * 16
        this.dimensionZ = ParcelCountZ * 16
        this.dimensionY = (Math.log((ParcelCountX * ParcelCountZ) + 1) * Math.LOG2E) * 20
        this.center = Vector3.create(this.dimensionX / 2, this.dimensionY / 2, this.dimensionZ / 2)
        this.centerGround = Vector3.create(this.dimensionX / 2, 0, this.dimensionZ / 2)

        Transform.create(this.centerEntity,{
            position: this.centerGround,
            rotation: Quaternion.fromEulerDegrees(0, sceneYRotation, 0)
        })
    }
}

export const CONFIG = new Config()

export function initConfig() {
    CONFIG.init()
    console.log('stage', CONFIG, "initConfig() with ")// + DEFAULT_ENV)
    console.log("init config", Transform.get(CONFIG.centerEntity).position)

    ////FIX THIS
    // getRealm({}).then((val: boolean) => {
    //     console.log("IN_PREVIEW", CONFIG.IN_PREVIEW, val)
    //     CONFIG.IN_PREVIEW = val || CONFIG.FORCE_PREVIEW_ENABLED
    // })
    return CONFIG
}
