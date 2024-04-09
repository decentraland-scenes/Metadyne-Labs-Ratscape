import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { GAME_STATE } from '../gameData'
import { displays, getImageAtlasMapping } from './uiControls'
import { State } from '../gameObject/gameObjectType'
import { calculateImageDimensions, calculateSquareImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'
// import { dimensions } from './ui'

  export function createWelcomeUI(){
    return (
      
      <UiEntity key={"welcome"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "welcome" ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',//
          position:{left:(dimensions.width - calculateImageDimensions(50, 1.78).width) / 2, top:(dimensions.height - calculateImageDimensions(50, 1.78).height) / 2}
        }}
      >

<UiEntity
    uiTransform={{//
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
      width: calculateImageDimensions(14,286/64).width,
      height: calculateImageDimensions(14,286/64).height,
    positionType:'absolute',
    position:{left:0, top:0}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:960,
        sourceLeft:704,
        sourceWidth:288,
        sourceHeight:64
      })
    }}
  />

<UiEntity
    uiTransform={{//
      width: '100%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center'
    }}
  >

  <UiEntity
    uiTransform={{//
      width: '100%',
      height: '85%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{top:"5%"}
    }}
    // uiBackground={{
    //     color:Color4.Yellow()
    // }}
  >
      <UiEntity
    uiTransform={{//
      width: '50%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{left:'4%', top:'6%'}
    }}
    // uiBackground={{
    //     color:Color4.Purple()
    // }}
  >
     <UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(30).width,
      height: calculateSquareImageDimensions(30).height,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'//
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img8.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:576,
        sourceLeft:512,
        sourceWidth:448,
        sourceHeight:448
      })
    }}
  ></UiEntity>
  </UiEntity>

  <UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-end',
      margin:{top:'10%'}
    }}
    // uiBackground={{
    //     color:Color4.Red()
    // }}
  >
    {/* <UiEntity
    uiTransform={{//
      width: '100%',
      height: '15%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}
  > */}

    {/* continue button */}
    {/* <UiEntity
    uiTransform={{
      width: calculateImageDimensions(7, 179/64).width,
      height: calculateImageDimensions(7, 179/64).height,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignContent:'flex-start'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping(
        
        GAME_STATE.completedLevelCount() > 0 || GAME_STATE.state === State.PLAYING ?
        {
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:896,
        sourceLeft:557,
        sourceWidth:179,
        sourceHeight:64
      }

      :
      
      {
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:844,
        sourceLeft:473,
        sourceWidth:178,
        sourceHeight:41
      }
      
      )
    }}
    onMouseDown={()=>{
        displays.active = ""
        if(GAME_STATE.currentLevel === 13 && GAME_STATE.isWin) displays.active = "wongame"
        else{
            if(GAME_STATE.state === State.PLAYING){}
            else{
            GAME_STATE.tryLevelStart(GAME_STATE.currentLevel!)
            displays.active = "loading"
            }
        }
        playSFXSound(SFX.clickUISoundEntity, true)
        
    }}
    ></UiEntity> */}

    
  {/* </UiEntity> */}

  <UiEntity
    uiTransform={{
      width: '100%',
      height: '15%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      display:         GAME_STATE.completedLevelCount() > 0 || GAME_STATE.state === State.PLAYING ? 'flex' : 'none'
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}
  >
    <UiEntity
    uiTransform={{//
      width: calculateImageDimensions(10, 257/63).width,
      height: calculateImageDimensions(10, 257/63).height,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignContent:'flex-start'
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
    onMouseDown={()=>{
      displays.active = "selectlevel"
      playSFXSound(SFX.clickUISoundEntity, true)
    }}
    ></UiEntity>
  </UiEntity>

  <UiEntity
    uiTransform={{//
      width: '100%',
      height: '15%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}//
  >
    <UiEntity
    uiTransform={{
      width: calculateImageDimensions(8, 191/64).width,
      height: calculateImageDimensions(8, 191/64).height,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignContent:'flex-start'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:832,
        sourceLeft:801,
        sourceWidth:191,
        sourceHeight:64
      })
    }}
    onMouseDown={()=>{
      displays.active = "returngc"
      playSFXSound(SFX.clickUISoundEntity, true)
    }}
    ></UiEntity>
  </UiEntity>

    {/* restart level row */}
    <UiEntity
    uiTransform={{
      width: '100%',
      height: '15%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        // color:Color4.Blue()
    }}
  >

<UiEntity
    uiTransform={{//
      width: '100%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'flex-start',
      display: GAME_STATE.state === State.PLAYING ? "flex" : "none"

    }}
    >

<UiEntity
    uiTransform={{//
      width: calculateImageDimensions(10, 257/64).width,
      height: calculateImageDimensions(10, 257/64).height,
      flexDirection:'column',
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
        sourceLeft:256,
        sourceWidth:257,
        sourceHeight:64
      })
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      displays.active = "returnlab"
    }}
    ></UiEntity>
    </UiEntity>

  </UiEntity>


  </UiEntity>

  </UiEntity>

  </UiEntity>

  <UiEntity
    uiTransform={{//
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
    onMouseDown={()=>
      {
        playSFXSound(SFX.cancelUISoundEntity, true)
        if(GAME_STATE.currentLevel === 13 && GAME_STATE.isWin) displays.active = "wongame"
        else GAME_STATE.state === State.WAITING ? displays.active = "welcome" : displays.active = "";
      }}
  />

  </UiEntity>
      </UiEntity>
    )
    }