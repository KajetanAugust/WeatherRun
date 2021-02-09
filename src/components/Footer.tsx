import React, {useContext} from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Tooltip } from "@material-ui/core";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ThemeContext } from "../contexts";

export default function Footer () {
    let history = useHistory()
    let location = useLocation()
    const { theme } = useContext(ThemeContext);

    return (
        location.pathname !== '/info'
            ?
            <React.Fragment>
                <div className={`footer ${theme}`}>
                    <Tooltip title="Show info" placement="left" arrow>
                        <button
                            onClick={() => history.push('/info')}

                        >
                            <AiOutlineInfoCircle className={`info-button ${theme}`} />
                        </button>
                    </Tooltip>

                </div>
            </React.Fragment>
            :
                null
    )
}
