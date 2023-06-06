import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';

export const Logo = () => {
    <Link href='/'>
        <Image
            src={require(`../../../../images/Logo/LogoGIF.gif`)}
            alt="imagen"
            className="logo-image"
        />
        {/* </Image> */}
    </Link>
}