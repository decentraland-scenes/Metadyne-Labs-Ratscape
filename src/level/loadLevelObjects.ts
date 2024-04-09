import { GltfContainer, GltfContainerLoadingState, LoadingState, engine } from "@dcl/sdk/ecs"
import { GAME_STATE } from "../gameData"
import { createBox } from "../gameObject/box"
import { createButton } from "../gameObject/button"
import { createDoor } from "../gameObject/door"
import { AcidObjectType, BoxType, ButtonType, CatObjectType, DoorType, IAcidObjectData, IBoxData, IButtonData, ICatObjectData, IDoorData, IFlipWallData, ILabData, ILaserData, ILaserFieldData, ILevelSign, IMiscObjectData, IPlatformData, IStairData, ITeleporterData, ITurretObjectData, IVoiceOverData, IWallData, LabType, LaserFieldType, LaserType, LevelSignType, MiscObjectType, PlatformType, StairType, TeleporterType, TurretObjectType, VoiceOverType, WallType } from "../gameObject/gameObjectType"
import { createLab } from "../gameObject/lab"
import { createLaserEmitter, createLaserReceiver } from "../gameObject/laser"
import { createLightPlatform } from "../gameObject/lightplatform"
import { createMiscObj } from "../gameObject/misc"
import { createPlatform } from "../gameObject/platform"
import { createVoiceOverArea } from "../gameObject/soundVO"
import { createStair } from "../gameObject/stair"
import { createTeleporter } from "../gameObject/teleporter"
import { createWall } from "../gameObject/wall"
import { levelConfigCollection } from "./levelData"
import { createLaserField } from "../gameObject/laserField"
import { createSignObject } from "../gameObject/sign"
import { createAcidObj } from "../gameObject/acid"
import { createTurretObj } from "../gameObject/turret"
import { createFlipWall } from "../gameObject/flipWall"
import { createCat } from "../gameObject/kitten"
import { loadingObjectsSystem } from "./createLevel"

export function loadLevel(level: number | string){
    console.log("create level. add level objects. start")
    let LEVEL_DATA = levelConfigCollection[level as keyof typeof levelConfigCollection]

    let count = 0
    if(LEVEL_DATA){
        LEVEL_DATA.forEach((obj_data) => {
            count += 1
            if (Object.values(WallType).includes(obj_data.type as unknown as WallType)) {
                if(obj_data.type === WallType.FLIPWALL) createFlipWall(obj_data as unknown as IFlipWallData)
                else createWall(obj_data as unknown as IWallData)
            }
            else if (Object.values(BoxType).includes(obj_data.type as unknown as BoxType)) {
                createBox(obj_data as unknown as IBoxData)
            }
            else if (Object.values(ButtonType).includes(obj_data.type as unknown as ButtonType)) {
                createButton(obj_data as unknown as IButtonData)
            }
            else if (Object.values(PlatformType).includes(obj_data.type as unknown as PlatformType)) {
                if (obj_data.type as unknown as PlatformType === PlatformType.PLATFORM_LIGHT_EMITTER){
                    createLightPlatform(obj_data as unknown as IPlatformData)
                }
                else{
                    createPlatform(obj_data as unknown as IPlatformData)
                }
            }
            else if (Object.values(DoorType).includes(obj_data.type as unknown as DoorType)) {
                createDoor(obj_data as unknown as IDoorData)
            }
            else if (Object.values(StairType).includes(obj_data.type as unknown as StairType)) {
                createStair(obj_data as unknown as IStairData)
            }
            else if (Object.values(LaserType).includes(obj_data.type as unknown as LaserType)) {
                let obj = obj_data as unknown as ILaserData
                if(obj.type === LaserType.LASER_EMITTER || obj.type === LaserType.LASER_EMITTER_RED) createLaserEmitter(obj)
                else if (obj.type === LaserType.LASER_RECEIVER) createLaserReceiver(obj)
            }
            else if (Object.values(TeleporterType).includes(obj_data.type as unknown as TeleporterType)) {
                createTeleporter(obj_data as unknown as ITeleporterData)
            }
            else if (Object.values(VoiceOverType).includes(obj_data.type as unknown as VoiceOverType)) {
                createVoiceOverArea(obj_data as unknown as IVoiceOverData)
            }
            else if (Object.values(LabType).includes(obj_data.type as unknown as LabType)) {
                createLab(obj_data as unknown as ILabData)
            }
            else if (Object.values(MiscObjectType).includes(obj_data.type as unknown as MiscObjectType)) {
                createMiscObj(obj_data as unknown as IMiscObjectData)
            }
            else if (Object.values(LevelSignType).includes(obj_data.type as unknown as LevelSignType)) {
                createSignObject(obj_data as unknown as ILevelSign)
            }
            else if (Object.values(LaserFieldType).includes(obj_data.type as unknown as LaserFieldType)) {
                createLaserField(obj_data as unknown as ILaserFieldData)
            }
            else if (Object.values(AcidObjectType).includes(obj_data.type as unknown as AcidObjectType)) {
                createAcidObj(obj_data as unknown as IAcidObjectData)
            }
            else if (Object.values(TurretObjectType).includes(obj_data.type as unknown as TurretObjectType)) {
                createTurretObj(obj_data as unknown as ITurretObjectData)
            }
            else if (Object.values(CatObjectType).includes(obj_data.type as unknown as CatObjectType)) {
                createCat(obj_data as unknown as ICatObjectData)
            }
            //REMAINING ITEMS: -
        })
    }
    else{
        console.log("create level. add level objects. can't find level configuration.")
    }
    
    console.log("create level. add level objects. finish. objects count:", count)
}