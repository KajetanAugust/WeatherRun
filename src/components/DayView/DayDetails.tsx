import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import queryString from "query-string";

import {fetchAll} from "../../utils/fetchFunctions";

import Nav from "../Nav/Nav";
import Loading from "../UtilityScreens/Loading";
import formatLocation from "../../utils/formatLocation";
import HourlyForecastTile from "./HourlyForecastTile";

// interface DayDetailsTypes {
//     pollution: Record<any, any>,
//     weather: Record<any, any>,
//     locationInfo: Record<any, any>
// }

export default function DayDetails (props: any) {

    let location = useLocation()

    const [ loading, setLoading ] = useState(true)
    const {weather, weatherSetter, pollution, pollutionSetter, locationInfo, locationInfoSetter, err, errSetter} = props

    useEffect(() => {
        fetchAll(String(queryString.parse(location.search).search), locationInfoSetter, weatherSetter, pollutionSetter, setLoading, errSetter)
        locationInfoSetter(String(queryString.parse(location.search).search))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(pollution)
    console.log(weather)

        //TODO: add fetch for air quality forecast openweather map i think
    return (

        !loading && props.weather !== {} ?
            <React.Fragment>
                <Nav location={formatLocation(locationInfo)} />
                <div className='day-view-hourly-forecast-container'>
                    {
                        // @ts-ignore
                        weather.hourly.slice(0, 12).map((forecast) => (
                            <HourlyForecastTile forecast={forecast} />
                        ))
                    }
                </div>
            </React.Fragment>
        :
            <Loading />
    )
}
