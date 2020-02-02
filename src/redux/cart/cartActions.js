import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from "../types";

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});
