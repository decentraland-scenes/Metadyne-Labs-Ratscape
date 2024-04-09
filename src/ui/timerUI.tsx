import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { GAME_STATE } from '../gameData'
import { LevelLoadingState, State } from '../gameObject/gameObjectType'
import { getImageAtlasMapping } from './uiControls'
import { calculateImageDimensions, dimensions } from './ui'
// import { dimensions } from './ui'

// export let showTimerUI = true

// export function displayTimerUI(value:boolean){
//   showTimerUI = value
// }

export function createTimerUI(){
return (
<UiEntity
key={"timerui"}
    uiTransform={{
      width: calculateImageDimensions(10, 3).width,
      height: calculateImageDimensions(10, 3).height,
      display: GAME_STATE.state === State.PLAYING ? "flex" : 'none',
      positionType:'absolute',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
      // position:{left: (dimensions.width - calculateImageDimensions(dimensions,8,1).width) / 2, top:'1%'}
      position:{left:(dimensions.width - calculateImageDimensions(10, 3).width) / 2, top:"1%"}

    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:608,
        sourceLeft:0,
        sourceWidth:283,
        sourceHeight:94
      })
    }}
  >
    <Label
      value={formatSeconds()}
      color={Color4.White()}
      fontSize={24}
      font="serif"
      textAlign="middle-center"
      uiTransform={{margin:{bottom:'10%', left:'10%'}}}
    />

  </UiEntity>//
)
}

export function formatSeconds(): string {
  let seconds = parseInt(GAME_STATE.levelTime.toFixed(0))
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format the string
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}