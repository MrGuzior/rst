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
                <li onClick={()=>setActiveList('total')}>Total</li>
                <li onClick={()=>setActiveList('class1')}>Klass 1</li>
                <li onClick={()=>setActiveList('class2')}>Klass 2</li>
                <li onClick={()=>setActiveList('twoSeated')}>Tvåsits</li>
                <li onClick={()=>setActiveList('junior')}>Junior</li>
            </ul>

            <ResultList list={activeList}/>
        </section>
    )
}

export default Results