import React from "react";

import "./forminput.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
