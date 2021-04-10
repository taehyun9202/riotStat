import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from './state'
import './Leaderboard.css'
import TFTLeaderInfo from './TFTLeaderInfo'

function TFTLeaderboard() {
  const [ TFTLeaderBoard, setTFTLeaderBoard ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ division, setDivision ] = useState('I')
  const [ tier, setTier ] = useState('challenger')

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
            if (tier === 'challenger' || tier === 'grandmaster' || tier === 'master') {
                    await axios.get(`https://na1.api.riotgames.com/tft/league/v1/${tier}?api_key=${API_KEY}`)
                        .then(res => setTFTLeaderBoard(res.data.entries))
                        .catch(err => console.log(err))
            } else {
                
                await axios.get(`https://na1.api.riotgames.com/tft/league/v1/entries/${tier}/${division}?page=1&api_key=${API_KEY}`)
                    .then(res => setTFTLeaderBoard(res.data))
                    .catch(err => console.log(err))
            }
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }
        fetchData()
        setIsLoaded(true)
    },[isLoaded, division, tier])

    var TopHundredPlayerTFT = TFTLeaderBoard.slice(0, 100)
  
    return (
        <div className="leaderBoard">
            <h1>TFT Leader Board</h1>
            <div className="leaderBoard_Selection">
                <div>
                    <label>Tier: </label>
                    <select onChange={e => setTier(e.target.value)}>
                        <option value="challenger">CHALLENGER</option>
                        <option value="grandmaster">GRANDMASTER</option>
                        <option value="master">MASTER</option>
                        <option value="DIAMOND">DIAMOND</option>
                        <option value="PLATINUM">PLATINUM</option>
                        <option value="GOLD">GOLD</option>
                        <option value="SILVER">SILVER</option>
                        <option value="BRONZE">BRONZE</option>
                        <option value="IRON">IRON</option>
                    </select>
                </div>
                <div>
                    <label>Division: </label>
                    <select onChange={e => setDivision(e.target.value)}>
                        <option value="I">I</option>
                        {tier === 'challenger' || tier === 'grandmaster' || tier === 'master' ? 
                            null :
                            <>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                            </>
                        }
                    </select>
                </div>
            </div>
            <div className="leaderBoard_Content">
                <div className="leaderBoard_Content_Title">
                    <p id="leaderInfo_Index">Ranking</p>
                    <p id="leaderInfo_Summoner">Summoner</p>
                    <p id="leaderInfo_Queue">Queue Type</p>
                    <p id="leaderInfo_Type">Tier</p>
                    <p id="leaderInfo_Rank">Rank</p>
                    <p id="leaderInfo_Wins">Wins</p>
                    <p id="leaderInfo_Loses">Losses</p>
                    <p id="leaderInfo_Points">Points</p>
                </div>
                {TopHundredPlayerTFT.map((summoner, index) => (
                    <TFTLeaderInfo summoner={summoner} tier={tier} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default TFTLeaderboard
