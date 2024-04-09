
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping } from './uiControls'
import { calculateSquareImageDimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'

export function createMainUI(){
  return (
    <UiEntity key={"main"}
      uiTransform={{
        width: '5%',
        height: '50%',
        display:  displays.active === "loading" || displays.active === "death"  ? 'none' : 'flex',
        positionType:'absolute',
        alignContent:'center',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        position:{right:"0%", top:'15%'}
      }}
    >
      <UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(8).width,
      height: calculateSquareImageDimensions(8).height,
      margin:{top:'2%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:0,
        sourceLeft:768,
        sourceWidth:128,
        sourceHeight:128
      })
    }}
    onMouseDown={()=> {
      if(displays.active === "rankings"){
        displays.active = ""
      }else{
        displays.active = "rankings"
      }
      
      playSFXSound(SFX.clickUISoundEntity, true)
    }}
  />

<UiEntity
    uiTransform={{  
      width: calculateSquareImageDimensions(8).width,
      height: calculateSquareImageDimensions(8).height,
      margin:{top:'2%'}
    }}//
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:384,
        sourceLeft:768,
        sourceWidth:128,
        sourceHeight:128
      })
    }}
    onMouseDown={()=> {
      if(displays.active === "rewards"){
        displays.active = ""
      }else{
        displays.active = "rewards"
      }

      playSFXSound(SFX.clickUISoundEntity, true)
    }}
  />

<UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(8).width,
      height: calculateSquareImageDimensions(8).height,
      margin:{top:'2%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:256,
        sourceLeft:768,
        sourceWidth:128,
        sourceHeight:128
      })
    }}
    onMouseDown={()=> {
      displays.active = "settings"

      // if(displays.active === "settings"){
      //   displays.active = ""
      // }else{
      //   displays.active = "settings"
      // }

      playSFXSound(SFX.clickUISoundEntity, true)
    }}
  />

<UiEntity
    uiTransform={{ 
      width: calculateSquareImageDimensions(8).width,
      height: calculateSquareImageDimensions(8).height,
      margin:{top:'2%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:128,
        sourceLeft:768,
        sourceWidth:128,
        sourceHeight:128
      })
    }}
    onMouseDown={()=> {
      if(displays.active === "welcome"){
        displays.active = ""
      }else{
        displays.active = "welcome"
      }

      playSFXSound(SFX.clickUISoundEntity, true)
    }}
  />

    </UiEntity>
  )
  }