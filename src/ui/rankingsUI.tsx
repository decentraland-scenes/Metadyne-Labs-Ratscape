import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { InputAction, MeshCollider, MeshRenderer, Texture, Transform, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { LevelData, State } from '../gameObject/gameObjectType'
import { GAME_STATE } from '../gameData'
import { displays, getImageAtlasMapping } from './uiControls'
import { formatTimer } from '../helper/helper'
import { calculateImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'

export let showRankings = false
export let visibleRows:any[]= []
export let visibleIndex:number = 0

  export function createRankingsUI(){
    return (
      <UiEntity key={"rankings"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "rankings" ? 'flex' : 'none',
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

<UiEntity
    uiTransform={{
      width: calculateImageDimensions(14,286/64).width,
      height: calculateImageDimensions(14,286/64).height,
    positionType:'absolute',
    position:{left:0, top:0}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:800,
        sourceLeft:480,
        sourceWidth:288,
        sourceHeight:64
      })
    }}
  />

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
    onMouseDown={()=>{
      playSFXSound(SFX.cancelUISoundEntity, true)
      displays.active = ""
      GAME_STATE.state === State.WAITING ?  displays.active = "welcome" : null
    }}
  />

<UiEntity
    uiTransform={{//
      width: '100%',
      height: '60%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        // color:Color4.Green()
    }}
  >

  <UiEntity
    uiTransform={{//
      width: '5%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start',
      margin:{left:'2%'}
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}//
    >

  <UiEntity
    uiTransform={{//
      width: '100%',
      height: '15%',

    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/icons/rewards_left.png"
      }
    }}//
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      if(visibleIndex >0){
        visibleIndex--
      }
    }}
  />
  </UiEntity>

  <UiEntity
    uiTransform={{//
      width: '90%',
      height: '100%',
        flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center'
    }}
    uiBackground={{
        // color:Color4.Blue()
    }}
    >

 <UiEntity
    uiTransform={{//
      width: '100%',
      height: '15%',
        flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        // color:Color4.Red()
    }}
    >

<UiEntity
uiTransform={{
    width: '25%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:{top:"0.5%"}
}}
// uiBackground={{color:Color4.Red()}}
>
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(15, 224/32).width,
      height:calculateImageDimensions(15, 224/32).height,
        flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img1.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:928,
          sourceLeft:767,
          sourceWidth:224,
          sourceHeight:32
        })
      }}
    />
    </UiEntity>

    <UiEntity
uiTransform={{
    width: '25%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:{top:"0.5%"}
}}
>
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(14, 224/32).width,
      height:calculateImageDimensions(14, 224/32).height,
        flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img1.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:832,
          sourceLeft:767,
          sourceWidth:224,
          sourceHeight:32
        })
      }}
    />
    </UiEntity>

    <UiEntity
uiTransform={{
    width: '25%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:{top:"0.5%"}
}}
>
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(14, 224/32).width,
      height:calculateImageDimensions(14, 224/32).height,
        flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img1.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:864,
          sourceLeft:767,
          sourceWidth:224,
          sourceHeight:32
        })
      }}
    />
    </UiEntity>


    <UiEntity
uiTransform={{
    width: '25%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:{top:"0.5%"}
}}
>
<UiEntity
    uiTransform={{
      width: calculateImageDimensions(14, 224/32).width,
      height:calculateImageDimensions(14, 224/32).height,
        flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
          src: "assets/images/atlas/img1.png"
        },
        uvs:getImageAtlasMapping({
          atlasHeight:1024,
          atlasWidth:1024,
          sourceTop:896,
          sourceLeft:767,
          sourceWidth:224,
          sourceHeight:32
        })
      }}
    />
    </UiEntity>



  </UiEntity>
  
  {generateRows()}


  </UiEntity>

  <UiEntity
    uiTransform={{//
        width: '5%',
        height: '100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        margin:{right:'2%'}
      }}
    >

  <UiEntity
    uiTransform={{//
      width: '100%',
      height: '15%',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/icons/rewards_right.png"
      }
    }}
    onMouseDown={()=>{
      playSFXSound(SFX.clickUISoundEntity, true)
      if(visibleIndex < 1){
        visibleIndex++
      }
    }}
  />
  </UiEntity>


  </UiEntity>

  </UiEntity>
      </UiEntity>
    )
}

function generateRows(){
    let arr:any[] = []
    for(let i = (visibleIndex * 10); i < ((visibleIndex * 10) + 10 < 13 ? (visibleIndex * 10) + 10 : 13); i++){
      arr.push(
        <UiEntity key={'level-'+i}
        uiTransform={{//
          width: '100%',
          height: '8%',
            flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
        }}
        uiBackground={{
            // color:Color4.Blue()
        }}
        >
            <UiEntity
        uiTransform={{
          width: '100%',
          height: '5%',
          positionType:'absolute',
          position:{top:0}
        }}
        uiBackground={{
            textureMode:'stretch',
            texture: {
              src: "assets/images/atlas/img1.png"
            },
            uvs:getImageAtlasMapping({
              atlasHeight:1024,
              atlasWidth:1024,
              sourceTop:591,
              sourceLeft:0,
              sourceWidth:800,
              sourceHeight:1
            })
          }}
        />

        <UiEntity
        uiTransform={{
          width: '25%',
          height: '100%',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        }}
        uiText={{value:"Level " + GAME_STATE.playerData[i].level, fontSize:18, textAlign:'middle-left'}}
        />

        <UiEntity
        uiTransform={{
          width: '26%',
          height: '100%',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',//
        }}
        uiText={{value:"" + formatTimer(GAME_STATE.playerData[i].time), fontSize:18}}
        />

        <UiEntity
        uiTransform={{
          width: '26%',
          height: '100%',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        }}
        uiText={{value:""+GAME_STATE.playerData[i].portals, fontSize:18}}
        />

<UiEntity
        uiTransform={{
          width: '21%',
          height: '100%',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        }}
        >
            <UiEntity
        uiTransform={{
          width: calculateImageDimensions(11, 192/32).width,
          height: calculateImageDimensions(11, 192/32).height,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
        }}
        uiBackground={{
            textureMode:'stretch',
            texture: {
              src: "assets/images/atlas/img1.png"
            },
            uvs:getCompletion(i, GAME_STATE.playerData[i].status)
          }}
        />
        </UiEntity>
    
      </UiEntity>
    ) 
    }
    return arr
}


function getCompletion(level:number, value:string){
  if(GAME_STATE.currentLevel === level && value === "ns"){
    return getImageAtlasMapping({
      atlasHeight:1024,
      atlasWidth:1024,
      sourceTop:800,
      sourceLeft:768,
      sourceWidth:192,
      sourceHeight:32
    })
  }
  else{
    switch(value){
      case 'ns':
          return getImageAtlasMapping({
              atlasHeight:1024,
              atlasWidth:1024,
              sourceTop:800,
              sourceLeft:768,
              sourceWidth:192,
              sourceHeight:32
            })

        case 'c':
          return getImageAtlasMapping({
              atlasHeight:1024,
              atlasWidth:1024,
              sourceTop:736,
              sourceLeft:768,
              sourceWidth:192,
              sourceHeight:32
            })

        case 'un':
            return getImageAtlasMapping({
                atlasHeight:1024,
                atlasWidth:1024,
                sourceTop:768,
                sourceLeft:768,
                sourceWidth:192,
                sourceHeight:32
              })
  }
  }


}