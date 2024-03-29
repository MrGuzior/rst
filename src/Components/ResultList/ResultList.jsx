import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ResultList = ({maxLength = 500}) => {
    const {flights} = useSelector(selectData)

    return(
        <div className={`ResultList`}>
            <Table responsive="sm" striped size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pilot</th>
                        <th className='responsive-remove1'>Klubb</th>
                        <th className='responsive-remove2'>Klass</th>
                        <th>Höjd</th>
                        <th>Distans</th>
                        <th>Hastighet</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.splice(0,maxLength).map((flight,id)=>{
                        return(
                            <tr key={flight.id}>
                                <td><Link to={`/flights/${flight.id}`}>{id+1}</Link></td>
                                <td>{flight.pilotName}</td>
                                <td className='responsive-remove1'>ÖSFK</td>
                                <td className='responsive-remove2'>Junior</td>
                                <td>{flight.details.height}m</td>
                                <td>{flight.details.distance}km</td>
                                <td>{flight.details.speed}km/s</td>
                                <td>2523</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ResultList
