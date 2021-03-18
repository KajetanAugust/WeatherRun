import React, {useContext, useState} from "react";
import {Paper, Modal, Button} from "@material-ui/core";

import {getFormattedTime} from "../utils/dateFormatters";
import {ThemeContext} from "../contexts";

interface ModalWindowProps {
    isOpen: boolean,
    openSetter: any,
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function ModalWindow (props: ModalWindowProps) {

    const {theme} = useContext(ThemeContext);
    return (
        <Modal
            open={ props.isOpen }
            onClose={ () => props.openSetter(false) }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper style={{position: "absolute", top: '25%', left: '25%', height: '450px', width: '900px', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>
                <Button
                    variant={theme === 'light' ? 'outlined' : "contained"}
                    style={{position:'absolute', top:'15px', right:'15px'}}
                    onClick={ () => props.openSetter(false) }
                >X</Button>
                <div>
                    <table style={{border: '1px solid lightgray'}}>
                    {
                        props.weather.hourly.slice(0, 6).map( (hour: Record<any, any>) => <tr style={{border: '1px solid lightgray'}}><td style={{border: '1px solid lightgray'}}>{getFormattedTime(hour.dt)}</td><td style={{border: '1px solid lightgray'}}>{Math.round(hour.temp)}&deg;C </td></tr>)
                    }
                    </table>
                </div>
                <div>

                </div>
            </Paper>
        </Modal>

    )
}
