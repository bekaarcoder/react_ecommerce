import React from "react";

import "./formbutton.style.scss";

const FormButton = ({ value, ...otherProps }) => {
  return <input value={value} {...otherProps} className="btn" />;
};

export default FormButton;
