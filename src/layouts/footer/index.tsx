import React, { ReactNode } from "react";
import Image from "next/image";
import './styles/footer.css'
import SectionFooter from "./components/SectionFooter/index";
import { Copyright } from "./components/copyright";

interface FooterProps{
    children?: ReactNode;
}

const FooterSection = ({children}:FooterProps) => {
    return (
        <div className="wrapper-footer">
            <main>{children}</main>
            <footer className="footer-contenedor">
                <div className="footer-background">    
                    <SectionFooter></SectionFooter>
                    <Copyright
                        copyright="Todo el material de DDLA por Morféo se encuentra bajo una Licencia Creative Commons"
                        legalcode="Atribución-NoComercial-SinDerivadas 4.0 Internacional"
                        permisos="(CC BY-NC-ND 4.0). Basado en el trabajo de Morféo de Gea. 
                        Permisos que vayan más allá de lo cubierto por esta licencia 
                        pueden pedirse en Contacto Morféo 
                        | Idea y diseño, Morféo 
                        | Todos los derechos reservados 2011-2023."
                    ></Copyright>
                </div>
            </footer>
        </div>
    )
}
export default FooterSection;