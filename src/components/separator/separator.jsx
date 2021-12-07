import React from "react";
import PropTypes from "prop-types";

export const Separator = ({color = "white", height = "1px"}) => {
  return <div style={{width: "100%", backgroundColor: color, height}}></div>;
};

Separator.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
};
