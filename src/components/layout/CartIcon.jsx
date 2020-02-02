import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

const CartIcon = ({ toggleCartDropdown, totalItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  totalItems: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
