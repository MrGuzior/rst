import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'

const Home = () => {
    return(
        <section className='home'>
            <News/>
            <ResultList/>
        </section>
    )
}

export default Home