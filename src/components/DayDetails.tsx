import React from "react";
import {Paper} from "@material-ui/core";

import Nav from "./Nav";
import Loading from "./Loading";
import GraphCreator from "./GraphCreator"
import formatLocation from "../utils/formatLocation";

interface DayDetailsTypes {
    pollution: Record<any, any>,
    weather: Record<any, any>,
    locationInfo: Record<any, any>
}

export default function DayDetails (props: DayDetailsTypes) {

    console.log(props.pollution)
    return (


        // TODO: find a way to fix error occurring when Day Details site is refreshed

        props.weather !== {} ?
        <React.Fragment>
            <Nav location={formatLocation(props.locationInfo)}/>
            <Paper style={{width: '1000px', height:'300px'}}>
                <GraphCreator weather={props.weather}/>
            </Paper>
        </React.Fragment>
            :
            <Loading />
    )
}
