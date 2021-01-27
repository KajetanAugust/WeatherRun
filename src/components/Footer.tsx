import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function Footer () {
    let history = useHistory()
    let location = useLocation()
    console.log(location.pathname)

    return (
        location.pathname !== '/info'
            ?
            <React.Fragment>
                <div className='footer'>
                    <button
                        onClick={() => history.push('/info')}
                    >
                        <AiOutlineInfoCircle className='info-button' />
                    </button>
                </div>
            </React.Fragment>

            :
                null
    )
}
