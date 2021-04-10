import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {API_KEY} from './state'
import axios from 'axios'

function TFTParticipants(props) {
  const [ convertPuuid, setConvertPuuid] = useState({})

  useEffect(() => {
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${props.participant}?api_key=${API_KEY}`)
        .then(res => {
                console.log(res.data)
                setConvertPuuid(res.data)
          })
        .catch(err => {
                console.log(err)
          })
        
},[props.participant])

console.log(convertPuuid)

  return (
    <div className="">
      {
        <Link to={`/summoner/${convertPuuid.name}`}>
          <p className="">{convertPuuid.name}</p>
        </Link>
      }
    </div>
  )
}

export default TFTParticipants
