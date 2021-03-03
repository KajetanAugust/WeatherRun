import React, {useContext} from "react";
import {Paper} from "@material-ui/core"

import {ThemeContext} from "../contexts";

import CurrentWeatherTile from "./CurrentWeatherTile";
import CurrentAirQualityTile from "./CurrentAirQualityTile";

interface CurrentTilesCreatorProps {
    type: String,
    data: Record<any, any>
}

export default function CurrentTilesCreator (props: CurrentTilesCreatorProps) {

    const { theme } = useContext(ThemeContext);
    return (
        <React.Fragment>
                    <Paper
                        elevation={2}
                        className={`${props.type}-div ${theme}`}
                        style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)', color: 'rgb(255, 255, 255)'} : {backgroundColor: "white"}}
                        variant={theme === 'dark' ? 'outlined' : 'elevation'}
                    >
                        {
                            props.type === 'aqi'
                                ?
                                    <CurrentAirQualityTile aqi={props.data}/>
                                :
                                    <CurrentWeatherTile weather={props.data} />
                        }
                    </Paper>
        </React.Fragment>
    )
}
