import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping } from './uiControls'
import { GAME_STATE } from '../gameData'
import { State } from '../gameObject/gameObjectType'
import { calculateImageDimensions, calculateSquareImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'

export let showSelectLevel = false
let currentLevelView = 0

// export function displaySelectLevelUI(value:boolean){
//     currentLevelView = GAME_STATE.currentLevel ? GAME_STATE.currentLevel : 0
//     showSelectLevel = value
// }

function pageLevelRight(){
  if(currentLevelView + 1 > 13){
    console.log('cannot move forward')
  }
  else{
    currentLevelView++
  }
}

function pagelLevelLeft(){
  if(currentLevelView - 1 < 0){
    console.log('cannot move backward')
  }
  else{
    currentLevelView--
  }
}

  export function createSelectLevelUI(){
    return (
      <UiEntity key={"selectLevel"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "selectlevel" ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',
          position:{left:(dimensions.width - calculateImageDimensions(50, 1.78).width) / 2, top:(dimensions.height - calculateImageDimensions(50, 1.78).height) / 2}
        }}
      >

<UiEntity
    uiTransform={{
      width: '100%',
      height: '100%',
      alignSelf:'center',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:0,
        sourceLeft:0,
        sourceWidth:1024,
        sourceHeight:576
      })
    }}
    >

<UiEntity
    uiTransform={{
      width: calculateImageDimensions(12,257/63).width,
      height: calculateImageDimensions(12,257/63).height,
    positionType:'absolute',
    position:{left:'4%', top:0}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:896,
        sourceLeft:736,
        sourceWidth:257,
        sourceHeight:63
      })
    }}
  />

<UiEntity
    uiTransform={{
      width: '100%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    // uiBackground={{color: Color4.Blue()}}
  >

    {/* popup label image */}
    <UiEntity
    uiTransform={{
      width: '4%',
      height: '7%',
        positionType:'absolute',
        position:{right:'3%', top:"5%"},
      alignSelf:'flex-end'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/icons/rewards_exit.png"
      }
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.cancelUISoundEntity, true)
      GAME_STATE.state === State.WAITING ? displays.active = "welcome" : displays.active = ""
    }}
  />

        {/* additional page left click */}
        <UiEntity
    uiTransform={{
      width: '15%',
      height: '70%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      // positionType:'absolute',
      // position:{left:0, top:0}
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      pagelLevelLeft()
    }}
  >
        <UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(4).width,
      height: calculateSquareImageDimensions(4).height,
      display:'flex',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:598,
        sourceLeft:816,
        sourceWidth:64,
        sourceHeight:64
      })
    }}
    // onMouseDown={()=>{
    //   playSFXSound(SFX.clickUISoundEntity, true)
    //   pagelLevelLeft()
    // }}
  />
    </UiEntity>



{/* main select level panel */}
  <UiEntity
    uiTransform={{
      width: '70%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      // margin:{top:'10%'}
    }}
    // uiBackground={{color:Color4.Red()}}
  >

{/* left level image */}
<UiEntity
    uiTransform={{//
      width: '31%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{right:'1%'}
    }}
  >
    <UiEntity
    uiTransform={{//
      width: calculateImageDimensions(12, 319/448).width,
      height: calculateImageDimensions(12, 319/448).height,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "" + getLevelAtlas(currentLevelView - 1)
      },
      uvs:getLevelUV(currentLevelView - 1)
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      pagelLevelLeft()
    }}
  />
  </UiEntity>

{/* middle level image */}
<UiEntity
    uiTransform={{
      width: '35%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
  >
           <UiEntity
    uiTransform={{
      width: calculateImageDimensions(14, 319/448).width,
      height: calculateImageDimensions(13, 319/448).height,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{left:'1%', right:'1%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "" + getLevelAtlas(currentLevelView)
      },
      uvs:getLevelUV(currentLevelView)
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      if(!isLevelLocked(currentLevelView)){
        GAME_STATE.tryLevelStart(currentLevelView)
      }
    }}
    >
      <UiEntity
    uiTransform={{//
      width: '100%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      display: isLevelLocked(currentLevelView) ? "flex" : "none"
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img8.png"
      },
      uvs:getImageAtlasMapping(
        {
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:0,
          sourceLeft:0,
          sourceWidth:319,
          sourceHeight:448
        }
      )
    }}
  />
      </UiEntity>
  
  </UiEntity>


{/* right level image */}
<UiEntity
    uiTransform={{//
      width: '31%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{left:'1%'}
    }}
  >
        <UiEntity
    uiTransform={{//
      width: calculateImageDimensions(12, 319/448).width,
      height: calculateImageDimensions(12, 319/448).height,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "" + getLevelAtlas(currentLevelView + 1)
      },
      uvs:getLevelUV(currentLevelView + 1)
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      pageLevelRight()
    }}
  >
          <UiEntity
    uiTransform={{//
      width: '100%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      display: isLevelLocked(currentLevelView + 1) ? "flex" : "none"
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img8.png"
      },
      uvs:getImageAtlasMapping(
        {
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:0,
          sourceLeft:0,
          sourceWidth:319,
          sourceHeight:448
        }
      )
    }}
  />
    </UiEntity>
  </UiEntity>

  </UiEntity>


  {/* additional page right click */}
<UiEntity
    uiTransform={{
      width: '15%',
      height: '70%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      // positionType:'absolute',
      // position:{right:0, top:0}
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      pageLevelRight()
    }}
  >
<UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(4).width,
      height: calculateSquareImageDimensions(4).height,
      display:'flex',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:608,
        sourceLeft:0,
        sourceWidth:64,
        sourceHeight:64
      })
    }}
    // onMouseDown={()=>{
    //   playSFXSound(SFX.clickUISoundEntity, true)
    //   pageLevelRight()
    // }}
  />
  </UiEntity>

  </UiEntity>

  </UiEntity>
      </UiEntity>
    )
}

function getLevelAtlas(level:number){
  switch(level){
    case -1:
    case 21:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "assets/images/atlas/img5.png"

    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "assets/images/atlas/img6.png"

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return "assets/images/atlas/img7.png"

    default:
      "assets/images/atlas/img4.png"
      break;
  }
}


function getLevelUV(level:number){
 if(level < 0 || level > 20){
  return getImageAtlasMapping(
    {
      atlasHeight:1024,
      atlasWidth:1024,
      sourceTop:0,
      sourceLeft:1000,
      sourceWidth:2,
      sourceHeight:2
    }
  )
 }
 else{
  switch(level){
    case 0:
    case 1:
    case 2:
    case 6:
    case 7:
    case 8:
    case 12:
    case 13:
      return getImageAtlasMapping(
        {
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:0,
          sourceLeft: 320 * (level % 3),
          sourceWidth:320,
          sourceHeight: 448
        }
      )

    case 3:
    case 4:
    case 5:
    case 9:
    case 10:
    case 11:
      return getImageAtlasMapping(
        {
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:448,
          sourceLeft:320 * (level % 3),
          sourceWidth:320,
          sourceHeight: 448
        }
      )

    default:
      return getImageAtlasMapping(
        {
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:0,
          sourceLeft:1000,
          sourceWidth:2,
          sourceHeight:2
        }
      )
      break;
  }
 }
}

function isLevelLocked(level:number){
  let data = GAME_STATE.playerData.filter((l)=> l.level === level)[0]
  if(data){
    if(data.status === "ns"){
      return true
    }else{
      return false
    }
  }
}