import React from "react";

import Nav from "../Nav/Nav";
import Loading from "../UtilityScreens/Loading";
import formatLocation from "../../utils/formatLocation";
import HourlyForecastTile from "./HourlyForecastTile";

interface DayDetailsTypes {
    pollution: Record<any, any>,
    weather: Record<any, any>,
    locationInfo: Record<any, any>
}

export default function DayDetails (props: DayDetailsTypes) {

    console.log(props.pollution)
    console.log(props.weather)

    return (
        // TODO: find a way to fix error occurring when Day Details site is refreshed
        props.weather !== {} ?
        <React.Fragment>
            <Nav location={formatLocation(props.locationInfo)}/>
            <div className='day-view-hourly-forecast-container'>
                {
                    // @ts-ignore
                    props.weather.hourly.slice(0, 12).map((forecast) => (
                        <HourlyForecastTile forecast={forecast} />
                    ))
                }
            </div>
        </React.Fragment>
            :
            <Loading />
    )
}
