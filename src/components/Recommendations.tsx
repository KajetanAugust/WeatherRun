import React from 'react'

import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface recommendationsPropsData {
    aqi: Record<any, any>,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {
    return (
        <div className='recommendations-div'>
            {
                <p>{RunRecommendationGenerator(props.aqi.data.aqi, props.weather.current)}</p>
            }
        </div>
    )
}
