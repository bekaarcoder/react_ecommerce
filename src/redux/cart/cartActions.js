import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM
} from "../types";

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const decreaseItemCount = item => ({
  type: DECREASE_ITEM,
  payload: item
});
