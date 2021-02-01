import React, {useState} from 'react'
import { Button, TextField, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

import { FaRunning } from "react-icons/fa";
import { WiDayRainWind } from 'react-icons/wi';

export default function Search (props: any) {

    const [city, setCity ] = useState('')

        return (
            <div className='search-page'>
                <div className='logo-wrapper'>
                    <h1 className='app-title'>WeatherRun</h1>
                    <div className='app-logo'>
                        <FaRunning className='app-logo-runner'/>
                        <WiDayRainWind className='app-logo-cloud'/>
                    </div>
                </div>
                <div
                    className='search-form'
                    onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.keyCode === 13 && city !== '' && props.history.push(`/results?search=${city}`)}
                >
                    <TextField
                        size='small'
                        style={{width: '25%'}}
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
                                <Button variant="contained" disableElevation>SEARCH</Button>
                            </Link>
                            :
                            <Tooltip title="Please enter city name" placement="right" arrow>
                                <span>
                                    <Button
                                        variant="outlined"
                                        disabled
                                    >
                                    SEARCH
                                </Button>
                                </span>
                            </Tooltip>

                    }
                </div>
            </div>
        )
}
