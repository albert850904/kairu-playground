import React from "react";
import PropTypes from "prop-types";

import "./Grid.scss";
import GridTest1 from "./GridTests/Test1/GridTest1";
import GridTest2 from "./GridTests/Test2/GridTest2";
import GridPhotoGallery from "./GridTests/Test3/GridPhotoGallery";
import GridAnimate from "./GridTests/Test4/GridAnimate";

function Grid(props) {
  return <GridAnimate />;
}

Grid.propTypes = {};

export default Grid;
