import {getFormattedTime} from "../../utils/dateFormatters";
import {ResponsiveLine} from "@nivo/line";
import React from "react";

export default function graphCreator (props: any) {
    return (
        <ResponsiveLine
            data={[
                {
                    "id": "temperature",
                    "color": "#9CDE9F",
                    // @ts-ignore
                    "data": props.weather.hourly.map((hour: Record<any, any>) => ({
                        'x': `${getFormattedTime(hour.dt)}`,
                        'y': `${Math.round(hour.temp)}&deg;C }`
                    }))
                }
            ]}
            margin={{top: 50, right: 110, bottom: 75, left: 60}}
            xScale={{type: 'point'}}
            yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false}}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'hour',
                legendOffset: 48,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'temperature',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
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
    )
}
