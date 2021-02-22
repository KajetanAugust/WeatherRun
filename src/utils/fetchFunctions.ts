import { saveToLocalStorage } from "./localStorageManagement";

const aqiToken = String(process.env.REACT_APP_AQI_TOKEN)
const mapboxToken = String(process.env.REACT_APP_MAPBOX_TOKEN)
const openWeatherToken = String(process.env.REACT_APP_OPENWEATHER_TOKEN)

function fetchForecast (locationData: Record<any, any>, openWeatherToken: String) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData[1]}&lon=${locationData[0]}&exclude=minutely,hourly,alerts&appid=${openWeatherToken}&units=metric`)
        .then(res => res.json())
}

function fetchCoordinates (location: string, mapboxToken: String, setErr: any, setLoading: any) {
    return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=place&access_token=${mapboxToken}`)
        .then(res => res.json())
        //TODO: add error handling for no connection/server error
}

export function fetchLocationInfo (lon: String ,lat: String) {
    return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?types=place&access_token=${mapboxToken}`)
        .then(res => res.json())
        .then((info) => {
            console.log(info)
            return info
        })
    //TODO: add error handling for no connection/server error
}

function fetchAqi (lat: number, lon:number,  aqiToken: String) {
    return fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${aqiToken}&origin=*`)
        .then(res => res.json())
}

export function fetchAll (cityName: string, setLocationInfo: any, setWeather: any, setPollution: any, setLoading: any, setErr: any) {

    fetchCoordinates(cityName, mapboxToken, setErr, setLoading)
        .then(coordinates => {
            setLocationInfo(coordinates.features[0])

            if (coordinates.features.length) {

                saveToLocalStorage(coordinates.features[0].text) //adding search query to last searches.

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
