import {Button, ButtonGroup} from "@material-ui/core";

const availableMapModes = [{modeName: 'Precipitation', modeValue: 'precipitation'}, {modeName: 'Temperature', modeValue: 'temp'}, {modeName: 'Wind', modeValue: 'wind'}, {modeName: 'Clouds', modeValue: 'clouds'}]

export default function MapButtons (props: any) {
    return (
        <ButtonGroup color="primary" aria-label="outlined primary button group" className='map-buttons' style={{width: '100%'}}>
            {
                availableMapModes.map((mode) => (
                    <Button
                        style={{width: '25%'}}
                        onClick={() => props.mapModeSetter(mode.modeValue)}
                        disabled={props.selectedMode === mode.modeValue}
                    >{mode.modeName}</Button>
                ))
            }
        </ButtonGroup>
    )
}
