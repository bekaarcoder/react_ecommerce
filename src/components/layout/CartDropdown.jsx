import React from "react";
import FormButton from "../commons/button/FormButton";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <FormButton type="button" value="CHECKOUT" className="btn" />
    </div>
  );
};

export default CartDropDown;
