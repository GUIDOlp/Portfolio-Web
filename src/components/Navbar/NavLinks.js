import React from "react";
import { useContext } from "react";
import LangContext from "../../context/LangContext";
import "./NavLinks.css";

const NavLinks = (props) => {
  const { texts } = useContext(LangContext);

  return (
    <ul className="nav-links">
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#home" className="selected">
          {texts.home}
        </a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#about-me" className="selected">
          {texts.about}
        </a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#resume" className="selected">
          {texts.resume}
        </a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#projects" className="selected">
          {texts.projects}
        </a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#contact-me" className="selected">
          {texts.contact}
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
