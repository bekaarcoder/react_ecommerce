import React from "react";

import "./formbutton.style.scss";

const FormButton = ({ name, ...otherProps }) => {
  return <input value={name} {...otherProps} />;
};

export default FormButton;
