import React from "react";
import PropTypes from "prop-types";

import "./GricTest1.scss";

function GridTest1(props) {
  return (
    <div className="grid">
      <div className="gtitle">title</div>
      <div className="gheader">header</div>
      <div className="gsidebar">sidebar</div>
      <div className="gcontent">
        {/* nested items */}
        {/* 這會造成其中一個grid item高度改變，那每一個grid item都會套用相同高度 */}
        {/* <p>A</p> */}
        {/* <p>B</p> */}
        content
      </div>
      <div className="gfooter">footer</div>
    </div>
  );
}

GridTest1.propTypes = {};

export default GridTest1;
