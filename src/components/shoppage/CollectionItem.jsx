import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";

import "./shopPage.style.scss";
import FormButton from "../commons/button/FormButton";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="preview-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <FormButton
        type="button"
        value="ADD TO CART"
        className="btn cart-title"
        onClick={() => addItemToCart(item)}
      />
      <div className="preview-footer">
        <span className="item-name">{name}</span>
        <span className="item-price">{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
