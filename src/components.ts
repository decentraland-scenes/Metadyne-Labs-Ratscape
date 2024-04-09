import { Schemas, engine } from "@dcl/sdk/ecs"
import { BoxType, ButtonType, CatObjectType, DoorState, DoorType, FlipWallState, LaserFieldRayState, LaserFieldType, LaserType, PlatformType, PortalColor, StairState, StairType, TeleportStatus, TeleporterState, TeleporterType, TurretObjectType, WallType } from "./gameObject/gameObjectType"


//activateBy component
export const ActivatedByComponent = engine.defineComponent("ActivatedByComponent",{
  listEntities: Schemas.Array(Schemas.Entity),
  currentActiveEntities: Schemas.Array(Schemas.Entity)
})

export const BoxDataComponent = engine.defineComponent("BoxDataComponent",{
    type: Schemas.EnumString<BoxType>(BoxType, BoxType.BOX_DEFAULT),
    position: Schemas.Vector3,
    rotation: Schemas.Quaternion,
    dimension: Schemas.Vector3
})

//box-portal related component
export const TeleportStatusComponent = engine.defineComponent("TeleportStatusComponent",{
  status: Schemas.EnumNumber<TeleportStatus>(TeleportStatus, TeleportStatus.Enter),
  teleportDelayTimer: Schemas.Int
})

//remove gravity component
export const RemoveGravityComponent = engine.defineComponent("RemoveGravityComponent",{})


//wall component
export const WallDataComponent = engine.defineComponent("WallDataComponent",{
  type: Schemas.EnumString<WallType>(WallType, WallType.FLOOR_PORTABLE),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3
})
//flip wall component, probably will combine it with walll data component later.
export const FlipWallDataComponent = engine.defineComponent("FlipWallDataComponent",{
  type: Schemas.EnumString<WallType>(WallType, WallType.FLIPWALL),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  initial_state: Schemas.EnumNumber<FlipWallState>(FlipWallState, FlipWallState.UNPORTABLE),
  current_state: Schemas.EnumNumber<FlipWallState>(FlipWallState, FlipWallState.UNPORTABLE),
  portalColor: Schemas.Number
},
{
    portalColor: -1
})

//platform component
export const PlatformDataComponent = engine.defineComponent("PlatformDataComponent",{
  type: Schemas.EnumString<PlatformType>(PlatformType, PlatformType.PLATFORM_HALF),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  path: Schemas.Array(Schemas.Vector3)
})

export const ActiveMovingPlatform = engine.defineComponent("ActiveMovingPlatform",{
  active: Schemas.Boolean,
  paths: Schemas.Array(Schemas.Vector3),
  startIdx: Schemas.Int,
  targetIdx: Schemas.Int,
  deactivate: Schemas.Boolean,
  looping: Schemas.Boolean
},{
    looping: true
})

//port-able component
export const PortableFlagComponent = engine.defineComponent("PortableComponent", {
  dimension: Schemas.Vector3
})


// //physic component
// export const BoxBodyComponent = engine.defineComponent('BoxBody', {
//     boxBodyId: Schemas.Number
// })

export const GlowColorComponent = engine.defineComponent('glowColor', { color: Schemas.Number })

//export const Portal = engine.defineComponent("portal", { color: Schemas.Number, coolDown: Schemas.Boolean }, { coolDown: false })
export const PortalComponent = engine.defineComponent(
  'portal',
  { 
    color: Schemas.EnumNumber<PortalColor>(PortalColor, PortalColor.Blue), 
    coolDown: Schemas.Boolean,
    active: Schemas.Boolean,
    ready: Schemas.Boolean,
    neighbourEntities: Schemas.Array(Schemas.Entity),
    normal: Schemas.Vector3,
    delayBoxTeleportTimer: Schemas.Int
  },
  { 
    color: PortalColor.Blue,
    coolDown: false,
    active: false,
    ready: false,
    neighbourEntities: []
  }
)


//door component
export const DoorDataComponent = engine.defineComponent("DoorComponent",{
  type: Schemas.EnumString<DoorType>(DoorType, DoorType.DOOR_DEFAULT),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  initial_state: Schemas.EnumNumber<DoorState>(DoorState, DoorState.CLOSE),
  current_state: Schemas.EnumNumber<DoorState>(DoorState, DoorState.CLOSE),
  animTimeStamp: Schemas.Number
})

//button component
export const ButtonDataComponent = engine.defineComponent("ButtonDataComponent",{
  type: Schemas.EnumString<ButtonType>(ButtonType, ButtonType.BUTTON_FLOOR),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  timer_second: Schemas.Number,
  connector_line_active: Schemas.Entity,
  connector_line_inactive: Schemas.Entity
})

export const ButtonTimerComponent = engine.defineComponent("ButtonTimerComponent",{
  buttonEntity: Schemas.Entity,
  timerEntity: Schemas.Entity,
  timerTimeout: Schemas.Number,
  timerCountDown: Schemas.Number,
  isActive: Schemas.Boolean
})

//stair component
export const StairDataComponent = engine.defineComponent("StairDataComponent",{
  type: Schemas.EnumString<StairType>(StairType, StairType.STAIR_DEFAULT),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  initial_state: Schemas.EnumNumber<StairState>(StairState, StairState.OFF),
  current_state: Schemas.EnumNumber<StairState>(StairState, StairState.OFF),
  isMoving: Schemas.Boolean,
  movingCounter: Schemas.Number,
  animTimeStamp: Schemas.Number
})
// //update target when activate/deactivate stair
// export const ActivateStairComponent = engine.defineComponent("ActivateStairComponent",{
//   stateTarget: Schemas.EnumNumber<StairState>(StairState, StairState.ON)
// })

