import React from "react";
import queryString from "query-string";

import { openWeatherToken, aqiToken } from "../tokens/tokens";
import { fetchWeather, fetchAqi } from "../utils/fetchFunctions";

import AirQuality from "./AirQuality";
import Weather from "./Weather";
import Loading from "./Loading";
import Nav from './Nav'
import NotFound from './NotFound';
import WeatherRecommendation from "./WeatherRecommendation";
import ClothesRecommendation from "./ClothesRecommendation";

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

        const locationFromQuery = queryString.parse((this.props as any).location.search)
        this.setState({
            location: String(locationFromQuery.search),
        })

        fetchWeather(locationFromQuery, openWeatherToken)
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
        const {loading, weather, pollution, location} = this.state
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                            <React.Fragment>
                                <Nav location={`${weather.name}, ${weather.sys.country}`}/>
                                    {
                                        weather.cod === 200
                                            ?
                                            <React.Fragment>
                                                <div className='results-page'>
                                                    <AirQuality pollution={pollution}/>
                                                    <Weather weather={weather}/>
                                                    <WeatherRecommendation aqi={pollution.aqi} weather={weather} />
                                                    <ClothesRecommendation />
                                                    {/*<Recommendations aqi={pollution.aqi} weather={weather}/>*/}
                                                </div>
                                            </React.Fragment>
                                            :
                                            <NotFound
                                                text={weather.cod === '404' ? 'City not found, please try again.' : 'There was an error, please try again.'}
                                            />
                                    }
                            </React.Fragment>

                        :
                            <Loading />
                }
            </React.Fragment>
        );
    }
}
