export function getFormattedDay (timestamp: number) {
    const date = new Date(timestamp * 1000)
    const day = date.getDay()
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const fullDate = `${dayOfMonth <= 9 ? `0${dayOfMonth}` : dayOfMonth}.${month + 1 <= 9 ? `0${month + 1}` : month + 1}.${year}`

    switch (day) {
        case 0 :
            return `Sunday (${fullDate})`
        case 1 :
            return `Monday (${fullDate})`
        case 2 :
            return `Tuesday (${fullDate})`
        case 3 :
            return `Wednesday (${fullDate})`
        case 4 :
            return `Thursday (${fullDate})`
        case 5 :
            return `Friday (${fullDate})`
        case 6 :
            return `Saturday (${fullDate})`
    }
}
