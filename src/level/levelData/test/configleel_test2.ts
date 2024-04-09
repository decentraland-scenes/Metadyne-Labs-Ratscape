import { Quaternion, Vector3 } from "@dcl/sdk/math"
import { BoxType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType } from "../../../gameObject/gameObjectType"

export const configtest: (IBoxData | IWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData)[] = [
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-6.0,0.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,0.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,0.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,4.0,8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,4.0,8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,0.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,4.0,8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(2.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(2.0,0.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,4.0,8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,0.0,4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-2.0,0.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(2.0,0.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-10.0,0.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-14.0,0.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(2.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(2.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,2.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(90.0,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,2.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(90.0,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-6.0,0.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-10.0,0.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-14.0,0.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(2.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(6.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: PlatformType.PLATFORM_RAIL,
        position: Vector3.create(-2.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 1, 0.2)
    },
    {
        type: PlatformType.PLATFORM_RAIL,
        position: Vector3.create(2.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 1, 0.2)
    },
    {
        type: PlatformType.PLATFORM_RAIL,
        position: Vector3.create(6.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 1, 0.2)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-2.0,4.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,4.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,4.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-14.0,4.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,2.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(16.0,2.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: PlatformType.PLATFORM_RAIL,
        position: Vector3.create(10.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 1, 0.2)
    },
    {
        type: PlatformType.PLATFORM_RAIL,
        position: Vector3.create(14.0,2.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 1, 0.2)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,4.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-0.0,6.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(6.0,6.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,6.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(12.0,6.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(90.0,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,4.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,4.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,4.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(14.0,0.0,-8.01),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(10.0,0.0,-8.01),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(6.0,0.0,-8.01),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(2.0,6.0,-18.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,6.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,6.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,6.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,6.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,2.0,-10.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(18.0,0.0,-8.01),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(20.0,2.0,-8.01),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,90.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(-2.0,0.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(2.0,0.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(6.0,0.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(6.0,0.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,2.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,2.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(6.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(6.0,0.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,6.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,6.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_PORTABLE,
        position: Vector3.create(20.0,6.0,-8.01),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,90.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,6.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,6.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,6.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,6.0,-22.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(20.0,6.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,2.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,2.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,6.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(8.0,6.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(90.0,-90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,2.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,6.0,-6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: LaserType.LASER_EMITTER,
        position: Vector3.create(-4.0,1.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-4.0,2.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-4.0,2.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: WallType.WALL_GLASS,
        position: Vector3.create(-4.0,2.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(4, 4, 0.04)
    },
    {
        type: LaserType.LASER_EMITTER,
        position: Vector3.create(-4.0,1.0,-8.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,8.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(10.0,8.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,8.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(14.0,8.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,8.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(18.0,8.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-10.0,2.0,6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-14.0,2.0,6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-6.0,2.0,6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-2.0,2.0,6.0),
        rotation: Quaternion.fromEulerDegrees(90.0,180.0,-0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: LaserType.LASER_EMITTER,
        position: Vector3.create(-6.0,1.0,6.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,-180.0,-0.0),
        dimension: Vector3.create(2, 2, 0.2)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,6.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(90.0,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,6.0,-12.0),
        rotation: Quaternion.fromEulerDegrees(90.0,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: WallType.FLOOR_UNPORTABLE,
        position: Vector3.create(-16.0,6.0,-20.0),
        rotation: Quaternion.fromEulerDegrees(90.0,90.0,0.0),
        dimension: Vector3.create(4, 0.04, 4)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(4.0,1.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(2.0,1.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(2.0,1.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(4.0,1.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(6.0,1.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_DEFAULT,
        position: Vector3.create(6.0,1.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-0.0,1.0,-0.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: BoxType.BOX_MIRROR,
        position: Vector3.create(-0.0,1.0,-2.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(1, 1, 1)
    },
    {
        type: TeleporterType.TELEPORTER_START,
        position: Vector3.create(-14.0,0.0,-4.0),
        rotation: Quaternion.fromEulerDegrees(-0.0,90.0,0.0),
        dimension: Vector3.create(3, 5, 3.5),
        initial_state: TeleporterState.OFF
    },
    {
        type: StairType.STAIR_DEFAULT,
        position: Vector3.create(-14.0,0.0,-14.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 4, 4),
        initial_state: StairState.OFF,
        activatedBy: [
            {
                type: ButtonType.BUTTON_FLOOR,
                position: Vector3.create(-6.0,0.0,-16.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(3, 0.2, 3)
            },
            {
                type: ButtonType.BUTTON_FLOOR,
                position: Vector3.create(-10.0,0.0,-12.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(3, 0.2, 3)
            },
            {
                type: LaserType.LASER_RECEIVER,
                position: Vector3.create(-10.0,1.0,-18.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(2, 2, 0.2)
            }
        ]
    },
    {
        type: PlatformType.PLATFORM_MOVING_H,
        position: Vector3.create(-2.0,4.0,-16.0),
        rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
        dimension: Vector3.create(4, 0.4, 4),
        path: [ Vector3.create(-2.0,4.0,-16.0), Vector3.create(14,4.0,-16.0), ],
        activatedBy: [
            {
                type: ButtonType.BUTTON_FLOOR,
                position: Vector3.create(6.0,0.0,-12.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-0.0,0.0),
                dimension: Vector3.create(3, 0.2, 3)
            },
            {
                type: LaserType.LASER_RECEIVER,
                position: Vector3.create(16.0,1.0,-12.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
                dimension: Vector3.create(2, 2, 0.2)
            },
            {
                type: LaserType.LASER_RECEIVER,
                position: Vector3.create(16.0,1.0,-16.0),
                rotation: Quaternion.fromEulerDegrees(0.0,-90.0,0.0),
                dimension: Vector3.create(2, 2, 0.2)
            }
        ]
    }
]