import React, {useState} from 'react'
import GlobalNav from './GlobalNav'
import PersonalNav from './PersonalNav'
import {Button, Menu, MenuItem} from '@material-ui/core'

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toogleMenu = () => setShowMenu(!showMenu)
    return(
        <section className='nav navigation'>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={toogleMenu}>
            Open Menu
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={showMenu}
            keepMounted
            open={showMenu}
            onClose={toogleMenu}
            >
            <GlobalNav/>
            <PersonalNav/>
            </Menu>
        </section>
    )
}

export default Nav
