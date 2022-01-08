import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter, FaInstagram, FaReddit } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h1>GMT</h1>
          {/* <img src={logo} alt="logo" /> */}
          <butt className="nav-toggle">
            <FaBars />
          </butt>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaReddit />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
