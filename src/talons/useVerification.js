import React, { useState } from 'react';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  EmailAuthProvider,
  linkWithCredential,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebaseConfiguration';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { checkExistUserMutation, createCustomer } from '../graphql/queries';
import { toast } from 'react-toastify';

const useVerification = () => {
  const { handleSubmit, register } = useForm();
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [checkExistUser, { error }] = useMutation(checkExistUserMutation, {
    fetchPolicy: 'no-cache',
  });
  const [createNewUser, { error: userError }] = useMutation(createCustomer);

  if (error) {
    console.log(error);
  }

  async function handleCheckUserExist({ email }) {
    try {
      const updatedMobileNo = mobile.slice(3);
      const { data } = await checkExistUser({
        variables: {
          email,
          phoneNumber: mobile,
        },
      });
      if (data.verifyExistUser.userExist === false) {
        onSignup(mobile);
        setShowOtp(true);
      }
      if (data.verifyExistUser.userExist === true) {
        toast.error('User Already Exist');
        console.log('user already exist');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onSignup(moblieNo) {
    const appVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          console.log('reCAPTCHA verified');
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
        },
      },
      auth
    );

    signInWithPhoneNumber(auth, moblieNo, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success("OTP Sent Don't Refresh The Page ");
        console.log('OTP sent');
      })
      .catch((error) => {
        console.log('Error sending OTP:', error);
      });
  }

  async function handleUserRegister({ email, password, name }) {
    console.log(email, password, otp);
    try {
      const credential = await window.confirmationResult.confirm(otp);
      const user = credential.user;
      console.log(user);
      const result = await updateProfile(user, { displayName: name });
      console.log(result);
      const anotherUser = await linkEmailPasswordProvider(
        user,
        email,
        password
      );
      console.log(anotherUser);
      const { data } = await createNewUser({
        variables: {
          tokenId: user.accessToken,
        },
      });
      console.log(data);
      if(data.createCustomer){
        toast.success('User Created Successfully')
      }
    } catch (error) {
      console.log('Error verifying OTP:', error);
    }
  }
  async function linkEmailPasswordProvider(user, email, password) {
    const credential = EmailAuthProvider.credential(email, password);
    try {
      await linkWithCredential(user, credential);

      console.log('Email/password provider linked successfully');
    } catch (error) {
      console.log('Error linking email/password provider:', error);
    }
  }
  async function loginWithEmail({ email, password }) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      if(result){
        toast.success('User Login Successfully')
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function verifyLoginMobile() {
    const updatedMobileNo = mobile.slice(3);

    try {
      console.log(updatedMobileNo);
      onSignup(mobile);
      setShowOtp(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function loginWithMobile() {
    try {
      const credential = await window.confirmationResult.confirm(otp);
      console.log(credential);
      if(credential){
        toast.success('User Login Successfully')

      }
    } catch (error) {
      console.log(error);
    }
  }
  return {
    onSignup,
    handleSubmit,
    register,
    handleCheckUserExist,
    handleUserRegister,
    showOtp,
    otp,
    setOtp,
    loginWithMobile,
    verifyLoginMobile,
    loginWithEmail,
    setMobile,
    mobile,
  };
};

export default useVerification;
