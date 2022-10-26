import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoginWithProvider from '../Login/LoginWithProvider';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <LoginWithProvider></LoginWithProvider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;