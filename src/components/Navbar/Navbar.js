import React from "react";
import MovileNav from "./MovileNav";
import NormalNav from "./NormalNav";
import "./Navbar.css";
import LanguageButtons from "./LanguageButtons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="/home">
          <h1>GE Coder</h1>
        </a>
      </div>
      <div className="all-nav">
        <LanguageButtons />
        <MovileNav />
        <NormalNav />
      </div>
    </div>
  );
};

export default Navbar;
