import React from 'react'
import ResultNavigation from './ResultNavigation'
import ResultTable from './ResultTable'


const Results = ({match}) => {

    return(
        <div className="results">
            <ResultNavigation/>
            <div className='result mt-0 pt-0'>
                <ResultTable params={match.params}/>
            </div>
        </div>
    )
}

export default Results