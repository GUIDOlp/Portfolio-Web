import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./SocialNetworks.css";

const SocialNetworks = () => {
  return (
    <div className="social-icons">
      <div>
        <a href="https://github.com/GUIDOlp">
          <i className="github">
            <FaGithubSquare className="icons" />
          </i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/guido-eliggi-323260169/">
          <i className="linkedin">
            <FaLinkedin className="icons" />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialNetworks;
