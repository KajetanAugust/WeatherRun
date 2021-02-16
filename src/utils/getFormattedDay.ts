export function getFormattedDay (timestamp: number) {
    const date = new Date(timestamp * 1000)
    const day = date.getDay()
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const fullDate = `${dayOfMonth <= 9 ? `0${dayOfMonth}` : dayOfMonth}.${month + 1 <= 9 ? `0${month + 1}` : month + 1}.${year}`

    switch (day) {
        case 0 :
            return `Sun ${fullDate}`
        case 1 :
            return `Mon ${fullDate}`
        case 2 :
            return `Tue ${fullDate}`
        case 3 :
            return `Wed ${fullDate}`
        case 4 :
            return `Thu ${fullDate}`
        case 5 :
            return `Fri ${fullDate}`
        case 6 :
            return `Sat ${fullDate}`
    }
}
