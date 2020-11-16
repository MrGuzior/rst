import React from 'react'
import GlobalNav from './GlobalNav'
import PersonalNav from './PersonalNav'

const Nav = () => {
    return(
        <section className='nav'>
            <GlobalNav/>
            <PersonalNav/>
        </section>
    )
}

export default Nav