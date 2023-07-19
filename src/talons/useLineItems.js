import { useMutation } from "@apollo/client";
import { useCallback, useContext, useState } from "react";
import { useEffect } from "react";
import { debounce } from "lodash";
import { VersionContext } from "../context/versionContext";
import { cartQuries } from "../graphql/gql-queries/cartQueries";

const useLineItems = (lineItems) => {
  const [removeItem, { error: removeError }] = useMutation(
    cartQuries.removeItemFromCart
  );
  const [changeQty, { error: qtyError }] = useMutation(
    cartQuries.changeCartQty
  );

  if (qtyError) {
    console.log(qtyError);
  }

  const [qty, setQty] = useState(lineItems.quantity);
  const { state, dispatch } = useContext(VersionContext);
  const [cancel, setCancel] = useState(false);

  const handleQty = useCallback(
    debounce(async (id, qty) => {
      const cartId = localStorage.getItem("cartId");
      const versionId = localStorage.getItem("versionId");
      setCancel(true);
      const { data } = await changeQty({
        variables: {
          cartId,
          versionId,
          lineItemId: id,
          quantity: qty,
        },
      });
      if (data) {
        console.log(data, "Change Cart Items Qty");
        const newVersionId = data.changeCartItemsQty.version;
        dispatch({ type: "SET_VERSION", payload: newVersionId });
      }
    }, 2000),
    []
  );

  return {
    removeItem,
    qty,
    setQty,
    debouncedHandleQty: handleQty,
  };
};

export default useLineItems;
