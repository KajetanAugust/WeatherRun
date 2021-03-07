import React, {useContext} from "react";

import {ThemeContext} from "../contexts";

import {aqiFaceChecker} from "../utils/aqiFaceChecker";

interface CurrentAirQualityTileProps {
    aqi: Record<any, any>
}

export default function CurrentAirQualityTile (props: CurrentAirQualityTileProps) {

    const { theme } = useContext(ThemeContext);
    // console.log(props.aqi)
    return (
        <React.Fragment>
            <p className='aqi-title'>Air Quality</p>
            {props.aqi.data.aqi && aqiFaceChecker(props.aqi.data.aqi)}
            <div
                className={`aqi-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <p className='aqi-details'>AQI: {typeof props.aqi.data.aqi === 'number' ? props.aqi.data.aqi : 'N/A'}</p>
                <p className='aqi-details'>PM10: {props.aqi.data.iaqi.pm10 ? props.aqi.data.iaqi.pm10.v : 'N/A '}&micro;g/m&sup3;</p>
            </div>
            <div
                className={`aqi-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <p className='aqi-details'>PM2.5: {props.aqi.data.iaqi.pm25 ? props.aqi.data.iaqi.pm25.v : 'N/A '}&micro;g/m&sup3;</p>
                <p className='aqi-details'>O<sub>3</sub>: {props.aqi.data.iaqi.o3 ? props.aqi.data.iaqi.o3.v : 'N/A '}ppm</p>
            </div>
            <div
                className={`aqi-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <p className='aqi-details'>SO<sub>2</sub>: {props.aqi.data.iaqi.o3 ? props.aqi.data.iaqi.so2.v : 'N/A '}ppm</p>
                <p className='aqi-details'>NO<sub>2</sub>: {props.aqi.data.iaqi.o3 ? props.aqi.data.iaqi.no2.v : 'N/A '}ppm</p>
            </div>
        </React.Fragment>
    )
}
