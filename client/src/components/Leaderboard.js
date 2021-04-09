import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from './state'
import LeaderInfo from './LeaderInfo';
import './Leaderboard.css'

function Leaderboard() {
    const [ leaderBoard, setLeaderBoard ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ queue, setQueue ] = useState('RANKED_SOLO_5x5')
    const [ tier, setTier ] = useState('CHALLENGER')
    
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await axios.get(`https://na1.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/I?page=1&api_key=${API_KEY}`)
                    .then(res => setLeaderBoard(res.data))
                    .catch(err => {
                        console.log(err)
                    })
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false);
        }
        fetchData()
        setIsLoaded(true)
    },[isLoaded, queue, tier])
    var TopHundredPlayer = leaderBoard.slice(0, 100)

    return (
        <div className="leaderBoard">
            <h1>Leader Board</h1>
            <div className="leaderBoard_Selection">
                <div>
                    <label>Queue: </label>
                    <select onChange={e => setQueue(e.target.value)}>
                        <option value="RANKED_SOLO_5x5">RANKED SOLO</option>
                        <option value="RANKED_FLEX_SR">RANKED FLEX</option>
                    </select>
                </div>
                <div>
                    <label>Tier: </label>
                    <select onChange={e => setTier(e.target.value)}>
                        <option value="CHALLENGER">CHALLENGER</option>
                        <option value="GRANDMASTER">GRANDMASTER</option>
                        <option value="MASTER">MASTER</option>
                        <option value="DIAMOND">DIAMOND</option>
                        <option value="PLATINUM">PLATINUM</option>
                        <option value="GOLD">GOLD</option>
                        <option value="SILVER">SILVER</option>
                        <option value="BRONZE">BRONZE</option>
                        <option value="IRON">IRON</option>
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
                {TopHundredPlayer.map((summoner, index) => (
                    <LeaderInfo summoner={summoner} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard

