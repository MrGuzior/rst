import React, {useState} from 'react'
import ResultList from '../ResultList/ResultList'
import {useHistory, useLocation, useParams} from 'react-router-dom'
import ResultNavigation from './ResultNavigation'


const Results = () => {
    const [activeList, setActiveList] = useState('')
    const history = useHistory()
    const location = useLocation()
    const params = useParams()

    console.log(params)

    return(
        <section className="results">
            <ResultNavigation/>
            <div className='result mt-0 pt-0'>
                <ResultList/>
            </div>
        </section>
    )
}

export default Results