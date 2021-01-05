import React from 'react'

import { formatCityName } from "../utils/formatCityName";
import { aqiToken } from "../tokens/tokens";

import logo from '../logos/aqilogo.png'

const styles = {
    good: {
        backgroundColor: 'rgb(18, 138, 83)',
        color: 'white'
    },
    moderate: {
        backgroundColor: 'rgb(254, 217, 40)',
        color: 'black'
    },
    sensitive: {
        backgroundColor: 'rgb(253, 134, 40)',
        color: 'black'
    },
    unhealthy: {
        backgroundColor: 'rgb(190, 0, 39)',
        color: 'white'
    },
    veryUnhealthy: {
        backgroundColor: 'rgb(82, 0, 135)',
        color: 'white'
    },
    hazardous: {
        backgroundColor: 'rgb(105, 0, 27)',
        color: 'white'
    },
    notFound: {
        backgroundColor: 'rgb(193, 193, 193)',
        color: 'black'
    }
}

export default class AirQuality extends React.Component {

    state = {
        aqi: {},
        location: '',
        loading: true
    }

    componentDidMount() {
        const {location} = this.props
        this.setState({location: location})
        fetch(`https://cors-anywhere.herokuapp.com/https://api.waqi.info/feed/${location}/?token=${aqiToken}`)
            .then(res => res.json())
            .then((data) => this.setState({aqi: data.data, loading: false}))
            .catch(err => console.log('There was en error: ', err))
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
        const {aqi, location, loading} = this.state

        return (
            <React.Fragment>
                {
                    !loading
                        ?
                            <div style={this.pollutionLevelChecker(aqi.aqi)} className='aqi-div'>
                                <a href={`https://aqicn.org/search/#q=${location}`} target='_blank' rel='noreferrer'>
                                    <img src={logo} className='aqi-logo' alt='AQICN Logo'/>
                                </a>
                                <p className='aqi-title'>AQI</p>
                                <p className='aqi-num'>{typeof aqi.aqi === 'number' ? aqi.aqi : 'No Data'}</p>
                                <p className='aqi-city'>{formatCityName(location)}</p>
                            </div>

                        :
                            <div style={this.pollutionLevelChecker(aqi.aqi)} className='aqi-div'>
                                <p className='aqi-title'>Loading...</p>
                            </div>

                }
            </React.Fragment>
        )
    }
}
