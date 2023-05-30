import React, { ReactNode} from 'react';

interface TitleProps {
    title?: string;
    description?: string;
    children?: ReactNode;
  }

const TitleComponent = (props:TitleProps) =>{

    return(
        <div className="titulo_aulas">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
                {props.children}
        </div>
    )
}

export default TitleComponent;