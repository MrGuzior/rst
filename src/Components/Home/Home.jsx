import React from 'react'
import ResultList from '../ResultList/ResultList'
import News from '../News/News'
import HomeItem from './HomeItem'

const Home = () => {
    return(
        <div className='home'>
            <HomeItem
                title='Senaste flygningar'
                component={<ResultList maxLength={10}/>}
            />
            <HomeItem
                title='News'
                component={<News/>}
            />
            <HomeItem
                title='Allmän toplista'
                component={<ResultList maxLength={6}/>}
            />
            <HomeItem
                title='Tävlingar'
                component={<News/>}
            />
        </div>
    )
}

export default Home