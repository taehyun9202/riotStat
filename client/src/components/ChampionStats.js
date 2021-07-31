import React, { useState } from 'react'
import './ChampionStats.css'
function ChampionStats(props) {
    // console.log(props.stats)
    const [ level, setLevel ] = useState(0)
    console.log(props.stats)
    return (
        <div className="championStats">
            <div className="championStats_Title">
                <h4>Statistics</h4>
                <div className="championStats_Select">
                    <label>Level</label>
                    <select onChange={e => setLevel(e.target.value)}>
                        <option value="0">Select Level</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                </select>
                </div>
            </div>
            <div className="championStats_Stat">
                <p>Health</p>
                { level > 0 ?
                    <p>{(props.stats?.hp + (props.stats?.hpperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.hp} (+ {props.stats?.hpperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Health Regen</p>
                { level > 0 ?
                    <p>{(props.stats?.hpregen + (props.stats?.hpregenperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.hpregen} (+ {props.stats?.hpregenperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Mana</p>
                { level > 0 ?
                    <p>{(props.stats?.mp + (props.stats?.mpperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.mp} (+ {props.stats?.mpperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Mana Regen</p>
                { level > 0 ?
                    <p>{(props.stats?.mpregen + (props.stats?.mpregenperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.mpregen} (+ {props.stats?.mpregenperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Attack Damage</p>
                { level > 0 ?
                    <p>{(props.stats?.attackdamage + (props.stats?.attackdamageperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.attackdamage}  (+ {props.stats?.attackdamageperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Attack Speed</p>
                { level > 0 ?
                    <p>{(props.stats?.attackspeed + (props.stats?.attackspeedperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.attackspeed} (+ {props.stats?.attackspeedperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Armor</p>
                { level > 0 ?
                    <p>{(props.stats?.armor + (props.stats?.armorperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.armor} (+ {props.stats?.armorperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Magic Resist</p>
                { level > 0 ?
                    <p>{(props.stats?.spellblock + (props.stats?.spellblockperlevel * level)).toFixed(0)}</p> :
                    <p>{props.stats?.spellblock} (+ {props.stats?.spellblockperlevel})</p>
                }
            </div>
            <div className="championStats_Stat">
                <p>Attack Range</p>
                <p>{props.stats?.attackrange}</p>
            </div>
            <div className="championStats_Stat">
                <p>Move Speed</p>
                <p>{props.stats?.movespeed}</p>
            </div>
        </div>
    )
}

export default ChampionStats
