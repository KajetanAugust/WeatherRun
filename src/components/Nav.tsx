import React, { useContext } from 'react'

import { ThemeContext } from "../contexts";

import ThemeSwitch from "./ThemeSwitch";
import GoBackButton from "./GoBackButton";
import MobileMenu from "./MobileMenu";
import InfoButton from "./InfoButton";
import {Button} from "@material-ui/core";

interface NavProps {
    location: string,
    openSetter: any
}

export default function Nav (props: NavProps) {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div className={`nav ${theme}`}>
            <GoBackButton location={props.location} />
            <MobileMenu />
            {
                props.openSetter !== null &&
                <Button
                    variant={theme === 'light' ? 'outlined' : "contained"}
                    onClick={() => props.openSetter(true)}
                >
                    Show Current Day
                </Button>
            }

            <div>
                <InfoButton />
                <ThemeSwitch theme={theme} setTheme={setTheme}/>
                <h2 className='nav-title'>WeatherRun</h2>
            </div>
        </div>
    )
}
