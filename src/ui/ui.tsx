import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'
import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import { createMainUI } from './mainUI'
import { createRewardsUI } from './rewardsUI'
import { createLoadingUI } from './loadingUI'
import { createRankingsUI } from './rankingsUI'
import { createWelcomeUI } from './welcomeUI'
import { createSettingsUI } from './settingsUI'
import { createSelectLevelUI } from './selectLevelUI'
import { createLevelCompleteUI } from './levelCompleteUI'
import { createReturnLabUI } from './returnLabUI'
import { createTimerUI } from './timerUI'
import { createHealthBarUI } from './healthbarUI'
import { createDeathUI } from './deathUI'
import { createAcidDamageSplashUI, createDamageSplashUI } from './damageSplashUI'
import { createReturnGCUI } from './returnGC'
import { createControls } from './controlsUI'
import { createWonRewardUI } from './wonRewardUI'
import { createWonGameUI } from './wonGameUI'
import { createPopupUI } from './popupUI'

export let dimensions:any = {
  width:0,
  height:0
}

export function setupUi() {
  getCanvasInfo()
  ReactEcsRenderer.setUiRenderer(uiComponent)
  engine.addSystem(dimensionSizerSystem)
}

const uiComponent = () => [
  createDeathUI(),
  createRewardsUI(),
  createRankingsUI(),
  createSettingsUI(),
  createSelectLevelUI(),
  createWelcomeUI(),
  createLevelCompleteUI(),
  createReturnLabUI(),
  createReturnGCUI(),
  createTimerUI(),
  createMainUI(),
  createLoadingUI(),
  createHealthBarUI(),
  createDamageSplashUI(),
  createAcidDamageSplashUI(),
  createControls(),
  createWonRewardUI(),
  createWonGameUI(),
  createPopupUI()
]

export function calculateImageDimensions(width:number, aspectRatio: number): any {
  const desiredWidth = width / 100 * dimensions.width;
  const desiredHeight = desiredWidth / aspectRatio;
  return { width: desiredWidth, height: desiredHeight };
}

export function calculateSquareImageDimensions(percentage: number): any {
  const minDimension = Math.min(dimensions.width, dimensions.height);
  const squareSize = (minDimension * percentage) / 100;

  return { width: squareSize, height: squareSize };
}

function getCanvasInfo(){
  let canvas = UiCanvasInformation.get(engine.RootEntity)
	// console.log("CANVAS DIMENSIONS: ", canvas.width, canvas.height)
  dimensions.width = canvas.width
  dimensions.height = canvas.height
}

let timer = 0
function dimensionSizerSystem(dt:number){
  if(timer > 0){
    timer -= dt
  }
  else{
    getCanvasInfo()
    timer = 2
  }
}
