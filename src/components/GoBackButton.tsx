import {Tooltip} from "@material-ui/core";
import {RiArrowLeftSLine} from "react-icons/ri";
import {useHistory, useLocation} from "react-router-dom";
import React, {useContext} from "react";
import {ThemeContext} from "../contexts";


export default function GoBackButton (props:any) {

    let location = useLocation()
    let history = useHistory()
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`back-button ${theme}`}>
            <Tooltip title="Go back" placement="bottom" arrow>
                  <span>
                      {
                          location.pathname === '/info'
                            ? <RiArrowLeftSLine className='back-arrow' onClick={history.goBack}/>
                            : <RiArrowLeftSLine className='back-arrow' onClick={() => history.push('/')}/>
                      }

                  </span>
            </Tooltip>
            <h1 className='back-text'>{props.location !== '' ? props.location : 'Back'}</h1>
        </div>
    )
}
