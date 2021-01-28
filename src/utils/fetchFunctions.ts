
export function fetchForecast (locationData: Record<any, any>, openWeatherToken: String) {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData[1]}&lon=${locationData[0]}&exclude=minutely,hourly,alerts&appid=${openWeatherToken}&units=metric`)
        .then(res => res.json())
}

export function fetchCoordinates (location: string, mapboxToken: String) {
    return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=place&access_token=${mapboxToken}`)
        .then(res => res.json())
}

export function fetchAqi (lat: number, lon:number,  aqiToken: String) {
    return fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${aqiToken}&origin=*`)
        .then(res => res.json())
}

