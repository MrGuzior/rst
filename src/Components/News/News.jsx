import React from 'react'
import NewsItem from './NewsItem'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'

const News = () => {
    const {news} = useSelector(selectData)
    return (
        <section className="News">
            {
                news.map(item=><NewsItem item={item}/>)
            }
        </section>
    )
}

export default News