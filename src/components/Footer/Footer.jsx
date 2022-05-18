import React from "react";
import PropTypes from "prop-types";

// css
import "./Footer.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <ul className="footer-main">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Cases</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>About</a> Me
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <ul className="footer-cases">
        <li>
          <p>Lastest</p>
        </li>
        <li>
          <a href="/">Work Experience</a>
        </li>
        <li>
          <a href="/">Work Experience</a>
        </li>
        <li>
          <a href="/">Work Experience</a>
        </li>
        <li>
          <a href="/">Work Experience</a>
        </li>
      </ul>
      <div className="footer-links">
        <a href="/">
          <img src="../../assets/icons/github.png" alt="github" />
        </a>
        <a href="/">
          <img src="../../assets/icons/email.png" alt="email" />
        </a>
        <a href="/">
          <img src="../../assets/icons/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
