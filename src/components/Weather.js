import React from 'react'

import { weatherIconChecker } from "../utils/weatherIconChecker";
import { formatWeather } from "../utils/formatWeather";

import openWeatherLogo from '../logos/openweatherlogo.png'

export default class Weather extends React.Component {
    state = {
        weather: null,
        loading: true,
    }

    componentDidMount() {
        this.setState({
            weather: this.props.weather,
            loading: false
        })
    }

    render() {
        const {weather, loading} = this.state
        console.log(weather)
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                        <div className='weather-div'>
                            <p className='weather-title'>{formatWeather(weather.weather[0].description)}</p>
                            {weatherIconChecker(weather.weather[0].icon)}
                            <p className='weather-details'>Temperature: {Math.round(weather.main.temp)}&deg;C</p>
                            <p className='weather-details'>Feels Like: {Math.round(weather.main.feels_like)}&deg;C</p>
                            <p className='weather-details'>Wind: {Math.ceil((weather.wind.speed * 3.6))} km/h</p>
                            <a
                                href={`https://openweathermap.org/city/${weather.id}`}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <img src={openWeatherLogo} className='open-weather-logo' alt='OpenWeather logo' />
                            </a>

                        </div>
                        : <p>Loading...</p>
                }
            </React.Fragment>
        )
    }
}
