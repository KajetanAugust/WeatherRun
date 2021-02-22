import React, {useContext, useState} from 'react'
import { Button, TextField, Tooltip } from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import { geolocated } from "react-geolocated";

import { fetchLocationInfo } from "../utils/fetchFunctions";

import { FaRunning, FaLocationArrow } from "react-icons/fa";
import { WiDayRainWind } from 'react-icons/wi';

import { ThemeContext } from "../contexts";

import ThemeSwitch from "./ThemeSwitch";
import LastSearches from "./LastSearches";


function Search (props: any) {

    const [city, setCity] = useState('')
    const {theme, setTheme} = useContext(ThemeContext);
    let history = useHistory()

        return (
            <div className={`search-page ${theme}`}>
                <div className={`theme-switch ${theme}`}>
                    <ThemeSwitch theme={theme} setTheme={setTheme} />
                </div>
                <div className={`logo-wrapper ${theme}`}>
                    <h1 className='app-title'>WeatherRun</h1>
                    <div className='app-logo'>
                        <FaRunning className='app-logo-runner'/>
                        <WiDayRainWind className='app-logo-cloud'/>
                    </div>
                </div>
                <div
                    className={`search-form ${theme}`}
                    onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.keyCode === 13 && city !== '' && props.history.push(`/results?search=${city}`)}
                >
                    <TextField
                        size='small'
                        className={`search-text-field-${theme}`}
                        // style={theme === "dark" ? {color: 'white', borderColor: 'white', width: '25%'} : {width: '25%'}}
                        id="outlined-basic"
                        autoComplete="off"
                        label="City name"
                        variant="outlined"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    {
                        city !== ''
                            ?
                            <Link to={`/results?search=${city}`} style={{textDecoration: 'none'}} >
                                <Button
                                    variant="contained"
                                    disableElevation
                                >SEARCH</Button>
                            </Link>
                            :
                            <Tooltip title="Please enter city name" placement="right" arrow>
                                <span>
                                    <Button
                                        variant="outlined"
                                        disabled
                                        style={theme === "dark" ? {color: 'white', borderColor: 'white'} : {}}
                                    >
                                    SEARCH
                                </Button>
                                </span>
                            </Tooltip>
                    }
                    <Tooltip title="Get my location" placement="right" arrow>
                                <span>
                                    <Button
                                        onClick={ async (e) => {
                                            e.preventDefault()
                                            let cityName =  await fetchLocationInfo(props.coords.longitude, props.coords.latitude)
                                            history.push(`/results?search=${cityName.features[0].text}`)
                                        }}
                                        disabled={!props.coords}
                                        variant="outlined"
                                        style={theme === "dark" ? {color: 'white', borderColor: 'white'} : {}}
                                    >
                                    <FaLocationArrow />
                                </Button>
                                </span>
                    </Tooltip>
                </div>
                <LastSearches />
            </div>
        )
}


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Search);
