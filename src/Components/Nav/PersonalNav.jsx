import React from 'react'
import {MenuItem} from '@material-ui/core'

const PersonalNav = () => {
    return(
        <nav className='personal-nav navigation'>
            <ul>
                <li><MenuItem>Nytt resultat</MenuItem></li>
                <li><MenuItem>Task planner</MenuItem></li>
                <li><MenuItem>Klubbinfo</MenuItem></li>
                <li><MenuItem>Profil</MenuItem></li>
                <li><MenuItem>Log out</MenuItem></li>
            </ul>
        </nav>
    )
}

export default PersonalNav