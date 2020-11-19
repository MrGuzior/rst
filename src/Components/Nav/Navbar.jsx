import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

const navbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand><Link to='/'>RST-Online</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link><Link to='/results'>Resultat</Link></Nav.Link>
                    <Nav.Link><Link to='/competitions'>Tävlingar</Link></Nav.Link>
                    <Nav.Link><Link to='/rules'>Regler</Link></Nav.Link>
                    <Nav.Link><Link to='/contact'>Kontakt</Link></Nav.Link>
                    </Nav>
                    
                    <Nav className=" personal-nav">
                    <Nav.Link><Link to='/log'>Nytt resultat</Link></Nav.Link>
                    <Nav.Link><Link to='/taskPlanner'>Task planner</Link></Nav.Link>
                    <Nav.Link><Link to='/contact'>Klubbinfo</Link></Nav.Link>
                    <Nav.Link><Link to='/results'>Profil</Link></Nav.Link>
                    <Nav.Link><Link to='/results'>Log out</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </>
    )
}

export default navbar