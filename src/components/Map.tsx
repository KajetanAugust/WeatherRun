import {useContext, useEffect} from "react";

import {Paper} from "@material-ui/core";

import {ThemeContext} from "../contexts";

const mapboxToken = String(process.env.REACT_APP_MAPBOX_TOKEN)

interface MapProps {
    coordinates: Record<any, any>
}

export default function Map (props: MapProps) {

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

        mapboxgl.accessToken = mapboxToken;
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: `mapbox://styles/mapbox/${theme === 'light' ? 'light-v10' : 'dark-v10'}`,
            center: [props.coordinates.lon, props.coordinates.lat],
            zoom: 10
        })});

    return (
        <Paper
            className='map-container'
            id='map-container'
            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            variant={theme === 'dark' ? 'outlined' : 'elevation'}
        ></Paper>
    )
}
