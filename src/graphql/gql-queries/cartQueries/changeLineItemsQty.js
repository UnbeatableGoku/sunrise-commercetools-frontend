import { gql } from "@apollo/client";

export const changeCartQty = gql`
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
