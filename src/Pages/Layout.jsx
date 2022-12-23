import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

//This component renders a navbar and the content of the page.
//Can be used to change the layout of the page.
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
