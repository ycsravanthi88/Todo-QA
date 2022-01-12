import React from "react";

export default function ViewLabel(props) {
    return (
        <span
            className="show-labels"
            value={props.color}
            style={{ backgroundColor: `${props.color}` }}
        ></span>
    );
}
