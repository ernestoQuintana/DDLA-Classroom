import React from 'react';
import { AppProps } from 'next/app';
import MyApp from '@/components/MyApp'; // Componente personalizado que envuelve la aplicación
import '../app/globals.css'; // Estilos globales

function App({ Component, pageProps, router }: AppProps) {
    return (
        <div>
            <MyApp pageProps={pageProps} Component={Component} router={router}>
                <Component {...pageProps} />
            </MyApp>
        </div>
    );
}

export default App;