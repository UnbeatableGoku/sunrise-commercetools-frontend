import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { addEmail, addShippingAddress } from "../graphql/queries";
import { useContext } from "react";
import { VersionContext } from "../context/versionContext";
import { useState } from "react";

const useCheckout = () => {
  const [showEmail, setShowEmail] = useState(false);

  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(VersionContext);

  const [setEmailOfUser, { error: userError }] = useMutation(addEmail);
  const [setShippingAddress, { error: addressError }] =
    useMutation(addShippingAddress);
  if (userError) {
    console.log(userError);
  }
  if (addressError) {
    console.log(addressError);
  }
  const cartId = localStorage.getItem("cartId");
  const versionId = localStorage.getItem("versionId");

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
      localStorage.setItem("customerEmail", customerEmail);
      setShowEmail(true);
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
  return {
    register,
    handleSubmit,
    handleEmailSubmit,
    showEmail,
    setShowEmail,
    handleShippngAddressSubmit,
  };
};

export default useCheckout;
