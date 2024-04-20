import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Layout() {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  );
}

export default Layout;
