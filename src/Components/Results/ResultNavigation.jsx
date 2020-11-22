import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    Navbar,
    Nav,
    Form
} from 'react-bootstrap'

const ResultNavigation = () => {
    return (
        <div className='d-flex flex-wrap class-select'>
            <Form.Group className='mr-0 show-when-mobile' controlId="exampleForm.ControlSelect1" >
                <Form.Control as="select">
                <option>Allmän (Totalt)</option>
                <option>Klass 1</option>
                <option>Klass 2</option>
                <option>Tvåsits</option>
                <option>Junior</option>
                </Form.Control>
            </Form.Group>
            <Navbar  className='p-0'>
                <Nav className="mr-auto" fill variant="tabs" defaultActiveKey="kombination" >
                    <Nav>
                        <Form.Group className='mr-0 hide-when-mobile' controlId="exampleForm.ControlSelect1" >
                            <Form.Control as="select">
                                <option>Allmän (Totalt)</option>
                                <option>Klass 1</option>
                                <option>Klass 2</option>
                                <option>Tvåsits</option>
                                <option>Junior</option>
                            </Form.Control>
                        </Form.Group>
                    </Nav>
                    <Nav.Link as={NavLink} className='px-2' eventKey='kombination'>Kombination</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='height'>Höjd</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='distance'>Distans</Nav.Link>
                    <Nav.Link as={NavLink} className='px-1' eventKey='totalDistance'>Ack Distans</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='speed'>Hastighet</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default ResultNavigation