import React from "react";
import './styles/style.css'

interface CopyrightProps {
    copyright?:string
    legalcode?:string
    permisos?:string
}
export const Copyright = (props:CopyrightProps) => {
    return(
        <div className="contenedor-copyright">
            <div className="linea-divisoria">
            <p>{props.copyright}
            <span>
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode" target="_blank" rel="noopener">
                  {props.legalcode}
                </a>
            </span>
            {props.permisos}
            </p>

            </div>
        </div>
    )
}