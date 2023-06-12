import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import "./logo.css"

interface LogoProps {
    alt?: string;
    classImage?: string;
    classSpan?: string;
    url?: string;
    src?: string;
    title?: string
}

export const Logo = (props: LogoProps) => {
    return (
        <div className='contenedor-logo'>
            <Link href={`'${props.url}'`}>
                <Image
                    src={require("../../../../../../assets/gif/LogoGIF.gif")}
                    // src={require(`'${props.src}'`)}
                    alt={`${props.alt}`}
                    className={`${props.classImage}`}
                />
                <span className={`${props.classSpan}`}>{props.title}</span>
            </Link>
        </div>
    )
}