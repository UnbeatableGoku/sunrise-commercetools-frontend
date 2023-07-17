import { useMutation } from '@apollo/client';
import { changeCartQty, removeItemFromCart } from '../graphql/queries';
import { useCallback, useContext, useState } from 'react';
import { useEffect } from 'react';
import { debounce } from 'lodash';
import { VersionContext } from '../context/versionContext';

const useLineItems = (lineItems) => {
  const [removeItem, { error: removeError }] = useMutation(removeItemFromCart);
  const [changeQty, { error: qtyError }] = useMutation(changeCartQty);
  const [qty, setQty] = useState(lineItems.quantity);
  const { state, dispatch } = useContext(VersionContext);
  const [cancel, setCancel] = useState(false);

  const handleQty = useCallback(
    debounce(async (id, qty) => {
      const cartId = localStorage.getItem('cartId');
      const versionId = localStorage.getItem('versionId');
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
        console.log(data);
        const newVersionId = data.changeCartItemsQty.body.version;
        dispatch({ type: 'SET_VERSION', payload: newVersionId });
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
