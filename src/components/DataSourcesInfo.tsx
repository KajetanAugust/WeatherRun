import React, { useContext } from "react";
import { Button } from '@material-ui/core';

import aqicnLogo from '../logos/aqilogo.png'
import openweatherdark from '../logos/openweatherlogo-dark.png'
import openweatherlight from '../logos/openweatherlogo-light.png'
import mapboxdark from '../logos/mapbox-dark.svg'
import mapboxlight from '../logos/mapbox-light.svg'

import { ThemeContext } from "../contexts";

import Nav from "./Nav";

export default function DataSourcesInfo () {

    const { theme } = useContext(ThemeContext);

    return (
        <React.Fragment>
            <Nav location={''} openSetter={null} />
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
                    <h3>Map and coordinates provided by Mapbox</h3>
                    <a href='https://www.mapbox.com/' target='_blank' rel='noreferrer'>
                        <img src={theme === 'light' ? mapboxdark : mapboxlight} alt='Mapbox Logo'/>
                    </a>
                </div>
                <Button
                    className={`github-link-button ${theme}`}
                    variant="contained"
                    color="default"
                >
                    <a
                        className='github-link'
                        href='https://github.com/KajetanAugust/WeatherRun'
                        target='_blank'
                        rel="noreferrer"
                    >View project documentation page on GitHub.</a>
                </Button>
            </div>


        </React.Fragment>
    )
}
