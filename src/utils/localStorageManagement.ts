// saveToLocalStorage function is called in fetchAll fetching function for consistency reason and
// to avoid partial search queries or multiple history entries for cities that can be typed with or without '-'

export function saveToLocalStorage (searchValue: string) {
    const valueToAdd = [searchValue.toLowerCase()]
    if(localStorage.savedSearches) {

        const localStorageSearches = JSON.parse(localStorage.savedSearches);

        if(localStorageSearches.searches.includes(valueToAdd[0])) {
            return
        } else {
            if(localStorageSearches.searches.length >= 5) {
                console.log(localStorageSearches.searches)
                let shorterSearch = localStorageSearches.searches.slice(0, 4)
                localStorage.savedSearches = JSON.stringify({"searches": [...valueToAdd, ...shorterSearch]})
            } else {
                let savedSearches = localStorageSearches.searches
                localStorage.savedSearches = JSON.stringify({"searches": [...valueToAdd, ...savedSearches]})
            }
        }
    } else {
        localStorage.savedSearches = JSON.stringify({"searches": [...valueToAdd]})
    }
}


export function getFromLocalStorage () {

    if(localStorage.savedSearches) {
        return JSON.parse(localStorage.savedSearches).searches
    } else {
        return []
    }
}
