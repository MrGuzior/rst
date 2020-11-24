import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'


const Home = () => {
    return(
        <section className='home'>
            <ResultList maxLength={10} itemType='home-item'/>
            <ResultList maxLength={6} itemType='home-item'/>
            <ResultList maxLength={6} itemType='home-item'/>
            <ResultList maxLength={6} itemType='home-item'/>
            <ResultList maxLength={6} itemType='home-item'/>
            
        </section>
    )
}

export default Home