import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps, PositionUnit } from '@dcl/sdk/react-ecs'
import { GAME_STATE } from '../gameData'
import { LevelLoadingState } from '../gameObject/gameObjectType'
import { displays } from './uiControls'

export let showLoading = false
export let loadingScreenLevel = 0
export let loadingProgress:PositionUnit = '10%'

export function changeLoadingScreenLevel(value:number){
  loadingScreenLevel = value
}
export function changeLoadingProgressBar(value:number){
  loadingProgress = ((0.1 + value * 0.9) * 100 + '%') as PositionUnit
}

export function createLoadingUI(){
return (
  <UiEntity key={"loading"}
    uiTransform={{
      width: '100%',
      height: '100%',
      display: displays.active === "loading" && GAME_STATE.loadingState === LevelLoadingState.LOADING ? 'flex' :'none'
    }}
    uiBackground={{color:Color4.Black()}}
  >

<UiEntity
    uiTransform={{
      width: '100%',
      height: '100%',
      positionType:'absolute',
      position:{left:0, top:0}
    }}
    uiBackground={{color:Color4.Black()}}
  >

    <UiEntity
        uiTransform={{
          // width: calculateImageDimensions(100, 1.77).width,
              // height: calculateImageDimensions(100, 1.77).height,
              width:'100%',
              height:'100%',
          positionType:'absolute',
          position:{left:0, top:0}
        }}
        uiBackground={{
          textureMode:'stretch',
          texture: {
            src: "assets/images/loading/level_" + loadingScreenLevel + ".png"
          }
         
        }}
      />
       <UiEntity
        // progress bar container
        uiTransform={{
          width: '16%',
          height: '5%',
          minHeight: '5%',
          alignItems: 'center',
          alignSelf: 'center',
          positionType: 'absolute',
          position:{left:'4%', top: '89%'},
          display: 'flex'
        }}
      >

            <UiEntity
                uiTransform={{
                  
                      width:'100%',
                      height:'100%',
                  positionType:'absolute',
                  
                }}
                uiBackground={{
                  textureMode:'nine-slices',
                  texture: {
                    src: "assets/images/loading/progress_bar_frame.png",
                  },
                  textureSlices: {
                    top: 0.15,
                    bottom: 0.15,
                    left: 0.15,
                    right: 0.15
                  }
                }}
              />
            <UiEntity
          //loading bar scaling part
          uiTransform={{
            width: loadingProgress,
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center'
          }}
          uiBackground={{
            textureMode: 'nine-slices',
            texture: {
              src: "assets/images/loading/progress_bar.png"
            },
            textureSlices: {
              top: 0.22,
              bottom: 0.22,
              left: 0.22,
              right: 0.22
            },
            
          }}
        >

        </UiEntity>
      
          
      </UiEntity>
      </UiEntity>
  </UiEntity>
)
}