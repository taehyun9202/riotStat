import React, { useState } from 'react'
import ChampionList from './ChampionList'
import FreeRotation from './FreeRotation'
import './Home.css'

function Home() {
    const [ selectChoice, setSelectChoice ] = useState('All')

    return (
        <div className="home">
            <div className="home_selectChoice">
                <button onClick={() => setSelectChoice('All')}>All Champion</button> 
                <button onClick={() => setSelectChoice('Rotation')}>Free Rotation</button>
            </div>
            { selectChoice === "All" && (<ChampionList />)}
            { selectChoice === "Rotation" && (<FreeRotation />)}
        </div>
    )
}

export default Home
