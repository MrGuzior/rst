import React from 'react'
import ResultNavigation from '../Results/ResultNavigation'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const HeightList = ({maxLength = 500}) => {
    const {flights} = useSelector(selectData)

    return(
        <section className={`ResultList`}>
            <ResultNavigation/>
            <Table responsive="sm" striped size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pilot</th>
                        <th className='responsive-remove1'>Klubb</th>
                        <th className='responsive-remove2'>Klass</th>
                        <th>Res 1</th>
                        <th>Res 2</th>
                        <th>Res 3</th>
                        <th>Res 4</th>
                        <th>Summa</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight,id)=>{
                        if(id <= maxLength){
                            return(
                                <tr key={flight.id}>
                                    <td>{id+1}</td>
                                    <td>{flight.pilotName}</td>
                                    <td className='responsive-remove1'>ÖSFK</td>
                                    <td className='responsive-remove2'>Junior</td>
                                    <td>{flight.details.height}m</td>
                                    <td>{flight.details.height + 1200}m</td>
                                    <td>{flight.details.height + 600}m</td>
                                    <td>{flight.details.height + 1600}m</td>
                                    <td>2523</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </Table>
        </section>
    )
}

export default HeightList
