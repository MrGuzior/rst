import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'
import HomeItem from './HomeItem'

const Home = () => {
    return(
        <section className='home'>
            <HomeItem
                component={<ResultList maxLength={10} itemType='' title='Senaste flygningar'/>}
            />
            <HomeItem
                component={<News/>}
            />
            <HomeItem
                component={<ResultList maxLength={6} itemType='home-item' title='Senaste flygningar'/>}
            />
            <HomeItem
                component={<ResultList maxLength={6} itemType='home-item' title='Senaste flygningar'/>}
            />
        </section>
    )
}

export default Home