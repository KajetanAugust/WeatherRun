import React, { useContext } from 'react'

import { ThemeContext } from "../contexts";

import ThemeSwitch from "./ThemeSwitch";
import GoBackButton from "./GoBackButton";
import MobileMenu from "./MobileMenu";
import InfoButton from "./InfoButton";

interface NavProps {
    location: string
}

export default function Nav (props: NavProps) {
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div className={`nav ${theme}`}>
            <GoBackButton location={props.location} />
            <MobileMenu />
            <div>
                <InfoButton />
                <ThemeSwitch theme={theme} setTheme={setTheme}/>
                <h2 className='nav-title'>WeatherRun</h2>
            </div>
        </div>
    )
}
