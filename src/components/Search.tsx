import React, {useContext, useState} from 'react'
import { Button, TextField, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

import { FaRunning } from "react-icons/fa";
import { WiDayRainWind } from 'react-icons/wi';

import { ThemeContext } from "../contexts";

import ThemeSwitch from "./ThemeSwitch";
import LastSearches from "./LastSearches";
import GeolocationButton from "./GeolocationButton";
import InfoButton from "./InfoButton";

function Search (props: any) {

    const [ city, setCity ] = useState('')

    const { theme, setTheme } = useContext(ThemeContext);

        return (
            <div className={`search-page ${theme}`}>
                <div className={`theme-switch ${theme}`}>
                    <InfoButton />
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
                        autoFocus
                        className={`search-text-field-${theme}`}
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
                            <Link
                                to={`/results?search=${city.toLowerCase()}`}
                                style={{textDecoration: 'none'}}
                                className='search-link'
                            >
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
                    <GeolocationButton />
                </div>
                <LastSearches />
            </div>
        )
}

export default Search;
