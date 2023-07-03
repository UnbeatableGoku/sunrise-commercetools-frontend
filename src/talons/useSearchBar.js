import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { fetchSuggestion } from '../graphql/queries';
import { debounce } from 'lodash';

const useSearchBar = () => {
  const { handleSubmit, register, reset, setValue } = useForm();
  const [suggest, setSuggest] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchSuggestion = debounce((value) => {
    console.log('on Change');
    handleGetSuggestedValue({
      variables: {
        keyword: value,
      },
    });
  }, 500);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSuggest(query);
    }
  }, []);

  const [handleGetSuggestedValue, { data, error }] =
    useLazyQuery(fetchSuggestion);

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  const handleSearchQuery = ({ searchQuery }) => {
    setSearchParams({ query: searchQuery });
  };

  return {
    handleSubmit,
    register,
    handleGetSuggestedValue,
    suggest,
    setSuggest,
    handleSearchQuery,
    handleSearchSuggestion,
    data,
    reset,
    setValue,
    setSearchParams,
  };
};

export default useSearchBar;
