import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { VersionContext } from '../context/versionContext';
import { addBillingAddress } from '../graphql/queries';

const useBillingAddress = () => {
  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(VersionContext);

  const [setBillingAddress, { error: billingError }] =
    useMutation(addBillingAddress);
  const handleBillingAddressSubmit = async ({
    firstName,
    lastName,
    streetName,
    country,
    city,
    postalCode,
    phone,
  }) => {
    const cartId = localStorage.getItem('cartId');
    const versionId = localStorage.getItem('versionId');
    const { data } = await setBillingAddress({
      variables: {
        cartId,
        versionId,
        addresInput: {
          firstName,
          lastName,
          streetName,
          country,
          city,
          postalCode,
          phone,
        },
      },
    });
    console.log(data);
    if (data) {
      const newVersionId = data.addBillingAddress.version;
      dispatch({ type: 'SET_VERSION', payload: newVersionId });
      localStorage.setItem(
        'billingAddress',
        data.addBillingAddress.billingAddress
      );
    }
  };
  return { register, handleSubmit, handleBillingAddressSubmit };
};

export default useBillingAddress;
