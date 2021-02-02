import React from "react";
import {WiDaySunny, WiMoonAltWaningCrescent5} from "react-icons/wi";
import {Switch} from "@material-ui/core";

export default function ThemeSwitch (props: any) {
    return (
       <React.Fragment>
           <WiDaySunny className={`theme-switch-icon ${props.theme}`} />
           <Switch
               checked={props.theme === 'dark'}
               onChange={() => {
                   props.setTheme(props.theme === 'light' ? 'dark' : 'light')
                   localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light'
               }}
               color="default"
               inputProps={{ 'aria-label': 'checkbox with default color' }}
           />
           <WiMoonAltWaningCrescent5 className={`theme-switch-icon ${props.theme}`} />
       </React.Fragment>
    )
}
