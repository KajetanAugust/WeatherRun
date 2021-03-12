import {Button, ButtonGroup} from "@material-ui/core";
import {useContext} from "react";
import {ThemeContext} from "../contexts";

const availableMapModes = [{modeName: 'Precipitation', modeValue: 'precipitation'}, {modeName: 'Temperature', modeValue: 'temp'}, {modeName: 'Wind', modeValue: 'wind'}, {modeName: 'Clouds', modeValue: 'clouds'}]

export default function MapButtons (props: any) {

    const { theme } = useContext(ThemeContext);

    return (
        <ButtonGroup
            color="default"
            aria-label="outlined primary button group"
            className={`map-buttons ${theme}`}
            variant={theme === 'light' ? 'outlined' : "contained"}
            style={{width: '100%'}}>
            {
                availableMapModes.map((mode) => (
                    <Button
                        className={theme}
                        style={props.selectedMode === mode.modeValue && theme !== 'light' ? {backgroundColor: 'rgb(217, 217, 217)', width:'25%'} : {width: '25%'}}
                        onClick={() => props.mapModeSetter(mode.modeValue)}
                        disabled={props.selectedMode === mode.modeValue }
                    >{mode.modeName}</Button>
                ))
            }
        </ButtonGroup>
    )
}
