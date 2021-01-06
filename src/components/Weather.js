import React from 'react'
import { weatherIconChecker } from "../utils/weatherIconChecker";
import { openWeatherToken } from "../tokens/tokens";

import openWeatherLogo from '../logos/openweatherlogo.png'

export default class Weather extends React.Component {
    state = {
        weather: null,
        loading: true,
    }

    componentDidMount() {
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.location}&appid=${openWeatherToken}&units=metric`)
        //     .then(res => res.json())
        //     .then(data => this.setState({
        //         weather: data,
        //         loading: false,
        //     }))
        //     .catch(err => console.log('There was an error: ', err))
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
                            <p>{weather.weather[0].description}</p>
                            <p>Temperature: {Math.round(weather.main.temp)}&deg;C</p>
                            <p>Feels Like: {Math.round(weather.main.feels_like)}&deg;C</p>
                            {weatherIconChecker(weather.weather[0].icon)}
                            <p>{weather.name}, {weather.sys.country}</p>
                            <a href={`https://openweathermap.org/city/${weather.id}`}>
                                <img src={openWeatherLogo} className='open-weather-logo' alt='OpenWeather logo' />
                            </a>

                        </div>
                        : <p>Loading...</p>
                }
            </React.Fragment>
        )
    }
}
