import React, {useState} from 'react'
import {Link, Switch, Route, Router} from 'react-router-dom'
import ResultList from '../ResultList/ResultList'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'

const Results = () => {
    const [activeList, setActiveList] = useState('total')
    const toogleList = (e) => {
        e.preventDefault();
        console.log(e.target)
        setActiveList(e.target.value)
    }

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