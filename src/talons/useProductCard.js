import { useMutation } from '@apollo/client';
import {
  addProductToCart,
  createCart,
  removeItemFromCart,
} from '../graphql/queries';

const useProductCard = () => {
  const [createCartItems, { error: cartError }] = useMutation(createCart);
  const [addItemsToCart, { error: ItemsError }] = useMutation(addProductToCart);
  const [removeFromCart, { error: removeError }] =
    useMutation(removeItemFromCart);

  const handleAddToCart = async (id) => {
    const cartId = localStorage.getItem('cartId');
    const versionId = localStorage.getItem('versionId');

    if (cartId) {
      const { data } = await addItemsToCart({
        variables: {
          productId: id,
          cartId,
          versionId,
        },
      });
      console.log(data.addItemsToCart);
      localStorage.setItem('versionId', data.addItemsToCart.version);
    } else {
      const { data } = await createCartItems({ variables: { productId: id } });
      console.log(data.createCart);
      localStorage.setItem('cartId', data.createCart.id);
      localStorage.setItem('versionId', data.createCart.version);
    }
  };

  const handleRemoveFromCart = async (id) => {
    const cartId = localStorage.getItem('cartId');
    const versionId = localStorage.getItem('versionId');
    const { data } = await removeFromCart({
      variables: {
        lineItemId: id,
        cartId,
        versionId,
      },
    });
    console.log(data);
  };
  return { handleAddToCart, handleRemoveFromCart };
};

export default useProductCard;
