import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import lists from '../../db/lists.js'

const ResultTable = ({match}) => {
    const {flights} = useSelector(selectData)
    console.log(lists)
    console.log(match)

    return(
        <section className={`ResultList`}>
            <Table responsive="sm" striped size="sm">
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </section>
    )
}

export default ResultTable
