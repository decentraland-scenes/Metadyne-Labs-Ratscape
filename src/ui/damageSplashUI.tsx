import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity, Position,UiBackgroundProps } from '@dcl/sdk/react-ecs'
import { displays, getImageAtlasMapping, } from './uiControls'

export let showDamageUI:boolean = false
export let showAcidDamageUI: boolean = false

export function displayDamageUI(value:boolean){
  showDamageUI = value
}
export function displayAcidDamageUI(value:boolean){
    showAcidDamageUI = value
}

export function createDamageSplashUI(){
    return (
        <UiEntity key={"damagesplash"}
        uiTransform={{
            // width: calculateImageDimensions(100, 1.77).width,
            // height: calculateImageDimensions(100, 1.77).height,
            width:'100%',
            height:'100%',
            flexDirection:'column',
            display: showDamageUI ? 'flex' : 'none',
        }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
        src: "assets/images/atlas/img9.png"
        },
        uvs:getImageAtlasMapping({
        atlasHeight:829,
        atlasWidth:1475,
        sourceTop:0,
        sourceLeft:0,
        sourceWidth:1475,
        sourceHeight:829
        })
    }}
    >
        </UiEntity>
    )
}

export function createAcidDamageSplashUI(){
    return (
        <UiEntity key={"damagesplashacid"}
        uiTransform={{
            // width: calculateImageDimensions(100, 1.77).width,
            // height: calculateImageDimensions(100, 1.77).height,
            width:'100%',
            height:'100%',
            flexDirection:'column',
            display: showAcidDamageUI ? 'flex' : 'none',
        }}
    uiBackground={{
        textureMode:'stretch',
        texture: {
        src: "assets/images/atlas/img11.png"
        },
        uvs:getImageAtlasMapping({
        atlasHeight:829,
        atlasWidth:1475,
        sourceTop:0,
        sourceLeft:0,
        sourceWidth:1475,
        sourceHeight:829
        })
    }}
    >
        </UiEntity>
    )
}