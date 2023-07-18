import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  addEmail,
  addShippingAddress,
  generateOrderByCartId,
  getCartItemsWithTypeDef,
} from "../graphql/queries";

import { useContext, useEffect } from "react";
import { VersionContext } from "../context/versionContext";
import { useState } from "react";
import { toast } from "react-toastify";

const useCheckout = () => {
  
  //normal logic const
  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(VersionContext);
  const [cartItems, setCartItems] = useState({});
  const { versionId } = state;
  const cartId = localStorage.getItem("cartId");

  //mutations
  const [handleCheckoutCart, { error: checkoutCartError }] = useMutation(
    getCartItemsWithTypeDef
  );
  const [setEmailOfUser, { error: userError }] = useMutation(addEmail);
  const [generateOrder, { error: generateOrderError }] = useMutation(
    generateOrderByCartId
  );
  const [setShippingAddress, { error: addressError }] =
    useMutation(addShippingAddress);

  //mutationErrors
  if (userError) {
    console.log(userError);
  }
  if (addressError) {
    console.log(addressError);
  }
  if (generateOrderError) {
    console.log(generateOrderError);
  }
  if (checkoutCartError) {
    console.log(checkoutCartError);
  }

  //components redering state
  const [userEmail, setUserEmail] = useState(null);
  const [userShippingAddress, setUsershippingAddress] = useState(null);
  const [userBillingAddress, setUserBillingAddress] = useState(null);
  const [showShippingAddress, setShowShippingAddress] = useState(false);
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const [showShippingMethod, setShowShippingMethod] = useState(false);

  //did mount state change useEffect
  useEffect(() => {
    if (cartItems.customerEmail) {
      setUserEmail(cartItems.customerEmail);
      setShowShippingAddress(true);
    }
    if (cartItems.shippingAddress) {
      setUsershippingAddress(cartItems.shippingAddress);
      setShowShippingMethod(true);
    }

    if (cartItems.shippingInfo) {
      setShowShippingMethod(cartItems?.shippingInfo?.shippingMethodName);
      setShowBillingAddress(true);
    }
    if (cartItems.billingAddress) {
      setUserBillingAddress(cartItems.billingAddress);
    }
  }, [
    cartItems.customerEmail,
    cartItems.shippingAddress,
    cartItems.shippingInfo,
    cartItems.billingAddress
  ]);

  //didmount getCartItems data useEffect
  useEffect(() => {
    async function fetchData() {
      const { data } = await handleCheckoutCart({
        variables: {
          cartId,
        },
      });
      setCartItems(data.getCartItems);
    }

    if (versionId && cartId) {
      fetchData();
    }
  }, [versionId, cartId, handleCheckoutCart]);



  const handleEmailSubmit = async ({ email }) => {
    const cartId = localStorage.getItem("cartId");
    const versionId = localStorage.getItem("versionId");
    const { data } = await setEmailOfUser({
      variables: {
        cartId,
        versionId,
        email,
      },
    });
    if (data) {
      const newVersionId = data.addEmailIdAsGuest.version;
      const customerEmail = data.addEmailIdAsGuest.customerEmail;
      dispatch({ type: "SET_VERSION", payload: newVersionId });
    }
    console.log(data);
  };

  const handleShippngAddressSubmit = async ({
    firstName,
    lastName,
    streetName,
    country,
    city,
    postalCode,
    phone,
  }) => {
    const cartId = localStorage.getItem("cartId");
    const versionId = localStorage.getItem("versionId");
    const { data } = await setShippingAddress({
      variables: {
        cartId,
        versionId,
        shippingAddresInput: {
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
      const newVersionId = data.addShippingAddress.version;
      dispatch({ type: "SET_VERSION", payload: newVersionId });
      localStorage.setItem(
        "shippingAddress",
        data.addShippingAddress.shippingAddress
      );
    }
  };

  const handleOrderCreate = async () => {
    const cartId = localStorage.getItem("cartId");
    const versionId = localStorage.getItem("versionId");

    const { data } = await generateOrder({
      variables: {
        cartId,
        versionId,
      },
    });
    console.log(data);
    if (data.generateOrderByCartID) {
      toast.success("Order Generated Successfully ");
      toast.info(
        "This is your order id ",
        data.generateOrderByCartID.orderNumber
      );
    }
  };
  return {
    register,
    handleSubmit,
    handleEmailSubmit,
    handleShippngAddressSubmit,
    cartItems,
    handleOrderCreate,
    userEmail,
    setUserEmail,
    userShippingAddress,
    setUsershippingAddress,
    showShippingAddress,
    showShippingMethod,
    showBillingAddress,
    userBillingAddress,
  };
};

export default useCheckout;
