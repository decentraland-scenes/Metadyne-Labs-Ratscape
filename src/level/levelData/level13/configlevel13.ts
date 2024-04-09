import { Quaternion, Vector3 } from "@dcl/sdk/math"
import { BoxType, MiscObjectType, LabType, LevelSignType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType, IMiscObjectData, ILabData, ILevelSign, LaserFieldType, ILaserFieldData, LaserFieldRayState, AcidObjectType, IAcidObjectData, TurretObjectType, ITurretObjectData, FlipWallState, IFlipWallData, CatObjectType, ICatObjectData } from "../../../gameObject/gameObjectType"

export const configlevel13: (IBoxData | IWallData | IFlipWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData | IMiscObjectData | ILabData | ILevelSign | ILaserFieldData | IAcidObjectData | ITurretObjectData | ICatObjectData)[] = [
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,41.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(23.332305908203125,12.917512893676758,12.744394302368164),
        audio_src: 'sounds/level/voice_13_0.mp3'
    },
    {
        type: LevelSignType.SIGN_DOOR_ENTRANCE,
        position: Vector3.create(-0.0,36.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.1, 0.1, 0.1)
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-18.2392,41.0,-67.3529),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(23.332305908203125,12.917512893676758,22.54634666442871),
        audio_src: 'sounds/level/voice_13_2.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(59.5552,50.0395,-37.6218),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(23.332305908203125,12.917512893676758,41.122745513916016),
        audio_src: 'sounds/level/voice_13_3.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-1.7801,45.8401,-15.6972),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(65.30583190917969,12.917512893676758,14.297344207763672),
        audio_src: 'sounds/level/voice_13_4.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0457,53.1134,14.9194),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(29.046403884887695,12.917512893676758,20.686504364013672),
        audio_src: 'sounds/level/voice_13_5.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,43.0,-89.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(14.174338340759277,18.825214385986328,17.395357131958008),
        audio_src: 'sounds/level/voice_13_1.mp3'
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(8.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(8.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(12.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(12.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(16.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(16.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(20.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(20.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(24.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(24.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(28.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(28.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(32.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(32.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(36.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(36.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(44.0,64.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(44.0,64.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,60.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,60.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,60.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,60.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,60.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,60.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,60.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,60.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,64.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,64.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(180.0,89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-16.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-16.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-16.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-16.0,44.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-20.0,44.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-24.0,44.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-28.0,44.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-28.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-28.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-28.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-28.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-16.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-24.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-20.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(20.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,68.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,68.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,68.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,68.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,68.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,68.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,68.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,68.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,68.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,68.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,68.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,50.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,50.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,50.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,46.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,46.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,46.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,46.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,54.0,-84.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,54.0,-84.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,54.0,-84.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,66.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,54.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,62.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,66.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,54.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,62.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,66.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,62.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,66.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,62.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,66.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,62.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,66.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,62.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,66.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,62.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,66.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,62.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,58.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,62.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,62.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,62.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,66.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,66.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,66.0,-96.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,50.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,54.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,54.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,54.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,50.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,54.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,54.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,54.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,58.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-18.0,62.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,58.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,62.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,58.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,62.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,58.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,62.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,62.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,58.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,62.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,62.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,58.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,62.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,58.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,62.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,58.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,62.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,58.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,58.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,58.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,62.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,62.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,62.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,26.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,46.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,58.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,58.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,58.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,50.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,54.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,54.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,54.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,54.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,54.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,30.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,34.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,30.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,34.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,26.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,26.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,26.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,26.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,26.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,26.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,26.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,26.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,30.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,34.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,26.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,26.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,50.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,54.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,54.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,58.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,58.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,54.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,54.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,58.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,58.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,50.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,54.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,50.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,54.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,46.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,46.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,54.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,54.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,54.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,54.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,54.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,54.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,54.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(70.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,50.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,54.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,46.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,54.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,54.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,54.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,54.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,54.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,58.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,54.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,58.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,54.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,58.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,46.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,50.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,54.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,54.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,58.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,54.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,58.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,54.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,58.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,54.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,54.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,58.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,66.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,66.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,66.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,62.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,62.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,62.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,58.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,58.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,58.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,54.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,54.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,54.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,50.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,50.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,50.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,38.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-14.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-14.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-8.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,54.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,54.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,42.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,42.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,46.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,46.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,50.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,50.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,54.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,54.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,58.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,58.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,58.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,62.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-10.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-10.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,62.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(14.0,58.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(14.0,58.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(14.0,62.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(14.0,62.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,58.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,58.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,62.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,62.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,62.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(24.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(24.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(20.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(20.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,58.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,62.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,50.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,46.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(30.0,50.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-10.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-10.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,46.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-30.0,50.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-8.0,38.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-4.0,38.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-0.0,38.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(4.0,38.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-28.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-28.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-16.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-16.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,56.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,56.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,56.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,40.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,40.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,40.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,40.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,24.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,24.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,24.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,24.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,48.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,48.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,48.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,48.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,48.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(44.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,48.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(68.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-0.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(12.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(4.0,52.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-4.0,52.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: MiscObjectType.CONTROL_ROOM,
        position: Vector3.create(32.0,50.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(8, 4, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(24.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(28.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(52.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(68.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(64.0,56.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(52.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(68.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(64.0,56.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(52.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(68.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(64.0,56.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(12.0,64.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,68.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(16.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(20.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-16.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-12.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(56.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(60.0,56.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(56.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(60.0,56.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(56.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(60.0,56.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(56.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(60.0,56.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: DoorType.DOOR_DEFAULT,
        position: Vector3.create(0.0,36.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 4),
        initial_state: DoorState.CLOSE
    },
    {
        type: ButtonType.BUTTON_FLOOR,
        position: Vector3.create(20.0,48.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(3, 0.2, 3),
        connector_line: '13_2_cl',
        activating: [
            {
                type: DoorType.DOOR_DEFAULT,
                position: Vector3.create(-0.0,48.0,10.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(4, 4, 4),
                initial_state: DoorState.CLOSE
            }
        ]
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(10.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-10.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(10.0,46.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-10.0,50.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(10.0,54.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-10.0,58.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserType.LASER_RECEIVER,
        position: Vector3.create(60.0,44.7537,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(2, 2, 0.2),
        connector_line: '13_1_cl',
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-0.0,38.0,-2.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(20.4,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-0.0,42.0,-2.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(20.4,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-0.0,46.0,-2.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(20.4,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-0.0,50.0,-2.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(20.4,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-0.0,54.0,-2.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(20.4,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-0.0,58.0,-2.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(20.4,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-10.0,37.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-21.9409,37.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: PlatformType.PLATFORM_LIGHT_EMITTER,
        position: Vector3.create(30.0,41.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(2, 0.04, 2)
    },
    {
        type: LaserType.LASER_EMITTER_RED,
        position: Vector3.create(46.0,44.7729,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(16.0,44.5997,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(47.0,44.5415,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(68.0,45.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(44.0,45.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: AcidObjectType.ACID_DEFAULT,
        position: Vector3.create(-0.0,24.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(60.446903228759766,10.531903266906738,22.16012954711914)
    },
    {
        type: LevelSignType.SIGN_DOOR_EXIT,
        position: Vector3.create(-0.0,48.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.1, 0.1, 0.1)
    },
    {
        type: TeleporterType.TELEPORTER_START,
        position: Vector3.create(-0.0,36.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_START,
        position: Vector3.create(0.0,36.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(20, 12, 22)
    },
    {
        type: LevelSignType.SIGN_VERTICALBIG,
        position: Vector3.create(5.8,41.3,-100.2),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(3, 6, 0.1)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(0.0,48.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-120.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-118.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-114.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-106.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-102.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-110.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: TeleporterType.TELEPORTER_FINISH,
        position: Vector3.create(-0.0,48.0,26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_FINISH,
        position: Vector3.create(-0.0,48.0,12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(12, 12, 22)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,22.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,26.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,60.0,30.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,22.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,26.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,60.0,30.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,22.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,26.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,60.0,30.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,14.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,56.0,18.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,14.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,56.0,18.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,54.0,12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,54.0,12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,54.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,54.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,58.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,58.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,58.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,54.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,54.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,54.0,26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,54.0,30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,50.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,58.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,54.0,32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,54.0,30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,54.0,26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,54.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,54.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,54.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,58.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,50.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,54.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,58.0,20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,54.0,12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    }
]