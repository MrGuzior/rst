import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'

const Home = () => {
    return(
        <section className='home'>
            <News/>
            <section className='result-lists'>
                <ResultList/>
                <ResultList/>
                <ResultList/>
                <ResultList/>
            </section>
        </section>
    )
}

export default Home