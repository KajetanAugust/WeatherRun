import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';

interface Text {
    text: string
}

export default class NotFound extends React.Component<Text, Text> {
    render() {
        return (
            <div className='not-found-div'>
                <h1 className='not-found-title'>{this.props.text}</h1>
                <Link to='/' className='not-found-back-button'>
                    <AiOutlineArrowLeft className='back-arrow'/>
                    <p className='back-text'>BACK</p>
                </Link>
            </div>
        );
    }
}
