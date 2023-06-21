import React, { ReactNode }  from 'react';
import { AppProps } from 'next/app';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

interface MyAppProps extends AppProps {
    children: ReactNode;
    router: any;
  }
  
const MyApp = ({ children }:MyAppProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MyApp;