import { Schemas } from "@dcl/sdk/ecs"
import { Quaternion, Vector3 } from "@dcl/sdk/math"


//Level
export type LevelData = {
    level:number,
    time:number,
    portals:number,
    status:string
}

//Game State
export enum State{
    WAITING,
    PLAYING
}


//Level Loading State
export enum LevelLoadingState{
    LOADING,
    LOADED
}

//WALL
export enum WallType {
    FLOOR_PORTABLE = 'fp',
    FLOOR_UNPORTABLE = 'fu',
    FLOOR_UNPORTABLE_V1 = 'fu_v1',
    FLOOR_UNPORTABLE_V2 = 'fu_v2',
    WALL_PORTABLE = 'wp',
    WALL_UNPORTABLE = 'wu',
    WALL_GLASS = 'wg',
    WALL_GLASSHOLE = 'wgh',
    FLIPWALL = 'flw'
}
export type IWallData = {
    type: WallType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}
//FLIP WALL
export enum FlipWallState{
    UNPORTABLE,
    PORTABLE
}
export type IFlipWallData = {
    type: WallType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    initial_state: FlipWallState,
    activatedBy?: (IButtonData | ILaserData)[]
}


//BOX
export enum BoxType{
    BOX_DEFAULT = 'bd',
    BOX_MIRROR = 'bm'
}
export type IBoxData = {
    type: BoxType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}

//PORTAL
export enum PortalColor{
    Blue,
    Orange
}
export enum TeleportStatus{
    Enter,
    Exit
}

//BUTTON
export enum ButtonType{
    BUTTON_FLOOR = 'bf',
    BUTTON_PEDESTAL = 'bp'
}
export type IButtonData = {
    type: ButtonType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    activating?: (IPlatformData | IDoorData | IStairData | ILaserFieldData | IWallData)[],
    timer_second?: number, //active countdown in second.
    connector_line?: string
}

//PLATFORM
export enum PlatformType{
    //MOVING PLATFORM
    PLATFORM_MOVING_H = 'pmh',
    PLATFORM_MOVING_V = 'pmv',

    //LIGHT PLATFORM
    PLATFORM_LIGHT_EMITTER = 'ple',
    //PLATFORM_LIGHT = 'pl',
    
    //STATIC
    PLATFORM_RAIL = 'pr',
    PLATFORM_ELEVATOR_BASE = 'peb',
    PLATFORM_HALF = 'ph'
}

export type IPlatformData = {
    type: PlatformType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    path?: Vector3[],
    activatedBy?: (IButtonData | ILaserData)[],
    looping?: Boolean
}

//DOOR
export enum DoorType{
    DOOR_DEFAULT = 'dd'
}
export enum DoorState{
    OPEN,
    CLOSE
}

export type IDoorData = {
    type: DoorType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    initial_state: DoorState
    activatedBy?: (IButtonData | ILaserData)[]
}

//STAIR
export enum StairType{
    STAIR_DEFAULT = 'sd'
}
export enum StairState{
    OFF,
    ON
}
export type IStairData = {
    type: StairType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    initial_state: StairState
    activatedBy?: (IButtonData | ILaserData)[]
}

//LASER
export enum LaserType{
    LASER_EMITTER = 'le',
    LASER_EMITTER_RED = 'led',
    LASER_RECEIVER = 'lr',
}
export type ILaserData = {
    type: LaserType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    activating?: (IPlatformData | IDoorData | IStairData | ILaserFieldData | IWallData)[],
    connector_line?: string
}

//TELEPORTER
export enum TeleporterType{
    TELEPORTER_START = 'te',
    TELEPORTER_FINISH = 'tf'
}
export enum TeleporterState{
    OFF,
    ON
}
export type ITeleporterData = {
    type: TeleporterType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    initial_state: TeleporterState
}

//AUDIO
export enum VoiceOverType{
    VOICEOVER_DEFAULT = 'vd'
}
export type IVoiceOverData = {
    type: VoiceOverType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    audio_src: string
}

//LABS
export enum LabType{
    LAB_START = 'lbs',
    LAB_FINISH = 'lbf'
}
export type ILabData = {
    type: LabType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}

//SIGNS
export enum LevelSignType{
    SIGN_VERTICALBIG = 'sv',
    //SIGN_HORIZONTALSMALL = 'sh'
    SIGN_DOOR_EXIT = 'sd_ex',
    SIGN_DOOR_ENTRANCE = 'sd_en'
}
export type ILevelSign = {
    type: LevelSignType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}

//
export enum MiscObjectType{
    SECURITY_CAM = 'msc',
    CONTROL_ROOM = 'mcr'
}
export type IMiscObjectData = {
    type: MiscObjectType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}

//LASER FIELD RAY
export enum LaserFieldType{
    LASER_FIELD_EMITTER = 'lfe',
    LASER_FIELD_RAY = 'lfr'
}
export type ILaserFieldData = {
    type: LaserFieldType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    initial_state?: LaserFieldRayState,
    activatedBy?: (IButtonData | ILaserData)[]
}
export enum LaserFieldRayState{
    OFF,
    ON
}

//ACID
export enum AcidObjectType{
    ACID_DEFAULT = 'ad'
}
export type IAcidObjectData = {
    type: AcidObjectType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}

//TURRET
export enum TurretObjectType{
    TURRET_DEFAULT = 'td'
}
export type ITurretObjectData = {
    type: TurretObjectType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3
}

//KITTEN
export enum CatObjectType{
    CAT_DEFAULT = 'cd'

}
export type ICatObjectData = {
    type: CatObjectType,
    position: Vector3,
    rotation: Quaternion,
    dimension: Vector3,
    dieVOSource: string,
    saveVOSource: string
}