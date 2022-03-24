import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Profile from '../Containers/Profile';

const index = () => {
    return (
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer />
        </BrowserRouter>
    );
};

export default index;