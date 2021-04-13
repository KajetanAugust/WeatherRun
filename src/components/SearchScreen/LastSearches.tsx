import LastSearchTile from "./LastSearchTile";
import { getFromLocalStorage } from "../../utils/localStorageManagement";

export default function LastSearches () {
    const searchHistory = getFromLocalStorage()
    return (
        <div className='last-searches-div'>
            <h2>Your Last Searches</h2>
            {
                searchHistory.length
                    ?
                        <div className='last-searches-tiles'>
                            {
                                searchHistory.map((city: string)=> <LastSearchTile cityName={city} key={`${city}-tile`}/> )
                            }
                        </div>
                    :
                        <p>Your search history will be displayed here.</p>
            }
        </div>
    )
}
