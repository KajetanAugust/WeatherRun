import React from 'react'

import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface WeatherRecommendationPropsData {
    aqi: number,
    weather: Record<any, any>
}

export default function WeatherRecommendation (props: WeatherRecommendationPropsData) {
    return (
        <div className='conditions-div'>
            {
                <p>{RunRecommendationGenerator(props.aqi, props.weather)}</p>
            }
        </div>
    )
}
