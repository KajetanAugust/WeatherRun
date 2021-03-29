import React, { useContext } from 'react'
import {useHistory, useLocation} from "react-router-dom";

import { ThemeContext } from "../contexts";

import ThemeSwitch from "./ThemeSwitch";
import GoBackButton from "./GoBackButton";
import MobileMenu from "./MobileMenu";
import InfoButton from "./InfoButton";
import {Button} from "@material-ui/core";


interface NavProps {
    location: string
}

export default function Nav (props: NavProps) {

    let history = useHistory()
    let location = useLocation()
    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <div className={`nav ${theme}`}>
            <GoBackButton location={props.location} />
            <MobileMenu />
            {
                location.pathname !== '/info' &&
                    <div>
                        <Button
                            variant={theme === 'light' ? 'outlined' : "contained"}
                            onClick={() => history.push(`/results?search=${props.location}`)}
                            style={{marginRight: '15px'}}
                        >
                            Main Screen
                        </Button>
                        <Button
                            variant={theme === 'light' ? 'outlined' : "contained"}
                            onClick={() => history.push('/day-view')}
                        >
                            Day Details
                        </Button>
                    </div>
            }
            <div>
                <InfoButton />
                <ThemeSwitch theme={theme} setTheme={setTheme}/>
                <h2 className='nav-title'>WeatherRun</h2>
            </div>
        </div>
    )
}
