import { getRealm } from "~system/Runtime"
import { GAME_STATE } from "../gameData"
import { ClaimConfig } from "./claimConfig"
import { signedFetch } from "~system/SignedFetch"

export async function claimToken(level:any) {
    let METHOD_NAME = "claimToken"

    const url = ClaimConfig.rewardsServer + '/api/campaigns/' + ClaimConfig.campaign['RatEscape'].campaign + '/rewards'
    console.log(METHOD_NAME,'sending req to: ', url) 

    let realm = await getRealm({})
    console.log('realm is', realm.realmInfo?.realmName)
  
    let body = JSON.stringify({
      // campaign: ClaimConfig.campaign['RatEscape'].campaign,
      campaign_key: ClaimConfig.campaign['RatEscape'].campaignKeys['level' + level],
      // catalyst: realm.realmInfo ? realm.realmInfo.realmName : "",//
      beneficiary: GAME_STATE.userData.data.hasConnectedWeb3 ? GAME_STATE.userData.data.userId : "",
    })
  
    try {
      let response = null
      console.log(METHOD_NAME,'signedFetch')
      response = await signedFetch({url:url, init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      }})
      
      console.log(METHOD_NAME,'Reward received resp: ', response)
  
    //   this.processResponse(response)
    } catch (error) {
        console.log(METHOD_NAME,'error fetching from token server ', url)
  
    //   this.onFetchError(error)
      console.log(METHOD_NAME,"error",error)
  
    }
  }