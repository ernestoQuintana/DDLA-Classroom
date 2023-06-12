import React from "react";
import { Logo } from "./logo/index";
import './styles/styles.css'
import Blog from './svg/blog.svg'
import Biblioteca from './svg/biblioteca.svg'
import Ares from './svg/ares.svg'
import Nosotros from './svg/nosotros.svg'

interface EnlacesProps {
    name?: string
}

export const Enlaces = (props: EnlacesProps) => {
    return (
        <div className="contenedor-enlaces">
            <a href="https://detrasdeloaparente.com/blog/">
                <Blog>
                </Blog>
                <p>Blog</p>
            </a>
            <a href="https://detrasdeloaparente.com/nosotros/">
                <Nosotros>
                </Nosotros>
                <p>Nosotros</p>
            </a>
            <div>
                <Logo
                    url="https://detrasdeloaparente.com/inicio/"
                    alt="iconoLogo"
                    classSpan="icono-span"
                    classImage="icono-image"
                ></Logo>
            </div>
            <a href="https://detrasdeloaparente.com/biblioteca/">
                <Biblioteca>
                </Biblioteca>
                <p>Biblioteca</p>
            </a>
            <a href="https://detrasdeloaparente.com/ares/">
                <Ares>
                </Ares>
                <p>Ares</p>
            </a>
        </div>
    )
}