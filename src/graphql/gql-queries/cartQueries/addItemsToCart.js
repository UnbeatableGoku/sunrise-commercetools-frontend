import { gql } from "@apollo/client";

export const addProductToCart = gql`
  mutation AddItemsToCart(
    $productId: String!
    $cartId: String!
    $versionId: String!
  ) {
    addItemsToCart(
      productId: $productId
      cartId: $cartId
      versionId: $versionId
    ) {
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
      }
      customerEmail
      shippingAddress {
        city
        country
        firstName
        lastName
        phone
        postalCode
        streetName
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
