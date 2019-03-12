import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  return (
    <div className="page-header">
      <h1>{props.text}</h1>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string
};

export default Title;