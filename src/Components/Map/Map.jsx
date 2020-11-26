import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'

const Map = () => {
    const position = [51.505, -0.09]
    return(
        <div className='leaflet-container'>
            <MapContainer className='map' center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Map