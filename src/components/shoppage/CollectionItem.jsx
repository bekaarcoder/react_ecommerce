import React from "react";

import "./shopPage.style.scss";
import FormButton from "../commons/button/FormButton";

const CollectionItem = ({ name, imageUrl, price }) => {
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
      />
      <div className="preview-footer">
        <span className="item-name">{name}</span>
        <span className="item-price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
