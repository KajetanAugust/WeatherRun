import recommendations from './recommendations.json'

export function RunRecommendationGenerator (aqi: number, weather: Record<any, any>) {

    let tip = '';

    if (aqi <= 50) {
        tip += recommendations.aqi.veryGood
    } else if (aqi >= 51 && aqi <= 100) {
        tip += recommendations.aqi.good
    } else if (aqi >= 101 && aqi <= 150) {
        tip += recommendations.aqi.sensitive
    } else if (aqi >= 151 && aqi <= 200) {
        tip += recommendations.aqi.poor
    } else if (aqi >= 201 && aqi <= 300) {
        tip += recommendations.aqi.veryPoor
    } else if (aqi >= 300) {
        tip += recommendations.aqi.hazardous
    } else if (typeof aqi !== 'number') {
        tip += recommendations.aqi.noInfo
    }

    if (weather.rain) {
        tip += recommendations.weather.rainy
    } else if (weather.main.temp < 5 && weather.main.temp > -10 && weather.wind.speed > 3) {
        tip += recommendations.weather.coldAndWindy
    } else if (weather.main.temp < 5 && weather.main.temp > -10) {
        tip += recommendations.weather.cold
    } else if (weather.main.temp < -10) {
        tip += recommendations.weather.freezingCold
    } else if (weather.main.temp > 5 && weather.main.temp < 18) {
        tip += recommendations.weather.moderate
    } else if (weather.main.temp > 18 && weather.main.temp < 25) {
        tip += recommendations.weather.hot
    } else if (weather.main.temp > 25) {
        tip += recommendations.weather.veryHot
    } else if (weather.wind.speed > 3) {
        tip += recommendations.weather.windy
    }

    return tip
}
