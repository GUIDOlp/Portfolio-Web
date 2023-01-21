import React from "react";
import "./Subtitle.css";

const Subtitle = ({children}) => {

  return (
    <div className="subtitle-container" data-aos="zoom-in">
      <div className="subtitle">
        <h3>{children}</h3>
      </div>
    </div>
  )
}

export default Subtitle
