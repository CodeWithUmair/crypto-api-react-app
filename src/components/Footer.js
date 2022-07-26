import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <>
      <footer>
        <span>
          Created By
          <a
            href="https://www.freecodecamp.org/codewithumair"
            target="_blank"
            rel="noreferrer"
          >
            Umair
          </a>
          | <span class="far fa-copyright"></span> 2022 All rights reserved.
        </span>
        <br />
        <span>
          <a
            href="https://www.linkedin.com/in/umair-amir-30b32721a/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons8-linkedin-2.gif"
              alt="linkedin"
              width="36px"
              height="36px"
              class="footer-links"
            />
          </a>
          <a
            href="https://twitter.com/Muhamma19512164"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons8-twitter.gif"
              alt="linkedin"
              width="36px"
              height="36px"
              class="footer-links"
            />
          </a>
          <a
            href="https://github.com/CodeWithUmair"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons8-github.gif"
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
