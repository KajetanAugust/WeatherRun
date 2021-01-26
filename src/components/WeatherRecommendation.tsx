import React from 'react'

import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface WeatherRecommendationPropsData {
    aqi: number,
    weather: Record<any, any>
}

export default function WeatherRecommendation (props: WeatherRecommendationPropsData) {
    return (
        <React.Fragment>
                <div className='conditions-desc'>
                    {
                        <p>{RunRecommendationGenerator(props.aqi, props.weather)}</p>
                    }
                </div>

        </React.Fragment>
    )
}
