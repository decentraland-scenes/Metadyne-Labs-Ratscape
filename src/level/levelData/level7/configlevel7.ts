import { Quaternion, Vector3 } from "@dcl/sdk/math"
import { BoxType, MiscObjectType, LabType, LevelSignType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType, IMiscObjectData, ILabData, ILevelSign, LaserFieldType, ILaserFieldData, LaserFieldRayState, AcidObjectType, IAcidObjectData, TurretObjectType, ITurretObjectData, FlipWallState, IFlipWallData } from "../../../gameObject/gameObjectType"

export const configlevel7: (IBoxData | IWallData | IFlipWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData | IMiscObjectData | ILabData | ILevelSign | ILaserFieldData | IAcidObjectData | ITurretObjectData)[] = [
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(56.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(24.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-6.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(40.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,44.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,44.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(72.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(72.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(72.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,40.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,40.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(36.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,34.0,-4.0),
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
        position: Vector3.create(-4.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,30.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,30.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,34.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,34.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(4.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,30.0,-4.0),
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
        position: Vector3.create(-6.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,30.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,30.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-24.0),
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
        position: Vector3.create(-0.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,30.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-2.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(2.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,30.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,34.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-6.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(72.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(72.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(72.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,30.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,42.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,34.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,34.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(32.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,30.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,34.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,30.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,34.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,30.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,30.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,34.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,34.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,38.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,30.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,34.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(22.0,38.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,38.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,34.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(20.0,30.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,34.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(16.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,30.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,34.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(18.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-0.0,30.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(54.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(36.0,34.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(38.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(36.0,38.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(38.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(24.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,30.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,30.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,30.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,30.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-44.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(58.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,30.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,34.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,30.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,34.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,30.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,34.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,30.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(58.0,34.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(54.0,34.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(50.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,34.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,34.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,30.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(28.0,30.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,30.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,34.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(40.0,30.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(36.0,30.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(40.0,30.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(38.0,30.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(36.0,26.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(40.0,26.0,8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(38.0,26.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(42.0,30.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(42.0,26.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(44.0,30.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(44.0,26.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(44.0,34.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,34.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(36.0,22.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(40.0,22.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(44.0,22.0,4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,34.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,22.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(46.0,22.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(36.0,22.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(40.0,22.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(44.0,22.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(34.0,22.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(34.0,22.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,26.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,26.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,30.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,30.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,34.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,34.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,38.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,26.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,30.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,26.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,30.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,26.0,2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,30.0,2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,18.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,18.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(34.0,18.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,18.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,18.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(46.0,18.0,2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,18.0,4.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,18.0,4.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,18.0,4.0),
        rotation: Quaternion.fromEulerDegrees(180.0,-0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(42.0,30.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(30.0,34.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0002,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(26.0,34.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,30.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,38.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(52.0,34.0,-32.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,34.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,30.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,34.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(56.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(60.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(72.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(72.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(72.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,34.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,30.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-60.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(64.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,30.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(74.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,30.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(66.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0004,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(68.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(38.0,30.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(38.0,30.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(38.0,34.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(38.0,34.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(38.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(38.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(58.0,30.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(40.0,18.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,18.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0003,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,18.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(180.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,38.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(48.0,42.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,42.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,42.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9997,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(38.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(42.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,38.0,-24.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9997,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(36.0,30.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9996,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(44.0,30.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9996,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(40.0,30.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9996,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,28.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,28.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,32.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(72.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(72.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,32.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,32.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,32.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,32.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,32.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,32.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,32.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,32.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,32.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,28.0,-6.0),
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
        position: Vector3.create(4.0,32.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(24.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(32.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,32.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,32.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,32.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(48.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,32.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(60.0,32.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,32.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(56.0,36.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,32.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,28.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,16.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,16.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,16.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,16.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,16.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(28.0,32.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(44.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(52.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(64.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(72.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(68.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,32.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,32.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,32.0,2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,32.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,24.0,6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(40.0,20.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(36.0,40.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(40.0,32.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: MiscObjectType.CONTROL_ROOM,
        position: Vector3.create(46.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(8, 4, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(60.0,40.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(44.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(40.0,44.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(44.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(40.0,44.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(44.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(40.0,44.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(48.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(44.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(40.0,44.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(60.0,40.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(60.0,40.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(28.0,40.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(32.0,40.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(8.0,40.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V2,
        position: Vector3.create(8.0,40.0,-42.0),
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
        type: LevelSignType.SIGN_DOOR_ENTRANCE,
        position: Vector3.create(-0.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 4)
    },
    {
        type: DoorType.DOOR_DEFAULT,
        position: Vector3.create(76.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 4),
        initial_state: DoorState.OPEN
    },
    {
        type: LevelSignType.SIGN_DOOR_EXIT,
        position: Vector3.create(76.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 4),
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(7.0,30.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(7.0,34.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(7.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(36.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,90.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(46.3831,30.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(46.3831,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(46.3831,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(36.0,32.57,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: ButtonType.BUTTON_FLOOR,
        position: Vector3.create(40.0,28.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(3, 0.2, 3),
        connector_line: '7_3_cl',
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(46.3831,30.0,-46.0319),
                rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
                dimension: Vector3.create(20.14719581604004,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(46.3831,34.0,-46.0319),
                rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
                dimension: Vector3.create(20.14719581604004,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            },
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(46.3831,38.0,-46.0319),
                rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
                dimension: Vector3.create(20.14719581604004,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: ButtonType.BUTTON_FLOOR,
        position: Vector3.create(56.0,28.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(3, 0.2, 3),
        connector_line: '7_4_cl',
        activating: [
            {
                type: StairType.STAIR_DEFAULT,
                position: Vector3.create(56.0,28.0,-52.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(4, 4, 4),
                initial_state: StairState.OFF
            }
        ]
    },
    {
        type: ButtonType.BUTTON_PEDESTAL,
        position: Vector3.create(36.0,28.0,-54.9623),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.5, 1.4, 0.5),
        connector_line: '7_2_cl',
        timer_second: 20,
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(36.0,34.0,-39.8448),
                rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
                dimension: Vector3.create(31.83477039337158,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: ButtonType.BUTTON_PEDESTAL,
        position: Vector3.create(5.0,28.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(0.5, 1.4, 0.5),
        connector_line: '7_1_cl',
        timer_second: 10,
        activating: [
            {
                type: WallType.FLIPWALL,
                position: Vector3.create(14.0,30.0,-42.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
                dimension: Vector3.create(4, 4, 0.04)
            }
        ]
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(40.0,24.56,5.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: AcidObjectType.ACID_DEFAULT,
        position: Vector3.create(40.0,15.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(16.0,4.74725341796875,9.525635719299316)
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,41.0,14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(14.313979148864746,14.313979148864746,19.077880859375),
        audio_src: 'sounds/level/voice_7_1.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(13.0,32.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(9.807708740234375,9.807708740234375,13.071857452392578),
        audio_src: 'sounds/level/voice_7_4.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(29.0,32.0,-64.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(13.050772666931152,9.807708740234375,7.847341060638428),
        audio_src: 'sounds/level/voice_7_3.mp3'
    },
    {
        type: LaserFieldType.LASER_FIELD_RAY,
        position: Vector3.create(7.0,38.0,-32.0275),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(40.11671600341797,3.31505,0.1),
        initial_state: LaserFieldRayState.ON
    },
    {
        type: LaserFieldType.LASER_FIELD_RAY,
        position: Vector3.create(7.0,34.0,-32.0275),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(40.11671600341797,3.31505,0.1),
        initial_state: LaserFieldRayState.ON
    },
    {
        type: LaserFieldType.LASER_FIELD_RAY,
        position: Vector3.create(7.0,30.0,-32.0275),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(40.11671600341797,3.31505,0.1),
        initial_state: LaserFieldRayState.ON
    },
    {
        type: TeleporterType.TELEPORTER_START,
        position: Vector3.create(0.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(0.0,36.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(11.769974708557129,11.769974708557129,11.769974708557129),
        audio_src: 'sounds/level/voice_7_0.mp3'
    },
    {
        type: LabType.LAB_START,
        position: Vector3.create(0.0,36.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(20, 12, 22)
    },
    {
        type: LevelSignType.SIGN_VERTICALBIG,
        position: Vector3.create(-5.8,41.3,4.2),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
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
        position: Vector3.create(0.0,36.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(0.0,36.0,10.0),
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
        position: Vector3.create(0.0,48.0,6.0),
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
        position: Vector3.create(-0.0,48.0,22.0),
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
        position: Vector3.create(0.0,42.0,4.0),
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
        position: Vector3.create(0.0,46.0,4.0),
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
        position: Vector3.create(92.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_FINISH,
        position: Vector3.create(78.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(12, 12, 22)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(88.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(92.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(96.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(80.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(84.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(88.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(92.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(96.0,28.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(88.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(92.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(96.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(80.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(84.0,28.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(80.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(84.0,28.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(88.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(92.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(96.0,40.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(88.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(92.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(96.0,40.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(88.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(92.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(96.0,40.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(80.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(84.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(80.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(84.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(179.9999,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(78.0,30.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(78.0,30.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(78.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(78.0,34.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(86.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(86.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,30.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,30.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,34.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,34.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(80.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(84.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(92.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(96.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(80.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(84.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(92.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(96.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,30.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(92.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(96.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(88.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(98.0,34.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(96.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(92.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(84.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(80.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(96.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(92.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(84.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(80.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(88.0,34.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(96.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(92.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(88.0,38.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(88.0,30.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9998,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(88.0,34.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(88.0,30.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(86.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(78.0,34.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    }
]