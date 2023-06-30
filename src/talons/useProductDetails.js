import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../graphql/queries';

const useProductDetails = () => {
  const { id } = useParams();

  const [fetchDetails, { data, error }] = useLazyQuery(fetchSingleProduct, {
    variables: {
      singleProductId: id,
    },
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return {
    data,
  };
};

export default useProductDetails;
