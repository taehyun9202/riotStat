import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { version } from './state'

function ChampionInfo(props) {
    const [ champion, setChampion ] = useState({})
    var championName = props.location.pathname.slice(10)
    useEffect(() => {
        const fetchData = async () => await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${championName}.json`)
            .then(res => {
                setChampion(res.data.data[championName])
            })
            .catch(err => console.log(err))
        fetchData()
    },[champion.data])
    console.log(champion)

    return (
        <div className="championInfo">
            {champion.name}
            {champion.skins?.map((skin) => (
                <div>
                    <img 
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skin.num}.jpg`} 
                        alt="champion" 
                    />
                </div>
            ))}
            {champion.lore}

            <div className="championInfo_Skills">
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/${champion.passive?.image.full}`} alt=""/>

                {champion.spells?.map((skill) => (
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skill.id}.png`} alt=""/>
                ))}
            </div>
        </div>
    )
}

export default ChampionInfo

