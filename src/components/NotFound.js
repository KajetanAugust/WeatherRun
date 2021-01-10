import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className='not-found-div'>
                <h1 className='not-found-title'>Page not found</h1>
                <Link to='/' className='not-found-back-button'>
                    <AiOutlineArrowLeft className='back-arrow'/>
                    <p className='back-text'>BACK</p>
                </Link>
            </div>
        );
    }
}
