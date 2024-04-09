import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { GAME_STATE } from '../gameData'
import { displays, getImageAtlasMapping } from './uiControls'
import { State } from '../gameObject/gameObjectType'
import { calculateImageDimensions, dimensions } from './ui'
import { displayControls } from './controlsUI'
import { SFX, playSFXSound } from '../gameObject/soundFX'

export let showSettings = false

export function displaySettings(value:boolean){
  showSettings = value
}

  export function createSettingsUI(){
    return (
      <UiEntity key={"settings"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "settings" ? 'flex' : 'none',
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


{/* settings label */}
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
        sourceTop:863,
        sourceLeft:480,
        sourceWidth:288,
        sourceHeight:64
      })
    }}
  />
  
{/* exit button */}
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
    onMouseDown={()=>{
      console.log('on click')
      playSFXSound(SFX.cancelUISoundEntity, true)
      GAME_STATE.state === State.WAITING ? displays.active = "welcome" : displays.active = ""
    }}
  />


{/* information panel */}
  <UiEntity
    uiTransform={{
      width: '100%',
      height: '85%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      margin:{top:"5%"}
    }}
    // uiBackground={{
    //     color:Color4.Yellow()
    // }}
  >

{/* controls row */}
<UiEntity
    uiTransform={{
      width: '60%',
      height: '15%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start',
      alignContent:'flex-start'
    }}
    uiBackground={{
        // color:Color4.Blue()
    }}
  >
{/* <UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignContent:'flex-start',
      display:'flex'
    }}
  //   uiBackground={{
  //     color:Color4.Blue()
  // }}
    > */}

{/* controls image */}
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(12, 286/64).width,
      height: calculateImageDimensions(12, 286/64).height,
      display:'flex',
      alignSelf:'flex-start'
    }}
    // uiBackground={{color:Color4.Yellow()}}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:512,
        sourceLeft:1,
        sourceWidth:286,
        sourceHeight:64
      })
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      displays.active = "controls"
    }}
    ></UiEntity>
    {/* </UiEntity> */}
{/* 

    <UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}
    ></UiEntity> */}

  </UiEntity>

{/* sound effects row */}
    <UiEntity
    uiTransform={{//
      width: '60%',
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
      width: '50%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}
    >

<UiEntity
    uiTransform={{
      width: calculateImageDimensions(10, 255/64).width,
      height: calculateImageDimensions(10, 255/64).height,
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
        sourceLeft:1,
        sourceWidth:255,
        sourceHeight:64
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
      alignContent:'flex-end'
    }}
    >

<UiEntity
    uiTransform={{
      width: '60%',
      height: '50%',
      flexDirection:'row',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:962,
        sourceLeft:0,
        sourceWidth:255,
        sourceHeight:62
      })
    }}
    >

      <UiEntity
    uiTransform={{//
      width: '50%',
      height: '100%',
      flexDirection:'column',
      positionType:'absolute',
      position:{left:GAME_STATE.sfxSound ? "50%" : "0%"}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:965,
        sourceLeft:513,
        sourceWidth:128,
        sourceHeight:53
      })
    }}
    /> 

<UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'column',
    }}
    // uiBackground={{color:Color4.Green()}}
    onMouseDown={()=>{
      playSFXSound(SFX.toggleUISoundEntity, true)
      GAME_STATE.updateSFXSound()
    }}
    />


<UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'column',
    }}
    // uiBackground={{color:Color4.Blue()}}
    onMouseDown={()=>{
      playSFXSound(SFX.toggleUISoundEntity, true)
      GAME_STATE.updateSFXSound()
    }}
    />

    </UiEntity>
    </UiEntity>

  </UiEntity>


{/* music row */}
  <UiEntity
    uiTransform={{//
      width: '60%',
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
      width: '50%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}
    >

<UiEntity
    uiTransform={{//
      width: calculateImageDimensions(5, 129/64).width,
      height: calculateImageDimensions(5, 129/64).height,
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
        sourceTop:832,
        sourceLeft:0,
        sourceWidth:129,
        sourceHeight:64
      })
    }}
    ></UiEntity>
    </UiEntity>

    <UiEntity
    uiTransform={{//
      width: '50%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'flex-end'
    }}
    >

<UiEntity
    uiTransform={{//
      width: '60%',
      height: '50%',
      flexDirection:'row',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:962,
        sourceLeft:0,
        sourceWidth:255,
        sourceHeight:62
      })
    }}
    >
      <UiEntity
    uiTransform={{//
      width: '50%',
      height: '100%',
      flexDirection:'column',
      positionType:'absolute',
      position:{left:GAME_STATE.music ? "50%" : "0%"}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:965,
        sourceLeft:513,
        sourceWidth:128,
        sourceHeight:53
      })
    }}
    />

<UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'column',
    }}
    // uiBackground={{color:Color4.Green()}}
    onMouseDown={()=>{
      playSFXSound(SFX.toggleUISoundEntity, true)
      GAME_STATE.updateMusic()
    }}
    />


<UiEntity
    uiTransform={{
      width: '50%',
      height: '100%',
      flexDirection:'column',
    }}
    // uiBackground={{color:Color4.Blue()}}
    onMouseDown={()=>{
      playSFXSound(SFX.toggleUISoundEntity, false)
      GAME_STATE.updateMusic()
    }}
    />

    </UiEntity>
    </UiEntity>

  </UiEntity>

  </UiEntity>

  </UiEntity>

  </UiEntity>
    )
    }