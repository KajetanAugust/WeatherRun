import React, {useContext} from "react";

import { Paper } from "@material-ui/core";
import {ThemeContext} from "../contexts";

export default function RecommendationElementCreator (props: any) {
    const offsets = {Head: '20px', Body: '120px', Legs: '220px', Shoes: '320px'}
    const { theme } = useContext(ThemeContext);
    return (
        <div>
             <Paper
                 elevation={2}
                 variant={theme === 'dark' ? 'outlined' : 'elevation'}
                 className={theme}
                 style={{
                     maxWidth: '350px',
                     textAlign: 'center',
                     padding: '15px',
                     position: 'absolute',
                     // @ts-ignore
                     top: `${offsets[props.tip.type]}`,
                     left: `${props.tip.type === 'Head' || props.tip.type === 'Shoes' ? '300px' : '350px'}`,
                     backgroundColor: `${theme === 'dark' ? 'rgb(24, 24, 24)' : "white"}`,
                     borderColor: `${theme === 'dark' ? 'rgb(37, 37, 37)' : null}`,
                     color: `${theme === 'dark' ? 'rgb(255, 255, 255)' : 'black'}`
                 }}
             >
                 {props.tip.tip}
             </Paper>
        </div>
    )
}
