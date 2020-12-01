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


const Results = () => {

    return(
        <section className="results">
            <ResultNavigation/>
            <div className='result mt-0 pt-0'>
                <Route path='/results/individual/:league?/:segment?' component={Individual}/>
                <Route path='/results/individual-female/:league?/:segment?' component={ResultList}/>
                <Route path='/results/retro/:league?/:segment?' component={Individual}/>
                <Route path='/results/fai/:league?/:segment?' component={Individual}/>
                <Route path='/results/team/:league?/:segment?' component={Individual}/>
                <Route path='/results/flights/:league?/:segment?' component={Individual}/>
            </div>
        </section>
    )
}

export default Results