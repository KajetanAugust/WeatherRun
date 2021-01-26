import React, {useState} from 'react'

import { aqiFaceChecker } from '../utils/aqiFaceChecker';

interface PropsData {
    pollution: Record<any, any>
}

export default function AirQuality (props:PropsData){

    const [pollutionData, setPollutionData] = useState(props.pollution)

        return (
            <React.Fragment>
                {
                    pollutionData !== {}
                        ?
                        <div className='aqi-div'>
                            <p className='aqi-title'>Air Quality</p>
                            {pollutionData.aqi && aqiFaceChecker(pollutionData.aqi)}
                            <p className='aqi-details'>AQI: {typeof pollutionData.aqi === 'number' ? pollutionData.aqi : 'N/A'}</p>
                            <p className='aqi-details'>PM10: {pollutionData.iaqi.pm10 ? pollutionData.iaqi.pm10.v : 'N/A '}&micro;g/m&sup3;</p>
                            <p className='aqi-details'>PM2.5: {pollutionData.iaqi.pm25 ? pollutionData.iaqi.pm25.v : 'N/A '}&micro;g/m&sup3;</p>
                        </div>
                        :
                        <p className='aqi-title'>Loading...</p>
                }
            </React.Fragment>
        )
}
