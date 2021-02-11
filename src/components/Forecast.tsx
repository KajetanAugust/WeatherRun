import React from "react";
import ForecastTile from "./ForecastTile";
import { useContext } from "react";
import { ThemeContext } from "../contexts";
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
                props.pollution.data.forecast.daily.pm10.slice(0, 5).map((pm10pollution: number, index: number) => (
                    <ForecastTile
                        pm10={pm10pollution}
                        pm25={props.pollution.data.forecast.daily.pm25[index]}
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
