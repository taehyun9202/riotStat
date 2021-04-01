import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { language, version } from './state'
import './ChampionList.css'

function ChampionList(props) {
    const [ championList, setChampionList ] = useState({})

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`)
            .then(res => setChampionList(res.data.data))
            .catch(err => console.log(err))
    },[championList?.length])

    console.log(championList)

    return (
        <div className="championList">
            <div className="championList_List">
                { Object.keys(championList).map((champion) => (
                    <Link className="championList_Champ" to={{ pathname: `/champion/${champion}`, champion: championList[champion] }}>
                        <p>{championList[champion].name}</p>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} alt={champion}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ChampionList
