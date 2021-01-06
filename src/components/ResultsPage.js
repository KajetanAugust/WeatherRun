import React from "react";
import AirQuality from "./AirQuality";
import queryString from "query-string";
import Weather from "./Weather";

import { openWeatherToken } from "../tokens/tokens";

export default class ResultsPage extends React.Component {
    state = {
        location:'',
        weather: null,
        pollution: null,
        loading: true
    }

    componentDidMount() {

        const searchValue = queryString.parse(this.props.location.search)

        this.setState({
            location: searchValue.search,
            weather: null,
        })


        console.log('You have searched for: ', searchValue.search)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue.search}&appid=${openWeatherToken}&units=metric`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        weather: data,
                        loading: true,
                    })

                    return fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${openWeatherToken}`)
                        .then(res => res.json())
                        .then(data => {
                            this.setState({
                                pollution: data,
                                loading: false,
                            })

                    // return fetch(`https://api.openaq.org/v1/latest&coordinates=${data.coord.lat},${data.coord.lon}`)
                    //     .then(res => res.json())
                    //     .then(data => console.log(data))
                })
                .catch(err => console.log('There was an error: ', err))
    })
    }

    render() {
        const { loading, weather, pollution } = this.state
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                            <div>
                                <AirQuality pollution={pollution} city={weather.name} country={weather.sys.country} />
                                <Weather weather={weather} />
                            </div>

                        : <p>Loading...</p>
                }
            </React.Fragment>
        );
    }
    }
