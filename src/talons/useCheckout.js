import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import {
  addEmail,
  addShippingAddress,
  generateOrderByCartId,
  getCartItemsWithTypeDef,
} from '../graphql/queries';
import { useContext, useEffect } from 'react';
import { VersionContext } from '../context/versionContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../src/config/firebaseConfiguration';
import {
  applyActionCode,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from 'firebase/auth';

const useCheckout = () => {
  const extractVerificationCodeFromURL = (url) => {
    const urlParams = new URLSearchParams(url.search);
    return urlParams.get('oobCode');
  };

  const extractEmailFromURL = (url) => {
    const urlParams = new URLSearchParams(url.search);
    console.log(urlParams.get('email'));
    console.log(urlParams.get('oobCode'));

    return urlParams.get('email');
  };
  useEffect(() => {
    async function fetchData() {
      const emailVerificationCode = extractVerificationCodeFromURL(window.location);
      try {
        // Complete the sign-in process by calling applyActionCode with the email verification code
        await applyActionCode(auth, emailVerificationCode);
        console.log('User email verification completed');

        // Add the user to the Firebase console
        await createUserWithEmailAndPassword(auth, 'prathmesh.pandya@krishtechnolabs.com', 'password123');
        console.log('User added to Firebase console');
      } catch (error) {
        console.error('Error during email verification:', error);
      }
    }
    fetchData();
  }, []);

  const [showEmail, setShowEmail] = useState(false);

  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(VersionContext);

  const [setEmailOfUser, { error: userError }] = useMutation(addEmail);
  const [generateOrder, { error: generateOrderError }] = useMutation(
    generateOrderByCartId
  );

  const [setShippingAddress, { error: addressError }] =
    useMutation(addShippingAddress);
  if (userError) {
    console.log(userError);
  }
  if (addressError) {
    console.log(addressError);
  }
  if (generateOrderError) {
    console.log(generateOrderError);
  }

  const [handleCheckoutCart, { error: checkoutCartError }] = useMutation(
    getCartItemsWithTypeDef
  );

  const [cartItems, setCartItems] = useState({});
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

  const handleEmailSubmit = async ({ email }) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'http://localhost:3000/product/c/checkout',
      // This must be true.
      handleCodeInApp: true,
      // iOS: {
      //   bundleId: "com.example.ios",
      // },
      // android: {
      //   packageName: "com.example.android",
      //   installApp: true,
      //   minimumVersion: "12",
      // },
      // dynamicLinkDomain: "example.page.link",
    };

    try {
      const sendEmail = await sendSignInLinkToEmail(
        auth,
        'prathmesh.pandya@krishtechnolabs.com',
        actionCodeSettings
      );

      console.log(sendEmail, 'this is sendEmail -------------------');
    } catch (error) {
      console.error('Error sending sign-in link:', error);
    }

    // const cartId = localStorage.getItem('cartId');
    // const versionId = localStorage.getItem('versionId');
    // const { data } = await setEmailOfUser({
    //   variables: {
    //     cartId,
    //     versionId,
    //     email,
    //   },
    // });
    // if (data) {
    //   const newVersionId = data.addEmailIdAsGuest.version;
    //   const customerEmail = data.addEmailIdAsGuest.customerEmail;
    //   dispatch({ type: 'SET_VERSION', payload: newVersionId });
    //   localStorage.setItem('customerEmail', customerEmail);
    //   setShowEmail(true);
    // }
    // console.log(data);
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
    const cartId = localStorage.getItem('cartId');
    const versionId = localStorage.getItem('versionId');
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
      dispatch({ type: 'SET_VERSION', payload: newVersionId });
      localStorage.setItem(
        'shippingAddress',
        data.addShippingAddress.shippingAddress
      );
    }
  };

  const handleOrderCreate = async () => {
    const cartId = localStorage.getItem('cartId');
    const versionId = localStorage.getItem('versionId');

    const { data } = await generateOrder({
      variables: {
        cartId,
        versionId,
      },
    });
    console.log(data);
    if (data.generateOrderByCartID) {
      toast.success('Order Generated Successfully ');
      toast.info(
        'This is your order id ',
        data.generateOrderByCartID.orderNumber
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
    cartItems,
    handleOrderCreate,
  };
};

export default useCheckout;
