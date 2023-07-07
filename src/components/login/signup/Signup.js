import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import useVerification from '../../../talons/useVerification';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';

const Signup = () => {
  const {
    handleSubmit,
    register,
    handleCheckUserExist,
    handleUserRegister,
    otp,
    setOtp,
    showOtp,
    mobile,
    setMobile,
  } = useVerification();
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const handlePhoneChange = (value) => {
    setMobile(value);
    if (value && !isValidPhoneNumber(value)) {
      setPhoneNumberError('Please Enter 10 Digits Number!!!');
    } else {
      setPhoneNumberError('');
    }
  };
  return (
    <div
      className={`relative p-6 mx-auto w-full transition-height overflow-y-hidden duration-500 ${
        showOtp ? 'h-full' : 'h-80'
      } `}
    >
      <div className=' '>
        <form
          className='flex  flex-col'
          onSubmit={handleSubmit(
            showOtp ? handleUserRegister : handleCheckUserExist
          )}
        >
          <input
            placeholder='Name'
            {...register('name')}
            className='border-b-2 pt-2 mb-5 outline-none  focus:border-b-black'
          />

          <input
            {...register('email')}
            placeholder='Email'
            type='email'
            className='border-b-2 pt-2 mb-5 outline-none  focus:border-b-black'
          />
          <input
            {...register('password')}
            placeholder='Password'
            className='border-b-2 pt-2 mb-5 outline-none  focus:border-b-black'
          />
          <PhoneInput
            placeholder='Mobile'
            value={mobile}
            onChange={handlePhoneChange}
            defaultCountry='IN'
            className='border-b-2 pt-2 mb-5 outline-none focus:border-b-black'
          />
          {phoneNumberError && (
            <p className='text-red-500'>{phoneNumberError}</p>
          )}
          {showOtp && (
            <OTPInput
              value={otp}
              {...register('otp')}
              onChange={setOtp}
              numInputs={6}
              containerStyle='flex gap-3 justify-center my-3 outline-none text-gray-800  '
              inputStyle=' w-full border-b-2 px-2  outline-none text-fuchsia-800 focus:border-gray-800 font-bold bg-fuchsia-50 !mr-0 flex-1 text-lg'
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus
            />
          )}

          <button className='bg-fuchsia-800 text-white p-2 hover:bg-fuchsia-950'>
            Submit
          </button>
        </form>
        <div id='recaptcha-container'></div>
      </div>
    </div>
  );
};

export default Signup;
