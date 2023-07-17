import { useMutation } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { VersionContext } from '../context/versionContext';
import { getCartItemsWithTypeDef } from '../graphql/queries';

const useCheckoutCart = () => {
  const [handleCheckoutCart, { error: checkoutCartError }] = useMutation(
    getCartItemsWithTypeDef
  );
  const [cartItems, setCartItems] = useState({});
  const { state, dispatch } = useContext(VersionContext);
  const { versionId } = state;
  const cartId = localStorage.getItem('cartId');
  if (checkoutCartError) {
    console.log(checkoutCartError);
  }
  useEffect(() => {
    console.log(versionId);
    async function fetchData() {
      const { data } = await handleCheckoutCart({
        variables: {
          cartId,
        },
      });
      console.log(data.getCartItems);
      setCartItems(data.getCartItems);
    }

    if (versionId && cartId) {
      fetchData();
    }
  }, [versionId, cartId]);
  return { cartItems };
};

export default useCheckoutCart;
