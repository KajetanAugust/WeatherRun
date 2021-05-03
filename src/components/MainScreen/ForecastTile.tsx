import React, { useContext } from "react";
import { Paper} from "@material-ui/core";

import { ThemeContext } from "../../contexts";

import { aqiFaceChecker } from "../../utils/aqiFaceChecker";
import { weatherIconChecker } from "../../utils/weatherIconChecker";
import { formatDay } from "../../utils/dateFormatters";

interface ForecastTileProps {
    pm10: any,
    pm25: any,
    forecast: Record<any, any>
}

export default function ForecastTile (props: ForecastTileProps) {
    const { theme } = useContext(ThemeContext);
    return (
        <Paper
            elevation={2}
            className={`forecast-tile-wrapper-${theme}`}
            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            variant={theme === 'dark' ? 'outlined' : 'elevation'}
        >
            <h3
                className={`${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)'} : {backgroundColor: "white"}}
            >{formatDay(props.forecast.dt)}</h3>
            <div
                className={`forecast-tile ${theme} `}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)'} : {backgroundColor: "white"}}
            >
                <div className='forecast-weather-data'>
                    {weatherIconChecker(props.forecast.weather[0].icon, '-small')}
                    <p className='weather-details'>Temperature: {Math.round(props.forecast.temp.day)}&deg;C</p>
                    <p className='weather-details'>Feels Like: {Math.round(props.forecast.feels_like.day)}&deg;C</p>
                    <p className='weather-details'>Wind: {Math.ceil((props.forecast.wind_speed * 3.6))} km/h</p>
                </div>
                <div
                    className={`forecast-aqi-data ${theme}`}
                    style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)'} : {backgroundColor: "white"}}
                >
                    {aqiFaceChecker(props.pm25, '-small')}
                    <p className='aqi-details'>pm10: {props.pm10 ? props.pm10 : 'N/A '}&micro;g/m&sup3;</p>
                    <p className='aqi-details'>pm2.5: {props.pm25 ? props.pm25 : 'N/A '}&micro;g/m&sup3;</p>
                    <p className='aqi-details'>AQI: {props.pm25 ? props.pm25 : 'N/A '}</p>
                </div>
                {/*TODO:rewrite passing arguments to aqiFaceChecker*/}
            </div>
        </Paper>
    )
}
