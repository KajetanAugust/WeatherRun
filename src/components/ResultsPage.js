import React from "react";
import AirQuality from "./AirQuality";
import queryString from "query-string";
import Weather from "./Weather";
import Loading from "./Loading";

import { Link } from 'react-router-dom'

import { AiOutlineArrowLeft } from "react-icons/ai";

import { openWeatherToken, aqiToken } from "../tokens/tokens";
import NotFound from './NotFound';
import RunRecommendation from './RunRecommendation';

export default class ResultsPage extends React.Component {
    state = {
        location: '',
        weather: null,
        pollution: null,
        loading: true,
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
            .catch(err => {
                this.setState({
                    err: err.status,
                    loading: false
                })
                console.log('There was an error: ', err.status)

            })
    }

    render() {
        const {loading, weather, pollution} = this.state
        return (
            <React.Fragment>
                {
                    !loading
                        ?
                        <div className='results-page'>
                            <Link to='/' className='back-button'>
                                <AiOutlineArrowLeft className='back-arrow'/>
                                <p className='back-text'>BACK</p>
                            </Link>
                            {
                                weather.cod !== '404'
                                    ?
                                    <React.Fragment>
                                        <h1 className='city-name'>{weather.name}, {weather.sys.country}</h1>
                                        <div className='results-container'>
                                            <AirQuality pollution={pollution}/>
                                            <Weather weather={weather}/>
                                        </div>
                                    </React.Fragment>
                                    :
                                    <NotFound
                                        text={weather.cod === '404' ? 'City not found, please try again.' : 'There was an error, please try again.'}/>
                            }
                            <RunRecommendation aqi={pollution.aqi} weather={weather}/>
                        </div>
                        :
                        <Loading/>
                }
            </React.Fragment>
        );
    }
}
