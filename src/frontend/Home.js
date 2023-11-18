import React from 'react'
import { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Home({ showAlert, alert }) {
    return (
        <>
            <Navbar showAlert={showAlert} />
            <Alert alert={alert} />
            <Outlet />
        </>
    )
}
export default Home

