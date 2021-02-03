import {aqiToken, mapboxToken, openWeatherToken} from "../tokens/tokens";

function fetchForecast (locationData: Record<any, any>, openWeatherToken: String) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData[1]}&lon=${locationData[0]}&exclude=minutely,hourly,alerts&appid=${openWeatherToken}&units=metric`)
        .then(res => res.json())
}

function fetchCoordinates (location: string, mapboxToken: String) {
    return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=place&access_token=${mapboxToken}`)
        .then(res => res.json())
}

function fetchAqi (lat: number, lon:number,  aqiToken: String) {
    return fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${aqiToken}&origin=*`)
        .then(res => res.json())
}

export function fetchAll (cityName: string, setLocationInfo: any, setWeather: any, setPollution: any, setLoading: any, setErr: any) {

    fetchCoordinates(cityName, mapboxToken)
        .then(coordinates => {
            setLocationInfo(coordinates.features[0])

            if (coordinates.features.length) {
                return fetchForecast(coordinates.features[0].center, openWeatherToken)
                    .then(weather => {
                            setWeather(weather)
                            setLoading(true)

                            return fetchAqi(weather.lat, weather.lon, aqiToken)
                                .then(aqiData => {
                                        setPollution(aqiData)
                                        setLoading(false)
                                    })
                        }
                    )
            } else {
                setErr('City not found, please try again.')
                setLoading(false)
            }
        })
}
