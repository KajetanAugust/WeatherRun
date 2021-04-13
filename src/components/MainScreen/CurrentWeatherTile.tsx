import React, {useContext} from "react";

import {WiHumidity, WiStrongWind, WiSunrise, WiSunset, WiThermometer, WiThermometerExterior} from "react-icons/all";

import {ThemeContext} from "../../contexts";

import {formatWeather} from "../../utils/formatWeather";
import {weatherIconChecker} from "../../utils/weatherIconChecker";
import {getFormattedTime} from "../../utils/dateFormatters";


interface CurrentWeatherTileProps {
    weather: Record<any, any>
}

export default function CurrentWeatherTile (props: CurrentWeatherTileProps) {

    const { theme } = useContext(ThemeContext);
    console.log(props.weather)
    return (
        <React.Fragment>
            <p className='weather-title'>{formatWeather(props.weather.current.weather[0].description)}</p>
            {weatherIconChecker(props.weather.current.weather[0].icon)}
            <div
                className={`weather-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <span>
                    <WiThermometer className='small-weather-icon' />
                    <p className='weather-details'>Temperature: {Math.round(props.weather.current.temp)}&deg;C</p>
                </span>
                <span>
                    <WiThermometerExterior className='small-weather-icon' />
                    <p className='weather-details'>Feels Like: {Math.round(props.weather.current.feels_like)}&deg;C</p>
                </span>
            </div>
            <div
                className={`weather-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <span>
                    <WiStrongWind className='small-weather-icon' />
                    <p className='weather-details'>Wind: {Math.ceil((props.weather.current.wind_speed * 3.6))} km/h</p>
                </span>
                <span>
                    <WiHumidity className='small-weather-icon' />
                    <p className='weather-details'>Humidity: {props.weather.current.humidity}%</p>
                </span>
            </div>
            <div
                className={`weather-sub-div ${theme}`}
                style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            >
                <span>
                    <WiSunrise className='small-weather-icon' />
                    <p className='weather-details'>Sunrise: {getFormattedTime(props.weather.current.sunrise)}</p>
                </span>
                <span>
                    <WiSunset className='small-weather-icon' />
                    <p className='weather-details'>Sunset: {getFormattedTime(props.weather.current.sunset)}</p>
                </span>
            </div>
        </React.Fragment>
    )
}
