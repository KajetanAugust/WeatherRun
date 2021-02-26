import React, {useContext} from "react";
import {Paper} from "@material-ui/core";

import {ThemeContext} from "../contexts";

import {aqiFaceChecker} from "../utils/aqiFaceChecker";
import {formatWeather} from "../utils/formatWeather";
import {weatherIconChecker} from "../utils/weatherIconChecker";
import { getFormattedTime } from "../utils/dateFormatters";

interface CurrentTilesCreatorProps {
    type: String,
    data: Record<any, any>
}

export default function CurrentTilesCreator (props: CurrentTilesCreatorProps) {

    const { theme } = useContext(ThemeContext);
    console.log(props.data)
    return (
        <React.Fragment>
                    <Paper
                        elevation={2}
                        className={`${props.type}-div ${theme}`}
                        style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)', color: 'rgb(255, 255, 255)'} : {backgroundColor: "white"}}
                        variant={theme === 'dark' ? 'outlined' : 'elevation'}
                    >
                        {
                            props.type === 'aqi'
                                ?
                                    <React.Fragment>
                                        <p className='aqi-title'>Air Quality</p>
                                        {props.data.data.aqi && aqiFaceChecker(props.data.data.aqi)}
                                        <p className='aqi-details'>AQI: {typeof props.data.data.aqi === 'number' ? props.data.data.aqi : 'N/A'}</p>
                                        <p className='aqi-details'>PM10: {props.data.data.iaqi.pm10 ? props.data.data.iaqi.pm10.v : 'N/A '}&micro;g/m&sup3;</p>
                                        <p className='aqi-details'>PM2.5: {props.data.data.iaqi.pm25 ? props.data.data.iaqi.pm25.v : 'N/A '}&micro;g/m&sup3;</p>
                                    </React.Fragment>
                                :
                                    <React.Fragment>
                                        <p className='weather-title'>{formatWeather(props.data.current.weather[0].description)}</p>
                                        {weatherIconChecker(props.data.current.weather[0].icon)}
                                        <p className='weather-details'>Temperature: {Math.round(props.data.current.temp)}&deg;C</p>
                                        <p className='weather-details'>Feels Like: {Math.round(props.data.current.feels_like)}&deg;C</p>
                                        <p className='weather-details'>Wind: {Math.ceil((props.data.current.wind_speed * 3.6))} km/h</p>
                                        <p className='weather-details'>Sunrise: {getFormattedTime(props.data.current.sunrise)}</p>
                                        <p className='weather-details'>Sunset: {getFormattedTime(props.data.current.sunset)}</p>
                                    </React.Fragment>
                        }
                    </Paper>
        </React.Fragment>
    )
}
