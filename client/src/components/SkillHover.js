import React from 'react'
import './SkillHover.css'

function SkillHover(props) {
    return (
        <div className="skillHover" style={{display : props.hover === true ? "block" : "none"}}>
            <div className="skillHover_title">
                <h1>{props.skill?.name}</h1>
                {props.passive && (<p>{props.skill.description}</p>)}
                {props.chamImg && (
                    <div>
                        <h1>Champion Lore</h1>
                        <p>{props.lore}</p>
                    </div>
                )}
            </div>
            {!props.passive && !props.chamImg && (
                <div>
                    <div>
                        Cooldown(second): {props.skill.cooldownBurn}
                    </div>
                    <div>
                        Cost: {props.skill.costBurn}
                    </div>
                    <div>
                        Range: {props.skill.rangeBurn}
                    </div>
                    <hr></hr>
                    <div>
                        {props.skill.tooltip}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SkillHover
