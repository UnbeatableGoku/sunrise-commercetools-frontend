import React from 'react';
import useSearchBar from '../../talons/useSearchBar';

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    setSuggest,
    handleSearchQuery,
    handleSearchSuggestion,
    data,
    suggest,
    setValue,
    setSearchParams,
  } = useSearchBar();

  return (
    <div className='mb-3 mx-5 sm:mx-56'>
      <div className='relative mb-4 flex w-full flex-wrap items-stretch '>
        <input
          type='search'
          className='relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='button-addon2'
          defaultValue={suggest}
          {...register('searchQuery')}
          onChange={(e) => handleSearchSuggestion(e.target.value)}
        />
        <span
          className='input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200'
          id='basic-addon2'
        >
          <button type='submit' onClick={handleSubmit(handleSearchQuery)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
        <div className='absolute top-10 w-full    z-10  '>
          {data &&
            data.searchSuggestion.map((item) => {
              return (
                <span
                  className='block p-2 text-sm border bg-white cursor-pointer'
                  onClick={() => {
                    setSuggest(item.text);
                    setValue('searchQuery', item.text);
                    handleSearchSuggestion('');
                    setSearchParams({ query: item.text });
                  }}
                >
                  {item.text}
                </span>
              );
            }, [])}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
