
import ForecastTile from "./ForecastTile";

interface ForecastProps {
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function Forecast (props: ForecastProps) {
    return (
        <div className='forecast'>
            {
                props.pollution.forecast.daily.pm10.slice(0, 5).map((pm10pollution: number, index: number) => (
                    <ForecastTile
                        pm10={pm10pollution}
                        pm25={props.pollution.forecast.daily.pm25[index]}
                        forecast={props.weather.daily[index]}
                        key={`forecastTile${index}`}
                    />
                ))
            }
        </div>
    )
}
