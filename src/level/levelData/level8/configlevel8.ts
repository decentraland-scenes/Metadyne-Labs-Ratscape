import { Quaternion, Vector3 } from "@dcl/sdk/math"
import { BoxType, MiscObjectType, LabType, LevelSignType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType, IMiscObjectData, ILabData, ILevelSign, LaserFieldType, ILaserFieldData, LaserFieldRayState, AcidObjectType, IAcidObjectData, TurretObjectType, ITurretObjectData, FlipWallState, IFlipWallData } from "../../../gameObject/gameObjectType"

export const configlevel8: (IBoxData | IWallData | IFlipWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData | IMiscObjectData | ILabData | ILevelSign | ILaserFieldData | IAcidObjectData | ITurretObjectData)[] = [
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-14.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-14.0,46.0,-59.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(14.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(-0.0,36.56,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,52.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-0.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
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
        position: Vector3.create(-14.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-14.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,46.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(14.0,50.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,50.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(12.0,50.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,50.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,42.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,46.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,50.0,-76.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(14.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-14.0,38.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
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
        position: Vector3.create(12.0,36.0,-2.0),
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
        position: Vector3.create(-8.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-6.0),
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
        position: Vector3.create(12.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-8.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-12.0,36.0,-6.0),
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
        position: Vector3.create(4.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-10.0),
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
        position: Vector3.create(-0.0,36.0,-14.0),
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
        position: Vector3.create(4.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-14.0),
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
        position: Vector3.create(-12.0,36.0,-14.0),
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
        position: Vector3.create(4.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-18.0),
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
        position: Vector3.create(-12.0,36.0,-18.0),
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
        position: Vector3.create(4.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,36.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-22.0),
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
        position: Vector3.create(-12.0,36.0,-22.0),
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
        position: Vector3.create(-4.0,36.0,-26.0),
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
        position: Vector3.create(12.0,36.0,-26.0),
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
        position: Vector3.create(-8.0,36.0,-26.0),
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
        position: Vector3.create(-0.0,36.0,-30.0),
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
        position: Vector3.create(4.0,36.0,-30.0),
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
        position: Vector3.create(8.0,36.0,-30.0),
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
        position: Vector3.create(-12.0,36.0,-30.0),
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
        position: Vector3.create(-4.0,36.0,-34.0),
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
        position: Vector3.create(12.0,36.0,-34.0),
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
        position: Vector3.create(-8.0,36.0,-34.0),
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
        position: Vector3.create(-0.0,36.0,-38.0),
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
        position: Vector3.create(4.0,36.0,-38.0),
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
        position: Vector3.create(8.0,36.0,-38.0),
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
        position: Vector3.create(-12.0,36.0,-38.0),
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
        position: Vector3.create(-4.0,36.0,-42.0),
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
        position: Vector3.create(12.0,36.0,-42.0),
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
        position: Vector3.create(-8.0,36.0,-42.0),
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
        position: Vector3.create(-0.0,36.0,-46.0),
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
        position: Vector3.create(4.0,36.0,-46.0),
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
        position: Vector3.create(8.0,36.0,-46.0),
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
        position: Vector3.create(-12.0,36.0,-46.0),
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
        position: Vector3.create(-4.0,36.0,-50.0),
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
        position: Vector3.create(12.0,36.0,-50.0),
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
        position: Vector3.create(-8.0,36.0,-50.0),
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
        position: Vector3.create(-0.0,36.0,-54.0),
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
        position: Vector3.create(4.0,36.0,-54.0),
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
        position: Vector3.create(8.0,36.0,-54.0),
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
        position: Vector3.create(-12.0,36.0,-54.0),
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
        position: Vector3.create(12.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-58.0),
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
        position: Vector3.create(-12.0,36.0,-58.0),
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
        position: Vector3.create(12.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-62.0),
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
        position: Vector3.create(-12.0,36.0,-62.0),
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
        position: Vector3.create(-4.0,36.0,-66.0),
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
        position: Vector3.create(12.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-66.0),
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
        position: Vector3.create(-12.0,36.0,-66.0),
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
        position: Vector3.create(-4.0,36.0,-70.0),
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
        position: Vector3.create(12.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-70.0),
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
        position: Vector3.create(-12.0,36.0,-70.0),
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
        position: Vector3.create(-4.0,36.0,-74.0),
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
        position: Vector3.create(12.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,36.0,-74.0),
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
        position: Vector3.create(-12.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-0.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: MiscObjectType.CONTROL_ROOM,
        position: Vector3.create(2.0,50.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(8, 4, 4)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-0.0,38.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-12.0,38.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(12.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(8.0,38.0,-48.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-2.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(2.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(2.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-6.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(4.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-4.0,52.0,-66.0),
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
        type: LaserType.LASER_RECEIVER,
        position: Vector3.create(14.0,36.74,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2),
        connector_line: '8_1_cl',
        activating: [
            {
                type: DoorType.DOOR_DEFAULT,
                position: Vector3.create(-0.0,36.0,-78.0),
                rotation: Quaternion.fromEulerDegrees(0.0,0,0.0),
                dimension: Vector3.create(4, 4, 4),
                initial_state: DoorState.CLOSE
            }
        ]
    },
    {
        type: LevelSignType.SIGN_DOOR_EXIT,
        position: Vector3.create(-0.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0,0.0),
        dimension: Vector3.create(4, 4, 4)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-12.0,36.56,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: LaserType.LASER_EMITTER_RED,
        position: Vector3.create(-14.0,36.74,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-0.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(12.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-120.1301,-0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: TurretObjectType.TURRET_DEFAULT,
        position: Vector3.create(-12.0,38.0,-43.0),
        rotation: Quaternion.fromEulerDegrees(0.0,38.0,0.0),
        dimension: Vector3.create(4.2, 3, 2.4)
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,41.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(28.273225784301758,10.674860000610352,8.697827339172363),
        audio_src: 'sounds/level/voice_8_1.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,41.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(28.273225784301758,10.674860000610352,14.095375061035156),
        audio_src: 'sounds/level/voice_8_2.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,41.0,-56.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(28.273225784301758,10.674860000610352,17.84212303161621),
        audio_src: 'sounds/level/voice_8_3.mp3'
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
        audio_src: 'sounds/level/voice_8_0.mp3'
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
        position: Vector3.create(-0.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_FINISH,
        position: Vector3.create(0.0,36.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(12, 12, 22)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,36.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,48.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,48.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,48.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,44.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,44.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-88.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-88.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
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
        position: Vector3.create(-6.0,38.0,-86.0),
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
        position: Vector3.create(-6.0,38.0,-98.0),
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
        position: Vector3.create(-6.0,42.0,-86.0),
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
        position: Vector3.create(-6.0,42.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
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
        position: Vector3.create(-6.0,46.0,-98.0),
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
        position: Vector3.create(-0.0,42.0,-100.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,42.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-98.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-94.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,46.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(6.0,38.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
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
        position: Vector3.create(-6.0,38.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-88.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(0.0,42.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    }
]