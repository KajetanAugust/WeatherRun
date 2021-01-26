import React, {useState} from 'react'

import { weatherIconChecker } from "../utils/weatherIconChecker";
import { formatWeather } from "../utils/formatWeather";

interface WeatherPropsData {
    weather: Record<any, any>
}

export default function Weather (props: WeatherPropsData) {

    const [weatherData, setWeatherData] = useState(props.weather)

        return (
            <React.Fragment>
                {
                    weatherData !== {}
                        ?
                        <div className='weather-div'>
                            <p className='weather-title'>{formatWeather(weatherData.weather[0].description)}</p>
                            {weatherIconChecker(weatherData.weather[0].icon)}
                            <p className='weather-details'>Temperature: {Math.round(weatherData.main.temp)}&deg;C</p>
                            <p className='weather-details'>Feels Like: {Math.round(weatherData.main.feels_like)}&deg;C</p>
                            <p className='weather-details'>Wind: {Math.ceil((weatherData.wind.speed * 3.6))} km/h</p>
                        </div>
                        :
                        <p className='weather-title'>Loading...</p>
                }
            </React.Fragment>
        )
    }

