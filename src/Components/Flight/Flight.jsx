import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {selectData} from '../../store/appSlice'

const Flight = () => {
    const {id} = useParams()
    const {flights} = useSelector(selectData)
    const flight = flights.filter(flight => flight.id === id)[0]
    
    return(
        <section className='flight'>
            <p>{flight.pilotName}</p>
            <p>{flight.details.distance}km</p>
            <p>{flight.details.speed}km/s</p>
            <p>{flight.details.height}m</p>
        </section>
    )
}

export default Flight