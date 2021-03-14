import React from 'react'

import GoBackButton from "./GoBackButton";
import Nav from "./Nav";

interface NotFoundProps {
    text: string
}

export default function NotFound (props: NotFoundProps) {
    return (
        <div className='not-found-div'>
            <Nav location='' openSetter={null}/>
            <h1 className='not-found-title'>{props.text}</h1>
            <GoBackButton location=''/>
        </div>
    );
}
