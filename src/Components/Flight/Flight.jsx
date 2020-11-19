import React from 'react'
import {useParams} from 'react-router-dom'

const Flight = () => {
    const {id} = useParams()
    console.log(id)
    return(
    <p>{id}</p>
    )
}

export default Flight