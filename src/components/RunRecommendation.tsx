import React from 'react'
import {RunRecommendationGenerator} from '../utils/runRecommendationGenerator'

interface PropsData {
    aqi: number,
    weather: Record<any, any>
}

export default function RunRecommendation (props: PropsData) {
    return (
        <React.Fragment>
            <h1 className='running-tips-title'>Running tips</h1>
            <div className='recommendations-div'>

                <div className='conditions-desc'>
                    {
                        <p>{RunRecommendationGenerator(props.aqi, props.weather)}</p>
                    }
                </div>
                <div className='clothing-desc'>
                    <p>clothing description</p>
                </div>

            </div>
        </React.Fragment>
    )
}