//laser emitter component
export const LaserEmitterComponent = engine.defineComponent("LaserEmitterComponent",{
  type: Schemas.EnumString<LaserType>(LaserType, LaserType.LASER_EMITTER),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  rayEntities: Schemas.Array(Schemas.Entity),
  isFinish: Schemas.Boolean
})

//laser ray component
export const LaserRayComponent = engine.defineComponent("LaserRayComponent",{
  emitterSource: Schemas.Entity,
  index: Schemas.Int,
  startPos: Schemas.Vector3, //index = 0 -> startPos = emitterPos. Index = 1 -> startPos = hitPos index 0, etc..
  rayDirection: Schemas.Vector3,
  hitPos: Schemas.Vector3 //laser system will always update this everytime ray hit a new object.
})

//laser receiver component
export const LaserReceiverComponent = engine.defineComponent("LaserReceiverComponent",{
  type: Schemas.EnumString<LaserType>(LaserType, LaserType.LASER_RECEIVER),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  activated: Schemas.Boolean,
  parent: Schemas.Entity,
  connector_line_active: Schemas.Entity,
  connector_line_inactive: Schemas.Entity
})

//teleporter component
export const TeleporterDataComponent = engine.defineComponent("TeleporterComponent", {
  type: Schemas.EnumString<TeleporterType>(TeleporterType, TeleporterType.TELEPORTER_START),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  initial_state: Schemas.EnumNumber<TeleporterState>(TeleporterState, TeleporterState.OFF),
  current_state: Schemas.EnumNumber<TeleporterState>(TeleporterState, TeleporterState.OFF),
})

// gun component
export const GunDataComponent = engine.defineComponent("GunDataComponent", {
  active: Schemas.Boolean,
  recoilPosition: Schemas.Vector3,
  restPosition: Schemas.Vector3,
  recoilRotation: Schemas.Quaternion,
  restRotation: Schemas.Quaternion,
  recoilFactor: Schemas.Number,
  recoilSpeed:Schemas.Number
  
})

// projectile component
export const ProjctileComponent = engine.defineComponent("ProjctileComponent", {
  active: Schemas.Boolean,
  startPosition: Schemas.Vector3,
  targetPosition: Schemas.Vector3,
  factor: Schemas.Number,
  
})

//laser field component
export const LaserFieldDataComponent = engine.defineComponent("LaserFieldDataComponent", {
  type: Schemas.EnumString<LaserFieldType>(LaserType, LaserFieldType.LASER_FIELD_EMITTER),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  initial_state: Schemas.EnumNumber<LaserFieldRayState>(LaserFieldRayState, LaserFieldRayState.ON),
  current_state: Schemas.EnumNumber<LaserFieldRayState>(LaserFieldRayState, LaserFieldRayState.ON),
  isPlayerInside: Schemas.Boolean
})

//turret data component
export const TurretDataComponent = engine.defineComponent("TurretDataComponent", {
  type: Schemas.EnumString<TurretObjectType>(LaserType, TurretObjectType.TURRET_DEFAULT),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3
})

//turret system component
export const TurretSystemComponent = engine.defineComponent("TurretSystemComponent", {
    isTurretPosStabilize: Schemas.Boolean, //to avoid turret exploded when spawned (collision with floor)

    playerInVision: Schemas.Boolean,
    playerInRadius: Schemas.Boolean,
    lookForPlayer: Schemas.Boolean,
    raycastEnable: Schemas.Boolean,
    isFireLaser: Schemas.Boolean,
    raycastHitPos: Schemas.Vector3,
    isHitObstacle: Schemas.Boolean,
    turretChargeVFX: Schemas.Entity,

    turretPhysicMoved: Schemas.Boolean,

    isStartInit: Schemas.Boolean,
    isFinishInit: Schemas.Boolean,
    turretInitTimer: Schemas.Number,

    turretHitByLaser: Schemas.Boolean,
    turretDestroyLaserCount: Schemas.Number,
    isDestroyed: Schemas.Boolean
    },{
        isTurretPosStabilize: false,
        playerInVision: false,
        playerInRadius: false,
        lookForPlayer: false,
        raycastEnable: false,
        isFireLaser: false,
        isHitObstacle: true,
        turretPhysicMoved: false,
        isStartInit: false,
        isFinishInit: false,
        turretHitByLaser: false,
        turretDestroyLaserCount: -1,
        isDestroyed: false
})


//cat data component
export const CatDataComponent = engine.defineComponent("CatDataComponent", {
  type: Schemas.EnumString<CatObjectType>(CatObjectType, CatObjectType.CAT_DEFAULT),
  position: Schemas.Vector3,
  rotation: Schemas.Quaternion,
  dimension: Schemas.Vector3,
  catDieVOEntity: Schemas.Entity,
  catSaveVOEntity: Schemas.Entity,
  isDied: Schemas.Boolean
})

export const UVScrollComponent = engine.defineComponent('uv-scroll-id', {           
  uShift: Schemas.Number,
  vShift: Schemas. Number,
  multiplier: Schemas.Number,
  uMultiplier: Schemas.Number,
  vMultiplier: Schemas.Number,
  uSpeed: Schemas.Number,
  vSpeed: Schemas.Number
})
