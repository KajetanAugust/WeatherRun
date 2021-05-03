import React from "react";
import ForecastTile from "./ForecastTile";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import ForecastCarousel from "./ForecastCarousel";

interface ForecastProps {
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function Forecast (props: ForecastProps) {
    const { theme } = useContext(ThemeContext);

    return (
    <React.Fragment>
        <div className={`forecast ${theme}`}>
            {
                props.pollution.list.slice(0, 5).map((data: Record<any, any>, index: number) => (
                    <ForecastTile
                        pm10={data.components.pm10}
                        pm25={data.components.pm2_5}
                        forecast={props.weather.daily[index + 1]}
                        key={`forecastTile${index}`}
                    />
                ))
            }
        </div>

        <div className='forecast-carousel'>
            <ForecastCarousel pollution={props.pollution} weather={props.weather}/>
        </div>
    </React.Fragment>

    )
}
