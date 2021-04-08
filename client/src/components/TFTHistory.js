import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from './state'
import TFTMatch from './TFTMatch'

function TFTHistory(props) {
    const [ teamFightTacticsHistory, setTeamFightTacticsHistory ] = useState([])
    
    useEffect(() => {
        const fetchData = async () => await axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${props.summoner?.puuid}/ids?count=10&api_key=${API_KEY}`)
            .then(res => setTeamFightTacticsHistory(res.data))
            .catch(err => console.log(err))
        fetchData()
    },[props.summoner.puuid])
    
    return (
        <div className="tftHistory" style={{width:"100%"}} >
            { teamFightTacticsHistory.map((match) => (
                <TFTMatch gameId={match} summoner={props.summoner} />
            ))}
        </div>
    )
}

export default TFTHistory