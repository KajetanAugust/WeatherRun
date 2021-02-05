import { useState } from "react";
import LastSearchTile from "./LastSearchTile";

export default function LastSearches () {
    const [lastSearches, setLastSearches] = useState(JSON.parse(localStorage.savedSearches).searches)
    console.log(lastSearches)
    return (
        <div className='last-searches-div'>
            {/*TODO: add tenary checking if localStorage savedSearches exists*/}
            <h2>Your Last Searches</h2>
            {
                lastSearches.length > 0
                    ?
                    <div className='last-searches-tiles'>
                        {
                            lastSearches.map((city: string)=> <LastSearchTile cityName={city} key={`${city}-tile`}/> )
                        }
                    </div>

                    : <p>Your last searches will be displayed here</p>
            }

        </div>
    )
}
