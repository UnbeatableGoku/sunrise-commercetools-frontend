import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { VersionContext } from '../context/versionContext';
import { addShippingMethod } from '../graphql/queries';

const useShippingMethod = () => {
  const [handleShippigMethod, { error: shippingError }] =
    useMutation(addShippingMethod);
    const { state, dispatch } = useContext(VersionContext);

    if(shippingError){
        console.log(shippingError);
    }

  const handleOnClick = async (e) => {
    const versionId = localStorage.getItem('versionId');
    const cartId = localStorage.getItem('cartId');

    console.log(e.target.value);
    const { data } = await handleShippigMethod({
      variables: {
        cartId,
        versionId,
        shippingMethodId: e.target.value,
      },
    });
    const newVersionId = data.addShippingMethod.version;
      dispatch({ type: "SET_VERSION", payload: newVersionId });
      console.log(data);
    
};

  return { handleOnClick };
};

export default useShippingMethod;
