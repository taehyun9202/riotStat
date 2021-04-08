import React from 'react'

function LeaderInfo(props) {
    return (
        <div>
            <p>{props.summoner.summonerName}</p>
            <p>{props.summoner.tier}</p>
            <p>{props.summoner.rank}</p>
            <p>{props.summoner.leaguePoints}</p>
            <p>{props.summoner.wins}</p>
            <p>{props.summoner.losses}</p>
            <p>{props.summoner.queueType}</p>
        </div>
    )
}

export default LeaderInfo

