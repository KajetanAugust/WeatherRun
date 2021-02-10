import React, { useContext, useState } from 'react'

import { Paper } from "@material-ui/core";

import { aqiFaceChecker } from '../utils/aqiFaceChecker';
import { ThemeContext } from "../contexts";


interface PropsData {
    pollution: Record<any, any>
}

export default function AirQuality (props:PropsData){

    const { theme } = useContext(ThemeContext);
    const [ pollutionData, setPollutionData ] = useState(props.pollution)

        return (
            <React.Fragment>
                {
                    pollutionData !== {}
                        ?
                        <Paper
                            elevation={2}
                            className={`aqi-div ${theme}`}
                            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)', color: 'rgb(255, 255, 255)'} : {backgroundColor: "white"}}
                            variant={theme === 'dark' ? 'outlined' : 'elevation'}
                        >
                            <p className='aqi-title'>Air Quality</p>
                            {pollutionData.data.aqi && aqiFaceChecker(pollutionData.data.aqi)}
                            <p className='aqi-details'>AQI: {typeof pollutionData.data.aqi === 'number' ? pollutionData.data.aqi : 'N/A'}</p>
                            <p className='aqi-details'>PM10: {pollutionData.data.iaqi.pm10 ? pollutionData.data.iaqi.pm10.v : 'N/A '}&micro;g/m&sup3;</p>
                            <p className='aqi-details'>PM2.5: {pollutionData.data.iaqi.pm25 ? pollutionData.data.iaqi.pm25.v : 'N/A '}&micro;g/m&sup3;</p>
                        </Paper>
                        :
                        <p className='aqi-title'>Loading...</p>
                }
            </React.Fragment>
        )
}
