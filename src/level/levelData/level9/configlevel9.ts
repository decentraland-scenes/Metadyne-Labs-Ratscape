import { Quaternion, Vector3 } from "@dcl/sdk/math"
import { BoxType, MiscObjectType, LabType, LevelSignType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType, IMiscObjectData, ILabData, ILevelSign, LaserFieldType, ILaserFieldData, LaserFieldRayState, AcidObjectType, IAcidObjectData, TurretObjectType, ITurretObjectData, FlipWallState, IFlipWallData, CatObjectType, ICatObjectData } from "../../../gameObject/gameObjectType"

export const configlevel9: (IBoxData | IWallData | IFlipWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData | IMiscObjectData | ILabData | ILevelSign | ILaserFieldData | IAcidObjectData | ITurretObjectData | ICatObjectData)[] = [
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-54.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-54.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-14.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: MiscObjectType.SECURITY_CAM,
        position: Vector3.create(-0.0,46.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-2.0),
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
        position: Vector3.create(-8.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-2.0),
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
        position: Vector3.create(-16.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-2.0),
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
        position: Vector3.create(-4.0,52.0,-6.0),
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
        position: Vector3.create(-52.0,52.0,-6.0),
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
        position: Vector3.create(-16.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-10.0),
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
        position: Vector3.create(-8.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-10.0),
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
        position: Vector3.create(-20.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-14.0),
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
        position: Vector3.create(-8.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-14.0),
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
        position: Vector3.create(-16.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-4.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-18.0),
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
        position: Vector3.create(-8.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,52.0,-22.0),
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
        position: Vector3.create(-8.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-22.0),
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
        position: Vector3.create(-4.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(4.0,52.0,-26.0),
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
        position: Vector3.create(-8.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,52.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,-180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-24.0,52.0,-46.0),
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
        position: Vector3.create(-54.0,38.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-54.0,42.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-54.0,46.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(10.0,50.0,-2.0),
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
        position: Vector3.create(-52.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,42.0,-0.0),
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
        position: Vector3.create(-52.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,50.0,-0.0),
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
        position: Vector3.create(-16.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-0.0),
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
        position: Vector3.create(-16.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,42.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,46.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,50.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(10.0,50.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(10.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-54.0,42.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-54.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-54.0,42.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-54.0,46.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
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
        position: Vector3.create(-14.0,50.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,50.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,50.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,50.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,50.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
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
        position: Vector3.create(-14.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-14.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,38.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,42.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,46.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-10.0,50.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,38.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,42.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,46.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-8.0,50.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,38.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,42.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,46.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-4.0,50.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,38.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,42.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,46.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-0.0,50.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,38.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,42.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,46.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(4.0,50.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,38.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,42.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,46.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(8.0,50.0,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,38.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,38.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,50.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,46.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,38.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,42.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,46.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-12.0,50.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,38.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,50.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-22.0,38.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-22.0,42.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-22.0,46.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-22.0,50.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-40.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-36.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-28.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-24.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,42.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-20.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,46.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-16.0,50.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,42.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,46.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,50.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,38.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,42.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,42.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,46.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,50.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,46.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,50.0,-68.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-16.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-20.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-24.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_PORTABLE,
        position: Vector3.create(-28.0,38.0,-52.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,38.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,42.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,46.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,50.0,-36.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,38.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,42.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,46.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-32.0,50.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-179.9999,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-34.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-34.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-34.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-34.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,42.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,46.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-30.0,50.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,89.9999,0.0),
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
        position: Vector3.create(-52.0,36.0,-2.0),
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
        position: Vector3.create(-16.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-2.0),
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
        position: Vector3.create(-52.0,36.0,-6.0),
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
        position: Vector3.create(-16.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-20.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-36.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-40.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-6.0),
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
        position: Vector3.create(-52.0,36.0,-10.0),
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
        position: Vector3.create(-20.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-24.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
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
        position: Vector3.create(-44.0,36.0,-10.0),
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
        position: Vector3.create(-52.0,36.0,-14.0),
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
        position: Vector3.create(-16.0,36.0,-14.0),
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
        position: Vector3.create(-24.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-28.0,36.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-14.0),
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
        position: Vector3.create(-40.0,36.0,-14.0),
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
        position: Vector3.create(-48.0,36.0,-14.0),
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
        position: Vector3.create(-52.0,36.0,-18.0),
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
        position: Vector3.create(-28.0,36.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-32.0,36.0,-18.0),
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
        position: Vector3.create(-40.0,36.0,-18.0),
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
        position: Vector3.create(-48.0,36.0,-18.0),
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
        position: Vector3.create(-52.0,36.0,-22.0),
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
        position: Vector3.create(-28.0,36.0,-22.0),
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
        position: Vector3.create(-52.0,36.0,-26.0),
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
        position: Vector3.create(-20.0,36.0,-26.0),
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
        position: Vector3.create(-28.0,36.0,-26.0),
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
        position: Vector3.create(-52.0,36.0,-30.0),
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
        position: Vector3.create(-20.0,36.0,-30.0),
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
        position: Vector3.create(-28.0,36.0,-30.0),
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
        position: Vector3.create(-52.0,36.0,-34.0),
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
        position: Vector3.create(-20.0,36.0,-34.0),
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
        position: Vector3.create(-28.0,36.0,-34.0),
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
        position: Vector3.create(-52.0,36.0,-38.0),
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
        position: Vector3.create(-20.0,36.0,-38.0),
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
        position: Vector3.create(-28.0,36.0,-38.0),
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
        position: Vector3.create(-52.0,36.0,-42.0),
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
        position: Vector3.create(-20.0,36.0,-42.0),
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
        position: Vector3.create(-28.0,36.0,-42.0),
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
        position: Vector3.create(-52.0,36.0,-46.0),
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
        position: Vector3.create(-20.0,36.0,-46.0),
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
        position: Vector3.create(-28.0,36.0,-46.0),
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
        position: Vector3.create(-36.0,36.0,-46.0),
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
        position: Vector3.create(-44.0,36.0,-46.0),
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
        position: Vector3.create(-52.0,36.0,-50.0),
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
        position: Vector3.create(-20.0,36.0,-50.0),
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
        position: Vector3.create(-28.0,36.0,-50.0),
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
        position: Vector3.create(-36.0,36.0,-50.0),
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
        position: Vector3.create(-44.0,36.0,-50.0),
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
        position: Vector3.create(-52.0,36.0,-54.0),
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
        position: Vector3.create(-48.0,36.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-58.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-62.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-66.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: MiscObjectType.CONTROL_ROOM,
        position: Vector3.create(-56.0,46.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(8, 4, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-0.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-8.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-16.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-24.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-32.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-30.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-34.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-42.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-40.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-48.0,52.0,-50.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-32.0,52.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE_V1,
        position: Vector3.create(-32.0,52.0,-26.0),
        rotation: Quaternion.fromEulerDegrees(-180.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: LevelSignType.SIGN_DOOR_ENTRANCE,
        position: Vector3.create(-0.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.1, 0.1, 0.1)
    },
    {
        type: LevelSignType.SIGN_DOOR_EXIT,
        position: Vector3.create(-48.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.1, 0.1, 0.1)
    },
    {
        type: DoorType.DOOR_DEFAULT,
        position: Vector3.create(-0.0,36.0,2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(4, 4, 4),
        initial_state: DoorState.CLOSE
    },
    {
        type: DoorType.DOOR_DEFAULT,
        position: Vector3.create(-48.0,36.0,-70.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 4),
        initial_state: DoorState.OPEN
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-54.0,38.0,-54.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-0.0,36.55,-26.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: LaserType.LASER_EMITTER_RED,
        position: Vector3.create(10.0,36.7312,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: LaserType.LASER_RECEIVER,
        position: Vector3.create(-4.0,36.7322,-28.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(2, 2, 0.2),
        connector_line: '9_1_cl',
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-12.0,38.0154,-8.0),
                rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
                dimension: Vector3.create(16.320000648498535,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-12.0,38.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-12.0,38.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserType.LASER_EMITTER_RED,
        position: Vector3.create(-24.0,36.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-90.0,-90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-14.0,38.0,-38.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserFieldType.LASER_FIELD_EMITTER,
        position: Vector3.create(-32.0,38.0,-40.0),
        rotation: Quaternion.fromEulerDegrees(0.0,180.0,0.0),
        dimension: Vector3.create(0.75, 3.75, 0.4)
    },
    {
        type: LaserType.LASER_RECEIVER,
        position: Vector3.create(-54.0,37.5,-42.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2),
        connector_line: '9_3_cl',
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-48.0,38.0,-54.0),
                rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
                dimension: Vector3.create(12.04584002494812,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: LaserType.LASER_RECEIVER,
        position: Vector3.create(-20.0,37.7357,-20.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(2, 2, 0.2),
        connector_line: '9_2_cl',
        activating: [
            {
                type: LaserFieldType.LASER_FIELD_RAY,
                position: Vector3.create(-22.0,38.007,-38.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(16.320000648498535,3.31505,0.1),
                initial_state: LaserFieldRayState.ON
            }
        ]
    },
    {
        type: LaserFieldType.LASER_FIELD_RAY,
        position: Vector3.create(-32.0,38.0,-46.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(12.315227937698364,3.31505,0.1),
        initial_state: LaserFieldRayState.ON
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-16.0,36.56,-50.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-28.0,36.56,-42.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(4.0,44.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(19.538219451904297,19.538219451904297,19.538219451904297),
        audio_src: 'sounds/level/voice_9_1.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-27.0,44.0,-9.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(11.51712417602539,19.538219451904297,19.538219451904297),
        audio_src: 'sounds/level/voice_9_2.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-23.0,44.0,-45.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(25.553590774536133,20.495874404907227,20.495874404907227),
        audio_src: 'sounds/level/voice_9_3.mp3'
    },
    {
        type: VoiceOverType.VOICEOVER_DEFAULT,
        position: Vector3.create(-0.0,42.0,18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(11.881906509399414,11.881906509399414,11.881906509399414),
        audio_src: 'sounds/level/voice_9_0.mp3'
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
        position: Vector3.create(-0.0,36.0,14.0),
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
        position: Vector3.create(-48.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: LabType.LAB_FINISH,
        position: Vector3.create(-48.0,36.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0,0.0),
        dimension: Vector3.create(12, 12, 22)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,36.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,48.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,48.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,48.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,48.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,48.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-48.0,48.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,48.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,48.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,48.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,44.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-44.0,44.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,44.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-52.0,44.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-0.0,180.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,38.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,38.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,38.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,42.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,42.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-52.0,46.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-44.0,46.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,46.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,38.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,46.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,42.0,-92.0),
        rotation: Quaternion.fromEulerDegrees(0.0,0.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-78.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-74.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,42.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-90.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-86.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,46.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-42.0,38.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-89.9998,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,42.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-54.0,38.0,-82.0),
        rotation: Quaternion.fromEulerDegrees(0.0,90.0001,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,46.0,-80.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_UNPORTABLE,
        position: Vector3.create(-48.0,42.0,-72.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(4, 4, 0.04)
    }
]