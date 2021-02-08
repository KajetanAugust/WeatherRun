import React, {useState} from 'react'

import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface recommendationsPropsData {
    aqi: Record<any, any>,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {

    const [recommendations, setRecommendations ] = useState(RunRecommendationGenerator(props.aqi.data.aqi, props.weather.current))

    return (
        <div className='recommendations-div'>
            <div>
                <h3>AirQuality: </h3><p> {recommendations.aqi}</p>
            </div>
            <div>
                <h3>Head: </h3><p> {recommendations.clothes.head}</p>
            </div>
            <div>
                <h3>Body: </h3><p> {recommendations.clothes.body}</p>
            </div>
            <div>
                <h3>Legs: </h3><p> {recommendations.clothes.legs}</p>
            </div>
            <div>
                <h3>Shoes: </h3><p> {recommendations.clothes.shoes}</p>
            </div>
        </div>
    )
}
