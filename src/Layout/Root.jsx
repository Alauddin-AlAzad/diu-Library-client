import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
           <header className="sticky top-0 z-50">
             <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;