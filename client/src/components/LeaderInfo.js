import React from 'react'
import { Link } from 'react-router-dom'
import './LeaderInfo.css'

function LeaderInfo(props) {
    const reformSeries = series => {
        var newSeries = series.replaceAll("N", "-")
        return newSeries
    }
    return (
        <div className="leaderInfo">
            <div className="leaderInfo_Content">
                <p id="leaderInfo_Index">{props.index + 1}.</p>
                <Link to={`/summoner/${props.summoner.summonerName}`}>
                    <p id="leaderInfo_Summoner">{props.summoner.summonerName}</p>
                </Link>
                <p id="leaderInfo_Queue">{props.summoner.queueType}</p>
                <p id="leaderInfo_Type">{props.summoner.tier}</p>
                <p id="leaderInfo_Rank">{props.summoner.rank}</p>
                <p id="leaderInfo_Wins">{props.summoner.wins}</p>
                <p id="leaderInfo_Loses">{props.summoner.losses}</p>
                {props.summoner.miniSeries ?
                    <p id="leaderInfo_Points leaderInfo_Series">{reformSeries(props.summoner.miniSeries.progress)}</p> :
                    <p id="leaderInfo_Points">{props.summoner.leaguePoints}</p>
                }
            </div>
        </div>
    )
}

export default LeaderInfo

