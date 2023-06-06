import * as React from 'react';
import './styles/styles.css'
import Image from 'next/image';

interface ComponentsProps {
    name?: string
    title?: string
    imageName?: string
    children ?: React.ReactNode
}

export const ComponentsFooter = (props:ComponentsProps) => {
    return(
        <div className={`contenedor-${props.name}`}>
            <h1>{props.title}</h1>
            <Image
            src={require(`../../../../../../images/contenedor-${props.imageName}`)}
            alt='imagen de visitas'
            />
            {/* </Image> */}
        </div>
    )
}