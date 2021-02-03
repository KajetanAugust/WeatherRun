import React, { useContext, useEffect, useState } from "react";
import queryString from "query-string";

import { fetchAll } from "../utils/fetchFunctions";
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
    const [ weather, setWeather ] = useState({})
    const [ pollution, setPollution ] = useState({})
    const [ locationInfo, setLocationInfo ] = useState({})
    const [ err, setErr ] = useState('')

    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        const locationFromQuery = queryString.parse(props.location.search)

        fetchAll(String(locationFromQuery.search), setLocationInfo, setWeather, setPollution, setLoading, setErr)

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
