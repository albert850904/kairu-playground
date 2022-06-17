import React from "react";
import PropTypes from "prop-types";

import "./GridAnimate.scss";

function GridAnimate(props) {
  return (
    <section className="animated-grid">
      <div className="card">a</div>
      <div className="card">b</div>
      <div className="card">c</div>
      <div className="card">d</div>
      <div className="card">e</div>
      <div className="card">f</div>
      <div className="card">g</div>
      <div className="card">h</div>
      <div className="card">i</div>
      <div className="card">j</div>
      <div className="card">k</div>
      <div className="card">l</div>
      <div className="card">main</div>
    </section>
  );
}

GridAnimate.propTypes = {};

export default GridAnimate;
