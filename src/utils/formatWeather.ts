export function formatWeather (weather: string) {
    let capitalized: string

    if(weather.includes(' ')) {

        const toArr = weather.split(' ')
        let newValue = ''

        for(let i = 0; i < toArr.length; i++) {
            newValue += (toArr[i].charAt(0).toUpperCase() + toArr[i].slice(1))
            if( i < toArr.length - 1 ) {
                newValue += ' '
            }
        }
        capitalized = newValue
    } else if (weather.includes('-')) {
        const toArr = weather.split('-')
        let newValue = ''

        for(let i = 0; i < toArr.length; i++) {
            newValue += (toArr[i].charAt(0).toUpperCase() + toArr[i].slice(1))
            if( i < toArr.length - 1 ) {
                newValue += '-'
            }
        }
        capitalized = newValue
    } else {
        capitalized = weather.charAt(0).toUpperCase() + weather.slice(1)
    }
    return capitalized
}
