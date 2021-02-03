import {Tooltip} from "@material-ui/core";
import {RiArrowLeftSLine} from "react-icons/ri";
import {useHistory} from "react-router-dom";
import React, {useContext} from "react";
import {ThemeContext} from "../contexts";


export default function GoBackButton (props:any) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`back-button ${theme}`}>
            <Tooltip title="Go back" placement="bottom" arrow>
                  <span>
                    <RiArrowLeftSLine className='back-arrow' onClick={useHistory().goBack}/>
                  </span>
            </Tooltip>
            <h1 className='back-text'>{props.location !== '' ? props.location : 'Back'}</h1>
        </div>
    )
}
