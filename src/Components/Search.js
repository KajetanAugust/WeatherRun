import React from 'react'

export default class Search extends React.Component {

    componentDidMount() {
        fetch('https://tvn24.pl/katowice.xml')
            .then(res => res.text())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>{<p>https://tvn24.pl/katowice.xml</p>}</div>
        )
    }
}
