import React from "react";
import { connect } from "react-redux";
import FormButton from "../commons/button/FormButton";
import CartDropdownItems from "./CarDropdownItems";
import { selectCartItems } from "../../redux/cart/cartSelector";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map(item => (
            <CartDropdownItems item={item} key={item.id} />
          ))}
      </div>
      <FormButton type="button" value="CHECKOUT" className="btn" />
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);
