import React from "react";

export default function RecommedationCreator (props: any) {
    return (
        <div>
            <p><b>{props.tip.type}:</b> {props.tip.tip}</p>
        </div>
    )
}
