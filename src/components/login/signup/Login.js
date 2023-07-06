import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import useVerification from '../../../talons/useVerification';

const Login = () => {
  const {
    handleSubmit,
    otp,
    setOtp,
    loginWithMobile,
    showOtp,
    verifyLoginMobile,
    register,
    loginWithEmail,
  } = useVerification();

  const [toggleFormType, setToggleFormType] = useState(false);
  const toggleForm = () => {
    setToggleFormType(!toggleFormType);
  };

  return (
    <div
      className={`relative p-6 mx-auto w-full transition-height duration-500 overflow-x-hidden ${
        toggleFormType ? 'h-56' : 'h-48'
      } overflow-y-hidden`}
    >
      <div className='flex'>
        <form
          onSubmit={handleSubmit(showOtp ? loginWithMobile : verifyLoginMobile)}
          className={`transition-all duration-200 flex-col flex-1 ${
            toggleFormType ? 'absolute -right-full' : 'relative flex right-0'
          }`}
        >
          <input
            placeholder='Mobile'
            {...register('mobile')}
            className='border-b-2 pb-2 mb-2 outline-none focus:border-b-black'
          />
          {showOtp && (
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle='flex gap-3 justify-center my-3 outline-none text-gray-800  '
              inputStyle='w-full border-b-2 px-2  outline-none text-fuchsia-800 focus:border-gray-800 font-bold  !mr-0 flex-1 text-lg'
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus
            />
          )}
          <button
            type='submit'
            className='bg-fuchsia-800 text-white p-2 hover:bg-fuchsia-950'
          >
            Submit
          </button>
          <button
            onClick={toggleForm}
            type='button'
            className='capitalize text-xs mt-2  tracking-widest text-black font-medium    text-end flex items-center justify-start'
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-arrow-bar-left'
                viewBox='0 0 16 16'
              >
                {' '}
                <path
                  fill-rule='evenodd'
                  d='M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z'
                />
              </svg>
            </span>
            Login with Email
          </button>
        </form>
        <form
          onSubmit={handleSubmit(loginWithEmail)}
          className={`transition-all duration-200 flex-col flex-1 ${
            toggleFormType ? 'relative flex right-0' : 'absolute right-full'
          }`}
        >
          <input
            placeholder='Email'
            {...register('email')}
            className='border-b-2 pb-2 mb-5 outline-none focus:border-b-black'
          />
          <input
            {...register('password')}
            placeholder='Password'
            className='border-b-2 pb-2 mb-5 outline-none focus:border-b-black'
          />

          <button
            type='submit'
            className='bg-fuchsia-800 text-white p-2 hover:bg-fuchsia-950'
          >
            Submit
          </button>
          <button
            onClick={toggleForm}
            className='capitalize text-xs mt-2  tracking-widest text-black font-medium    text-end flex items-center justify-end'
            type='button'
          >
            Login with Mobile
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-arrow-bar-right'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z'
                />
              </svg>
            </span>
          </button>
        </form>
        <div id='recaptcha-container'></div>
      </div>
    </div>
  );
};

export default Login;
