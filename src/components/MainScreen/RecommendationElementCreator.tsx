import React, {useContext} from "react";

import { Paper } from "@material-ui/core";
import {ThemeContext} from "../../contexts";

export default function RecommendationElementCreator (props: any) {
    const offsets = {Head: '5%', Body: '30%', Legs: '55%', Shoes: '80%'}
    const { theme } = useContext(ThemeContext);
    return (
        <div>
             <Paper
                 elevation={2}
                 variant={theme === 'dark' ? 'outlined' : 'elevation'}
                 className={theme}
                 style={{
                     maxWidth: '320px',
                     textAlign: 'center',
                     padding: '15px 10px',
                     position: 'absolute',
                     fontSize: '1rem',
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
