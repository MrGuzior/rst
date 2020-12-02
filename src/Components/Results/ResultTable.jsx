import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import lists from '../../db/lists.js'


const ResultTable = ({params}) => {
    const {flights} = useSelector(selectData)
    const {category, league, segment} = params
    const activeListTemplate = lists.filter(list=>list.path === segment)[0]

    console.log(activeListTemplate.path)
    console.log(segment)

    return(
        <section className={`ResultList`}>
            <Table responsive="sm" striped size="sm">
                <thead>
                    <tr>
                        {
                            activeListTemplate.tableHeads.map(th=>(
                            <th>{th.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </section>
    )
}

export default ResultTable
