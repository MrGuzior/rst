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

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                        <option>Allmän (Totalt)</option>
                        <option>Klass 1</option>
                        <option>Klass 2</option>
                        <option>Tvåsits</option>
                        <option>Junior</option>
                        </Form.Control>
                    </Form.Group>

            <Navbar className='p-0'>
                <Nav className="mr-auto " fill variant="pills" >

                    <Nav.Link>Kombination</Nav.Link>
                    <Nav.Link>Höjd</Nav.Link>
                    <Nav.Link>Distans</Nav.Link>
                    <Nav.Link>Ack Distans</Nav.Link>
                    <Nav.Link>Hastighet</Nav.Link>
                        
                        

                </Nav>
            </Navbar>

            <div className='result'>
                <ResultList list={activeList}/>
            </div>
        </section>
    )
}

export default Results