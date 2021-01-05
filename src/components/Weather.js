import React from 'react'

import { accuWeatherToken } from "../tokens/tokens";

export default class Weather extends React.Component {
    state = {
        cityData: null,
        cityWeather: null,
    }

    componentDidMount() {
        fetch(`https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuWeatherToken}&q=${this.props.location}`)
            .then(res => res.json())
            .then(data => {
                    this.setState({cityData: data[0]})
                    return fetch(`https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${this.state.cityData.Key}?apikey=${accuWeatherToken}`)
            })
            .then(res => res.json())
            .then(data => this.setState({cityWeather: data}))
    }

    render() {
        return (
            <div>weather</div>
        )
    }
}
