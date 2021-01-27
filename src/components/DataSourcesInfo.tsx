import React from "react";
import { Link } from 'react-router-dom'

import aqicnLogo from '../logos/aqilogo.png'
import openWeatherLogo from '../logos/openweatherlogo-dark.png'

import Nav from "./Nav";


export default function DataSourcesInfo () {
    return (
        <React.Fragment>
            <Nav location={''} />
            <div className='data-sources-info'>
                <div>
                    <h3>Weather information were provided by OpenWeatherMap</h3>
                    <a href='https://openweathermap.org/' target='_blank' rel='noreferrer'>
                        <img src={openWeatherLogo} alt='OpenWeather Logo'/>
                    </a>
                </div>
                <div>
                    <h3>Air Quality information were provided by AQICN</h3>
                    <a href='https://aqicn.org/' target='_blank' rel='noreferrer'>
                        <img src={aqicnLogo} alt='AQICN Logo'/>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
