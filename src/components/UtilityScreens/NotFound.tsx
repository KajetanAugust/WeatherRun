import React from 'react'

import GoBackButton from "../Nav/GoBackButton";
import Nav from "../Nav/Nav";

interface NotFoundProps {
    text: string
}

export default function NotFound (props: NotFoundProps) {
    return (
        <div className='not-found-div'>
            <Nav location='' />
            <h1 className='not-found-title'>{props.text}</h1>
            <GoBackButton location=''/>
        </div>
    );
}
