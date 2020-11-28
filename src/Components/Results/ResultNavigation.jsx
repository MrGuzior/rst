import React,{
    useState
} from 'react'
import {NavLink} from 'react-router-dom'
import {
    Navbar,
    Nav,
    Form
} from 'react-bootstrap'

const ResultNavigation = () => {
    const [activeCategory, setActiveCategory] = useState('total')


    const changeListCategory = e => {
        e.preventDefault()
        setActiveCategory(e.target.value)
    }

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
                    <Nav.Link className='px-2 hide-when-mobile'>
                        
                            <Form.Control as="select" onChange={e=>changeListCategory(e)}>
                                <option value='total' href='#total' defaultValue='total'>Total</option>
                                <option value='class1' href='#class1'>Klass 1</option>
                                <option value='class2'>Klass 2</option>
                                <option value='twoseated'>Tvåsits</option>
                                <option value='junior'>Junior</option>
                            </Form.Control>
                        
                    </Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='kombination' to='#combi'>Kombination</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='height' to='#height'>Höjd</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='distance' to='#distance'>Distans</Nav.Link>
                    <Nav.Link as={NavLink} className='px-1' eventKey='totalDistance' to='#totalDistance'>Ack Distans</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='speed' to='#speed'>Hastighet</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default ResultNavigation