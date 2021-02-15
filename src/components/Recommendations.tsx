import React, {useContext, useState} from 'react'

import { Paper } from "@material-ui/core";

import { RunRecommendationGenerator } from '../utils/runRecommendationGenerator'
import {ThemeContext} from "../contexts";

import RecommedationCreator from "./RecommendationElementCreator";


interface recommendationsPropsData {
    aqi: Record<any, any>,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {

    const [recommendations, setRecommendations ] = useState(RunRecommendationGenerator(props.aqi.data.aqi, props.weather.current))
    const { theme } = useContext(ThemeContext);
    console.log(recommendations)
    return (
        <Paper
            elevation={2}
            className={`recommendations-div ${theme}`}
            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            variant={theme === 'dark' ? 'outlined' : 'elevation'}
        >
            <div
                className={`recommendations-text ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
                >
                <p className='recommendations-title'>Recommendations</p>

                {
                    recommendations.length > 0 && recommendations.map((tip,index) => <RecommedationCreator tip={tip} key={`${index} ${tip.type}`}/>)
                }
            </div>
        </Paper>
    )
}
