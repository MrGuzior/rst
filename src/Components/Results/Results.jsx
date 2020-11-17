import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ResultList from '../ResultList/ResultList'

const Results = () => {
    const [activeList, setActiveList] = useState('total')

    return(
        <section className="results">
            <ul>
                <li onClick={()=>setActiveList('total')}><Link to='/results/total'>Total</Link></li>
                <li onClick={()=>setActiveList('class1')}><Link to='/results/class1'>Klass 1</Link></li>
                <li onClick={()=>setActiveList('class2')}><Link to='/results/class2'>Klass 2</Link></li>
                <li onClick={()=>setActiveList('twoSeated')}><Link to='/results/twoseated'>Tvåsits</Link></li>
                <li onClick={()=>setActiveList('junior')}><Link to='/results/junior'>Junior</Link></li>
            </ul>
            <ResultList list={activeList}/>
        </section>
    )
}

export default Results