import { Quaternion, Vector3 } from "@dcl/sdk/math"
import { BoxType, MiscObjectType, LabType, LevelSignType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType, IMiscObjectData, ILabData, ILevelSign, LaserFieldType, ILaserFieldData, LaserFieldRayState, AcidObjectType, IAcidObjectData, TurretObjectType, ITurretObjectData, FlipWallState, IFlipWallData, CatObjectType, ICatObjectData } from "../../../gameObject/gameObjectType"

export const configlevel11: (IBoxData | IWallData | IFlipWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData | IMiscObjectData | ILabData | ILevelSign | ILaserFieldData | IAcidObjectData | ITurretObjectData | ICatObjectData)[] = [
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20,36,-10),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24,36,-10),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-1.0,43.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(14.92093276977539,14.92093276977539,19.564132690429688),
        audio_src: 'sounds/level/voice_11_1.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-1.0,43.0,-47.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(14.92093276977539,14.92093276977539,19.564132690429688),
        audio_src: 'sounds/level/voice_11_2.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-59.0,43.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(21.950538635253906,14.92093276977539,26.2009220123291),
        audio_src: 'sounds/level/voice_11_3.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-88.0,41.0,-35.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(12.917512893676758,12.917512893676758,22.68294906616211),
        audio_src: 'sounds/level/voice_11_4.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,43.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(14.92093276977539,14.92093276977539,19.564132690429688),
        audio_src: 'sounds/level/voice_11_0.mp3'
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-2.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-6.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(2.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(6.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-8.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-28.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-32.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-28.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-32.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-36.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-40.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-36.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-40.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-44.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-48.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,46.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-44.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-48.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-52.0,42.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-52.0,50.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-26.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-26.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-26.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-32.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-34.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-56.0,42.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-56.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-60.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-64.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-60.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-64.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-56.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-56.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-60.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-64.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-60.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-64.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-68.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-68.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-72.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-76.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-72.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-76.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-68.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-68.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-72.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-76.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-72.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-76.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-58.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-80.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-80.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-34.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-78.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-80.0,42.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-80.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-80.0,46.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-46.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,42.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-60.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-60.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-56.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-56.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-68.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-68.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-64.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-64.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-76.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-76.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-72.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-72.0,42.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-64.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-64.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-60.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-60.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-72.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-72.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-68.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-68.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-76.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-76.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-56.0,50.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-56.0,46.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-54.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-52.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-52.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-52.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-52.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-48.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-48.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-44.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-36.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,42.0,-56.0),
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
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-36.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-32.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-44.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-40.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-36.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-32.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-44.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-40.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-28.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,42.0,-56.0),
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
        position: Vector3.create(-20.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-56.0),
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
        position: Vector3.create(-16.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-12.0,50.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,46.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(4.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,42.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-4.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-34.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-2.0),
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
        position: Vector3.create(-0.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-22.0),
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
        position: Vector3.create(-8.0,36.0,-38.0),
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
        position: Vector3.create(-8.0,36.0,-30.0),
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
        position: Vector3.create(-8.0,36.0,-54.0),
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
        position: Vector3.create(-8.0,36.0,-46.0),
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
        position: Vector3.create(-4.0,36.0,-38.0),
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
        position: Vector3.create(-4.0,36.0,-30.0),
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
        position: Vector3.create(-4.0,36.0,-54.0),
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
        position: Vector3.create(-0.0,36.0,-26.0),
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
        position: Vector3.create(-0.0,36.0,-34.0),
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
        position: Vector3.create(-0.0,36.0,-42.0),
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
        position: Vector3.create(-0.0,36.0,-50.0),
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
        position: Vector3.create(4.0,36.0,-26.0),
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
        position: Vector3.create(4.0,36.0,-30.0),
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
        position: Vector3.create(4.0,36.0,-54.0),
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
        position: Vector3.create(-20.0,36.0,-26.0),
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
        position: Vector3.create(-20.0,36.0,-34.0),
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
        position: Vector3.create(-20.0,36.0,-42.0),
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
        position: Vector3.create(-20.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-46.0),
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
        position: Vector3.create(-16.0,36.0,-38.0),
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
        position: Vector3.create(-16.0,36.0,-30.0),
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
        position: Vector3.create(-16.0,36.0,-54.0),
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
        position: Vector3.create(-16.0,36.0,-46.0),
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
        position: Vector3.create(-12.0,36.0,-38.0),
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
        position: Vector3.create(-12.0,36.0,-30.0),
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
        position: Vector3.create(-12.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-46.0),
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
        position: Vector3.create(-28.0,36.0,-38.0),
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
        position: Vector3.create(-28.0,36.0,-30.0),
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
        position: Vector3.create(-28.0,36.0,-54.0),
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
        position: Vector3.create(-28.0,36.0,-46.0),
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
        position: Vector3.create(-24.0,36.0,-38.0),
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
        position: Vector3.create(-24.0,36.0,-30.0),
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
        position: Vector3.create(-24.0,36.0,-54.0),
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
        position: Vector3.create(-24.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,40.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,40.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,44.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,44.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,44.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,44.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,44.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-56.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-60.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-64.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-68.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-72.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-76.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-80.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,48.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,44.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,44.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,44.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(4.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-32.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-24.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-12.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(4.0,36.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-4.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: MiscObjectType.CONTROL_ROOM,
        position: Vector3.create(-80.0,50.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(8, 4, 4)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-26.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-32.0,42.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-32.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-32.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-28.0,42.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-28.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-28.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-34.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(4.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-0.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-72.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-68.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-64.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-56.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-52.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-36.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-32.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-20.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-16.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-40.0,52.0,-18.0),
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
        position: Vector3.create(-16.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-40.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-88.0,44.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-88.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(-88.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: DoorType.DOOR_DEFAULT,
        position: Vector3.create(-0.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 4),
        initial_state: DoorState.CLOSE
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-32.0,36.58,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-76,45,-22),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: ButtonType.BUTTON_FLOOR,
        position: Vector3.create(-28.0,40.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(3, 0.2, 3),
        connector_line: '11_2_cl',
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-26.0,44.0,-38.0),
                rotation: Quaternion.fromEulerDegrees(0,90,-90),
                dimension: Vector3.create(15.663261318206787,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: ButtonType.BUTTON_PEDESTAL,
        position: Vector3.create(2.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.5, 1.4, 0.5),
        connector_line: '11_1_cl',
        activating: [
            {
                type: StairType.STAIR_DEFAULT,
                position: Vector3.create(-22.0,36.0,-10.0),
                rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
                dimension: Vector3.create(4, 4, 4),
                initial_state: StairState.OFF
            }
        ]
    },
    {
        type: LaserType.LASER_EMITTER_RED,
        position: Vector3.create(-44.0,36.75,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-26.0,36.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-90.0,0.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-26.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-90.0,-0.0,-180.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserType.LASER_RECEIVER,
        position: Vector3.create(-82.0,36.73,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2),
        connector_line: '11_3_cl',
        activating: [
            {
                type: DoorType.DOOR_DEFAULT,
                position: Vector3.create(-88.0,36.0,-58.0),
                rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
                dimension: Vector3.create(4, 4, 4),
                initial_state: DoorState.CLOSE
            }
        ]
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-72.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-68.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-56.0,37.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-56.0,37.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-44.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-28.0,38.0,-21.7),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-28.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-20.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,49.2812,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-12.0,41.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-8.0,37.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-4.0,41.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-36.0,37.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(4.0,36.55,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: LevelSignType.SIGN_DOOR_EXIT,
        position: Vector3.create(-88.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.1, 0.1, 0.1)
    },
    {
        type: LevelSignType.SIGN_DOOR_ENTRANCE,
        position: Vector3.create(-0.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.1, 0.1, 0.1)
    },
    {
        type: TeleporterType.TELEPORTER_START,
        position: Vector3.create(0.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_START,
        position: Vector3.create(-0.0,36.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(20, 12, 22)
    },
    {
        type: LevelSignType.SIGN_VERTICALBIG,
        position: Vector3.create(-5.8,41.3,4.2),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(3, 6, 0.1)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(0.0,36.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(0.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(0.0,36.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,10.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,10.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,10.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(0.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,10.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,6.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,10.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,14.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,18.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,48.0,22.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,46.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,38.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,42.0,24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: TeleporterType.TELEPORTER_FINISH,
        position: Vector3.create(-88.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_FINISH,
        position: Vector3.create(-88.0,36.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(12, 12, 22)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,48.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,48.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,48.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,48.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,48.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-88.0,48.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,48.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,48.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,48.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-84.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-92.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0001,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,42.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,42.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,46.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,46.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,38.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,38.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-92.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-84.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,38.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,46.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,46.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,46.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,46.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-82.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-94.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,46.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-88.0,42.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    }
]