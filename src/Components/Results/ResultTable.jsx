import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {resultTableHeads} from '../../db/lists.js'


const ResultTable = ({params}) => {
    const {flights} = useSelector(selectData)
    const {category, league, segment} = params
    const activeListHeads = resultTableHeads.filter(list=>list.segment === segment)[0]

    

    return(
        <section className={`ResultList`}>
            <Table responsive="sm" striped size="sm">
                <thead>
                    <tr>
                        {
                            activeListHeads.heads.map(th=>(
                            <th>{th.name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            [...Array(30)].map((_value, i) =>
                                <tr>
                                    {
                                        activeListHeads.heads.map(th=>(
                                            <td>{th.name === '#' ? i+1 : th.exampleValue}</td>
                                            ))
                                    }
                                </tr>
                            )
                        }
                </tbody>
            </Table>
        </section>
    )
}

export default ResultTable
