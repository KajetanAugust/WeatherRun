export function formatCityName (cityName) {
    let capitalized = ''

    if(cityName.includes(' ')) {

        const toArr = cityName.split(' ')
        let newValue = ''

        for(let i = 0; i < toArr.length; i++) {
            newValue += (toArr[i].charAt(0).toUpperCase() + toArr[i].slice(1))
            if( i < toArr.length - 1 ) {
                newValue += ' '
            }
        }
        capitalized = newValue
    } else if (cityName.includes('-')) {
        const toArr = cityName.split('-')
        let newValue = ''

        for(let i = 0; i < toArr.length; i++) {
            newValue += (toArr[i].charAt(0).toUpperCase() + toArr[i].slice(1))
            if( i < toArr.length - 1 ) {
                newValue += '-'
            }
        }
        capitalized = newValue
    } else {
        capitalized = cityName.charAt(0).toUpperCase() + cityName.slice(1)
    }
    return capitalized
}
