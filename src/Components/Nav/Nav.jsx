import React, {useState} from 'react'
import GlobalNav from './GlobalNav'
import PersonalNav from './PersonalNav'

const Nav = () => {
    return(
        <section className='nav navigation'>
                    <GlobalNav/>
                    <PersonalNav/>
        </section>
    )
}

export default Nav
