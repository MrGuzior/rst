import React, {useState} from 'react'
import GlobalNav from './GlobalNav'
import PersonalNav from './PersonalNav'

const Nav = () => {
    return(
        <section className='Nav navigation'>
            <div className='test'></div>
                    <GlobalNav/>
                    <PersonalNav/>
        </section>
    )
}

export default Nav
