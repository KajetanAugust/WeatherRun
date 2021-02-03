import React, {useContext, useEffect, useState} from "react";
import queryString from "query-string";

import {openWeatherToken, aqiToken, mapboxToken} from "../tokens/tokens";
import {fetchAqi, fetchCoordinates, fetchForecast} from "../utils/fetchFunctions";
import formatLocation from '../utils/formatLocation'
import { ThemeContext } from "../contexts";

import AirQuality from "./AirQuality";
import Weather from "./Weather";
import Loading from "./Loading";
import Nav from './Nav'
import NotFound from './NotFound';
import Forecast from "./Forecast";
import Recommendations from "./Recommendations";

export default function ResultsPage (props: any) {

    const [ loading, setLoading ] = useState(true)
    const [ location, setLocation ] = useState('')
    const [ weather, setWeather ] = useState({})
    const [ pollution, setPollution ] = useState({})
    const [ locationInfo, setLocationInfo ] = useState({})
    const [ err, setErr ] = useState('')

    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        const locationFromQuery = queryString.parse(props.location.search)
        setLocation(String(locationFromQuery.search))

        fetchCoordinates(String(locationFromQuery.search), mapboxToken)
            .then(coordinates => {
                setLocationInfo(coordinates.features[0])

                if (coordinates.features.length) {
                    return fetchForecast(coordinates.features[0].center, openWeatherToken)
                        .then(weather => {
                                setWeather(weather)
                                setLoading(true)

                                return fetchAqi(weather.lat, weather.lon, aqiToken)
                                    .then(aqiData => {
                                            setPollution(aqiData)
                                            setLoading(false)
                                        })
                            }
                        )
                } else {
                    setErr('City not found, please try again.')
                    setLoading(false)
                }
            })
    },[]);

    return (
            <React.Fragment>
                {
                    !loading && weather !== {} && pollution !== {}
                        ?
                        <React.Fragment>
                            <Nav location={err === '' ? formatLocation(locationInfo) : ''}/>
                            {
                                !loading && err === ''
                                    ?
                                    <React.Fragment>
                                        <div className={`results-page ${theme}`}>
                                            <Weather weather={weather}/>
                                            <AirQuality pollution={pollution}/>
                                            <Recommendations aqi={pollution} weather={weather}/>
                                            <Forecast weather={weather} pollution={pollution}/>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <NotFound
                                        text={err}
                                    />
                            }
                        </React.Fragment>

                        :
                        <Loading/>
                }
            </React.Fragment>
        );
}
