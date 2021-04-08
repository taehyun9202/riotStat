import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from './state'
import LeaderInfo from './LeaderInfo';

function Leaderboard() {
    const [ leaderBoard, setLeaderBoard ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await axios.get(`https://na1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${API_KEY}`)
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
    },[isLoaded])
    var TopTenPlayer = leaderBoard.slice(0, 10)
    console.log(TopTenPlayer)

    return (
        <div className="leaderBoard">
            <h1>Leader B--oard</h1>
            <div className="leaderBoard_Content">
                {TopTenPlayer.map((summoner) => (
                    <div>
                        <LeaderInfo summoner={summoner}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard

