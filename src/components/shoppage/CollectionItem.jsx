import React from "react";

import "./shopPage.style.scss";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="preview-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="cart-title">ADD TO CART</div>
      <div className="preview-footer">
        <span className="item-name">{name}</span>
        <span className="item-price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
