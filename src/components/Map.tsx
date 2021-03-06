import {useEffect} from "react";

interface MapProps {
    coordinates: Record<any, any>
}

export default function Map (props: MapProps) {

    useEffect(() => {
        const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FqYXVnIiwiYSI6ImNra2g2eWJpNjFhZzQyb21ubDhjOTBpMHEifQ.vPIpne0RtMGAaZ9zPT6QEQ';
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [props.coordinates.data.city.geo[1], props.coordinates.data.city.geo[0]],
            zoom: 11
        })});

    return (
        <div className='map-container' id='map-container'></div>
    )
}
