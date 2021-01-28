import React from "react";

interface ForecastTileProps {
    pm10: any,
    pm25: any
}

export default function ForecastTile (props: ForecastTileProps) {
    return (
        <div>
            <p>pm10: {props.pm10.avg ? props.pm10.avg : 'N/A '}&micro;g/m&sup3;</p>
            <p>pm2.5: {props.pm25.avg ? props.pm25.avg : 'N/A '}&micro;g/m&sup3;</p>
        </div>
    )
}
