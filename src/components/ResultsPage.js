import React from "react";
import AirQuality from "./AirQuality";
import queryString from "query-string";
import Weather from "./Weather";
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";


import { openWeatherToken, aqiToken } from "../tokens/tokens";

export default class ResultsPage extends React.Component {
    state = {
        location:'',
        weather: null,
        pollution: null,
        loading: true
    }

    componentDidMount() {

        const searchValue = queryString.parse(this.props.location.search)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue.search}&appid=${openWeatherToken}&units=metric`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    weather: data,
                    loading: true,
                })
                fetch(`https://api.waqi.info/feed/geo:${data.coord.lat};${data.coord.lon}/?token=${aqiToken}&origin=*`)
                    .then(res => res.json())
                    .then(data => this.setState({
                        pollution: data.data,
                        loading: false
                    }))

            })
            .catch(err => console.log('There was an error: ', err))
    }

    render() {
        const { loading, weather, pollution } = this.state
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                            <React.Fragment>
                                <Link to='/' className='back-button'>
                                    <AiOutlineArrowLeft className='back-arrow'/>
                                    <p className='back-text'>BACK</p>
                                </Link>
                                <h1 className='city-name'>{weather.name}, {weather.sys.country}</h1>
                                <div className='results-container'>
                                    <AirQuality pollution={pollution} />
                                    <Weather weather={weather} />
                                </div>
                            </React.Fragment>
                        :
                            <p>Loading...</p>
                }
            </React.Fragment>
        );
    }
    }
