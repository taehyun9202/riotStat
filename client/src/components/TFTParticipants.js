import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {API_KEY} from './state'
import axios from 'axios'
import Loader from "react-loader-spinner"

function TFTParticipants(props) {
  const [ convertPuuid, setConvertPuuid] = useState({})
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    axios.get(`/summoner/v4/summoners/by-puuid/${props.participant}?api_key=${API_KEY}`)
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
