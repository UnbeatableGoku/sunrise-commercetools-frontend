import { useMutation } from "@apollo/client";
import {
  addProductToCart,
  createCart,
  removeItemFromCart,
} from "../graphql/queries";
import { useContext } from "react";
import { VersionContext } from "../context/versionContext";
import { useState } from "react";

const useProductCard = () => {
  const [createCartItems, { error: cartError }] = useMutation(createCart);
  const [addItemsToCart, { error: ItemsError }] = useMutation(addProductToCart);
  const [removeFromCart, { error: removeError }] =
    useMutation(removeItemFromCart);
  const { state, dispatch } = useContext(VersionContext);
  const handleAddToCart = async (id) => {
    const cartId = localStorage.getItem("cartId");
    const versionId = localStorage.getItem("versionId");
    
    if (cartId) {
      const { data } = await addItemsToCart({
        variables: {
          productId: id,
          cartId,
          versionId,
        },
      });

      const newVersionId = data.addItemsToCart.version;
      dispatch({ type: "SET_VERSION", payload: newVersionId });
    } else {
      const { data } = await createCartItems({ variables: { productId: id } });

      localStorage.setItem("cartId", data.createCart.id);
      const newVersionId = data.createCart.version;
      dispatch({ type: "SET_VERSION", payload: newVersionId });
    }
  };

  const handleRemoveFromCart = async (id) => {
    const cartId = localStorage.getItem("cartId");
    const versionId = localStorage.getItem("versionId");
    const { data } = await removeFromCart({
      variables: {
        lineItemId: id,
        cartId,
        versionId,
      },
    });
  };
  return { handleAddToCart, handleRemoveFromCart };
};

export default useProductCard;
