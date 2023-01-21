import React from "react";
import NavLinks from "./NavLinks";
import "./MovileNav.css";
import { CgMenuBoxed } from "react-icons/cg";
import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const MovileNav = () => {

  const [openMenu, setOpenMenu ] = useState(false);
  const menuIcon = <CgMenuBoxed className="menu-icon" onClick={() => setOpenMenu(!openMenu)}/>
  const closeIcon = <CgCloseR className="menu-icon" onClick={() => setOpenMenu(!openMenu)}/>
  const closeMovileNav = () => setOpenMenu(false);

  return (
    <nav className="movile-nav close-movile-nav">
      {openMenu ? closeIcon : menuIcon}
      {openMenu && <NavLinks isMovileNav={true} closeMovileNav={closeMovileNav}/>}
    </nav>
  )
}

export default MovileNav;
