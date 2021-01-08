import React from 'react'
import { Link } from "react-router-dom";

export default class Search extends React.Component {
    state = {
        city: ''
    }

    handleInput = (e) => {
        const value = e.target.value
        this.setState({
            city: value
        })
    }

    handleKeyPress = (e) => {
        if(e.keyCode === 13 && this.state.city !== '') {
            this.props.history.push(`/results?search=${this.state.city}`)
        }
    }

    render() {
        return (
            <div className='search-form' onKeyDown={(e) => this.handleKeyPress(e)}>
                <input
                    type='text'
                    placeholder='Enter city name'
                    value={this.state.city}
                    onChange={(e) => this.handleInput(e)}
                    autoFocus
                />
                <Link to={`/results?search=${this.state.city}`}>
                    <button>Search</button>
                </Link>
            </div>
        )
    }
}
