import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { version, language } from './state'
import SkillHover from './SkillHover'
import './ChampionInfo.css'

function ChampionInfo(props) {
    const [ champion, setChampion ] = useState({})
    const [ isShown, setIsShown ] = useState(false)
    const [ currentSkill, setCurrentSkill ] = useState(null)
    const [ passive, setPassive ] = useState(false)


    var championName = props.location.pathname.slice(10)
    useEffect(() => {
        const fetchData = async () => await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${championName}.json`)
            .then(res => setChampion(res.data.data[championName]))
            .catch(err => console.log(err))
        fetchData()
    },[champion.data])
    
    console.log(champion)

    const skillHoverIn = skill => {
        setIsShown(true)
        setCurrentSkill(skill)
    }

    const skillHoverOut = skill => {
        setIsShown(false)
        setCurrentSkill(null)
    }
    // console.log(currentSkill)
    return (
        <div className="championInfo">
            <h1>{champion.name}</h1>
            <div className="championInfo_Top">
                {/* {champion.skins?.map((skin, index) => (
                    <img 
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skin.num}.jpg`} 
                        alt="champion"
                        className="championInfo_Skin"
                    />
                ))} */}
                <img 
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} 
                    alt="champion"
                    className="championInfo_Skin"
                />
                <div className="championInfo_Skills">
                    <img
                        className="championInfo_skillImage"
                        src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/${champion.passive?.image.full}`}
                        alt="passiveSkill"
                        onMouseEnter={() => {
                            skillHoverIn(champion.passive)
                            setPassive(true)
                        }}
                        onMouseLeave={() => {
                            skillHoverOut(champion.passive)
                            setPassive(false)
                        }}
                    />
                    {champion.spells?.map((skill) => (
                        <img
                            className="championInfo_skillImage"
                            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skill.id}.png`}
                            alt="activeSkill"
                            onMouseEnter={() => skillHoverIn(skill)}
                            onMouseLeave={() => skillHoverOut(skill)}
                        />
                    ))}
                    {isShown && (
                        <SkillHover skill={currentSkill} hover={isShown} passive={passive}/>
                    )}
                </div>
            </div>
            <div className="championInfo_Description">
                <p>{champion.lore}</p>
            </div>
        </div>
    )
}

export default ChampionInfo

