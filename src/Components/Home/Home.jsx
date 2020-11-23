import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'


const Home = () => {
    return(
        <section className='home'>
            <ResultList maxLength={10}/>
            <ResultList maxLength={5}/>
            <ResultList maxLength={5}/>
            <ResultList maxLength={5}/>
        </section>
    )
}

export default Home