import React, {useContext, useState} from 'react'

import { weatherIconChecker } from "../utils/weatherIconChecker";
import { formatWeather } from "../utils/formatWeather";
import {ThemeContext} from "../contexts";

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
                        <div className={`weather-div ${theme}`}>
                            <p className='weather-title'>{formatWeather(weatherData.current.weather[0].description)}</p>
                            {weatherIconChecker(weatherData.current.weather[0].icon)}
                            <p className='weather-details'>Temperature: {Math.round(weatherData.current.temp)}&deg;C</p>
                            <p className='weather-details'>Feels Like: {Math.round(weatherData.current.feels_like)}&deg;C</p>
                            <p className='weather-details'>Wind: {Math.ceil((weatherData.current.wind_speed * 3.6))} km/h</p>
                        </div>
                        :
                        <p className='weather-title'>Loading...</p>
                }
            </React.Fragment>
        )
    }

