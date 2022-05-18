import React from "react";
import PropTypes from "prop-types";

// css
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner-text">
        <h2>
          I am a web <br />
          developer
        </h2>
        <h1>React, Angular, React Native, Redux, MongoDB, ExpressJs</h1>
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
