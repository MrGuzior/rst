import React from 'react'
import NewsItem from './NewsItem'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Button} from 'react-bootstrap'

const News = () => {
    const {news} = useSelector(selectData)
    return (
        <div className="News">
            <NewsItem/>
            <NewsItem/>
            <Button className='mt-2' variant="light">Read more...</Button>
        </div>
    )
}

export default News