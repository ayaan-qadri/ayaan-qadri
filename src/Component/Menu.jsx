import React, { useContext, useState } from 'react'
import "./CSS/menu.css";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HideSourceIcon from "@mui/icons-material/HideSource";
function Menu() {
  
  const [menuOpen, setMenuOpen] = useState(true);
  
  return (
    <div className={menuOpen ? "menu" : "menu menuClosed"}>
      {menuOpen ? (
        <>
          <HideSourceIcon
            className="hideBtn"
            style={{ fontSize: 40 }}
            onClick={() => {
              setMenuOpen(false);
            }}
          />
          <Link to={"/"}> About me</Link>
          <Link to={"/socials"}> Socials</Link>
          <Link to={"/projects"}> Projects</Link>
        </>
      ) : (
        <>
          <ArrowCircleRightIcon
            className='openBtn'
            style={{ fontSize: 50 }}
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </>
      )}
    </div>
  );
}

export default Menu
