import React from 'react'

import { aqiFaceChecker } from '../utils/aqiFaceChecker';

export default class AirQuality extends React.Component {
    state = {
        pollutionData: null,
        loading: true,
    }

    componentDidMount() {
        const {pollution} = this.props
        this.setState({
            pollutionData: pollution,
            loading: false
        })
    }

    render() {
        const {pollutionData, loading} = this.state
        // console.log(pollutionData)
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                        <div className='aqi-div'>
                            <p className='aqi-title'>Air Quality</p>
                            {pollutionData.aqi && aqiFaceChecker(pollutionData.aqi)}
                            <p className='aqi-details'>AQI: {typeof pollutionData.aqi === 'number' ? pollutionData.aqi : 'No Data'}</p>
                            <p className='aqi-details'>PM10: {pollutionData.iaqi.pm10 ? pollutionData.iaqi.pm10.v : 'No Data '}&micro;g/m&sup3;</p>
                            <p className='aqi-details'>PM2.5: {pollutionData.iaqi.pm25 ? pollutionData.iaqi.pm25.v : 'No Data '}&micro;g/m&sup3;</p>
                        </div>
                        :
                        <div className='aqi-div'>
                            <p className='aqi-title'>Loading...</p>
                        </div>
                }
            </React.Fragment>
        )
    }
}
