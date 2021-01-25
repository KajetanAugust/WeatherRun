import React from "react";

import { openWeatherToken, aqiToken } from "../tokens/tokens";
import { fetchWeather, fetchAqi } from "../utils/fetchFunctions";

import AirQuality from "./AirQuality";
import queryString from "query-string";
import Weather from "./Weather";
import Loading from "./Loading";
import Nav from './Nav'
import NotFound from './NotFound';
import Recommendations from "./Recommendations";


interface PropsData {
    aqi: number
}

interface StateData {
    location: string
    weather: Record<any, any>,
    pollution: Record<any, any>,
    loading: boolean,
    err?: any
}

export default class ResultsPage extends React.Component<PropsData, StateData> {
    state: StateData = {
        location: '',
        weather: {},
        pollution: {},
        loading: true,
    }

    componentDidMount() {

        const searchValue = queryString.parse((this.props as any).location.search)

        fetchWeather(searchValue, openWeatherToken)
            .then(weatherData => {
                this.setState({
                    weather: weatherData,
                    loading: true,
                })
                return fetchAqi(weatherData, aqiToken)
                    .then(AqiData => this.setState({
                        pollution: AqiData.data,
                        loading: false
                    }))
            }).catch(err => {
                this.setState({
                    err: err,
                    loading: false
                })
                console.log('There was an error: ', err)
            })
    }

    render() {
        const {loading, weather, pollution} = this.state
        return (
            <React.Fragment>
                <Nav />
                    <React.Fragment>

                        {
                            !loading
                                ?
                                <div className='results-page'>
                                    {
                                        weather.cod === 200
                                            ?
                                            <React.Fragment>
                                                <h1 className='city-name'>{weather.name}, {weather.sys.country}</h1>
                                                <div className='results-container'>
                                                    <AirQuality pollution={pollution}/>
                                                    <Weather weather={weather}/>
                                                </div>
                                                <hr/>
                                                <Recommendations aqi={pollution.aqi} weather={weather}/>
                                            </React.Fragment>
                                            :
                                            <NotFound
                                                text={weather.cod === '404' ? 'City not found, please try again.' : 'There was an error, please try again.'}/>
                                    }

                                </div>
                                :
                                <Loading/>
                        }
                    </React.Fragment>
            </React.Fragment>
        );
    }
}
