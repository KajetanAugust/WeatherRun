import React, {useContext, useState} from 'react'

import { Paper } from "@material-ui/core";
import { FaRunning } from "react-icons/fa";

import { RunRecommendationGenerator } from '../../utils/runRecommendationGenerator'
import {ThemeContext} from "../../contexts";
import RecommendationElementCreator from "./RecommendationElementCreator";

interface recommendationsPropsData {
    aqi: Record<any, any>,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [recommendations, setRecommendations ] = useState(RunRecommendationGenerator(props.aqi.data.aqi, props.weather.current))
    const { theme } = useContext(ThemeContext);
    return (
        <Paper
            elevation={2}
            className={`recommendations-div ${theme}`}
            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            variant={theme === 'dark' ? 'outlined' : 'elevation'}
        >
            <FaRunning
                className={`recommendations-runner ${theme}`}
                style={{
                    height: '80%',
                    width: '50%',
                    marginLeft: '15px',
                    backgroundColor: 'transparent',
                }}
            />
            {
                recommendations.length > 0 && recommendations.map((tip,index) => <RecommendationElementCreator tip={tip} key={`${index} ${tip.type}`}/>)
            }
        </Paper>
    )
}
