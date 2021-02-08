import recommendations from './recommendations.json'

export function RunRecommendationGenerator (aqi: number, weather: Record<any, any>) {

    let tip = {
        aqi: '',
        weather: '',
        clothes: {
            head: '',
            body: '',
            legs: '',
            shoes: ''
        }
    };

    if (aqi <= 50) {
        tip.aqi = recommendations.aqi.veryGood
    } else if (aqi >= 51 && aqi <= 100) {
        tip.aqi = recommendations.aqi.good
    } else if (aqi >= 101 && aqi <= 150) {
        tip.aqi = recommendations.aqi.sensitive
    } else if (aqi >= 151 && aqi <= 200) {
        tip.aqi = recommendations.aqi.poor
    } else if (aqi >= 201 && aqi <= 300) {
        tip.aqi = recommendations.aqi.veryPoor
    } else if (aqi >= 300) {
        tip.aqi = recommendations.aqi.hazardous
    } else {
        tip.aqi = recommendations.aqi.noInfo
    }

    if (weather.rain) {
        tip.weather = recommendations.weather.rainy
        tip.clothes.body = (recommendations.clothes as any).body.rainy
        tip.clothes.legs = (recommendations.clothes as any).legs.rainy
        tip.clothes.shoes = (recommendations.clothes as any).shoes.rainy

    } else if (weather.temp < 5 && weather.temp > -10 && weather.wind_speed > 3) {
        tip.weather = recommendations.weather.coldAndWindy
        tip.clothes.head = (recommendations.clothes as any).head.coldAndWindy
        tip.clothes.body = (recommendations.clothes as any).body.coldAndWindy
        tip.clothes.legs = (recommendations.clothes as any).legs.coldAndWindy
        tip.clothes.shoes = (recommendations.clothes as any).shoes.cold

    } else if (weather.temp < 5 && weather.temp > -10 && weather.wind_speed <= 3) {
        tip.weather = recommendations.weather.cold
        tip.clothes.head = (recommendations.clothes as any).head.cold
        tip.clothes.body = (recommendations.clothes as any).body.cold
        tip.clothes.legs = (recommendations.clothes as any).legs.cold
        tip.clothes.shoes = (recommendations.clothes as any).shoes.cold

    } else if (weather.temp < -10) {
        tip.weather = recommendations.weather.freezingCold
        tip.clothes.head = (recommendations.clothes as any).head.freezingCold
        tip.clothes.body = (recommendations.clothes as any).body.freezingCold
        tip.clothes.legs = (recommendations.clothes as any).legs.freezingCold
        tip.clothes.shoes = (recommendations.clothes as any).shoes.cold

    } else if (weather.temp > 5 && weather.temp < 18) {
        tip.weather = recommendations.weather.moderate
        tip.clothes.head = (recommendations.clothes as any).head.moderate
        tip.clothes.body = (recommendations.clothes as any).body.moderate
        tip.clothes.legs = (recommendations.clothes as any).legs.moderate
        tip.clothes.shoes = (recommendations.clothes as any).shoes.moderate

    } else if (weather.temp > 18 && weather.temp < 25) {
        tip.weather = recommendations.weather.hot
        tip.clothes.head = (recommendations.clothes as any).head.hot
        tip.clothes.body = (recommendations.clothes as any).body.hot
        tip.clothes.legs = (recommendations.clothes as any).legs.hot
        tip.clothes.shoes = (recommendations.clothes as any).shoes.hot

    } else if (weather.temp > 25) {
        tip.weather = recommendations.weather.veryHot
        tip.clothes.head = (recommendations.clothes as any).head.hot
        tip.clothes.body = (recommendations.clothes as any).body.hot
        tip.clothes.legs = (recommendations.clothes as any).legs.hot
        tip.clothes.shoes = (recommendations.clothes as any).shoes.hot

    } else if (weather.wind_speed > 3) {
        tip.weather = recommendations.weather.windy
        tip.clothes.head = (recommendations.clothes as any).head.moderate
        tip.clothes.body = (recommendations.clothes as any).body.windy
        tip.clothes.legs = (recommendations.clothes as any).legs.windy

    }

    return tip
}
