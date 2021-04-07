import React from "react";

import { Paper } from "@material-ui/core";

export default function RecommendationElementCreator (props: any) {
    const offsets = {Head: '20px', Body: '120px', Legs: '220px', Shoes: '320px'}

    return (
        <div>
             <Paper
                 elevation={2}
                 variant='elevation'
                 style={{
                     maxWidth: '350px',
                     textAlign: 'center',
                     padding: '15px',
                     position: 'absolute',
                     // @ts-ignore
                     top: `${offsets[props.tip.type]}`,
                     left: `${props.tip.type === 'Head' || props.tip.type === 'Shoes' ? '300px' : '350px'}`
                 }}
             >
                 {props.tip.tip}
             </Paper>
        </div>
    )
}
