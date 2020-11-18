import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'

const ResultList = ({list}) => {
    const {flights} = useSelector(selectData)

    return(
        <section className="ResultList">
        <p>{list}</p>
            <ol>
            {
                flights.map(flight=>{
                return(<li>{flight.pilotName} {flight.date} {flight.details.speed}</li>)
                })
            }
            </ol>
        </section>
    )
}

export default ResultList