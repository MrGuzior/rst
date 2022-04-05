import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import Map from '../Map/Map'

const Flight = () => {
    const {id} = useParams()
    const {flights} = useSelector(selectData)
    const flight = flights.find(flight => flight.id === id)
    
    return(
        <div className='flight'>
            <p>{flight.pilotName}</p>
            <p>{flight.details.distance}km</p>
            <p>{flight.details.speed}km/s</p>
            <p>{flight.details.height}m</p>
            <Map/>
        </div>
    )
}

export default Flight