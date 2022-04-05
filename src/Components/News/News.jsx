import React from 'react'
import NewsItem from './NewsItem'
import {Button} from 'react-bootstrap'

const News = () => {
    return (
        <div className="News">
            <NewsItem/>
            <NewsItem/>
            <Button className='mt-2' variant="light">Read more...</Button>
        </div>
    )
}

export default News