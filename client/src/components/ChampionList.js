import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { language, version } from './state'
import './ChampionList.css'
import CloseIcon from '@material-ui/icons/Close';

function ChampionList(props) {
    const [ championList, setChampionList ] = useState({})
    const [ tag, setTag ] = useState('All')
    const [ filtered, setFiltered ] = useState({})
    const [ search, setSearch ] = useState(false)
    const [ searchInput, setSearchInput ] = useState("")
    useEffect(() => {
        axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`)
            .then(res => setChampionList(res.data.data))
            .catch(err => console.log(err))
    }, [championList?.length])
    
    // console.log(championList)
    useEffect(() => {
        var filteredList = {}
        Object.keys(championList).map((champion) => {
            // console.log(searchInput, searchInput.toUpperCase(), champion.toUpperCase())
            if (searchInput && champion.toUpperCase().includes(searchInput.toUpperCase())) {
                filteredList[champion] = championList[champion]
            }
        })
        setFiltered(filteredList)
    }, [searchInput])
    console.log(filtered)
    return (
        <div className="championList">
            <h1>All Champions</h1>
            <div className="championList_Select">
                <div 
                    className="championList_Tags"
                    style={{
                        transform: search ? "translateX(-150%)" : null
                    }}
                >
                    <button onClick={() => setTag('All')}>All</button> 
                    <button onClick={() => setTag('Assassin')}>Assassins</button>
                    <button onClick={() => setTag('Fighter')}>Fighters</button>
                    <button onClick={() => setTag('Mage')}>Mages</button>
                    <button onClick={() => setTag('Marksman')}>Marksmen</button>
                    <button onClick={() => setTag('Support')}>Supports</button>
                    <button onClick={() => setTag('Tank')}>Tanks</button>
                </div>
                <div 
                    className="championList_SearchBar" 
                    style={{ 
                        visibility: search ? "visible" : "hidden",
                        transitionDelay: search ? "0.8s" : "0s"
                    }}
                >
                    <input 
                        type="text" 
                        placeholder="Search by Champion Name" 
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}/>
                    <CloseIcon onClick={() => { 
                        setSearch(false)
                        setSearchInput("")
                        setFiltered({})
                    }} className="championList_SearchClose" fontSize="large"/>
                </div>
                <button className="championList_Search" onClick={() => setSearch(true)}>Search</button>
            </div>
            <div className="championList_List">
                { 
                    searchInput ? 
                    Object.keys(filtered).map((champion) => (
                        <Link to={{ pathname: `/champion/${champion}`, champion: championList[champion] }}>
                            <div className="championList_Champ">
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={champion}/>
                                <p className="championList_ChampName">{championList[champion].name}</p>
                            </div>
                        </Link>
                    ))
                    :
                    Object.keys(championList).map((champion) => {
                        if (tag === "All") {
                            return (
                                <Link to={{ pathname: `/champion/${champion}`, champion: championList[champion] }}>
                                    <div className="championList_Champ">
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={champion}/>
                                        <p className="championList_ChampName">{championList[champion].name}</p>
                                    </div>
                                </Link>
                            )
                        }
                        if (championList[champion].tags.includes(tag)) {
                            return (
                                <Link to={{ pathname: `/champion/${champion}`, champion: championList[champion] }}>
                                    <div className="championList_Champ">
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={champion}/>
                                        <p className="championList_ChampName">{championList[champion].name}</p>
                                    </div>
                                </Link>
                            )
                        }
                })}
            </div>
        </div>
    )
}

export default ChampionList
