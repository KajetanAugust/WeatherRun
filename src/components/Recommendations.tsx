import React, {useContext, useState} from 'react'

import { Paper, Tooltip } from "@material-ui/core";
import { FaRunning } from "react-icons/fa";

import { RunRecommendationGenerator } from '../utils/runRecommendationGenerator'
import {ThemeContext} from "../contexts";

// import RecommendationElementCreator from "./RecommendationElementCreator";


interface recommendationsPropsData {
    aqi: Record<any, any>,
    weather: Record<any, any>
}

export default function Recommendations (props: recommendationsPropsData) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [recommendations, setRecommendations ] = useState(RunRecommendationGenerator(props.aqi.data.aqi, props.weather.current))
    const { theme } = useContext(ThemeContext);
    return (
        <Paper
            elevation={2}
            className={`recommendations-div ${theme}`}
            style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}
            variant={theme === 'dark' ? 'outlined' : 'elevation'}
        >
            {/*<div*/}
            {/*    className={`recommendations-text ${theme}`}*/}
            {/*    style={theme === "dark" ? {backgroundColor: 'rgb(24, 24, 24)', borderColor: 'rgb(37, 37, 37)'} : {backgroundColor: "white"}}*/}
            {/*    >*/}
            {/*    <p className='recommendations-title'>Recommendations</p>*/}

            {/*    {*/}
            {/*        recommendations.length > 0 && recommendations.map((tip,index) => <RecommendationElementCreator tip={tip} key={`${index} ${tip.type}`}/>)*/}
            {/*    }*/}
            {/*</div>*/}
            <FaRunning
                className={`recommendations-runner ${theme}`}
                style={{
                    height: '80%',
                    width: 'auto',
                    marginLeft: '5%',
                    backgroundColor: 'transparent'
                }}
            />
            <Tooltip
                title={<p>Wear light buff or headband if you like.</p>}
                placement='right'
            >
                <Paper
                    elevation={2}
                    variant='elevation'
                    style={{
                        width: '90px',
                        height: '30px',
                        textAlign: 'center',
                        paddingTop: '5px',
                        position: 'absolute',
                        top: '30px',
                        left: '320px'
                    }}
                >
                    Head
                </Paper>
            </Tooltip>

            <Tooltip
                title={'Breathable, light tee is enough, wear bright colors to protect from the sun.'}
                placement='right'
            >
                <Paper
                    elevation={2}
                    variant='elevation'
                    style={{
                        width: '90px',
                        height: '30px',
                        textAlign: 'center',
                        paddingTop: '5px',
                        position: 'absolute',
                        top: '130px',
                        left: '350px'
                    }}
                >
                    Body
                </Paper>
            </Tooltip>

            <Tooltip
                title={<p >Light shorts or short tights should be enough.</p>}
                placement='right'
            >
                <Paper
                    elevation={2}
                    variant='elevation'
                    style={{
                        width: '90px',
                        height: '30px',
                        textAlign: 'center',
                        paddingTop: '5px',
                        position: 'absolute',
                        bottom: '125px',
                        left: '350px'
                    }}
                >
                    Legs
                </Paper>
            </Tooltip>

            <Tooltip
                title={<p style={{fontSize: '1.1rem'}}>Wear normal running shoes.</p>}
                placement='right'
            >
                <Paper
                    elevation={2}
                    variant='elevation'
                    style={{
                        width: '90px',
                        height: '30px',
                        textAlign: 'center',
                        paddingTop: '5px',
                        position: 'absolute',
                        bottom: '30px',
                        left: '320px'
                    }}
                >
                    Shoes
                </Paper>
            </Tooltip>

        </Paper>
    )
}
