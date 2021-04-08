import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MatchHistory.css'
import Match from './Match'
import { API_KEY } from './state'

function MatchHistory(props) {
    const [ matchHistory, setMatchHistory ] = useState([])
    
    useEffect(() => {
        const fetchData = async () => await axios.get(`/match/v4/matchlists/by-account/${props.summoner?.accountId}?api_key=${API_KEY}`)
            .then(res => {
                setMatchHistory(res.data.matches)
            })
            .catch(err => console.log(err))
        fetchData()
    },[props.summoner.accountId])
    var lastTenMatches = matchHistory.slice(0, 10)

    return (
        <div className="matchHistory">
            { lastTenMatches.map((match) => (
                <Match gameId={match.gameId} summoner={props.summoner} />
            ))}
            
        </div>
    )
    }

export default MatchHistory