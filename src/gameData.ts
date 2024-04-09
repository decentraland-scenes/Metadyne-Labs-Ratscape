import { Entity, PointerEvents, engine, pointerEventsSystem } from "@dcl/sdk/ecs"
import { LevelData, LevelLoadingState, PortalColor, State } from "./gameObject/gameObjectType"
import { Vector3 } from "@dcl/sdk/math"
import * as utils from '@dcl-sdk/utils'
import { changeLoadingScreenLevel } from "./ui/loadingUI"
import { IsLoadingObject, createLevel, deleteLevel, loadingObjectsSystem } from "./level/createLevel"
import { setupUi } from "./ui/ui"
import { displays } from "./ui/uiControls"
import * as CANNON from 'cannon/build/cannon'
import { CONFIG } from "./config"
import { getUserData } from "~system/UserIdentity"
import { SFX, playSFXSound, stopAllAmbientSounds } from "./gameObject/soundFX"
import { rewardsdata } from "./rewardData"
import { updateWonReward } from "./ui/wonRewardUI"
import { stopVO } from "./gameObject/soundVO"
import { checkGunSystem, gunSystem } from "./gameSystem/gunAndPortalSystem"
import { claimToken } from "./claim-dropin/claim"
import { ClaimConfig } from "./claim-dropin/claimConfig"
import { levelConfigCollection } from "./level/levelData"
import { displayAcidDamageUI, displayDamageUI } from "./ui/damageSplashUI"
import { displayHealthBarUI } from "./ui/healthbarUI"
    
class GameState{
    currentLevel: number = 0
    activeBox: Entity | undefined = undefined
    grabbedTurret: Entity | undefined = undefined
    grabbedKitten: Entity | undefined = undefined

    levelStartPosition: Vector3 | undefined = undefined
    levelStartCameraTarget: Vector3 | undefined = undefined
    isObservableReady: boolean = false
    
    gun: Entity | undefined = undefined
    activePortal: PortalColor = PortalColor.Blue
    portalBlue: Entity | undefined = undefined
    portalOrange: Entity | undefined = undefined

    //TO BE REMOVED BEFORE NEXT LEVEL STARTED
    _POINTER_EVENT_LIST: Entity[] = []
    _ONPOINTERDOWNSYSTEM_LIST: Entity[] = []
    _TRIGGER_AREA_LIST: Entity[] = []
    _SETTIMEOUT_LIST: number[] = []
    _CANNON_BODY_LIST: CANNON.Body[] = []
    boxGrabbedPosition: Vector3 = Vector3.Zero()
    
    playerData:LevelData[] = []
    rewardsData:Map<string, any> = new Map()
    userData:any

    state:State = State.WAITING
    isWin: boolean = false

    isGunSystemAdded:boolean = false
    
    loadingSystem:Boolean = false
    loadingState:LevelLoadingState = LevelLoadingState.LOADING
    loadingObjectCount:number = 0

    //settings
    sfxSound:boolean = true
    music:boolean = true

    //timer
    timerSystem:any
    levelTime:number = 0
    levelPortals:number = 0
    deathRespawnTimer:number = 5
    
    constructor(){
        this.reset()
    }

    async init(){
        this.reset()

        this.userData = await getUserData({})
        console.log('user data is', this.userData)
        this.setPlayerData(await this.getPlayerData(this.userData.data.userId))


        engine.addSystem(checkGunSystem)
     }
    reset(){
        //this.currentLevel = 0//
        this.activeBox = undefined
        this.grabbedKitten = undefined
        this.grabbedTurret = undefined
        this.gun = undefined
        this.activePortal = PortalColor.Blue
        this.levelStartPosition = undefined
        this.levelStartCameraTarget = undefined
        this._CANNON_BODY_LIST = []
        
        let count = 0
        for(let entity of this._POINTER_EVENT_LIST){
            count += 1
            console.log("create level. reset game state. delete pointerEvents from:", entity, count)
            PointerEvents.deleteFrom(entity)
        }
        count = 0
        for(let entity of this._ONPOINTERDOWNSYSTEM_LIST){
            count += 1
            console.log("create level. reset game state. delete onPointerDown from:", entity, count)
            pointerEventsSystem.removeOnPointerDown(entity)
        }
        count = 0
        for(let entity of this._TRIGGER_AREA_LIST){
            count += 1
            console.log("create level. reset game state. delete trigger area from:", entity, count)
            utils.triggers.enableTrigger(entity, false)
            utils.triggers.removeTrigger(entity)
        }
        count = 0
        for(let timerNumber of this._SETTIMEOUT_LIST){
            count += 1
            console.log("create level. reset game state. delete set timeout:", timerNumber, count)
            utils.timers.clearTimeout(timerNumber)
        }
        this._POINTER_EVENT_LIST = []
        this._ONPOINTERDOWNSYSTEM_LIST = []
        this._TRIGGER_AREA_LIST = []
        this._SETTIMEOUT_LIST = []
    }

