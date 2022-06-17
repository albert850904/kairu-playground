import React from "react";
import PropTypes from "prop-types";

import "./Banner3d.scss";

// image
import interlaken from "../../assets/images/interlaken.jpeg";
import moose from "../../assets/images/moose.png";
import moose2 from "../../assets/images/moose2.png";

function Banner3d(props) {
  return (
    <div className="banner-3d">
      <img src={interlaken} alt="" className="background" />
      <img src={moose} alt="" className="foreground" />
      <img src={moose2} alt="" className="foreground2" />
      <h1>
        I am Kairu <br />A Web Developer
      </h1>
    </div>
  );
}

Banner3d.propTypes = {};

export default Banner3d;
