import { useQuery } from '@apollo/client';
import { fetch_product } from '../graphql/queries';

const useProductList = () => {
  const { data, error } = useQuery(fetch_product);
  if (error) {
    console.log(error);
  }

  return {
    data,
  };
};

export default useProductList;
