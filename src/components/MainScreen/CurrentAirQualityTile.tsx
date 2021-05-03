import React, {useContext} from "react";

import {ThemeContext} from "../../contexts";

import {aqiFaceChecker} from "../../utils/aqiFaceChecker";

interface CurrentAirQualityTileProps {
    aqi: Record<any, any>
}

export default function CurrentAirQualityTile (props: CurrentAirQualityTileProps) {

    const { theme } = useContext(ThemeContext);
    console.log(props.aqi)
    return (
        <React.Fragment>
            <p className='aqi-title'>Air Quality</p>
            {props.aqi.list[0].main && aqiFaceChecker(props.aqi.list[0].main.aqi)}
            <div
                className={`aqi-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <p className='aqi-details'>AQI: {typeof props.aqi.list[0].main.aqi === 'number' ? props.aqi.list[0].main.aqi : 'N/A'}</p>
                <p className='aqi-details'>PM10: {props.aqi.list[0].components.pm10 ? Math.round(props.aqi.list[0].components.pm10) : 'N/A '}&micro;g/m&sup3;</p>
            </div>
            <div
                className={`aqi-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <p className='aqi-details'>PM2.5: {props.aqi.list[0].components.pm2_5 ? Math.round(props.aqi.list[0].components.pm2_5) : 'N/A '}&micro;g/m&sup3;</p>
                <p className='aqi-details'>O<sub>3</sub>: {props.aqi.list[0].components.o3 ? Math.round(props.aqi.list[0].components.o3) : 'N/A '}ppm</p>
            </div>
            <div
                className={`aqi-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <p className='aqi-details'>SO<sub>2</sub>: {props.aqi.list[0].components.so2 ? Math.round(props.aqi.list[0].components.so2) : 'N/A '}ppm</p>
                <p className='aqi-details'>NO<sub>2</sub>: {props.aqi.list[0].components.no2 ? Math.round(props.aqi.list[0].components.no2) : 'N/A '}ppm</p>
            </div>
        </React.Fragment>
    )
}
