import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { version, language } from './state'
import SkillHover from './SkillHover'
import './ChampionInfo.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ChampionInfo(props) {
    const [ champion, setChampion ] = useState({})
    const [ isShown, setIsShown ] = useState(false)
    const [ currentSkill, setCurrentSkill ] = useState(null)
    const [ passive, setPassive ] = useState(false)
    const [ skinNumber, setSkinNumber ] = useState(0)

    var championName = props.location.pathname.slice(10)
    useEffect(() => {
        const fetchData = async () => await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${championName}.json`)
            .then(res => setChampion(res.data.data[championName]))
            .catch(err => console.log(err))
        fetchData()
    },[champion.data])
    
    console.log(champion, skinNumber)

    const skillHoverIn = skill => {
        setIsShown(true)
        setCurrentSkill(skill)
    }

    const skillHoverOut = skill => {
        setIsShown(false)
        setCurrentSkill(null)
    }
    
    const prevSkin = () => {
        if (skinNumber > 0) {
            setSkinNumber(prev => prev - 1)
            console.log(skinNumber)
        }
        if (skinNumber === 0 ) {
            setSkinNumber(champion.skins.length)
        }
    }

    const nextSkin = () => {
        if (skinNumber < champion.skins.length) {
            setSkinNumber(prev => prev + 1)
            console.log(skinNumber)
        }
        if (skinNumber === champion.skins.length) {
            setSkinNumber(0)
        }
    }

    return (
        <div className="championInfo">
            <h1>{champion.name}</h1>
            <div className="championInfo_Top">
                <div className="championInfo_Img">
                    <img 
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skinNumber}.jpg`} 
                        alt={`${champion.id}_Skin #${skinNumber}`}
                    />
                    <div className="championInfo_Img_Pagination">
                        <ArrowBackIosIcon onClick={() => prevSkin()} />
                        <ArrowForwardIosIcon onClick={() => nextSkin()} />
                    </div>
                </div>
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

