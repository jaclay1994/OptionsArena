import React from "react";
// import ScriptTag from 'react-script-tag'
// Implement in updated version.
// import importUseEffect from "../../utils/helpers";

function Container (props) {
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`} {...props}>
    </div>

    )
        
}

export default Container;