    setLoadingLevel(level:number | string, count:number){
        changeLoadingScreenLevel(typeof level === "string" ? parseInt(level) : level)
        this.loadingState = LevelLoadingState.LOADING
        this.loadingObjectCount = count
        //console.log("LOADING OBJECTS SYSTEM. ADD", this.loadingSystem)

        // if(!this.loadingSystem){
        //     this.loadingSystem = true
        //     engine.addSystem(loadingObjectsSystem)
        // }
    }

    loadedObject(entity:Entity){
        IsLoadingObject.deleteFrom(entity)
        this.loadingObjectCount--
        if(this.loadingObjectCount <= 0){
            this.resetLoading()
        }
    }

    playLevel(){
        this.resetLoading()
        this.state = State.PLAYING
        this.levelPortals = 0
        this.levelTime = 0
    }

    resetLoading(){
        this.loadingState = LevelLoadingState.LOADED

        if(this.loadingSystem){
            this.loadingSystem = false
            engine.removeSystem(loadingObjectsSystem)
        }
        this.loadingObjectCount = 0
        displays.active = ""
    }

    async getPlayerData(user:string){
        try{
            let res = await fetch((CONFIG.DEBUG_SCENE_ENABLED ? CONFIG.debugServer : CONFIG.prodServer) + "get-data/" + user)
            let data = await res.json()
            console.log('server data is', data)
            return data.data
        }
        catch(e){
            console.log('get data fetch error',e)
        }   
    }

    setPlayerData(data?:any){
        if(data){
            let count = 0
            data.levels.forEach((level:any, i:number)=>{
                this.playerData.push({
                    level:count,
                    time:level.time,
                    portals:level.portals,
                    status:level.status
                })
                count++
            })

            if(count < 13){
                this.currentLevel = count


                this.playerData.push({
                    level:count,
                    time:0,
                    portals:0,
                    status: CONFIG.DEBUG_UNLOCKLEVELS_ENABLED ? 'c' : 'un'
                })
                count++

                for(let i = count; i < 13; i++){
                    this.playerData.push({
                        level:i,
                        time:0,
                        portals:0,
                        status: CONFIG.DEBUG_UNLOCKLEVELS_ENABLED ? 'un' : 'ns'
                    })
                }
            }else{
                this.currentLevel = 0
            }

            if(data.rewards){
                data.rewards.forEach((reward:any) => {
                    this.rewardsData.set(reward.id, reward)
                });
            }

            console.log('player data is', this.playerData)
            console.log('reward data is', this.rewardsData)

            changeLoadingScreenLevel(this.currentLevel)
            displays.active = "loading"
        }
        else{
            console.log("no prior games played for user, populate default levels")
            this.playerData.push({
                level:0,
                time:0,
                portals:0,
                status: CONFIG.DEBUG_UNLOCKLEVELS_ENABLED ? 'c' : 'un'
            })

            for(let i = 1; i < 13; i++){
                this.playerData.push({
                    level:i,
                    time:0,
                    portals:0,
                    status: CONFIG.DEBUG_UNLOCKLEVELS_ENABLED ? 'c' : 'ns'
                })
            }


            this.currentLevel = 0

            changeLoadingScreenLevel(this.currentLevel)
            displays.active = "loading"
        }
    }

   async tryLevelStart(level:number){
        displays.active = "loading"

        engine.removeSystem(levelTimerSystem)
        this.state = State.WAITING

        this.currentLevel = level
        let LEVEL_DATA = levelConfigCollection[level as keyof typeof levelConfigCollection]
        if(!LEVEL_DATA) return
        GAME_STATE.setLoadingLevel(level, LEVEL_DATA.length)
        
        utils.timers.setTimeout(() => {
            createLevel(level)
        }, 1000)
    }

