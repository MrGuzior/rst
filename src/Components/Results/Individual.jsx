import React from 'react'
import ResultList from '../ResultList/ResultList'
import ResultNavigation from './ResultNavigation'

const Individual = () => {
    return (
        <section className="results">
            <ResultNavigation/>
            <div className='result mt-0 pt-0'>
                <ResultList/>
            </div>
        </section>
    )
}

export default Individual