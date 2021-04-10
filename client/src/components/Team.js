import React from 'react'
import { Link } from 'react-router-dom'
import { version, convertChampionId } from './state'
import './Team.css'

function Team(props) {
    return (
        <div className="team">
            <div className="team_ChampionImage">
                {props.info?.map((user) => (
                    <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${convertChampionId(user.championId)}.png`}
                        alt="ChampionIcon"
                        style={{
                            height: "20px"
                        }}
                    />
                ))}
            </div>
            <div className="team_Participant">
                {props.team?.map((user) => (
                    <Link to={`/summoner/${user.player.summonerName}`}>
                        <p className="team_Participant_SummonerId">{user.player.summonerName}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Team