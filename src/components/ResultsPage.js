import React from "react";
import AirQuality from "./AirQuality";
import queryString from "query-string";
import Weather from "./Weather";

export default class ResultsPage extends React.Component {
    state = {
        location:''
    }

    componentDidMount() {
        const searchValue = queryString.parse(this.props.location.search)
        this.setState({
            location: searchValue.search
        })
        console.log('You have searched for: ', searchValue.search)
    }

    render() {
        const { location } = this.state
        return (
            <React.Fragment>
                {
                    location !== ''
                        ?
                            <div>
                                <AirQuality location={location} />
                                <Weather location={location} />
                            </div>

                        : <p>Loading</p>
                }



            </React.Fragment>
        );
    }

}
