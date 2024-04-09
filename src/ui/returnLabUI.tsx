import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping, } from './uiControls'
import { GAME_STATE } from '../gameData'
import { calculateImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'

export let rewardLevel = 0

  export function createReturnLabUI(){
    return (
      <UiEntity key={"returnlab"}
        uiTransform={{
          width: calculateImageDimensions(50, 2.91).width,
          height: calculateImageDimensions(50, 2.91).height,
          flexDirection:'column',
          display: displays.active === "returnlab" ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',
          position:{left:(dimensions.width - calculateImageDimensions(50, 2.91).width) / 2, top:(dimensions.height - calculateImageDimensions(50, 2.91).height) / 2}
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
        sourceTop:352,
        sourceLeft:0,
        sourceWidth:1024,
        sourceHeight:351
      })
    }}
    >

<UiEntity
    uiTransform={{//
      width: '100%',
      height: '20%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{bottom:'2%'}
    }}
    // uiBackground={{color:Color4.Green()}}
    >

<UiEntity
    uiTransform={{//
      width: calculateImageDimensions(20, 480/128).width,
      height: calculateImageDimensions(20, 480/128).height,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img10.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:352,
          sourceLeft:0,
          sourceWidth:480,
          sourceHeight:128
        })
      }}
    />
        
    </UiEntity>

<UiEntity
    uiTransform={{//
      width: '100%',
      height: '20%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    }}
    // uiBackground={{color:Color4.Green()}}
    >

<UiEntity
    uiTransform={{//
      width: '15%',
      height: '80%',
      flexDirection:'column',
      margin:{right:'2%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:961,
        sourceLeft:256,
        sourceWidth:127,
        sourceHeight:62
      })
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      GAME_STATE.tryLevelStart(GAME_STATE.currentLevel)
    }}
    />

<UiEntity
    uiTransform={{
        width: '15%',
        height: '80%',
        flexDirection:'column',
        margin:{left:'2%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:961,
        sourceLeft:384,
        sourceWidth:127,
        sourceHeight:62
      })
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      displays.active = ""
    }}
    />

    </UiEntity>

  </UiEntity>
      </UiEntity>
    )
    }