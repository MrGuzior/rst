import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ResultList from '../ResultList/ResultList'
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

const Results = () => {
    const [activeList, setActiveList] = useState('total')

    return(
        <section className="results">


            <Navbar>
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>setActiveList('total')}><Link to='/results/total'>Totalss</Link></Nav.Link>
                    <Nav.Link onClick={()=>setActiveList('class1')}><Link to='/results/class1'>Klass1</Link></Nav.Link>
                    <Nav.Link onClick={()=>setActiveList('class2')}><Link to='/results/class2'>Klass2</Link></Nav.Link>
                    <Nav.Link onClick={()=>setActiveList('twoSeated')}><Link to='/results/twoseated'>Tvåsits</Link></Nav.Link>
                    <Nav.Link onClick={()=>setActiveList('junior')}><Link to='/results/junior'>Junior</Link></Nav.Link>
                </Nav>
            </Navbar>


            <ResultList list={activeList}/>
        </section>
    )
}

export default Results