import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GlobalNav from './GlobalNav'
import PersonalNav from './PersonalNav'
import Drawer from '@material-ui/core/Drawer'

const Nav = () => {


    return(
        <section className='nav navigation'>
            <GlobalNav/>
            <PersonalNav/>
        </section>
    )
}

export default Nav