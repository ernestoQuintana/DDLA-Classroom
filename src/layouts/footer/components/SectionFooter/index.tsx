import * as React from 'react';
import { ComponentsFooter } from '../SectionFooter/components/componentsFooter/index'
import './styles/styles.css'


const SectionFooter = () =>{
    return(
        <div className='contenedor-section'>
            <ComponentsFooter 
                name='visitas' 
                title='Visitas DDLA' 
                imageName='contador.png'>
            </ComponentsFooter>
            <ComponentsFooter 
                name='redes' 
                title='Siguenos en nuestras Redes Sociales' 
                imageName='redes_sociales.png'>
            </ComponentsFooter>
            <ComponentsFooter
                name='colabora' 
                title='Colabora con DDLA' 
                imageName='colabora-1.png'>
            </ComponentsFooter>
        </div>
    )
}

export default SectionFooter;