import React from "react";

import {Paper} from "@material-ui/core";

import {getFormattedTime} from "../../utils/dateFormatters";
import {formatWeather} from "../../utils/formatWeather";
import {weatherIconChecker} from "../../utils/weatherIconChecker";

interface HourlyForecastTileProps {
    forecast: Record<any, any>
}

export default function HourlyForecastTile (props: HourlyForecastTileProps) {
    return (
        <Paper className='day-view-hourly-forecast-tile'>
            <p>{getFormattedTime(props.forecast.dt)}</p>
            <p>{formatWeather(props.forecast.weather[0].description)}</p>
            {weatherIconChecker(props.forecast.weather[0].icon, '-day-view')}
            <p>Temp:<br/>{Math.round(props.forecast.temp)}&deg;C</p>
            <p>Feels Like:<br/>{Math.round(props.forecast.feels_like)}&deg;C</p>
        </Paper>
    )
}
