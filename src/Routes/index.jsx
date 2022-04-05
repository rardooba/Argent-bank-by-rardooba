import React from "react";

//React router dom
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Components
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

//Pages
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Profile from "../Containers/Profile";

//REDUX
import { useSelector } from "react-redux";

//------------------------------------------------------------//

const IndexRoutes = () => {
  //HOOKS init
  //State from store
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route
          path="/user/login"
          element={isAuth ? <Navigate to={"/user/profile"} /> : <Login />}
        />
        <Route path="/user/profile" element={<Profile />} />
        <Route
          path="*"
          element={<Navigate to={isAuth ? "/user/profile" : "/"} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default IndexRoutes;
