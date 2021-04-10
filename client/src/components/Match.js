import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Match.css'
import Team from './Team'
import { API_KEY, version, language, convertSummonerSpell, convertChampionId, converlargestMultiKill } from './state'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom'

function Match(props) {
    const [ matchInfo, setMatchInfo ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false);
    const [ userChampion, setUserChampion ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                await axios.get(`https://na1.api.riotgames.com/lol/match/v4/matches/${props.gameId}?api_key=${API_KEY}`)
                    .then(res => {
                        setMatchInfo(res.data)
                    })
                    .catch(err => console.log(err))
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false);
        }
        fetchData()
    },[props.gameId])

    // console.log(matchInfo)

    for (var i in matchInfo.participantIdentities) {
        if (matchInfo.participantIdentities[i].player.accountId === props.summoner.accountId){
            var currentSummoner = matchInfo?.participantIdentities[i].participantId
        }
    }

    const getTime = time => {
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        return minutes.toString() + "m " + seconds.toString() + "s"
    }

    const getDate = date => {
        var index = date?.indexOf(',')
        return date?.slice(0, index)
    }

    if(currentSummoner) {
        var userKill = matchInfo.participants[currentSummoner - 1].stats.kills
        var userDeath = matchInfo.participants[currentSummoner - 1].stats.deaths
        var userAssist = matchInfo.participants[currentSummoner - 1].stats.assists
        var summonerSpell_1 = matchInfo.participants[currentSummoner - 1].spell1Id
        var summonerSpell_2 = matchInfo.participants[currentSummoner - 1].spell2Id
        var fianlItems = [
            matchInfo.participants[currentSummoner - 1].stats.item0,
            matchInfo.participants[currentSummoner - 1].stats.item1,
            matchInfo.participants[currentSummoner - 1].stats.item2,
            matchInfo.participants[currentSummoner - 1].stats.item3,
            matchInfo.participants[currentSummoner - 1].stats.item4,
            matchInfo.participants[currentSummoner - 1].stats.item5,
            matchInfo.participants[currentSummoner - 1].stats.item6
        ]
        var userLevel = matchInfo.participants[currentSummoner - 1].stats.champLevel
        var userMinionKilled = matchInfo.participants[currentSummoner - 1].stats.totalMinionsKilled
        var largestMultiKill = matchInfo.participants[currentSummoner - 1].stats.largestMultiKill
        var gameDuration = getTime(matchInfo.gameDuration)
        var gameMode = matchInfo.gameMode
        var gameCreation = matchInfo.gameCreation
        var gameDate = getDate((new Date(gameCreation)).toLocaleString())
        var gameResult = matchInfo.participants[currentSummoner - 1].stats.win
        var teamOne = matchInfo.participantIdentities.slice(0,5)
        var teamOneInfo = matchInfo.participants.slice(0,5)
        var teamTwo = matchInfo.participantIdentities.slice(5)
        var teamTwoInfo = matchInfo.participants.slice(5)
        var userChampionId = matchInfo.participants[currentSummoner-1].championId
    }


    return (
        <div 
            className="match"
            style={{
                backgroundColor: gameResult ? "skyblue" : "tomato",
                justifyContent: isLoading ? "center" : null,
                alignItems: isLoading ? "center" : null,
            }}
        >
            {
                isLoading ? 
                <Loader
                    type="Grid"
                    color="#00BFFF"
                    height={30}
                    width={30}
                    timeout={3000}
                /> :
                <div className="userMatch">
                    <div className="userMatch_Info">
                        <h4>{gameMode}</h4>
                        <p>{gameDate}</p>
                        {gameResult ? <h4 style={{color:"blue"}}>Victory</h4> : <h4 style={{color:"red"}}>Defeat</h4>}
                        <p>{gameDuration}</p>
                    </div>

                    <div className="userMatch_Champion">
                        <Link to={`/champion/${convertChampionId(userChampionId)}`}>
                            <img className="userMatch_Champion_Photo" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${convertChampionId(userChampionId)}.png`} />
                        </Link>
                        <div className="userMatch_Summoner_Spell">
                            <img className="userMatch_Summoner_Spell_Photo" src={`https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/${convertSummonerSpell(summonerSpell_1)}.png`} alt="summonerSpell_1" />
                            <img className="userMatch_Summoner_Spell_Photo" src={`https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/${convertSummonerSpell(summonerSpell_2)}.png`} alt="summonerSpell_2" />
                        </div>
                    </div>

                    <div className="userMatch_Stat_1">
                        <h4>{userKill} / {userDeath} / {userAssist}</h4>
                        <h5>{((userKill + userAssist) / userDeath).toFixed(2)} KDA</h5>
                        {largestMultiKill > 1 ? <h5 className="userMatch_Stat_1_MultiKill">{converlargestMultiKill(largestMultiKill)}</h5> : null}
                    </div>

                    <div className="userMatch_Stat_2">
                        <p>LVL {userLevel}</p>
                        <p>{userMinionKilled} CS</p>
                    </div>

                    <div className="userMatch_Items">
                        { fianlItems?.map((item)=> (
                            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`} />
                        ))} 
                    </div>

                    <div className="userMatch_Participant">
                        <div className="matchParticipant_Team_1">
                            <Team  team={teamOne} info={teamOneInfo} />
                        </div>
                        <div className="matchParticipant_Team_2">
                            <Team team={teamTwo} info={teamTwoInfo} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Match
