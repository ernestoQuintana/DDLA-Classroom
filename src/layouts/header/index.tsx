import React, { ReactNode } from "react";
import './styles/header.css'
import { Enlaces } from "./components/headerSection/components";
// import useScrollDirection from "@/hooks/useScrollDirection";

interface HeaderProps {
    children?: React.ReactNode;
}

const Encabezado = ({ children }: HeaderProps) => {
    // const isScrollingUp = useScrollDirection();

    return (
        <div className={`contenedor-image-portada`}>
        {/* ${isScrollingUp  ? 'oculto' : 'visible'} */}
            <header className='contenedor-header'>
                <div className='title'>
                    <Enlaces></Enlaces>
                    <h1>Aulas DDLA</h1>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Encabezado;