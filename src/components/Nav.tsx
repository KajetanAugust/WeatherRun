import React from 'react'
import { useHistory} from 'react-router-dom';

import { Tooltip } from "@material-ui/core";
import {FiArrowLeftCircle} from 'react-icons/fi';

interface NavProps {
    location: string
}

export default function Nav (props: NavProps) {
    return(
        <div className='nav'>
            <Tooltip title="Go back" placement="right" arrow>
              <span>
                <FiArrowLeftCircle className='back-arrow' onClick={useHistory().goBack}/>
              </span>
            </Tooltip>
            <h1>{props.location !== '' ? props.location : null}</h1>
            <h2 className='nav-title'>WeatherRun</h2>
        </div>
    )
}
