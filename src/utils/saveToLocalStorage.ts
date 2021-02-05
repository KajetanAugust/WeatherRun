export default function saveToLocalStorage (searchValue: string) {
    const valueToAdd = [searchValue]
    if(localStorage.savedSearches) {

        const localStorageSearches = JSON.parse(localStorage.savedSearches);

        if(localStorageSearches.searches.includes(searchValue)) {
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
        localStorage.savedSearches = JSON.stringify({"searches": [searchValue]})
    }
}
