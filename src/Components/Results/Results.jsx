import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ResultList from '../ResultList/ResultList'
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap'

const Results = () => {
    const [activeList, setActiveList] = useState('total')

    return(
        <section className="results">


            <Navbar>
                <Nav className="mr-auto">

                    <NavDropdown title="Individuellt" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>setActiveList('total')}><Link to='/results/total'>Total</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('class1')}><Link to='/results/class1'>Klass 1</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('class2')}><Link to='/results/class2'>Klass 2</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('twoSeated')}><Link to='/results/two-seated'>Tvåsits</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('junior')}><Link to='/results/junior'>Junior</Link></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Övrigt" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={()=>setActiveList('team')}><Link to='/results/total'>Lag</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('retro')}><Link to='/results/class1'>Retro-cupen</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('fai')}><Link to='/results/class2'>FAI-cupen</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setActiveList('clubcup')}><Link to='/results/two-seated'>Klubbkampen</Link></NavDropdown.Item>
                    </NavDropdown>
                        
                        

                </Nav>
            </Navbar>

            <div className='result'>
                <ResultList list={activeList}/>
            </div>
        </section>
    )
}

export default Results