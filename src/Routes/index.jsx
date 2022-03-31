import React from "react";

//React router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

//Pages
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Profile from "../Containers/Profile";

const index = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default index;
