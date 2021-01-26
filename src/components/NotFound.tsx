import React from 'react'
import {Link} from 'react-router-dom';

import {AiOutlineArrowLeft} from 'react-icons/ai';

interface NotFoundProps {
    text: string
}

export default function NotFound (props: NotFoundProps) {
    return (
        <div className='not-found-div'>
            <h1 className='not-found-title'>{props.text}</h1>
            <Link to='/' className='not-found-back-button'>
                <AiOutlineArrowLeft className='back-arrow'/>
                <p className='back-text'>BACK</p>
            </Link>
        </div>
    );
}
