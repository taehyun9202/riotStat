import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const history = useHistory()
    const [ summonerName, setSummonerName ] = useState('')

    const searchSummoner = () => {
        if(summonerName) {
            history.push(`/summoner/${summonerName}`)
            setSummonerName('')
        }
    }

    return (
        <div className="navbar">
            <div className="navbar_Options">
                <Link to="/" className="navbar_Option">
                    <p>Champ</p>
                </Link>
                <Link to="TFT" className="navbar_Option">
                    <p>TFT</p>
                </Link>
                <Link to="/leaderboard" className="navbar_Option">
                    <p>Leaderboard</p>
                </Link>
            </div>
            <div className="navbar_SearchBar">
                <form onSubmit={searchSummoner}>
                    <input
                        type="text"
                        placeholder="Enter Summoner Name"
                        value={summonerName}
                        onChange={e => setSummonerName(e.target.value)}
                        />
                    <button>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar
