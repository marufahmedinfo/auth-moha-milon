import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;