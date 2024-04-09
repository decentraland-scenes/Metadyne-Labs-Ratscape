
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping } from './uiControls'
import { calculateImageDimensions, dimensions } from './ui'
import { Color4 } from '@dcl/sdk/math'

  export function createDeathUI(){
    return (<UiEntity key={"death"}
      uiTransform={{
        width: '100%',
        height: '100%',
        display: displays.active === "death" ? 'flex' : 'none',
      }}
      uiBackground={{color:Color4.Black()}}
    >
  
      <UiEntity
        uiTransform={{
          width: calculateImageDimensions(50, 2.91).width,
          height: calculateImageDimensions(50, 2.91).height,
          flexDirection:'column',
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
        sourceTop:0,
        sourceLeft:0,
        sourceWidth:1024,
        sourceHeight:351
      })
    }}
    >
      </UiEntity>
  </UiEntity>
      </UiEntity>
    )
    }