import React, { useEffect, useState } from 'react';
import useFormModal from '../../talons/useFormModal';
import Login from '../login/signup/Login';
import Signup from '../login/signup/Signup';

/**
 * Parent of this component is Header.
 *
 * Purpose:On the the click of login/signup this formmodal will show up and it is used to get the details of the customer
 */
export default function FormModal() {
  const [showModal, setShowModal] = useState(false);

  const { handleGoogleCredentials } = useFormModal();
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal]);

  const [toggleForm, setToggleForm] = useState(true);
  return (
    <>
      <button
        className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6   rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Login / Signup
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-full my-6 mx-auto max-w-sm'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex p-6 border-b border-solid border-slate-200 rounded-t'>
                  <div>
                    <h3 className='text-3xl text-start font-normal'>
                      {toggleForm ? 'SignUp' : 'Login'}
                    </h3>
                    <div className='text-xs pt-2 text-gray-500'>
                      {toggleForm
                        ? 'Already Have An Account? '
                        : 'Create New Account? '}
                      <span
                        onClick={() => setToggleForm(!toggleForm)}
                        className='cursor-pointer font-bold hover:text-black'
                      >
                        {toggleForm ? 'Login' : 'Signup'}
                      </span>
                    </div>
                  </div>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:opacity-60'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      X
                    </span>
                  </button>
                </div>
                {toggleForm ? <Signup /> : <Login />}
                <div className='w-full flex items-center justify-between py-1'>
                  <hr className='w-full bg-gray-400' />
                  <p className='text-base font-medium leading-4 px-1.5 text-gray-400'>
                    OR
                  </p>
                  <hr className='w-full bg-gray-400' />
                </div>
                <div className='p-6 flex rounded-b '>
                  <button
                    className='flex-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2.5 px-4 border rounded-lg border-fuchsia-700 flex items-center w-full me-2'
                    type='button'
                    onClick={() => handleGoogleCredentials()}
                  >
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg'
                      alt='google'
                    />

                    <p className='text-base font-medium ml-4 text-gray-700 capitalize'>
                      with Google
                    </p>
                  </button>
                  <button
                    aria-label='Continue with github'
                    className='flex-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2.5 px-4 border rounded-lg border-fuchsia-700 flex items-center w-full'
                  >
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg'
                      alt='github'
                    />

                    <p className='text-base font-medium ml-4 text-gray-700 capitalize'>
                      with Github
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
