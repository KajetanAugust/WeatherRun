import React from 'react'

import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface recommendationsPropsData {
    aqi: number,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {
    return (
        <div className='recommendations-div'>
            {
                <p>{RunRecommendationGenerator(props.aqi, props.weather)}</p>
            }
        </div>
    )
}
