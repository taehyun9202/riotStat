import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MatchHistory from './MatchHistory'
import './SummonerInfo.css'
import { API_KEY, version } from './state'
import Loader from "react-loader-spinner";
import TFTHistory from './TFTHistory'

function SummonerInfo(props) {
    const [ summoner, setSummoner ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false);
    const [ selectMode, setSelectMode ] = useState('League')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                await axios.get(`/summoner/v4/summoners/by-name/${props.match.params._id}?api_key=${API_KEY}`)
                    .then(res => {
                        setSummoner(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false);
        }
        fetchData()
    },[props.match.params._id])

    return (
        <div className="summonerInfo">
            <div className="summonerInfo_userInfo">
                { isLoading ? 
                    <Loader
                        type="Rings"
                        color="#00BFFF"
                        height={150}
                        width={150}
                        timeout={3000} //3 secs
                    /> :
                    <div className="summonerInfo_userInfo_img">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summoner.profileIconId}.png`} alt="summonerIcon" />
                        <div className="summonerInfo_userLevel">{summoner.summonerLevel}</div>
                    </div>
                }
                <div className="summonerInfo_userInfo_profile">
                    <h3>{summoner.name}</h3>
                    <div className="summonerInfo_userInfo_profile_buttons">
                        <button>Update</button>
                        <button>Tier Graph</button>
                    </div>
                </div>
            </div>
            <div className="SummonerInfo_GameTab">
                <button onClick={() => setSelectMode('League')}>League</button> 
                <button onClick={() => setSelectMode('TFT')}>TFT</button>
                <button onClick={() => setSelectMode('Valorant')}>Valorant</button>
            </div>
            <div className="summonerInfo_MatchHistory">
                {selectMode === "League" && (
                    <MatchHistory summoner={summoner} /> )
                }
                {selectMode === "TFT" && (
                    <TFTHistory summoner={summoner} />
                )}
                
            </div>
        </div>
    )
}

export default SummonerInfo
