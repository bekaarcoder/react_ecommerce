import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormButton from "../commons/button/FormButton";
import CartDropdownItems from "./CarDropdownItems";
import { selectCartItems } from "../../redux/cart/cartSelector";

const CartDropDown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartDropdownItems item={item} key={item.id} />)
        ) : (
          <div className="empty-message">No items added to cart.</div>
        )}
      </div>
      <FormButton
        type="button"
        name="CHECKOUT"
        className="btn"
        onClick={() => history.push("/checkout")}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
