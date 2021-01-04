import React from 'react'
import { convertXML } from "simple-xml-to-json"



export default class News extends React.Component {

    // componentDidMount() {
    //     fetch('https://tvn24.pl/katowice.xml')
    //         .then(res => res.text())
    //         .then(data => console.log(data))
    // }

    render() {
        return (
            <div>{<p>https://tvn24.pl/katowice.xml</p>}</div>
        )
    }
}
