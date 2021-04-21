import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { fetchAll } from "../../utils/fetchFunctions";
import formatLocation from '../../utils/formatLocation'
import { ThemeContext } from "../../contexts";

import Loading from "../UtilityScreens/Loading";
import Nav from '../Nav/Nav'
import NotFound from '../UtilityScreens/NotFound';
import Forecast from "./Forecast";
import Recommendations from "./Recommendations";
import CurrentTilesCreator from "./CurrentTilesCreator";
import Map from "./Map";


export default function ResultsPage (props: any) {

    let location = useLocation()

    const [ loading, setLoading ] = useState(true)
    const [resultsIsVisible, setResultsIsVisible] = useState(true);
    // TODO: pass resultsIsVisible setter to the nav component

    const {weather, weatherSetter, pollution, pollutionSetter, locationInfo, locationInfoSetter, err, errSetter} = props

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        fetchAll(String(queryString.parse(location.search).search), locationInfoSetter, weatherSetter, pollutionSetter, setLoading, errSetter)
        locationInfoSetter(String(queryString.parse(location.search).search))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
            <React.Fragment>
                {
                    !loading && weather !== {} && pollution !== {}
                        ?
                        <React.Fragment>
                            <Nav location={err === '' ? formatLocation(locationInfo) : ''} />
                            {
                                !loading && err === ''
                                    ?
                                    <React.Fragment>
                                        <div className={`results-page ${theme}`}>
                                            <CurrentTilesCreator type='aqi' data={pollution} />
                                            <CurrentTilesCreator type='weather' data={weather} />
                                            <Recommendations aqi={pollution} weather={weather}/>
                                            <Forecast weather={weather} pollution={pollution}/>
                                            <Map coordinates={weather}/>
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
