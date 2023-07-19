import { gql } from "@apollo/client";

export const removeItemFromCart = gql`
 mutation RemoveItemFromCart($lineItemId: String!, $cartId: String!, $versionId: String!) {
  removeItemFromCart(lineItemId: $lineItemId, cartId: $cartId, versionId: $versionId) {
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