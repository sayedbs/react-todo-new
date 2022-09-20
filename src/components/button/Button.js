import React from "react";
import "./button.scss";

function Button(props) {
    return (
        <button className="button" {...props}>
            {props.text || props.children}
        </button>
    );
}

export default Button;
