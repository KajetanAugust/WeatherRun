import React from "react";
import queryString from "query-string";

import {openWeatherToken, aqiToken, mapboxToken} from "../tokens/tokens";
import {fetchAqi, fetchCoordinates, fetchForecast} from "../utils/fetchFunctions";
import formatLocation from '../utils/formatLocation'

import AirQuality from "./AirQuality";
import Weather from "./Weather";
import Loading from "./Loading";
import Nav from './Nav'
import NotFound from './NotFound';
import WeatherRecommendation from "./WeatherRecommendation";

import Forecast from "./Forecast";

interface PropsData {
    aqi: number
}

interface StateData {
    location: string
    weather: Record<any, any>,
    pollution: Record<any, any>,
    locationInfo: Record<any, any>,
    loading: boolean,
    err: any
}

export default class ResultsPage extends React.Component<PropsData, StateData> {
    state: StateData = {
        location: '',
        weather: {},
        pollution: {},
        locationInfo: {},
        err: '',
        loading: true,
    }

    componentDidMount() {

        const locationFromQuery = queryString.parse((this.props as any).location.search)
        this.setState({
            location: String(locationFromQuery.search),
        })

        fetchCoordinates(String(locationFromQuery.search), mapboxToken)
            .then(coordinates => {
                this.setState({
                    locationInfo: coordinates.features[0],
                })
                if (coordinates.features.length) {
                    return fetchForecast(coordinates.features[0].center, openWeatherToken)
                        .then(weather => {
                                this.setState({
                                    weather: weather,
                                    loading: true
                                })
                                return fetchAqi(weather.lat, weather.lon, aqiToken)
                                    .then(aqiData =>
                                        this.setState({
                                            pollution: aqiData,
                                            loading: false
                                        })
                                    )
                            }
                        )
                } else {
                    this.setState({
                        err: 'City not found, please try again.',
                        loading: false,
                    })
                }
            })
    }

    render() {
        const {loading, weather, pollution, locationInfo, err} = this.state
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                        <React.Fragment>
                            <Nav location={err === '' ? formatLocation(locationInfo) : ''}/>
                            {
                                err === ''
                                    ?
                                    <React.Fragment>
                                        <div className='results-page'>
                                            <Weather weather={weather.current}/>
                                            <AirQuality pollution={pollution.data}/>
                                            <WeatherRecommendation aqi={pollution.data.aqi} weather={weather.current}/>
                                            {/*<ClothesRecommendation/>*/}
                                            <Forecast weather={weather} pollution={pollution.data}/>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <NotFound
                                        text={this.state.err}
                                    />
                            }
                        </React.Fragment>

                        :
                        <Loading/>
                }
            </React.Fragment>
        );
    }
}
