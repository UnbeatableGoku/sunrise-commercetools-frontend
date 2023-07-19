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

const getCartItems = gql`
  mutation GetCartById($cartId: String!) {
    getCartById(cartId: $cartId)
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
    $addresInput: AddresInput!
    $cartId: String!
    $versionId: String!
  ) {
    addShippingAddress(
      addresInput: $addresInput
      cartId: $cartId
      versionId: $versionId
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
    $addresInput: AddresInput!
    $cartId: String!
    $versionId: String!
  ) {
    addBillingAddress(
      addresInput: $addresInput
      cartId: $cartId
      versionId: $versionId
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
  getCartItems,
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
