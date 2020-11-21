import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'

const Home = () => {
    return(
        <section className='home'>
            <div className='home-item'>
                <ResultList maxLength={10}/>
            </div>
        </section>
    )
}

export default Home