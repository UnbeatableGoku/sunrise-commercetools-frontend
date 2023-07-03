import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../graphql/queries';

const useProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  const [fetchDetails, { data, error }] = useLazyQuery(fetchSingleProduct, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    fetchDetails({
      variables: {
        singleProductId: id,
      },
    });
  }, []);

  return {
    data,
    navigate,
  };
};

export default useProductDetails;
