import React from "react";

import { aqiFaceChecker } from "../utils/aqiFaceChecker";
import { weatherIconChecker } from "../utils/weatherIconChecker";

interface ForecastTileProps {
    pm10: any,
    pm25: any,
    forecast: Record<any, any>
}

export default function ForecastTile (props: ForecastTileProps) {
    console.log(props.forecast)
    return (
        <div className='forecast-tile-wrapper'>
            <h3>Day</h3>
            <div className='forecast-tile'>
                <div className='forecast-weather-data'>
                    {weatherIconChecker(props.forecast.weather[0].icon, '-small')}
                    <p className='weather-details'>Temperature: {Math.round(props.forecast.temp.day)}&deg;C</p>
                    <p className='weather-details'>Feels Like: {Math.round(props.forecast.feels_like.day)}&deg;C</p>
                    <p className='weather-details'>Wind: {Math.ceil((props.forecast.wind_speed * 3.6))} km/h</p>
                </div>
                <div className='forecast-aqi-data'>
                    {aqiFaceChecker(props.pm25.avg, '-small')}
                    <p>pm10: {props.pm10.avg ? props.pm10.avg : 'N/A '}&micro;g/m&sup3;</p>
                    <p>pm2.5: {props.pm25.avg ? props.pm25.avg : 'N/A '}&micro;g/m&sup3;</p>
                </div>
            </div>
        </div>

    )
}
