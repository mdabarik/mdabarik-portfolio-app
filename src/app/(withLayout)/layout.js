import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            layout/about/dashboar
            <Footer></Footer>
        </div>
    );
};

export default Layout;