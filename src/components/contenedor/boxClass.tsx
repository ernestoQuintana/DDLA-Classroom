import React, { ReactNode} from "react";
import Button from "../Button/button";
import Image from "next/image";


interface BoxClassProps {
    title?: string;
    imagen?: string;
    description?: string;
    children?: ReactNode;
    type?:string;
  }

function BoxClass (props: BoxClassProps){
    return (
        <div className="box-class-contenedor">
            <Image 
            src={require(`../../images/imagen-${props.imagen}.${props.type}`)}
            alt="imagen"
            width={500}
            height={500}
            />
            <div className="contenedor-texto">
                <h2 className="title-box-aula">{props.title}</h2>
                <p className="description-box-aula">{props.description}</p>
                <Button name="Ingresar" />
            </div>
        </div>
    )
}

export default BoxClass;