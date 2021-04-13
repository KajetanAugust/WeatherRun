import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { geolocated } from "react-geolocated";
import { Button, Tooltip } from "@material-ui/core";

import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ThemeContext } from "../../contexts";

import { fetchLocationInfo } from "../../utils/fetchFunctions";


function GeolocationButton (props: any) {

    let history = useHistory()
    const { theme } = useContext(ThemeContext);

    return (
        <React.Fragment>
            {
                props.coords
                    ?
                        <Tooltip title="Get my location" placement="right" arrow>
                            <span>
                                <Button
                                    onClick={ async (e) => {
                                        e.preventDefault()
                                        let cityName =  await fetchLocationInfo(props.coords.longitude, props.coords.latitude)
                                        history.push(`/results?search=${cityName.features[0].text}`)
                                    }}
                                    disabled={!props.coords}
                                    variant="outlined"
                                    style={theme === "dark" ? {color: 'white', borderColor: 'white'} : {}}
                                    className='location-button'
                                >
                                    <FaLocationArrow />
                                </Button>
                            </span>
                        </Tooltip>
                    :
                        <Tooltip title="Starting location services, please wait." placement="right" arrow>
                            <span>
                                <Button
                                    disabled
                                    variant="outlined"
                                    style={theme === "dark" ? {color: 'white', borderColor: 'white'} : {}}
                                >
                                    <AiOutlineLoading3Quarters className='loading-indicator' style={{width: 'auto', height: '20px', margin: 0}} />
                                </Button>
                            </span>
                        </Tooltip>
            }
        </React.Fragment>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeolocationButton);
