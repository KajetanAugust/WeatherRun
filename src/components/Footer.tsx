import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Tooltip } from "@material-ui/core";
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Footer () {
    let history = useHistory()
    let location = useLocation()

    return (
        location.pathname !== '/info'
            ?
            <React.Fragment>
                <div className='footer'>
                    <Tooltip title="Show info" placement="left" arrow>
                        <button
                            onClick={() => history.push('/info')}
                        >
                            <AiOutlineInfoCircle className='info-button' />
                        </button>
                    </Tooltip>

                </div>
            </React.Fragment>
            :
                null
    )
}
