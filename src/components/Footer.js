import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <>
      <footer>
        <span>
          Powered by &nbsp;
          <a
            href="https://www.freecodecamp.org/codewithumair"
            target="_blank"
            rel="noreferrer"
          >
            Umair&nbsp;
          </a>
          | <span class="far fa-copyright"></span> 2022 All rights reserved.
        </span>
        <span>
          <a
            href="https://github.com/CodeWithUmair"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./github.png"
              alt="github"
              width="36px"
              height="36px"
              class="footer-links"
            />
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
