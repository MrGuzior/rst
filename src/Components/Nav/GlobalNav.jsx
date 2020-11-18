import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'

const GlobalNav = () => {
    return(
        <nav className='global-nav navigation'>
            <ul>
                <li><MenuItem><Link to='/results'>Resultat</Link></MenuItem></li>
                <li><MenuItem><Link to='/competitions'>Tävlingar</Link></MenuItem></li>
                <li><MenuItem><Link to='/rules'>Regler</Link></MenuItem></li>
                <li><MenuItem><Link to='/contact'>Kontakt</Link></MenuItem></li>
            </ul>
        </nav>
    )
}

export default GlobalNav