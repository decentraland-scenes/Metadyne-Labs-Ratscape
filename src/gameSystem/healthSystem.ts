import { Billboard, Entity, GltfContainer, RaycastQueryType, Schemas, Transform, engine, raycastSystem } from "@dcl/sdk/ecs"
import { CONFIG } from "../config"
import { Vector3, Quaternion, Color4 } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
import { SFX, playSFXSound } from "../gameObject/soundFX"
import { displayHealthBarUI } from "../ui/healthbarUI"
import { GAME_STATE } from "../gameData"
import { State } from "../gameObject/gameObjectType"
import { displays } from "../ui/uiControls"
import { displayAcidDamageUI, displayDamageUI, showDamageUI } from "../ui/damageSplashUI"

export enum HealthDamageType{
    TURRET = 0.2,
    ACID = 2,
    LASERFIELD = 0.4,
    LASERRED = 0.2,
}

export const _CONFIG_HEALTH = {
    currentHealth: 1,
    totalDPS: 0,
    isDamaged: false,
    isAcidDamage: false,
    regenCD: false,
    regenCDTimer: undefined as undefined | number,

    splashTimer: 2,

    _REGEN_CD_TIME: 1000,
    _REGEN_HEALTH: 0.5,
    _MAX_HEALTH: 1,
    _MIN_HEALTH: 0,
    
    addDPS(addDPS: HealthDamageType){
        if(_CONFIG_HEALTH.regenCDTimer !== undefined){
            utils.timers.clearTimeout(_CONFIG_HEALTH.regenCDTimer)
        }

        _CONFIG_HEALTH.regenCD = true

        _CONFIG_HEALTH.totalDPS += addDPS
        _CONFIG_HEALTH.totalDPS = Math.round(_CONFIG_HEALTH.totalDPS * 100) / 100

        console.log("gameplay. health. add dps:", addDPS, "current total dps:", _CONFIG_HEALTH.totalDPS)
        
        if(_CONFIG_HEALTH.currentHealth <= _CONFIG_HEALTH._MIN_HEALTH) return

        displays.active = ""
        if(_CONFIG_HEALTH.isAcidDamage){
            displayAcidDamageUI(true)
        }
        else{
            displayDamageUI(true)
        }
    },
    removeDPS(stopDPS: HealthDamageType){
        if(_CONFIG_HEALTH.regenCDTimer !== undefined){
            utils.timers.clearTimeout(_CONFIG_HEALTH.regenCDTimer)
        }

        _CONFIG_HEALTH.totalDPS -= stopDPS
        _CONFIG_HEALTH.totalDPS = Math.round(_CONFIG_HEALTH.totalDPS * 100) / 100
        
        console.log("gameplay. health. stop dps:", stopDPS, "current total dps:", _CONFIG_HEALTH.totalDPS)

        if(_CONFIG_HEALTH.totalDPS === 0){
            _CONFIG_HEALTH.regenCD = true
            _CONFIG_HEALTH.regenCDTimer = utils.timers.setTimeout(() => {
                _CONFIG_HEALTH.regenCD = false
            }, _CONFIG_HEALTH._REGEN_CD_TIME)
        }
    }
}

export function resetHealthSystem(){
    _CONFIG_HEALTH.currentHealth = 1
    _CONFIG_HEALTH.totalDPS = 0
    _CONFIG_HEALTH.isDamaged = false
    _CONFIG_HEALTH.isAcidDamage = false
    _CONFIG_HEALTH.regenCD = false
    if(_CONFIG_HEALTH.regenCDTimer){
        utils.timers.clearTimeout(_CONFIG_HEALTH.regenCDTimer)
    }
    _CONFIG_HEALTH.regenCDTimer = undefined
}

export function playerHealthSystem(dt: number){

    if(GAME_STATE.state !== State.PLAYING) return

    if(_CONFIG_HEALTH.currentHealth < _CONFIG_HEALTH._MAX_HEALTH) {
        displayHealthBarUI(true)
    }

    if(!_CONFIG_HEALTH.regenCD){
        _CONFIG_HEALTH.currentHealth += _CONFIG_HEALTH._REGEN_HEALTH * dt

        if(_CONFIG_HEALTH.currentHealth >= _CONFIG_HEALTH._MAX_HEALTH) {
            _CONFIG_HEALTH.currentHealth = _CONFIG_HEALTH._MAX_HEALTH
            //_CONFIG_HEALTH.totalDPS = 0
            displayHealthBarUI(false)
            displayDamageUI(false)

            _CONFIG_HEALTH.splashTimer = 2
        }
    }
    
    if(_CONFIG_HEALTH.totalDPS > 0){
        playSFXSound(SFX.damageTakenSoundEntity, true)
        _CONFIG_HEALTH.currentHealth -= _CONFIG_HEALTH.totalDPS * dt
    }

    if(_CONFIG_HEALTH.currentHealth <= _CONFIG_HEALTH._MIN_HEALTH){
        _CONFIG_HEALTH.currentHealth = _CONFIG_HEALTH._MIN_HEALTH
        console.log("game play. health. player die!")
        if(!CONFIG.DEBUG_PLAYER_IMMORTAL) GAME_STATE.handleDeath()
        return
    }

    if(showDamageUI){
        if(_CONFIG_HEALTH.splashTimer > 0){
            _CONFIG_HEALTH.splashTimer -= dt
        }
        else{
            displays.active = ""
            displayDamageUI(false)
            _CONFIG_HEALTH.splashTimer = 0
        }
    }

    //console.log("HEALTH. PLAYER CURRENT HEALTH: ", _CONFIG_HEALTH.currentHealth, "TOTAL DPS:", _CONFIG_HEALTH.totalDPS, "CAN REGENERATE:", !_CONFIG_HEALTH.regenCD)
}