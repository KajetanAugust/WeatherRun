
import ForecastTile from "./ForecastTile";
import {useContext} from "react";
import {ThemeContext} from "../contexts";

interface ForecastProps {
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function Forecast (props: ForecastProps) {
    const { theme } = useContext(ThemeContext);
    return (

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
    )
}
