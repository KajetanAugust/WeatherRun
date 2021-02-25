import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function LastSearchTile (props: any) {
    let history = useHistory()
    return(
        <div className='last-search-element'>
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    history.push(`/results?search=${props.cityName}`)
                }}
                variant={'contained'}
            >
                {props.cityName}
            </Button>

        </div>

    )
}
