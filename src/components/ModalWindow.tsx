import React, {useContext} from "react";
import {Paper, Modal, Button} from "@material-ui/core";
import { ResponsiveLine } from '@nivo/line'

import {getFormattedTime} from "../utils/dateFormatters";
import {ThemeContext} from "../contexts";

interface ModalWindowProps {
    isOpen: boolean,
    openSetter: any,
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function ModalWindow (props: ModalWindowProps) {

    const {theme} = useContext(ThemeContext);
    return (
        <Modal
            open={ props.isOpen }
            onClose={ () => props.openSetter(false) }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper style={{position: "absolute", top: '25%', left: '25%', height: '450px', width: '900px', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>
                <Button
                    variant={theme === 'light' ? 'outlined' : "contained"}
                    style={{position:'absolute', top:'15px', right:'15px'}}
                    onClick={ () => props.openSetter(false) }
                >X</Button>
                {/*<div>*/}
                {/*    <table style={{border: '1px solid lightgray'}}>*/}
                {/*    {*/}
                {/*        props.weather.hourly.slice(0, 6).map( (hour: Record<any, any>) => <tr style={{border: '1px solid lightgray'}}><td style={{border: '1px solid lightgray'}}>{}</td><td style={{border: '1px solid lightgray'}}>{</td></tr>)*/}
                {/*    }*/}
                {/*    </table>*/}
                {/*</div>*/}

                <ResponsiveLine
                    data={[
                        {
                            "id": "temperature",
                            "color": "#9CDE9F",
                            "data": props.weather.hourly.slice(0, 12).map((hour: Record<any, any>) => ({'x': `${getFormattedTime(hour.dt)}`, 'y': `${Math.round(hour.temp)}&deg;C }`}))
                        },
                        {
                            "id": "wind speed",
                            "color": "#F5B82E",
                            "data": props.weather.hourly.slice(0, 12).map((hour: Record<any, any>) => ({'x': `${getFormattedTime(hour.dt)}`, 'y': `${Math.ceil(hour.wind_speed * 3.6)}km/h`}))
                        }
                    ]}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </Paper>
        </Modal>

    )
}
