import recommendations from './recommendations.json'

export function RunRecommendationGenerator (aqi: number, weather: Record<any, any>) {

    let tip = []

    if (aqi <= 50) {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.veryGood}]
    } else if (aqi >= 51 && aqi <= 100) {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.good}]
    } else if (aqi >= 101 && aqi <= 150) {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.sensitive}]
    } else if (aqi >= 151 && aqi <= 200) {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.poor}]
    } else if (aqi >= 201 && aqi <= 300) {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.veryPoor}]
    } else if (aqi >= 300) {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.hazardous}]
    } else {
        tip = [{type: 'Air Quality', tip: recommendations.aqi.noInfo}]
    }

    if (weather.rain) {
        tip = [
            {type: 'Head', tip: recommendations.clothes.head.moderate},
            {type: 'Body', tip: recommendations.clothes.body.rainy},
            {type: 'Legs', tip: recommendations.clothes.legs.rainy},
            {type: 'Shoes', tip: recommendations.clothes.shoes.rainy}
        ]

    } else if (weather.temp < 5 && weather.temp > -10 && weather.wind_speed > 3) {
        tip = [
            {type: 'Head', tip: recommendations.clothes.head.coldAndWindy},
            {type: 'Body', tip: recommendations.clothes.body.coldAndWindy},
            {type: 'Legs', tip: recommendations.clothes.legs.coldAndWindy},
            {type: 'Shoes', tip: recommendations.clothes.shoes.cold}
        ]

    } else if (weather.temp < 5 && weather.temp > -10 && weather.wind_speed <= 3) {
        tip = [
            {type: 'Head', tip: recommendations.clothes.head.cold},
            {type: 'Body', tip: recommendations.clothes.body.cold},
            {type: 'Legs', tip: recommendations.clothes.legs.cold},
            {type: 'Shoes', tip: recommendations.clothes.shoes.cold}
        ]

    } else if (weather.temp < -10) {
        tip = [
            {type: 'Head', tip: recommendations.clothes.head.freezingCold},
            {type: 'Body', tip: recommendations.clothes.body.freezingCold},
            {type: 'Legs', tip: recommendations.clothes.legs.freezingCold},
            {type: 'Shoes', tip: recommendations.clothes.shoes.cold}
        ]

    } else if (weather.temp > 5 && weather.temp < 18) {
        tip = [
            {type: 'Head', tip: recommendations.clothes.head.moderate},
            {type: 'Body', tip: recommendations.clothes.body.moderate},
            {type: 'Legs', tip: recommendations.clothes.legs.moderate},
            {type: 'Shoes', tip: recommendations.clothes.shoes.hot}
        ]

    } else if (weather.temp > 18 && weather.temp < 25) {
        tip = [
            {type: 'Head', tip: recommendations.clothes.head.hot},
            {type: 'Body', tip: recommendations.clothes.body.hot},
            {type: 'Legs', tip: recommendations.clothes.legs.hot},
            {type: 'Shoes', tip: recommendations.clothes.shoes.hot}
        ]

    } else if (weather.temp > 25) {
        tip = [
             {type: 'Head', tip: recommendations.clothes.head.hot},
             {type: 'Body', tip: recommendations.clothes.body.hot},
             {type: 'Legs', tip: recommendations.clothes.legs.hot},
             {type: 'Shoes', tip: recommendations.clothes.shoes.hot}
        ]
    }

    return tip
}
