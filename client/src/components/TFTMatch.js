import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, version, language} from './state'
import Loader from 'react-loader-spinner'
import traits from './TFT/traits.json'
import items from './TFT/items.json'
import champions from './TFT/champions.json'

function TFTMatch(props) {
    const [ matchInfo, setMatchInfo ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/${props.gameId}?api_key=${API_KEY}`)
                    .then(res => setMatchInfo(res.data.info))
                    .catch(err => console.log(err))
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false);
        }
        fetchData()
    },[props.gameId])

    for (var i in matchInfo.participants) {
      if (matchInfo.participants[i].puuid === props.summoner.puuid) {
        var currentSummoner = i
      }
    }

    const conversionTrait = trait => {
      var traitData = [...traits]
      for (var i in traitData){
        if (traitData[i].key === trait){
          return traitData[i].name.toLowerCase()
        }
      }
    }

    const getTime = time => { 
      var minutes = Math.floor(time / 60);
      var seconds = Math.round(time - minutes * 60);
      return minutes.toString() + "m " + seconds.toString() + "s"
    }

    const getDate = date => {
        var index = date?.indexOf(',')
        return date?.slice(0, index)
    }

    if(currentSummoner) {
      var userTraits = matchInfo.participants[currentSummoner].traits //array of objects that contains all traits at the end (it also includes the how many unit for each trait, and their trait lvl so that it displays the color correctly)
      var userUnits = matchInfo.participants[currentSummoner].units //array of objects that contians all units at the end, with its character's infos (item, cost, lvl, etc)
      var userLevel = matchInfo.participants[currentSummoner].level
      var userPlacement = matchInfo.participants[currentSummoner].placement
      var userDamage = matchInfo.participants[currentSummoner].total_damage_to_players
      var gameDuration = getTime(matchInfo.participants[currentSummoner].time_eliminated)
      var gameDate = getDate((new Date(matchInfo.game_datetime)).toLocaleString())
      var gameMode = matchInfo.tft_game_type
    }

    // for (var i in userTraits) {
    //   if (userTraits[i].tier_current > 0){
    //     var traitUsed = traitUsed.push(userTraits[i].name)
    //   }
    // }


    return (
      <div
        className="match"
            style={{
                // backgroundColor: gameResult ? "skyblue" : "tomato",
                justifyContent: isLoading ? "center" : null,
                alignItems: isLoading ? "center" : null,
            }}
      >
        {
          isLoading ? 
          <Loader
            type="Grid"
            color="#00BFFF"
            height={30}
            width={30}
            timeout={3000}
          /> :
          <div className="userTFTMatch">
            <div className="userTFTMatch_Info">
              <h4>{gameMode}</h4>
              <p>{gameDate}</p>
              {/* {gameResult} */}
              <p>{gameDuration}</p>
            </div>

            <div className="userTFTMatch_Traits" style={{width:"100%"}}>
              {userTraits?.map((trait) => (
                <div>
                  <img src={process.env.PUBLIC_URL + `/TFT/traits/${conversionTrait(trait.name)}.png`} alt=""
                    style={{height:"20px", width:"20px"}}
                  />
                </div>
              ))}
            </div>

            <div className="userTFTMatch_Units">
            </div>

          </div>
        }
      </div>
    )
}

export default TFTMatch
