import React from 'react'
import { Link } from 'react-router-dom'
import './LeaderInfo.css'

function TFTLeaderInfo(props) {
  return (
    <div className="leaderInfo">
        <div className="leaderInfo_Content">
            <p id="leaderInfo_Index">{props.index + 1}.</p>
            <Link to={`/summoner/${props.summoner.summonerName}`}>
                <p id="leaderInfo_Summoner">{props.summoner.summonerName}</p>
            </Link>
            <p id="leaderInfo_Queue">TFT</p>
            <p id="leaderInfo_Type" style={{ textTransform: "uppercase" }}>{props.tier}</p>
            <p id="leaderInfo_Rank">{props.summoner.rank}</p>
            <p id="leaderInfo_Wins">{props.summoner.wins}</p>
            <p id="leaderInfo_Loses">{props.summoner.losses}</p>
            <p id="leaderInfo_Points">{props.summoner.leaguePoints}</p>
        </div>
    </div>
  )
}

export default TFTLeaderInfo
