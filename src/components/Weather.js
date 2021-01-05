import React from 'react'
import { weatherIconChecker } from "../utils/weatherIconChecker";
import AccuWeatherLogo from '../logos/AccuWeather_Logo.svg'

import { accuWeatherToken } from "../tokens/tokens";

export default class Weather extends React.Component {
    state = {
        cityData: null,
        cityWeather: null,
        weatherIcon: null,
        loading: true,
    }

    componentDidMount() {
        fetch(`https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuWeatherToken}&q=${this.props.location}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    cityData: data[0],
                    loading: true
                })
                return fetch(`https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${this.state.cityData.Key}?apikey=${accuWeatherToken}`)
            })
            .then(res => res.json())
            .then(data => this.setState({
                cityWeather: data[0],
                weatherIcon: data[0].WeatherIcon,
                loading: false
            }))
    }

    render() {
        const {cityData, cityWeather, weatherIcon, loading} = this.state

        return (
            <React.Fragment>
                {
                    !loading
                        ?
                        <div className='weather-div'>

                            <p>{cityWeather.WeatherText}</p>
                            <p>Temperature: {cityWeather.Temperature.Metric.Value}&deg;{cityWeather.Temperature.Metric.Unit}</p>
                            {weatherIconChecker(weatherIcon)}
                            <p>{cityData.EnglishName}, {cityData.Country.EnglishName}</p>
                            <a href={`https://www.accuweather.com/pl/pl/katowice/275781/weather-forecast/275781`}>
                                <img src={AccuWeatherLogo} className='accu-weather-logo' alt='AccuWeather logo' />
                            </a>

                        </div>
                        : <p>Loading...</p>
                }
            </React.Fragment>
        )
    }
}
