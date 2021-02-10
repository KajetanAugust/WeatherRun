import React, {useContext, useState} from 'react'

import { weatherIconChecker } from "../utils/weatherIconChecker";
import { formatWeather } from "../utils/formatWeather";
import {ThemeContext} from "../contexts";
import {Card, Paper} from "@material-ui/core";

interface WeatherPropsData {
    weather: Record<any, any>
}

export default function Weather (props: WeatherPropsData) {

    const { theme } = useContext(ThemeContext);
    const [weatherData, setWeatherData] = useState(props.weather)

        return (
            <React.Fragment>
                {
                    weatherData !== {}
                        ?
                        <Paper
                            elevation={2}
                            className={`weather-div ${theme}`}
                            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)', color: 'rgb(255, 255, 255)'} : {backgroundColor: "white"}}
                            variant={theme === 'dark' ? 'outlined' : 'elevation'}
                        >
                            <p className='weather-title'>{formatWeather(weatherData.current.weather[0].description)}</p>
                            {weatherIconChecker(weatherData.current.weather[0].icon)}
                            <p className='weather-details'>Temperature: {Math.round(weatherData.current.temp)}&deg;C</p>
                            <p className='weather-details'>Feels Like: {Math.round(weatherData.current.feels_like)}&deg;C</p>
                            <p className='weather-details'>Wind: {Math.ceil((weatherData.current.wind_speed * 3.6))} km/h</p>
                        </Paper>
                        :
                        <p className='weather-title'>Loading...</p>
                }
            </React.Fragment>
        )
    }

