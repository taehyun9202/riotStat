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

    return (
        <div className="championList">
            <h1>All Champions</h1>
            <div className="championList_List">
                { Object.keys(championList).map((champion) => (
                    <Link to={{ pathname: `/champion/${champion}`, champion: championList[champion] }}>
                        <div className="championList_Champ">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`} alt={champion}/>
                            <p>{championList[champion].name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ChampionList
