import React from 'react'
import ResultList from '../ResultList/ResultList'
import ResultNavigation from './ResultNavigation'
import ResultTable from './ResultTable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"

const Individual = () => {
    return (
        <>
            <h1>Individual</h1>
            <Route path='/results/individual/:league?/combi' component={ResultTable}/>
            <Route path='/results/individual/:league?/height' component={Individual}/>
            <Route path='/results/individual/:league?/distance' component={Individual}/>
            <Route path='/results/individual/:league?/total-distance' component={Individual}/>
            <Route path='/results/individual/:league?/speed' component={Individual}/>
        </>
    )
}

export default Individual