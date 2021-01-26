import React from 'react'
import {Link} from 'react-router-dom';

import {AiOutlineArrowLeft} from 'react-icons/ai';

export default function Nav () {
    return(
        <div className='nav'>
            <Link to='/' className='back-button'>
                <AiOutlineArrowLeft className='back-arrow'/>
                <p className='back-text'>BACK</p>
            </Link>
            <h2 className='nav-title'>WeatherRun</h2>
        </div>
    )
}
