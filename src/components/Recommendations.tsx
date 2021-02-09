import React, { useState } from 'react'

import { IoIosBody } from "react-icons/io";

import { RunRecommendationGenerator } from '../utils/runRecommendationGenerator'

interface recommendationsPropsData {
    aqi: Record<any, any>,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {

    const [recommendations, setRecommendations ] = useState(RunRecommendationGenerator(props.aqi.data.aqi, props.weather.current))

    return (
        <div className='recommendations-div'>
            <IoIosBody className='recommendations-icon'/>
            <div className='recommendations-text'>
                <p className='recommendations-title'>Recommendations</p>
                <div>
                    <p><b>AirQuality:</b> {recommendations.aqi}</p>
                </div>
                <div>
                    <p><b>Head:</b> {recommendations.clothes.head}</p>
                </div>
                <div>
                    <p><b>Body:</b> {recommendations.clothes.body}</p>
                </div>
                <div>
                    <p><b>Legs:</b> {recommendations.clothes.legs}</p>
                </div>
                <div>
                    <p><b>Shoes:</b> {recommendations.clothes.shoes}</p>
                </div>
            </div>
        </div>
    )
}
