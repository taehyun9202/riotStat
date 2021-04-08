import React from 'react'
import './SkillHover.css'

function SkillHover(props) {
    return (
        <div className="skillHover" style={{display : props.hover === true ? "block" : "none"}}>
            <div className="skillHover_title">
                <p>{props.skill?.name}</p>
                {props.passive && (<p>{props.skill.description}</p>)}
            </div>
            {!props.passive && (
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
