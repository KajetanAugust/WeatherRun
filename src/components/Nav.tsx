import React, { useContext } from 'react'
import { useHistory} from 'react-router-dom';

import ThemeSwitch from "./ThemeSwitch";

import { Tooltip, Switch } from "@material-ui/core";
import { WiDaySunny, WiMoonAltWaningCrescent5 } from "react-icons/wi";
import {RiArrowLeftSLine} from 'react-icons/ri';
import { ThemeContext } from "../contexts";

interface NavProps {
    location: string
}

export default function Nav (props: NavProps) {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div className={`nav ${theme}`}>
            <div>
                <Tooltip title="Go back" placement="bottom" arrow>
                  <span>
                    <RiArrowLeftSLine className='back-arrow' onClick={useHistory().goBack}/>
                  </span>
                </Tooltip>
                <h1>{props.location !== '' ? props.location : null}</h1>
            </div>

            <div>
                <ThemeSwitch theme={theme} setTheme={setTheme}/>
                <h2 className='nav-title'>WeatherRun</h2>
            </div>

        </div>
    )
}
