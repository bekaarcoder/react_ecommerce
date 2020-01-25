import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cartActions";

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
