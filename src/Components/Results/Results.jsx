import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ResultList from '../ResultList/ResultList'
import {
    Navbar,
    Nav,
    NavDropdown,
    Form
} from 'react-bootstrap'

const Results = () => {
    const [activeList, setActiveList] = useState('total')

    return(
        <section className="results">
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
                        <Nav.Link className='px-2' eventKey='kombination'>Kombination</Nav.Link>
                        <Nav.Link className='px-2' eventKey='height'>Höjd</Nav.Link>
                        <Nav.Link className='px-2' eventKey='distance'>Distans</Nav.Link>
                        <Nav.Link className='px-1' eventKey='totalDistance'>Ack Distans</Nav.Link>
                        <Nav.Link className='px-2' eventKey='speed'>Hastighet</Nav.Link>
                    </Nav>
                </Navbar>
            </div>

            <div className='result mt-0 pt-0'>
                <ResultList list={activeList}/>
            </div>
        </section>
    )
}

export default Results