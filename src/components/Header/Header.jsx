import React from "react";
import PropTypes from "prop-types";
// css
import "./Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <a href="/" className="header-brand">
        Kairu Site
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <Link to="videos">Videos</Link>
          </li>
          <li>
            <Link to="weather">Weather</Link>
          </li>
        </ul>
        <a href="/" className="header-cases">
          Cases
        </a>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
