import React from 'react'
import {Link} from 'react-router-dom';

import {FiArrowLeftCircle} from 'react-icons/fi';

interface NavProps {
    location: string
}

export default function Nav (props: NavProps) {
    return(
        <div className='nav'>
            <Link to='/' className='back-button'>
                <FiArrowLeftCircle className='back-arrow'/>
            </Link>
            <h1>{props.location !== '' ? props.location : null}</h1>
            <h2 className='nav-title'>WeatherRun</h2>
        </div>
    )
}
