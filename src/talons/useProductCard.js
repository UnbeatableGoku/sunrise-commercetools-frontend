import { useMutation } from "@apollo/client";
import { cartQuries } from "../graphql/gql-queries/cartQueries/index";
import { useContext } from "react";
import { VersionContext } from "../context/versionContext";

const useProductCard = () => {
  const [createCartItems, { error: cartError }] = useMutation(
    cartQuries.createCart
  );
  const [addItemsToCart, { error: ItemsError }] = useMutation(
    cartQuries.addProductToCart
  );
  const [removeFromCart, { error: removeError }] =
    useMutation(cartQuries.removeItemFromCart);


  const { dispatch } = useContext(VersionContext);
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
    console.log(data,"addItemsToCart data");

      const newVersionId = data.addItemsToCart.version;
      dispatch({ type: "SET_VERSION", payload: newVersionId });
    } else {
      const { data } = await createCartItems({ variables: { productId: id } });
      console.log(data, "createCartItems data");
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
