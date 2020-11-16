import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'

const ResultList = () => {
    const data = useSelector(selectData).flights


    return(
        <section className="list">
            <ol>
            {
                data.map(flight => {  
                return(
                    <li>{flight.details.speed}</li>
                )
            })
            }
            </ol>
        </section>
    )
}

export default ResultList