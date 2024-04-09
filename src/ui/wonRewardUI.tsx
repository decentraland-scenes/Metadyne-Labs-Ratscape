
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping } from './uiControls'
import { calculateImageDimensions, calculateSquareImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'
import { GAME_STATE } from '../gameData'
import { State } from '../gameObject/gameObjectType'

export let showWonReward = false
let currentReward:any = {
    atlas:"",
    uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:352,
        sourceLeft:0,
        sourceWidth:1024,
        sourceHeight:352
      })
}

// export function displayWonReward(value:boolean){
//     showWonReward = value
// }

export function updateWonReward(reward:any){
    currentReward.atlas = reward.atlas
    currentReward.uvs = getImageAtlasMapping(reward.pos)
}

  export function createWonRewardUI(){
    return (  
        <UiEntity key={"wonrewardui"}
        uiTransform={{
          width: calculateImageDimensions(50, 1024/352).width,
          height: calculateImageDimensions(50, 1024/352).height,
          flexDirection:'column',
          display: displays.active === "wonreward" ? 'flex' : 'none',
          alignContent:'center',
          justifyContent:'center',
          positionType:'absolute',
          position:{left:(dimensions.width - calculateImageDimensions(50, 1024/352).width) / 2, top:(dimensions.height - calculateImageDimensions(50, 1024/352).height) / 2}
        }}
      >

<UiEntity
    uiTransform={{
      width: '100%',
      height: '100%',
      alignSelf:'center',
      flexDirection:'row',
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
        sourceHeight:352
      })
    }}
    >


{/* reward image column */}
<UiEntity
    uiTransform={{
      width: '30%',
      height: '100%',
      alignSelf:'center',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'flex-start'
    }}
    >

<UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(23).width,
      height: calculateSquareImageDimensions(23).width,
      display:'flex',
      margin:{left:'5%'}
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: currentReward.atlas
        },
        uvs:currentReward.uvs
    }}
    />


    </UiEntity>


{/* reward text column */}
<UiEntity
    uiTransform={{
      width: '70%',
      height: '100%',
      alignSelf:'center',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}
    // uiBackground={{color:Color4.Green()}}
    >


{/* reward unlocked diagonal image */}
    <UiEntity
    uiTransform={{
      width: calculateImageDimensions(30, 673/160).width,
      height: calculateImageDimensions(30, 673/160).height,
      display:'flex',
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img8.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:288,
          sourceLeft:351,
          sourceWidth:673,
          sourceHeight:160
        })
      }}
    />


{/* reward button next */}
<UiEntity
    uiTransform={{
      width: '80%',
      height: '20%',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      alignContent:'flex-end',
      alignSelf:'flex-end',
      margin:{right:'5%'}
    }}
    // uiBackground={{color:Color4.Green()}}
    >
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(20, 444/53).width,
      height: calculateImageDimensions(20, 444/53).height,
      display:'flex',
    }}
    uiBackground={{
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
    onMouseDown={()=>{
        playSFXSound(SFX.clickUISoundEntity, true)

        if(GAME_STATE.currentLevel === 13 && GAME_STATE.isWin) displays.active = "wongame"
        else if(GAME_STATE.state === State.PLAYING) displays.active = ""
        else displays.active = "levelcomplete"
    }}
    />
</UiEntity>


    </UiEntity>



</UiEntity>

        {/* exit button */}
        <UiEntity
    uiTransform={{
      width: calculateSquareImageDimensions(3).width,
      height: calculateSquareImageDimensions(3).height,
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
      playSFXSound(SFX.clickUISoundEntity, true)
        displays.active = "levelcomplete"
    }}
  />
  </UiEntity>
)
    }