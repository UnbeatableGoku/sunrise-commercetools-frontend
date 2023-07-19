import { addProductToCart } from "./addItemsToCart";
import { changeCartQty } from "./changeLineItemsQty";
import { createCart } from "./createCart";
import { removeItemFromCart } from "./removeItemFromCart";

export const cartQuries = {
  createCart,
  addProductToCart,
  removeItemFromCart,
  changeCartQty
};
