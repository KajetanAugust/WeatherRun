import {
    WiDaySunny,
    WiDayCloudy,
    WiCloud,
    WiCloudy,
    WiDayShowers,
    WiSnow,
    WiNightClear,
    WiNightAltCloudy,
    WiNightFog,
    WiNightShowers,
    WiNightRain,
    WiNa,
    WiDayRain,
    WiDayFog,
    WiNightThunderstorm,
    WiDayThunderstorm
} from "react-icons/wi";

export function weatherIconChecker (weatherCode: string, size:string = '') {
    switch (weatherCode) {
        case '01d' :
            return <WiDaySunny className={`weather-icon${size}`} />
        case '01n' :
            return <WiNightClear className={`weather-icon${size}`} />
        case '02d' :
            return <WiDayCloudy className={`weather-icon${size}`}/>
        case '02n' :
            return <WiNightAltCloudy className={`weather-icon${size}`} />
        case '03d' :
            return <WiCloud className={`weather-icon${size}`} />
        case '03n' :
            return <WiCloud className={`weather-icon${size}`} />
        case '04d' :
            return <WiCloudy className={`weather-icon${size}`} />
        case '04n' :
            return <WiCloudy className={`weather-icon${size}`} />
        case '09d' :
            return <WiDayShowers className={`weather-icon${size}`} />
        case '09n' :
            return <WiNightShowers className={`weather-icon${size}`} />
        case '10d' :
            return <WiDayRain className={`weather-icon${size}`} />
        case '10n' :
            return <WiNightRain className={`weather-icon${size}`} />
        case '11d' :
            return <WiDayThunderstorm className={`weather-icon${size}`} />
        case '11n' :
            return <WiNightThunderstorm className={`weather-icon${size}`} />
        case '13d' :
            return <WiSnow className={`weather-icon${size}`} />
        case '13n' :
            return <WiSnow className={`weather-icon${size}`} />
        case '50d' :
            return <WiDayFog className={`weather-icon${size}`} />
        case '50n' :
            return <WiNightFog className={`weather-icon${size}`} />
        default :
            return <WiNa className={`weather-icon${size}`}/>
    }
}
