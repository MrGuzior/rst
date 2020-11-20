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
                <Form.Group className='' controlId="exampleForm.ControlSelect1" >
                    <Form.Control as="select">
                    <option>Allmän (Totalt)</option>
                    <option>Klass 1</option>
                    <option>Klass 2</option>
                    <option>Tvåsits</option>
                    <option>Junior</option>
                    </Form.Control>
                </Form.Group>
                <Navbar  className='p-0 '>
                    <Nav className="mr-auto" fill variant="pills" >
                        <Nav.Link className='px-2'>Kombination</Nav.Link>
                        <Nav.Link className='px-2'>Höjd</Nav.Link>
                        <Nav.Link className='px-2'>Distans</Nav.Link>
                        <Nav.Link className='px-1'>Ack Distans</Nav.Link>
                        <Nav.Link className='px-2'>Hastighet</Nav.Link>
                    </Nav>
                </Navbar>
            </div>

            <div className='result'>
                <ResultList list={activeList}/>
            </div>
        </section>
    )
}

export default Results