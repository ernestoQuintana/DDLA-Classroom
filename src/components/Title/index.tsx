import * as React from 'react';


const TitleComponent = ({ title, description, children }) =>{

    return(
        <div className="titulo_aulas">
            <h1>{title}</h1>
            <p>{description}</p>
                {children}
        </div>
    )
}

export default TitleComponent;