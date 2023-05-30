import React from "react";

interface ButtonProps {
    name ?:string
}

function Button (props: ButtonProps){
    return (
        <button className="button-contenedor">
            <h2 className="button-name">{props.name}</h2>
        </button>
    )
}
export default Button;