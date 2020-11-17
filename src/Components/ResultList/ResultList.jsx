import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {selectData, getUser} from '../../store/appSlice'

const ResultList = ({list}) => {
    const {users, flights} = useSelector(selectData)
    console.log(list)

    return(
        <section className="list">
            <ol>
            {
                flights.map(flight=>{
                return(<li>{flight.pilotName} {flight.date} {flight.details.speed}</li>)
                })
            }
            </ol>
        <p>{list}</p>
        </section>
    )
}

export default ResultList