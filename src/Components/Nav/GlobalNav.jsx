import React from 'react'
import {NavLink as Link} from 'react-router-dom'

const GlobalNav = () => {
    return(
        <nav className='global-nav navigation'>
            <ul>
                <li><Link to='/results'>Resultat</Link></li>
                <li><Link to='/competitions'>Tävlingar</Link></li>
                <li><Link to='/rules'>Regler</Link></li>
                <li><Link to='/contact'>Kontakt</Link></li>

            </ul>
        </nav>
    )
}

export default GlobalNav