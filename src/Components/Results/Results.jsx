import React, {useState} from 'react'
import ResultList from '../ResultList/ResultList'
import {useHistory, useLocation, useParams} from 'react-router-dom'
import ResultNavigation from './ResultNavigation'
import Individual from './Individual'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import ResultTable from './ResultTable'


const Results = ({match}) => {

    return(
        <section className="results">
            <ResultNavigation/>
            <div className='result mt-0 pt-0'>
                <ResultTable params={match.params}/>
            </div>
        </section>
    )
}

export default Results