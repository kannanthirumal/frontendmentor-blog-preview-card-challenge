import React from "react";

import "./Category.css";
import PropTypes from "prop-types";

function Category({ text }) {
  return <div className="category">{text}</div>;
}

Category.propTypes = {
  text: PropTypes.string.isRequired, // Validate 'text' prop as a required string
};

export default Category;
