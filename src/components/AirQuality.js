import React from 'react'

const styles = {
    good: {
        color: '#06D6A0',
    },
    moderate: {
        color: '#FFD166',
    },
    sensitive: {
        color: '#ED6A5A',
    },
    unhealthy: {
        color: '#E65F5C',
    },
    veryUnhealthy: {
        color: '#231651',
    },
    hazardous: {
        color: '#580C1F',
    },
    notFound: {
        color: 'rgba(255,255,255)',
    }
}

export default class AirQuality extends React.Component {
    state = {
        pollutionData: null,
        loading: true,
    }

    componentDidMount() {
        const { pollution } = this.props
        this.setState({
            pollutionData: pollution,
            loading: false
        })
    }


    pollutionLevelChecker = (aqiData) => {
        if(aqiData <= 50) {
            return styles.good
        } else if (aqiData >= 51 && aqiData <= 100) {
            return styles.moderate
        } else if (aqiData >=101 && aqiData <= 150) {
            return styles.sensitive
        } else if (aqiData >=151 && aqiData <= 200) {
            return styles.unhealthy
        } else if (aqiData >=201 && aqiData <= 300) {
            return styles.veryUnhealthy
        } else if (aqiData >=300) {
            return styles.hazardous
        } else if (typeof aqiData !== 'number') {
            return styles.notFound
        }
    }


    render() {
        const {pollutionData, loading} = this.state
        console.log(pollutionData)
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                            <div className='aqi-div'>
                                <p className='aqi-title'>AQI</p>
                                <p className='aqi-num' style={this.pollutionLevelChecker(pollutionData.aqi)}>{typeof pollutionData.aqi === 'number' ? pollutionData.aqi : 'No Data'}</p>
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
