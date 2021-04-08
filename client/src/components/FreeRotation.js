import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API_KEY, convertChampionId, language, version } from './state'
import './FreeRotation.css'

function FreeRotation() {
    const [championList, setChampionList] = useState([])
    const [newPlayerOnly, setNewPlayerOnly] = useState([])
    useEffect(() => {
        axios.get(`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`)
            .then(res =>{
                setChampionList(res.data.freeChampionIds)
                setNewPlayerOnly(res.data.freeChampionIdsForNewPlayers)
            })
            .catch(err => console.log(err))
    }, [championList?.length])

    console.log(championList)
    return (
        <div className="rotation">
            <div className="rotation_Section">
                <h1>Free Rotation</h1>
                <div className="rotation_List">
                    {championList.map((championId) => (
                        <Link to={{ pathname: `/champion/${convertChampionId(championId)}`, champion: convertChampionId(championId) }}>
                            <div className="championList_Champ">
                                <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${convertChampionId(championId)}.png`} alt={convertChampionId(championId)} />
                                <p>{convertChampionId(championId)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="rotation_Section">
                <h1>Free Rotation for New Players</h1>
                <div className="rotation_List">
                    {newPlayerOnly.map((championId) => (
                        <Link to={{ pathname: `/champion/${convertChampionId(championId)}`, champion: convertChampionId(championId) }}>
                            <div className="championList_Champ">
                                <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${convertChampionId(championId)}.png`} alt={convertChampionId(championId)} />
                                <p>{convertChampionId(championId)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FreeRotation
