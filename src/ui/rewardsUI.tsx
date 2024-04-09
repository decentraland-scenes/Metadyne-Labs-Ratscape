import { Color4, Vector3 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { addLineBreak, displays, getImageAtlasMapping, sizeFont, } from './uiControls'
import { GAME_STATE } from '../gameData'
import { State } from '../gameObject/gameObjectType'
import { rewardStatuses, rewardsdata } from '../rewardData'
import { calculateImageDimensions, dimensions } from './ui'
import { SFX, playSFXSound } from '../gameObject/soundFX'

export let rewardLevel = 0

export function changeRewardLevel(value:number){
  rewardLevel += value
}
  export function createRewardsUI(){
    return (
      <UiEntity key={"rewards"}
        uiTransform={{
          width: calculateImageDimensions(50, 1.78).width,
          height: calculateImageDimensions(50, 1.78).height,
          flexDirection:'column',
          display: displays.active === "rewards" ? 'flex' : 'none',
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
        sourceTop:736,
        sourceLeft:480,
        sourceWidth:288,
        sourceHeight:64
      })
    }}
  />

<UiEntity
    uiTransform={{//
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
    onMouseDown={()=>
      {
        playSFXSound(SFX.cancelUISoundEntity, true)
        GAME_STATE.state === State.WAITING ? displays.active = "welcome" : displays.active = "";}}
  />

<UiEntity
    uiTransform={{
      width: '100%',
      height: '65%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:{top:'2%'}
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}
  >

  <UiEntity
    uiTransform={{
      width: '5%',
      height: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start',
      margin:{left:'3%'}
    }}
    // uiBackground={{
    //     color:Color4.Green()
    // }}
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
        changeRewardLevel(-1)
        if(rewardLevel < 0){
            changeRewardLevel(1)
        }
        console.log('reward is', rewardLevel)
    }}
  />
  </UiEntity>


{/* reward column */}
  <UiEntity
    uiTransform={{//
      width: '50%',
      height: '85%',
        flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}
    >

    {/* reward image column */}
<UiEntity
    uiTransform={{//
      width: '70%',
      height: '95%',
        flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center'//
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs:getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:736,
        sourceLeft:0,
        sourceWidth:287,
        sourceHeight:287
      })
    }}
    >
      <UiEntity
    uiTransform={{//
      width: '100%',
      height: '100%',
        flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: rewardsdata[rewardLevel].img.atlas
      },
      uvs:getImageAtlasMapping(rewardsdata[rewardLevel].img.pos)
    }}
    >
            <UiEntity
    uiTransform={{
      width: '70%',
      height: '17%',
        flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start',
      alignSelf:'flex-end',
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs: getRewardStatus()
    }}
    >
    
    {/* reward status label  */}
    <UiEntity
    uiTransform={{
      width: calculateImageDimensions(10, 160/32).width,
      height: calculateImageDimensions(10, 160/32).height,
      display: !GAME_STATE.rewardsData.has(rewardsdata[rewardLevel].id) ? "flex" : "none",
      margin:{left: '-5%'}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img1.png"
      },
      uvs: getRewardLabel()
    }}
    />

      </UiEntity>

    </UiEntity>

    </UiEntity>


  </UiEntity>
  
{/* reward data column */}
  <UiEntity
    uiTransform={{//
      width: '50%',
      height: '100%',
        flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    }}
  //   uiBackground={{
  //     color:Color4.Purple()
  // }}
    >

<UiEntity
    uiTransform={{//
      width: '75%',
      height: '25%',
      alignSelf:'flex-start',
      margin:{top:"5%"}
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: "assets/images/atlas/img2.png",
      },
      uvs:getImageAtlasMapping(rewardsdata[rewardLevel].label)
    }}
    />

<UiEntity
    uiTransform={{//
      width: '100%',
      height: '60%',
        flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      margin:{top:'2%'}
    }}
    >
      <Label
      value={addLineBreak(rewardsdata[rewardLevel].desc, 35, 35)}
      color={Color4.White()}
      fontSize={sizeFont(18,12)}
      font="serif"
      textAlign="top-left"//
    />
  </UiEntity>

  
{/* <UiEntity
    uiTransform={{//
      width: '60%',
      height: '10%',
        flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'flex-end'
    }}
    uiBackground={{
      textureMode:'stretch',
      texture: {
        src: rewardsdata[rewardLevel].status.atlas
      },
      uvs:getImageAtlasMapping(rewardsdata[rewardLevel].status.locked)
    }}
    /> */}



    </UiEntity>

  <UiEntity
    uiTransform={{//
        width: '5%',
        height: '100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        margin:{right:'3%'}
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
        changeRewardLevel(1)
        if(rewardLevel > rewardsdata.length - 1){
            changeRewardLevel(-1)
        }
        // console.log('reward level is', rewardLevel)
    }}
  />
  </UiEntity>


  </UiEntity>

  </UiEntity>
      </UiEntity>
    )
    }

function getRewardStatus(){
  if(GAME_STATE.rewardsData.has(rewardsdata[rewardLevel].id)){
    let status = GAME_STATE.rewardsData.get(rewardsdata[rewardLevel].id).status
    if(status === "un"){
      return getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:800,
        sourceLeft:288,
        sourceWidth:182,
        sourceHeight:53
    })
    }
    else{
      return getImageAtlasMapping({
        atlasHeight:1024,
        atlasWidth:1024,
        sourceTop:736,
        sourceLeft:288,
        sourceWidth:182,
        sourceHeight:53
    })
    }
  }
  else{
    return getImageAtlasMapping(rewardStatuses.locked)
  }
}

function getRewardLabel(){
  if(!GAME_STATE.rewardsData.has(rewardsdata[rewardLevel].id)){
    return getImageAtlasMapping(rewardsdata[rewardLevel].unlock)
  }
}