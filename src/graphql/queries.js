import { gql } from '@apollo/client';

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
export {
  fetch_product,
  fetchSingleProduct,
  fetchSearchedProducts,
  fetchSuggestion,
  checkExistUserMutation,
  createCustomer,
};
