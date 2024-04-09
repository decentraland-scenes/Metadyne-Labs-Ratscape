import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping } from './uiControls'
import { calculateImageDimensions, calculateSquareImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'
import { GAME_STATE } from '../gameData'
import { State } from '../gameObject/gameObjectType'
import { Color4 } from '@dcl/sdk/math'

let atlas = ""
export function displayPopup(img:string){
  atlas = "assets/images/atlas/" + img + ".png"
  displays.active = "popup"
}

  export function createPopupUI(){
    return (
      
      <UiEntity key={"popupui"}
        uiTransform={{
          width: calculateImageDimensions(35, 1).width,
          height: calculateImageDimensions(35, 1).height,
          flexDirection:'column',
          display: displays.active === "popup" ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',
          position:{left:(dimensions.width - calculateImageDimensions(35, 1).width) / 2, top:(dimensions.height - calculateImageDimensions(35, 1).height) / 2}
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
        src: atlas
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:0,
        sourceLeft:0,
        sourceWidth:1024,
        sourceHeight:1024
      })
    }}//
    >


  {/* continue // button */}
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(20, 444/53).width,
      height: calculateImageDimensions(20, 444/53).height,
        positionType:'absolute',
        position:{left: '23%', bottom:"5%"},
    }}
      uiBackground={{//
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img8.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:491,
          sourceLeft:352,
          sourceWidth:444,
          sourceHeight:53
        })
    }}
    onMouseDown={()=>
      {
        playSFXSound(SFX.cancelUISoundEntity, true)
        console.log('atlas is', atlas)
        if(atlas === "assets/images/atlas/popup2.png"){
          displayPopup('popup3')
        }else if(atlas === "assets/images/atlas/popup4.png"){
          displayPopup('popup5')
        }else{
          displays.active = "";
        }
      }}
  />

  </UiEntity>
      </UiEntity>
    )
    }