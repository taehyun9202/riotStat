import React from 'react'
import { Link } from 'react-router-dom'
import { version, convertChampionId } from './state'
import './Team.css'

function Team(props) {
    return (
        <div className="team">
            {props.info?.map((user) => (
                <div className="team_ChampionImage">
                    <img 
                        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${convertChampionId(user.championId)}.png`}
                        alt="ChampionIcon"
                        style={{
                            height: "20px"
                        }}
                    />
                </div>
            ))}
            {props.team?.map((user) => (
                <div className="team_Participant">
                    <Link to={`/summoner/${user.player.summonerName}`}>
                    <p>{user.player.summonerName}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Team