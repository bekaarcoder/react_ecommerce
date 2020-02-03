import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./checkout.style.scss";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cartSelector";
import {
  removeItemFromCart,
  addItemToCart,
  decreaseItemCount
} from "../../redux/cart/cartActions";

const CheckoutPage = ({
  cartItems,
  cartTotal,
  removeItemFromCart,
  addItemToCart,
  decreaseItemCount
}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span className="header-item">Product</span>
        <span className="header-item">Description</span>
        <span className="header-item">Quantity</span>
        <span className="header-item">Price</span>
        <span className="header-item">Remove</span>
      </div>
      {cartItems.length ? (
        <Fragment>
          <div className="checkout-body">
            {cartItems.map(cartItem => (
              <div className="row" key={cartItem.id}>
                <span className="row-item">
                  <img src={cartItem.imageUrl} alt={cartItem.name} />
                </span>
                <span className="row-item">{cartItem.name}</span>
                <span className="row-item">
                  <span
                    className="left-arrow"
                    onClick={() => decreaseItemCount(cartItem)}
                  >
                    &#10094;
                  </span>{" "}
                  {cartItem.quantity}{" "}
                  <span
                    className="right-arrow"
                    onClick={() => addItemToCart(cartItem)}
                  >
                    &#10095;
                  </span>
                </span>
                <span className="row-item">{cartItem.price}</span>
                <span
                  className="row-item remove"
                  onClick={() => removeItemFromCart(cartItem)}
                >
                  &#10006;
                </span>
              </div>
            ))}
          </div>
          <div className="checkout-footer">
            <span>
              <strong>TOTAL: &#8377;</strong>
              {cartTotal}
            </span>
          </div>
        </Fragment>
      ) : (
        <div className="checkout-body">
          <div className="empty-message">No items added to cart.</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state)
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  decreaseItemCount: item => dispatch(decreaseItemCount(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
