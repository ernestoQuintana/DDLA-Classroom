import React, { ReactNode } from "react";
import Image from "next/image";
import './styles/footer.css'
import SectionFooter from "./components/SectionFooter/index";

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
                </div>
            </footer>
        </div>
    )
}
export default FooterSection;