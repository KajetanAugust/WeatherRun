import React, { useContext, useEffect, useState } from "react";
import queryString from "query-string";

import { fetchAll } from "../utils/fetchFunctions";
import formatLocation from '../utils/formatLocation'
import { ThemeContext } from "../contexts";

import Loading from "./Loading";
import Nav from './Nav'
import NotFound from './NotFound';
import Forecast from "./Forecast";
import Recommendations from "./Recommendations";
import CurrentTilesCreator from "./CurrentTilesCreator";
import Map from "./Map";


export default function ResultsPage (props: any) {

    const [ loading, setLoading ] = useState(true)
    const [ weather, setWeather ] = useState({})
    const [ pollution, setPollution ] = useState({})
    const [ locationInfo, setLocationInfo ] = useState({})
    const [ err, setErr ] = useState('')

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const locationFromQuery = queryString.parse(props.location.search)
        fetchAll(String(locationFromQuery.search), setLocationInfo, setWeather, setPollution, setLoading, setErr)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                            <CurrentTilesCreator type='aqi' data={pollution} />
                                            <CurrentTilesCreator type='weather' data={weather} />
                                            <Recommendations aqi={pollution} weather={weather}/>
                                            <Forecast weather={weather} pollution={pollution}/>
                                            <Map coordinates={pollution}/>
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
