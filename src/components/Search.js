import React from 'react'
import { Link } from "react-router-dom";

import { FaRunning } from "react-icons/fa";
import { WiDayRainWind } from 'react-icons/wi';

export default class Search extends React.Component {
    state = {
        city: '',
        warning: false
    }

    componentWillUnmount() {
        this.setState({
            warning: false
        })
    }

    handleInput = (e) => {
        const value = e.target.value
        this.setState({
            city: value,
            warning: false
        })
    }

    handleKeyPress = (e) => {
        if (e.keyCode === 13 && this.state.city !== '') {
            this.props.history.push(`/results?search=${this.state.city}`)
        }
    }

    render() {
        return (
            <div className='search-page'>
                <div className='app-logo'>
                    <FaRunning className='app-logo-runner'/>
                    <WiDayRainWind className='app-logo-cloud'/>
                </div>
                <h1 className='app-title'>WeatherRun</h1>
                <div className='search-form' onKeyDown={(e) => this.handleKeyPress(e)}>

                    <input
                        type='text'
                        placeholder='Enter city name'
                        value={this.state.city}
                        onChange={(e) => this.handleInput(e)}
                        autoFocus
                    />
                    {
                        this.state.city !== ''
                            ?
                            <Link to={`/results?search=${this.state.city}`}>
                                <button>Search</button>
                            </Link>
                            :
                            <button
                                style={{'color': 'rgba(115, 130, 144, 0.8)', 'backgroundColor': 'white'}}
                                onClick={() => this.setState({
                                    warning: true
                                })}
                            >Search</button>
                    }
                </div>
                <p
                    style={!this.state.warning ? {'display': 'none'} : {
                        'display': 'inline',
                        color: '#DB5461',
                        'text-align': 'center',
                        'font-weight': 400,
                        'width': '100%'
                    }}
                >
                    Search field can't be empty. Please enter the city name.
                </p>
            </div>
        )
    }
}
