import React from 'react'
import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface PropsData {
    aqi: number,
    weather: Record<any, any>
}

export default function WeatherRecommendation (props: PropsData) {
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
