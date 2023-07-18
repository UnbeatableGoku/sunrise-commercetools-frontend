import { gql } from "@apollo/client";

const fetch_product = gql`
  query GetProducts {
    products {
      id
      name {
        ...NameFragment
      }
      slug {
        ...NameFragment
      }
      metaDescription {
        ...NameFragment
      }
      masterVariant {
        ...VariantFragment
      }
    }
  }

  fragment NameFragment on Name {
    en
  }

  fragment VariantFragment on ProductVariant {
    images {
      url
    }
    prices {
      value {
        centAmount
      }
    }
  }
`;

const fetchSingleProduct = gql`
  query SingleProduct($singleProductId: String!) {
    singleProduct(id: $singleProductId) {
      name {
        en
      }
      slug {
        en
      }
      metaDescription {
        en
      }
      masterVariant {
        images {
          url
        }
        prices {
          value {
            centAmount
            currencyCode
          }
        }
        attributes
        sku
      }
    }
  }
`;

const fetchSearchedProducts = gql`
  query SearchProducts($query: String!) {
    searchProducts(query: $query) {
      id
      name {
        en
      }
      slug {
        en
      }
      masterVariant {
        attributes
        images {
          url
        }
        prices {
          value {
            centAmount
            currencyCode
          }
        }
        sku
      }
    }
  }
`;

const fetchSuggestion = gql`
  query SearchSuggestion($keyword: String!) {
    searchSuggestion(keyword: $keyword) {
      text
    }
  }
`;

const checkExistUserMutation = gql`
  mutation VerifyExistUser($email: String!, $phoneNumber: String!) {
    verifyExistUser(email: $email, phoneNumber: $phoneNumber)
  }
`;

const createCustomer = gql`
  mutation CreateCustomer($tokenId: String!) {
    createCustomer(tokenId: $tokenId)
  }
`;

const createCustomerWithSocials = gql`
  mutation VerifySocialUser($token: String!) {
    verifySocialUser(token: $token)
  }
`;
const generateToken = gql`
  mutation GenerateToken($token: String!) {
    generateToken(token: $token)
  }
`;

const addProductToCart = gql`
  mutation AddItemsToCart(
    $productId: String!
    $cartId: String!
    $versionId: String!
  ) {
    addItemsToCart(
      productId: $productId
      cartId: $cartId
      versionId: $versionId
    )
  }
`;
const createCart = gql`
  mutation CreateCart($productId: String!) {
    createCart(productId: $productId)
  }
`;

const removeItemFromCart = gql`
  mutation RemoveItemFromCart(
    $lineItemId: String!
    $cartId: String!
    $versionId: String!
  ) {
    removeItemFromCart(
      lineItemId: $lineItemId
      cartId: $cartId
      versionId: $versionId
    )
  }
`;

const getCartItems = gql`
  mutation GetCartById($cartId: String!) {
    getCartById(cartId: $cartId)
  }
`;

const changeCartQty = gql`
  mutation ChangeCartItemsQty(
    $cartId: String!
    $versionId: String!
    $lineItemId: String!
    $quantity: Int!
  ) {
    changeCartItemsQty(
      cartId: $cartId
      versionId: $versionId
      lineItemId: $lineItemId
      quantity: $quantity
    )
  }
`;

const addEmail = gql`
  mutation AddEmailIdAsGuest(
    $cartId: String!
    $versionId: String!
    $email: String!
  ) {
    addEmailIdAsGuest(cartId: $cartId, versionId: $versionId, email: $email)
  }
`;

const addShippingAddress = gql`
  mutation AddShippingAddress(
    $cartId: String!
    $versionId: String!
    $shippingAddresInput: shippingAddress
  ) {
    addShippingAddress(
      cartId: $cartId
      versionId: $versionId
      shippingAddresInput: $shippingAddresInput
    )
  }
`;

const addShippingMethod = gql`
  mutation AddShippingMethod(
    $cartId: String!
    $versionId: String!
    $shippingMethodId: String!
  ) {
    addShippingMethod(
      cartId: $cartId
      versionId: $versionId
      shippingMethodId: $shippingMethodId
    )
  }
`;

const addBillingAddress = gql`
  mutation AddBillingAddress(
    $cartId: String!
    $versionId: String!
    $shippingAddresInput: shippingAddress
  ) {
    addBillingAddress(
      cartId: $cartId
      versionId: $versionId
      shippingAddresInput: $shippingAddresInput
    )
  }
`;

const getCartItemsWithTypeDef = gql`
  mutation GetCartItems($cartId: String!) {
    getCartItems(cartId: $cartId)
  }
`;

const verifyUserByToken = gql`
  query Query {
    verifyUserByTokenId
  }
`;

const generateOrderByCartId = gql`
  mutation GenerateOrderByCartID($cartId: String!, $versionId: String!) {
    generateOrderByCartID(cartId: $cartId, versionId: $versionId)
  }
`;
export {
  fetch_product,
  fetchSingleProduct,
  fetchSearchedProducts,
  fetchSuggestion,
  checkExistUserMutation,
  createCustomer,
  createCustomerWithSocials,
  generateToken,
  addProductToCart,
  createCart,
  removeItemFromCart,
  getCartItems,
  changeCartQty,
  addEmail,
  addShippingAddress,
  addShippingMethod,
  addBillingAddress,
  getCartItemsWithTypeDef,
  verifyUserByToken,
  generateOrderByCartId,
};


// {
//   type
//   id
//   version
//   totalLineItemQuantity
//   versionModifiedAt
//   lineItems {
//     id
//     productId
//     productKey
//     name
//     variant {
//       id
//       sku
//       images {
//         url
//       }
//     }
//     price

//     quantity
//   }
//   taxedPrice
//   totalPrice
//   shippingInfo
// }