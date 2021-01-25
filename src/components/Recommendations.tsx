import React from "react";

import WeatherRecommendation from "./WeatherRecommendation";
import ClothesRecomendation from "./ClothesRecomendation";

export default function Recommendations (props: any) {
    return (
        <React.Fragment>
            <h1 className='running-tips-title'>Running tips</h1>
            <div className='recommendations-div'>
                <WeatherRecommendation aqi={props.aqi} weather={props.weather}/>
                <ClothesRecomendation />
            </div>
        </React.Fragment>

    )
}
