import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { getImageAtlasMapping, } from './uiControls'
import { GAME_STATE } from '../gameData'
import { calculateImageDimensions, calculateSquareImageDimensions, dimensions } from './ui'
import { _CONFIG_HEALTH } from '../gameSystem/healthSystem'

export let showHealthBar = false

export function displayHealthBarUI(value:boolean){
    showHealthBar = value
}

  export function createHealthBarUI(){
    return (
      <UiEntity key={"healthbar"}
        uiTransform={{
          width: calculateImageDimensions(30, 8.46).width,
          height: calculateImageDimensions(30, 8.46).height,
          flexDirection:'column',
          display: showHealthBar ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',
          position:{left:(dimensions.width - calculateImageDimensions(30, 8.46).width) / 2, bottom:"2%"}
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
        src: "assets/images/atlas/img4.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:715,
        sourceLeft:2,
        sourceWidth:567,
        sourceHeight:67
      })
    }}
    >

<UiEntity
    uiTransform={{
      width: `${_CONFIG_HEALTH.currentHealth * 100}%`,
      height: '85%',
      alignSelf:'center',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
      positionType:'absolute',
      position:{left:0}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img4.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:897,
        sourceLeft:0,
        sourceWidth:567,
        sourceHeight:67
      })
    }}
    />

{/* circle icon */}
<UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(8).width,
      height: calculateSquareImageDimensions(8).height,
      alignSelf:'center',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
      positionType:'absolute',
      position:{left:'-2%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img4.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:793,
        sourceLeft:2,
        sourceWidth:81,
        sourceHeight:81
      })
    }}
    />

  </UiEntity>
      </UiEntity>
    )
    }