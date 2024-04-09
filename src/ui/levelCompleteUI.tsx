import ReactEcs, {  UiEntity } from '@dcl/sdk/react-ecs'
import { GAME_STATE } from '../gameData'
import { displays, getImageAtlasMapping } from './uiControls'
import { formatSeconds } from './timerUI'
import { calculateImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'

  export function createLevelCompleteUI(){
    return (
      <UiEntity key={"levelComplete"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "levelcomplete" ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',
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
    uiTransform={{//
      width: '15%',
      height: '5%',
      positionType:'absolute',
      position:{left:"5%", top:"4%"}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:940,
        sourceLeft:552,
        sourceWidth:141,
        sourceHeight:41
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
      alignItems:'center'
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
      margin:{left:'10%', top:'6%'}
    }}
    // uiBackground={{
    //     color:Color4.Purple()
    // }}
  >
     <UiEntity
    uiTransform={{
      width: '100%',
      height: '85%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{right:'10%'}
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
    uiTransform={{//
      width: '50%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-start',
      margin:{bottom:"2%"}
    }}
    // uiBackground={{
    //     color:Color4.Red()
    // }}
  >

    <UiEntity
    uiTransform={{
      width: '80%',
      height: '10%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:773,
        sourceLeft:322,
        sourceWidth:404,
        sourceHeight:51
      })
    }}
  />

<UiEntity
    uiTransform={{
      width: '100%',
      height: '9%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      margin:{top:"10%"}
    }}
    >
<UiEntity
    uiTransform={{
      width: '17%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:715,
        sourceLeft:0,
        sourceWidth:74,
        sourceHeight:44
      })
    }}
  />
  <UiEntity
    uiTransform={{
      width: '35%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignContent:'flex-start',
    }}
    // uiBackground={{color:Color4.Gray()}}
    // uiBackground={{
    //   textureMode:'stretch',
    //   texture: {
    //     src: "assets/images/atlas/img3.png"
    //   },
    //   uvs:getImageAtlasMapping({
    //     atlasHeight:1024,
    //     atlasWidth:1024,
    //     sourceTop:843,
    //     sourceLeft:511,
    //     sourceWidth:124,
    //     sourceHeight:44
    //   })
    // }}
    uiText={{value:"" + formatSeconds(), fontSize:40}}
  />
  </UiEntity>

<UiEntity
    uiTransform={{
      width: '100%',
      height: '9%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      margin:{top:"10%"}
    }}
    >

<UiEntity
    uiTransform={{
      width: '25%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:715,
        sourceLeft:97,
        sourceWidth:122,
        sourceHeight:44
      })
    }}
  />

<UiEntity
    uiTransform={{
      width: '20%',
      height: '100%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignContent:'flex-start',
    }}
    // uiBackground={{color:Color4.Gray()}}
    // uiBackground={{
    //   textureMode:'stretch',
    //   texture: {
    //     src: "assets/images/atlas/img3.png"
    //   },
    //   uvs:getImageAtlasMapping({
    //     atlasHeight:1024,
    //     atlasWidth:1024,
    //     sourceTop:843,
    //     sourceLeft:511,
    //     sourceWidth:124,
    //     sourceHeight:44
    //   })
    // }}
    uiText={{value:"" + GAME_STATE.levelPortals, fontSize:40}}
  />

  </UiEntity>

<UiEntity
    uiTransform={{
      width: '49%',
      height: '9%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignSelf:'flex-end',
      margin:{top:"10%", right:'16%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:768,
        sourceLeft:0,
        sourceWidth:284,
        sourceHeight:52
      })
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      displays.active = "loading"
      GAME_STATE.tryLevelStart(GAME_STATE.currentLevel)
    }}
  />


  </UiEntity>

  </UiEntity>

  </UiEntity>

  </UiEntity>
      </UiEntity>
    )
    }