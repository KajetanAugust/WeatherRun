import React, {useState} from "react";
import {Paper, Modal} from "@material-ui/core";

import {getFormattedTime} from "../utils/dateFormatters";

interface ModalWindowProps {
    isOpen: boolean,
    openSetter: any,
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function ModalWindow (props: ModalWindowProps) {


    return (
        <Modal
            open={ props.isOpen }
            onClose={ () => props.openSetter(false) }
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper style={{position: "absolute", top: '25%', left: '25%', height: '450px', width: '900px', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'} }>
                <div>
                    {
                        props.weather.hourly.slice(0, 6).map( (hour: Record<any, any>) => <p><b>{getFormattedTime(hour.dt)}</b> {Math.round(hour.temp)}&deg;C </p>)
                    }
                </div>
                <div>
                    
                </div>
            </Paper>
        </Modal>

    )
}
