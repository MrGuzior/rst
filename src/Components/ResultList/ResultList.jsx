import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'

const ResultList = () => {
    const data = useSelector(selectData).users


    return(
        <section className="list">
            <ol>
            {
                data.map(user => {  
                return(
                    <li>{user.name}</li>
                )
            })
            }
            </ol>
        </section>
    )
}

export default ResultList