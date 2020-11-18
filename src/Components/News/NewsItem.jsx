import React from 'react'


const NewsItem = ({item}) => {
    

    return (
        <section className="NewsItem">
            <article><h4>{item.topic}</h4><h6>{item.author}</h6><p>{item.article}</p></article>
        </section>
    )
}

export default NewsItem