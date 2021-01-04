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
        console.log(this.state.city)
    }

    render() {
        return (
            <div className='search-form'>
                <input
                    type='text'
                    placeholder='Enter city name'
                    value={this.state.city}
                    onChange={(e) => this.handleInput(e)}
                />
                <Link to={`/results?search=${this.state.city}`}>
                    <button>Search</button>
                </Link>
            </div>
        )
    }
}
