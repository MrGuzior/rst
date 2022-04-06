import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavDropdown,
} from 'react-bootstrap'

const navbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand as={NavLink} to='/' className='title'>RST-Online</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Resultat" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/results/individual/total/combi'>Individuellt</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/individual-female/total/combi'>Individuellt Dam</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/retro/total/combi'>Retro-cupen</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/fai/total/combi'>FAI-cupen</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/clubb/total/combi'>Klubbkampen</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/team/total/combi'>Lag</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/team/total/combi'>SM</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/flights/total/combi'>Flygningar</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/flights/total/combi'>Flygningar Dam</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tävlingar" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/results/individual/total/combi'>HDI</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/individual-female/total/combi'>HDI Eskilstuna</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/retro/total/combi'>HDI Feringe</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/results/fai/total/combi'>HDI Vängsö</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Mer" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/rules'>Regler</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/register'>Register</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/contact'>Kontakt</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className=" personal-nav">
                        <Nav.Link as={NavLink} to='/new-result'>Nytt resultat</Nav.Link>
                        <Nav.Link as={NavLink} to='/profile'>Profil</Nav.Link>
                        <Nav.Link as={NavLink} to='/login'>Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </>
    )
}

export default navbar
