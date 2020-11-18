import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/appSlice'
import {Table} from 'react-bootstrap'

const ResultList = ({list}) => {
    const {flights} = useSelector(selectData)

    return(
        <section className="ResultList">
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
                    <tr>
                    <td>1</td>
                        <td>Konrad Guzior</td>
                        <td className='responsive-remove1'>ÖSFK</td>
                        <td className='responsive-remove2'>Junior</td>
                        <td>775</td>
                        <td>134km</td>
                        <td>100km/h</td>
                        <td>2202</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Konrad Konrad</td>
                        <td className='responsive-remove1'>ÖSFK</td>
                        <td className='responsive-remove2'>Junior</td>
                        <td>775</td>
                        <td>134km</td>
                        <td>100km/h</td>
                        <td>2202</td>
                    </tr>
                    <tr>
                    <td>3</td>
                        <td>Guzior Guzior</td>
                        <td className='responsive-remove1'>ÖSFK</td>
                        <td className='responsive-remove2'>Junior</td>
                        <td>775</td>
                        <td>134km</td>
                        <td>100km/h</td>
                        <td>2202</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default ResultList