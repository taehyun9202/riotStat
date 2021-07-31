import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { version, language } from './state'
import SkillHover from './SkillHover'
import './ChampionInfo.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ChampionStats from './ChampionStats'

function ChampionInfo(props) {
    const [ champion, setChampion ] = useState({})
    const [ isShown, setIsShown ] = useState(false)
    const [ currentSkill, setCurrentSkill ] = useState(null)
    const [ passive, setPassive ] = useState(false)
    const [ champLore, setChampLore ] = useState(false)
    const [ skinNumber, setSkinNumber ] = useState(0)
    var championName = props.location.pathname.slice(10)
    const [ backGroundImage, setBackGroundImage ] = useState(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`)

    useEffect(() => {
        const fetchData = async () => await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${championName}.json`)
            .then(res => setChampion(res.data.data[championName]))
            .catch(err => console.log(err))
        fetchData()
    },[champion.data])


    const skillHoverIn = skill => {
        setIsShown(true)
        setCurrentSkill(skill)
    }

    const skillHoverOut = () => {
        setIsShown(false)
        setCurrentSkill(null)
    }
    
    const prevSkin = () => {
        if (skinNumber > 0) {
            setSkinNumber(prev => prev - 1)
            setBackGroundImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${champion.skins[skinNumber - 1]?.num}.jpg`)
        }
        if (skinNumber === 0 ) {
            setSkinNumber(champion.skins.length - 1)
            var skinsLength = champion.skins.length - 1
            setBackGroundImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${champion.skins[skinsLength].num}.jpg`)
        }
    }

    const nextSkin = () => {
        if (skinNumber < champion.skins.length - 1) {
            setSkinNumber(prev => prev + 1)
            setBackGroundImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${champion.skins[skinNumber + 1]?.num}.jpg`)
        }
        if (skinNumber === champion.skins.length - 1) {
            setSkinNumber(0)
            setBackGroundImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`)
        }
    }
    // console.log(champion.skins.length, skinNumber, backGroundImage, champion.skins[skinNumber]?.num)

    const renderSkinName = () => {
        if (skinNumber > 0) {
            return (
                <h4>{champion.skins[skinNumber]?.name}</h4>
            )
        } else {
            return (
                <h4>{champion.id}</h4>
            )
        }
    }

    return (
        <div className="championInfo">
            <img src={backGroundImage} alt={champion.id} className="backGroundImage" />
            <div className="championInfo_Content">
                <h1>{champion.name}</h1>
                <div className="championInfo_Top">
                    { champion.skins ?
                        <div className="championInfo_Img">
                            <img 
                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${champion.skins[skinNumber]?.num}.jpg`} 
                                alt={`${champion?.id}_Skin #${skinNumber}`}
                                onMouseEnter={() => {
                                    skillHoverIn(champion.lore)
                                    setChampLore(true)
                                }}
                                onMouseLeave={() => {
                                    skillHoverOut(champion.lore)
                                    setChampLore(false)
                                }}
                            />
                            <div className="championInfo_Img_Pagination">
                                <ArrowBackIosIcon 
                                    className="pagination_LeftArrow"
                                    onClick={() => prevSkin()}
                                />
                                <p>{renderSkinName()}</p>
                                <ArrowForwardIosIcon 
                                    className="pagination_RightArrow"
                                    onClick={() => nextSkin()}
                                />
                            </div>
                        </div> : null
                    }
                    <div className="championInfo_Skills">
                        <img
                            className="championInfo_skillImage"
                            src={`https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/${champion.passive?.image.full}`}
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
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${skill.id}.png`}
                                alt="activeSkill"
                                onMouseEnter={() => skillHoverIn(skill)}
                                onMouseLeave={() => skillHoverOut(skill)}
                            />
                        ))}
                        {isShown && (
                            <SkillHover skill={currentSkill} hover={isShown} passive={passive} chamImg={champLore} lore={champion.lore}/>
                        )}
                        <ChampionStats className="championInfo_Stats" stats={champion.stats}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChampionInfo

