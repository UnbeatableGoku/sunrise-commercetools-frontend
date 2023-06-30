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

export { fetch_product, fetchSingleProduct };
