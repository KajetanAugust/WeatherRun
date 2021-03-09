import {useContext, useEffect} from "react";

import {Paper} from "@material-ui/core";

import {ThemeContext} from "../contexts";

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
const mapboxToken = String(process.env.REACT_APP_MAPBOX_TOKEN)
const openWeatherToken = String(process.env.REACT_APP_OPENWEATHER_TOKEN)

interface MapProps {
    coordinates: Record<any, any>
}

export default function Map (props: MapProps) {

    const { theme } = useContext(ThemeContext);

    useEffect(() => {

        mapboxgl.accessToken = mapboxToken;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new mapboxgl.Map({
            container: 'map-container',
            // style: `mapbox://styles/mapbox/${theme === 'light' ? 'light-v10' : 'dark-v10'}`,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [props.coordinates.lon, props.coordinates.lat],
            zoom: 7
        }).on('load', function(){
            map.addLayer({
                "id": "simple-tiles",
                "type": "raster",
                "source": {
                    "type": "raster",
                    "tiles": [`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${openWeatherToken}`],
                    "tileSize": 256
                },
                "minzoom": 0,
                "maxzoom": 22
            });
        });
    });

    return (
        <Paper
            className='map-container'
            id='map-container'
            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            variant={theme === 'dark' ? 'outlined' : 'elevation'}
        ></Paper>
    )
}
