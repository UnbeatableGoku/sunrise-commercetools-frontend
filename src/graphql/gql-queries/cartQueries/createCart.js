import { gql } from "@apollo/client";

export const createCart = gql`
  mutation Mutation($productId: String!) {
    createCart(productId: $productId) {
      id
      version
      lineItems {
        id
        quantity
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
          id
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
        variants {
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
          id
          sku
        }
      }
      customerEmail
      shippingAddress {
        firstName
        lastName
        streetName
        country
        city
        postalCode
        phone
      }
      billingAddress {
        firstName
        lastName
        streetName
        country
        city
        postalCode
        phone
      }
      taxedPrice
      totalGross
      totalPrice
    }
  }
`;
