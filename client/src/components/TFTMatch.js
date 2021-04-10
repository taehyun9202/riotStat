import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, version, language} from './state'
import Loader from 'react-loader-spinner'
import traits from '../TFT/traits.json'
import { conversionItem, getTime, getDate } from './state'
import './TFTMatch.css'
import TFTParticipants from './TFTParticipants'

function TFTMatch(props) {
    const [ matchInfo, setMatchInfo ] = useState({})
    const [ allParticipants, setAllParticipants ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false);
    const [ showParticiapnts, setShowParticipants ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/${props.gameId}?api_key=${API_KEY}`)
                    .then(res => {
                      setAllParticipants(res.data.metadata.participants)
                      setMatchInfo(res.data.info)
                    })
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

    if(currentSummoner) {
      var userTraits = matchInfo.participants[currentSummoner].traits //array of objects that contains all traits at the end (it also includes the how many unit for each trait, and their trait lvl so that it displays the color correctly)
      var userUnits = matchInfo.participants[currentSummoner].units //array of objects that contians all units at the end, with its character's infos (item, cost, lvl, etc)
      var userPlacement = matchInfo.participants[currentSummoner].placement
      var gameDuration = getTime(matchInfo.participants[currentSummoner].time_eliminated)
      var gameDate = getDate((new Date(matchInfo.game_datetime)).toLocaleString())
      var queue_id = matchInfo.queue_id
    }

    const conversionTrait = trait => {
      var traitData = [...traits]
      for (var i in traitData){
        if (traitData[i].key === trait){
          return traitData[i].name.toLowerCase()
        }
      }
    }

    const renderStars = level => {
      switch(level) {
        case 1: 
          return (
            <div className="TFTMatch_userMatch_Unit_Level">
              <p>★</p>
            </div>
          )
        case 2: 
          return (
            <div className="TFTMatch_userMatch_Unit_Level">
              <p>★★</p>
            </div>
          )
        case 3: 
          return (
            <div className="TFTMatch_userMatch_Unit_Level">
              <p>★★★</p>
            </div>
          )
      }
    }


    const renderBackGroundColor = placement => {
      if (placement === 1) {
        return "lightgreen"
      } else if ( placement > 4) {
        return "tomato"
      } else {
        return "skyblue"
      }
    }

    return (
      <div
        className="TFTMatch"
        style={{
            backgroundColor: renderBackGroundColor(userPlacement),
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
          <div className="TFTMatch_userMatch">
            <div className="TFTMatch_userMatch_Info">
              <h2 style={{
                color : userPlacement > 4 ? "red" : "blue"
              }}>
                # {userPlacement}
              </h2>
              { queue_id === 1090 ? 
                <h4>Normal</h4> : <h4>Ranked</h4>
              }
              <p>{gameDate}</p>
              <p>{gameDuration}</p>
            </div>

            <div className="TFTMatch_userMatch_Traits">
              <div className="Trait_List">
                {userTraits?.map((trait) => (
                  <img src={process.env.PUBLIC_URL + `/TFT/traits/${conversionTrait(trait.name)}.png`} alt=""/>
                ))}
              </div>
            </div>

            <div className="TFTMatch_userMatch_Units">
              {userUnits?.map((unit) => (
                <div className="TFTMatch_userMatch_Unit">
                  <div className="TFTMatch_userMatch_UnitLevel">
                    {renderStars(unit.tier)}
                  </div>
                  <img className="TFTMatch_userMatch_Unit_Img" src={process.env.PUBLIC_URL + `/TFT/champions/${unit.character_id}.png`} alt=""/>
                  <div className="TFTMatch_userMatch_UnitItems">
                    { unit.items.map((item) => (
                      <img className="TFTMatch_userMatch_Item_Img" src={process.env.PUBLIC_URL + `/TFT/items/${conversionItem(item)}.png`} alt=""/>
                    ))}
                  </div>
                </div>
                ))}
            </div>
            <div className="TFTMatch_userMatch_Participants">
              {!showParticiapnts ? 
                <button onClick={() => setShowParticipants(!showParticiapnts)}>Render Participants</button> :
                 allParticipants?.map((participant) => (
                  <TFTParticipants participant={participant}/>
                ))
              }
            </div>

          </div>
        }
      </div>
    )
}

export default TFTMatch
