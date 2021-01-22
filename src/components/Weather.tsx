import React from 'react'

import { weatherIconChecker } from "../utils/weatherIconChecker";
import { formatWeather } from "../utils/formatWeather";

interface PropsData {
    weather: Record<any, any>

}

interface StateData {
    weatherData: any,
    loading: boolean
}

export default class Weather extends React.Component<PropsData, StateData> {

    state: StateData = {
        weatherData: null,
        loading: true,
    }


    componentDidMount() {
        this.setState({
            weatherData: this.props.weather,
            loading: false
        })
    }

    render() {
        const {weatherData, loading} = this.state
        // console.log(weather)
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                        <div className='weather-div'>
                            <p className='weather-title'>{formatWeather(weatherData.weather[0].description)}</p>
                            {weatherIconChecker(weatherData.weather[0].icon)}
                            <p className='weather-details'>Temperature: {Math.round(weatherData.main.temp)}&deg;C</p>
                            <p className='weather-details'>Feels Like: {Math.round(weatherData.main.feels_like)}&deg;C</p>
                            <p className='weather-details'>Wind: {Math.ceil((weatherData.wind.speed * 3.6))} km/h</p>
                        </div>
                        : <p>Loading...</p>
                }
            </React.Fragment>
        )
    }
}
