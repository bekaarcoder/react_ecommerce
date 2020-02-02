import React from "react";

const CartDropdownItems = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  console.log(item);
  // console.log(this.props.item);
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-detail">
        <span>{name}</span>
        <span>
          {price} {"x"} {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartDropdownItems;
