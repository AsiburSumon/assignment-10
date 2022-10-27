import React from 'react';
import './CheckOut.css';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkoutInfo = useLoaderData();
    const {title, photo} = checkoutInfo;
    return (
        <div className='checkout-info'>
            <h1>This is checkout page</h1>
            <h4>Checkout for {title}</h4>
            <img src={photo} alt="no image" />
        </div>
    );
};

export default CheckOut;