import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Profile from '../Containers/Profile';

const index = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
        </BrowserRouter>
    );
};

export default index;