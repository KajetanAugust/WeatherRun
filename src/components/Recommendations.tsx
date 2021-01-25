import React from "react";

import WeatherRecommendation from "./WeatherRecommendation";
import ClothesRecommendation from "./ClothesRecommendation";

interface RecommendationsProps {
    aqi: number,
    weather: Record<any, any>
}

export default function Recommendations (props: RecommendationsProps) {
    return (
        <React.Fragment>
            <h1 className='running-tips-title'>Running tips</h1>
            <div className='recommendations-div'>
                <WeatherRecommendation aqi={props.aqi} weather={props.weather} />
                <ClothesRecommendation weather={props.weather} />
            </div>
        </React.Fragment>

    )
}
