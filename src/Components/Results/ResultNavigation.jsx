import React,{
    useState
} from 'react'
import {NavLink, useHistory, useLocation, useParams} from 'react-router-dom'
import {
    Navbar,
    Nav,
    Form,
    NavDropdown
} from 'react-bootstrap'

const ResultNavigation = () => {
    const [activeCategory, setActiveCategory] = useState('Total')

    const location = useLocation()
    const {category, league, segment} = useParams()

    console.log(segment)

    

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
                        
                    <NavDropdown title={activeCategory} id="collasible-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to={`/results/${category}/total/${segment}`}  onSelect={()=>setActiveCategory('Total')}>Allmän (Totalt)</NavDropdown.Item>
                        
                        <NavDropdown.Item as={NavLink} to={`/results/${category}/class1/${segment}`} onSelect={()=>setActiveCategory('Klass 1')}>Klass 1</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={`/results/${category}/class2/${segment}`} onSelect={()=>setActiveCategory('Klass 2')}>Klass 2</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={`/results/${category}/twoseated/${segment}`} onSelect={()=>setActiveCategory('Tvåsits')}>Tvåsits</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={`/results/${category}/junior/${segment}`} onSelect={()=>setActiveCategory('Junior')}>Junior</NavDropdown.Item>
                    </NavDropdown>
                        
                    </Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='kombination' to={`/results/${category}/${league}/combi`}>Kombination</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='height' to={`/results/${category}/${league}/height`}>Höjd</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='distance' to={`/results/${category}/${league}/distance`}>Distans</Nav.Link>
                    <Nav.Link as={NavLink} className='px-1' eventKey='totalDistance' to={`/results/${category}/${league}/total-distance`}>Ack Distans</Nav.Link>
                    <Nav.Link as={NavLink} className='px-2' eventKey='speed' to={`/results/${category}/${league}/speed`}>Hastighet</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default ResultNavigation