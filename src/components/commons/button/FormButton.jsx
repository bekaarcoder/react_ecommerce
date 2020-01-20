import React from "react";

import "./formbutton.style.scss";

const FormButton = ({ value, ...otherProps }) => {
  return <input value={value} {...otherProps} />;
};

export default FormButton;
