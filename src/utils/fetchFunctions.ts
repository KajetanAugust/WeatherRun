
export function fetchWeather (searchValue: Record<any, any>, openWeatherToken: String) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue.search}&appid=${openWeatherToken}&units=metric`)
        .then(res => res.json())
}

export function fetchAqi (locationData: Record<any, any>,  aqiToken: String) {
    return fetch(`https://api.waqi.info/feed/geo:${locationData.coord.lat};${locationData.coord.lon}/?token=${aqiToken}&origin=*`)
        .then(res => res.json())
}
