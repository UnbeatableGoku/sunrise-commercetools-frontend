import { useState } from 'react';
import FormModal from '../modal/formModal';
import SearchBar from '../serchbar/SearchBar';

const Header = ({ dark, setDark }) => {
  return (
    <header className='bg-gray-100 dark:bg-gray-700 '>
      <div className='container mx-auto px-5 py-4'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <a
              href='/'
              className='text-2xl font-bold text-gray-900 dark:text-white p-2'
            >
              SUNRISE
            </a>

            {!dark ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                fill='currentColor'
                className='bi bi-sunrise-fill text-yellow-600'
                viewBox='0 0 16 16'
              >
                {' '}
                <path d='M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                fill='currentColor'
                className='bi bi-sunset-fill text-yellow-600'
                viewBox='0 0 16 16'
              >
                {' '}
                <path d='M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z' />
              </svg>
            )}
          </div>
          {/* <div className='flex items-center'>
            <button
              onClick={() => setDark(!dark)}
              href='/contact'
              className='text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                fill='currentColor'
                className='bi bi-emoji-sunglasses'
                viewBox='0 0 16 16'
              >
                {' '}
                <path d='M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z' />{' '}
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z' />
              </svg>
            </button>
          </div> */}
          <div className='w-full'>
            <SearchBar />
          </div>
          <div>
            <div>
              <FormModal />
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={16}
                height={16}
                fill='currentColor'
                className='bi bi-bag-fill'
                viewBox='0 0 16 16'
              >
                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z' />
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
