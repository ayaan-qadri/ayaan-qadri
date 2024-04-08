import React from 'react'
import "./CSS/menu.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
      <Link to={"/"}> About me </Link>
      <Link to={"/socials"}> Socials </Link>
      <Link to={"/projects"}> Projects </Link>
      {/* <Link to={"/contact"}>Contact me</Link> */}
    </div>
  );
}

export default Menu
