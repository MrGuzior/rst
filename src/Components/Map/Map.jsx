import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Polyline, Circle} from 'react-leaflet'
import IGCParser from 'igc-parser'
import data from '../../db/flights/NAV-8NT-02_rst.igc'

const Map = () => {
    const [flightData, setFlightData] = useState(null)
    const zoom = 9
    const maxZoom = 15
    const flightLineColor = "lime"
    const taskLineColor = "blue"

    useEffect(()=>{
        fetch(data)
            .then(r => r.text())
            .then(igc => IGCParser.parse(igc, 'utf8'))
            .then(data => setFlightData(data))
    },[])

    const getTaskPositions = () => {
        const pointArr = flightData.task.points.map(point => {
            return [point.latitude, point.longitude]
        })
        pointArr.pop()
        pointArr.shift()
        return pointArr
    }

    const getFlightPositions = () => {
        return flightData.fixes.map(point=>{
            return [point.latitude, point.longitude]
        })
    }

    return(
        <div className='leaflet-container'>
            {flightData &&
                <MapContainer className='map' center={getTaskPositions()[0]} zoom={zoom} maxZoom={maxZoom} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                    />
                        <Polyline pathOptions={{ color: flightLineColor }} positions={getTaskPositions()} />
                        {
                            getTaskPositions().map(point=><Circle center={point} pathOptions={{color: 'red'}} radius={500} />)
                        }
                        <Polyline pathOptions={{ color: taskLineColor }} positions={getFlightPositions()} />
                </MapContainer>
            }
        </div>
    )
}

export default Map