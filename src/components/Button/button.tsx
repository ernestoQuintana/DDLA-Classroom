import React from "react";
import '../../styles/botton.css'

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