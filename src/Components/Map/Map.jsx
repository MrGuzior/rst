import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Polyline, Circle} from 'react-leaflet'
import IGCParser from 'igc-parser'
import data from '../../db/flights/LXV-4SB-01_rst.igc'

const Map = () => {
    const [flightData, setFlightData] = useState(null)

    useEffect(()=>{
        fetch(data)
            .then(r => r.text())
            .then(igc => IGCParser.parse(igc, 'utf8'))
            .then(data => setFlightData(data))
    },[])

    const getTaskPoints = () => {
        let pointArr = []
        flightData.task.points.map(point => {
            pointArr = [...pointArr, [point.latitude, point.longitude]]
        })
        pointArr.pop()
        pointArr.shift()
        return pointArr
    }  

    const getFlightPoints = () => {
        let pointArr = []
        flightData.fixes.map(point=>{
            pointArr = [...pointArr, [point.latitude, point.longitude]]
        })
        return pointArr
    }


    return(
        <div className='leaflet-container'>
            {flightData &&
                <MapContainer className='map' center={getTaskPoints()[0]} zoom={9} maxZoom={15} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                    />
                        <Polyline pathOptions={{ color: 'lime' }} positions={getTaskPoints()} />
                        {
                            getTaskPoints().map(point=><Circle center={point} pathOptions={{color: 'red'}} radius={500} />)
                        }
                        <Polyline pathOptions={{ color: 'blue' }} positions={getFlightPoints()} />
                </MapContainer>
            }
        </div>
    )
}

export default Map