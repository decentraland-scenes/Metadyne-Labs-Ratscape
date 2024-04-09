import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping } from './uiControls'
import { calculateImageDimensions, calculateSquareImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'
import { GAME_STATE } from '../gameData'
import { State } from '../gameObject/gameObjectType'
import { Color4 } from '@dcl/sdk/math'

export let showControls = false

export function displayControls(value:boolean){
    showControls = value
}

  export function createControls(){
    return (
      
      <UiEntity key={"controlsui"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "controls" ? 'flex' : 'none',
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





{/* panel label */}
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(14,286/64).width,
      height: calculateImageDimensions(14,286/64).height,
    positionType:'absolute',
    position:{left:'5%', top:0}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:512,
        sourceLeft:0,
        sourceWidth:288,
        sourceHeight:64
      })
    }}
  />

  {/* exit button */}
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
    onMouseDown={()=>
      {
        playSFXSound(SFX.cancelUISoundEntity, true)
        GAME_STATE.state === State.WAITING ? displays.active = "welcome" : displays.active = "";
      }}
  />

<UiEntity
    uiTransform={{
      width: '100%',
      height: '80%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      margin:{top:'5%'}
    }}
    // uiBackground={{color:Color4.Blue()}}
  >


{/* controls detail image */}
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(30,673/288).width,
      height: calculateImageDimensions(30,673/288).height,
      alignSelf:'center',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img8.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:0,
        sourceLeft:351,
        sourceWidth:673,
        sourceHeight:288
      })
    }}
    />

  </UiEntity>

  </UiEntity>
      </UiEntity>
    )
    }