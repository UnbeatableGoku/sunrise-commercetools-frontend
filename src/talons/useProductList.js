import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedProducts, fetch_product } from '../graphql/queries';

const useProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query');
  const [fetchProducts, { data, error, loading }] = useLazyQuery(
    query ? fetchSearchedProducts : fetch_product
  );

  useEffect(() => {
    if (query) {
      fetchProducts({
        variables: {
          query: query,
        },
      });
    } else {
      fetchProducts();
    }
  }, [query, fetchProducts]);

  if (error) {
    console.log(error);
  }

  return {
    data,
    loading,
    error,
  };
};

export default useProductList;
