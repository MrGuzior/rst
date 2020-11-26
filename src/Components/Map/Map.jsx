import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Polyline} from 'react-leaflet'
import IGCParser from 'igc-parser'
import data from './NAV-8NT-02_rst.igc'

const fs = require('fs')


const Map = () => {
    const [flightData, setFlightData] = useState(null)
    const position = [51.505, -0.09]

    useEffect(()=>{
        fetch(data)
            .then(r => r.text())
            .then(igc => IGCParser.parse(igc, 'utf8'))
            .then(data => setFlightData(data))
    },[])
    
    useEffect(()=>{
        if(flightData){
            console.log(flightData.fixes)
        }
    }, [flightData])

    const limeOptions = { color: 'lime' }
    const trackOptions = { color: 'blue' }
    const polyline = () => [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
      ]



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
            <MapContainer className='map' center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                />
                    <Polyline pathOptions={limeOptions} positions={getTaskPoints()} />
                    <Polyline pathOptions={trackOptions} positions={getFlightPoints()} />
            </MapContainer>
                }
        </div>
    )
}

export default Map