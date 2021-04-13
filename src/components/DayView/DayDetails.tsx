import React from "react";
import {Paper} from "@material-ui/core";

import { weatherIconChecker } from "../../utils/weatherIconChecker";
import { getFormattedTime } from "../../utils/dateFormatters";
import { formatWeather } from "../../utils/formatWeather";

import Nav from "../Nav/Nav";
import Loading from "../UtilityScreens/Loading";
// import GraphCreator from "./GraphCreator"
import formatLocation from "../../utils/formatLocation";

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
            <Paper style={{width: '95%', height:'400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
                {
                    // @ts-ignore
                    props.weather.hourly.slice(0, 12).map((forecast) => (
                        <div>
                            <p>{getFormattedTime(forecast.dt)}</p>
                            <p>{formatWeather(forecast.weather[0].description)}</p>
                            {weatherIconChecker(forecast.weather[0].icon)}
                            <p>Temp:<br/>{Math.round(forecast.temp)}&deg;C</p>
                            <p>Feels Like:<br/>{Math.round(forecast.feels_like)}&deg;C</p>
                        </div>
                    ))
                }
            </Paper>
        </React.Fragment>
            :
            <Loading />
    )
}
