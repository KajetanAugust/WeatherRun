import React, {useContext} from "react";

import aqicnLogo from '../logos/aqilogo.png'
import openweatherdark from '../logos/openweatherlogo-dark.png'
import openweatherlight from '../logos/openweatherlogo-light.png'
import mapboxdark from '../logos/mapbox-dark.svg'
import mapboxlight from '../logos/mapbox-light.svg'

import {ThemeContext} from "../contexts";

import Nav from "./Nav";


export default function DataSourcesInfo () {
    const { theme } = useContext(ThemeContext);
    return (
        <React.Fragment>
            <Nav location={''}/>
            <div className='data-sources-info'>
                <div>
                    <h3>Weather information provided by OpenWeatherMap</h3>
                    <a href='https://openweathermap.org/' target='_blank' rel='noreferrer'>
                        <img src={theme === 'light' ? openweatherdark : openweatherlight} alt='OpenWeather Logo'/>
                    </a>
                </div>
                <div>
                    <h3>Air Quality information provided by AQICN</h3>
                    <a href='https://aqicn.org/' target='_blank' rel='noreferrer'>
                        <img src={aqicnLogo} alt='AQICN Logo'/>
                    </a>
                </div>
                <div>
                    <h3>Coordinates provided by Mapbox</h3>
                    <a href='https://www.mapbox.com/' target='_blank' rel='noreferrer'>
                        <img src={theme === 'light' ? mapboxdark : mapboxlight} alt='Mapbox Logo'/>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}
