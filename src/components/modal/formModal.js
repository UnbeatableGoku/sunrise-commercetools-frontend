import React, { useEffect, useState } from 'react';
import Login from '../login/signup/Login';
import Signup from '../login/signup/Signup';

/**
 * Parent of this component is Header.
 *
 * Purpose:On the the click of login/signup this formmodal will show up and it is used to get the details of the customer
 */
export default function FormModal() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal]);

  const [toggelForm, setToggleForm] = useState(true);
  return (
    <>
      <button
        className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
            <div className='relative w-full my-6 mx-auto max-w-sm'>
              <div className='border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex  p-6 border-b border-solid border-slate-200 rounded-t'>
                  <div>
                    <h3 className='text-3xl text-start font-semibold '>
                      SignUp
                    </h3>
                    <div className='text-xs pt-2 text-gray-500'>
                      Already Have An Account?
                      <span onClick={() => setToggleForm(!toggelForm)}>
                        Login
                      </span>
                    </div>
                  </div>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className=' text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      X
                    </span>
                  </button>
                </div>
                {toggelForm ? <Signup /> : <Login />}
                <div className='w-full flex items-center justify-between py-1'>
                  <hr className='w-full bg-gray-400' />
                  <p className='text-base font-medium leading-4 px-1.5 text-gray-400'>
                    OR
                  </p>
                  <hr className='w-full bg-gray-400  ' />
                </div>
                <div className=' p-6  rounded-b'>
                  <button
                    aria-label='Continue with google'
                    role='button'
                    className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-fuchsia-700 flex items-center w-full '
                  >
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg'
                      alt='google'
                    />

                    <p className='text-base font-medium ml-4 text-gray-700'>
                      Continue with Google
                    </p>
                  </button>
                  <button
                    aria-label='Continue with github'
                    role='button'
                    className='focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-fuchsia-700 flex items-center w-full mt-4'
                  >
                    <imgnp
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg'
                      alt='github'
                    />

                    <p className='text-base font-medium ml-4 text-gray-700'>
                      Continue with Github
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
