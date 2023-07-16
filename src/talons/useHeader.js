import { useMutation } from "@apollo/client";
import { getCartItems } from "../graphql/queries";
import { useEffect } from "react";
import { useContext } from "react";
import { VersionContext } from "../context/versionContext";
import { useState } from "react";

const useHeader = () => {
  const [handlCartItems, { error: cartError }] = useMutation(getCartItems);
  const cartId = localStorage.getItem("cartId");
  const [cartItems, setCartItems] = useState(null);

  const { state, dispatch } = useContext(VersionContext);
  const versionId = state.versionId;
  if (cartError) {
    console.log(cartError);
  }
  useEffect(() => {
    async function fetchData() {
      const { data } = await handlCartItems({ variables: { cartId } });
      setCartItems(data.getCartById);
    }
    if (cartId && versionId) {
      fetchData();
    }
  }, [handlCartItems, cartId, versionId]);
  return { cartItems };
};

export default useHeader;