    completedLevelCount(){
        return this.playerData.filter(obj => obj.status === "c").length;
    }

    async completeLevel(){
        if(this.state === State.PLAYING){
            this.state = State.WAITING
            console.log("LEVEL COMPLETED!", this.currentLevel)
            
            let level = this.playerData.filter((l)=> l.level === this.currentLevel)[0]
            let already:boolean = false
            if(level){
                level.time = parseFloat(this.levelTime.toFixed(2))
                level.portals = this.levelPortals
                if(level.status === "c"){
                    already = true
                }
                level.status = 'c'
            }
    
            //check if level has a reward to show user
            let reward = rewardsdata.find((r:any)=> r.level === this.currentLevel)
            if(reward && !already){
                this.rewardsData.set(reward.id, reward)
                playSFXSound(SFX.rewardUISoundEntity, true)
                updateWonReward(reward.img)
                displays.active = "wonreward"
            }
            else{
                if(this.currentLevel < 13) displays.active = "levelcomplete"
                else displays.active = "wongame"
            }
    
            if(reward && !already && !ClaimConfig.CONFIG_CLAIM_TESTING_ENABLED){
                claimToken(reward.level)
            }

            // // NOTE: move the 'bowl' claming to finish lab trigger area
            // if(this.currentLevel === 6 && this.grabbedKitten){
            //     claimToken('bowl')
            // }
            
            if(this.currentLevel < 13) {
                this.currentLevel++
                
                let nextLevel = this.playerData.filter((l)=> l.level === this.currentLevel + 1)[0]
                if(nextLevel){
                    nextLevel.status = 'un'
                }
            }

            await this.saveLevelData(level, true)
        }
    }

    async saveLevelData(level:any, reward?:boolean){
        try{
            let res = await fetch((CONFIG.DEBUG_SCENE_ENABLED ? CONFIG.debugServer : CONFIG.prodServer) + "post-level-data", {
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({player:{userId:this.userData.data.userId, name:this.userData.data.displayName, web3:this.userData.data.hasConnectedWeb3}, level:level, reward:reward})
            })
            console.log('posting level data res', await res.json())
        }
        catch(e){
            console.log('error posting level to server',e)
        }
    }

    updateSFXSound(){
        this.sfxSound = !this.sfxSound
        if(!this.sfxSound){
            stopAllAmbientSounds()
            stopVO()
        }
    }

    updateMusic(){
        this.music = !this.music
        if(this.music){
            
        }
    }

    handleDeath(){
        playSFXSound(SFX.playerDieVoiceEntity, true)
        GAME_STATE.state = State.WAITING
        displayDamageUI(false)
        displayAcidDamageUI(false)
        displayHealthBarUI(false)

        displays.active = "death"

        engine.removeSystem(levelTimerSystem)
        engine.addSystem(deathRespawnSystem)

        this.removeGunSystem()

        utils.timers.setTimeout(() => {
            deleteLevel()
        }, 500)
    }

    getIsGunAdded(){
        return this.isGunSystemAdded
    }


    addGunSystem(){
        this.isGunSystemAdded = true
        utils.timers.setTimeout(()=>{
            engine.addSystem(gunSystem)
        }, 100)

        console.log('game state is now', this.isGunSystemAdded)
    }

    removeGunSystem(){
        console.log('game state remove gu nfunction')
        engine.removeSystem(gunSystem)
        this.isGunSystemAdded = false
    }
}


export const GAME_STATE = new GameState()

export function initGameState(){
    GAME_STATE.init().then(()=>{
        setupUi()
    })
    return GAME_STATE
}


export function levelTimerSystem(dt:number){
    GAME_STATE.levelTime += dt
}


export function deathRespawnSystem(dt:number){
    if(GAME_STATE.deathRespawnTimer > 0){
        GAME_STATE.deathRespawnTimer -= dt
    }
    else{
        engine.removeSystem(deathRespawnSystem)
        GAME_STATE.tryLevelStart(GAME_STATE.currentLevel)
        GAME_STATE.deathRespawnTimer = 5
    }
}