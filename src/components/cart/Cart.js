import React from "react";
import LineItem from "./lineItem/LineItem";
import { size } from "lodash";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  return (
    <div
      className={` border-2 border-black px-4 max-h-96 h-full  w-80 ${
        cartItems ? "overflow-y-scroll" : "overflow-y-hidden"
      }`}
    >
      {cartItems ? (
        <div className="flex flex-col ">
          <div className="flex justify-between pb-3 text-base font-bold">
            <div>
              Total Amount :{" "}
              <span className="text-black">
                ${cartItems.totalPrice?.centAmount}
              </span>
            </div>
            <div>
              Total Items : <span>{cartItems.totalLineItemQuantity}</span>
            </div>
          </div>
          <div className="flex flex-col  ">
            {size(cartItems.lineItems) > 0 &&
              cartItems.lineItems.map((item, key) => (
                <LineItem lineItems={item} key={key} />
              ))}
          </div>
          <div className="flex justify-between mb-2">
            <div>
              <button className="bg-black text-white px-8 py-2 border border-black hover:bg-white hover:text-black">
                Cart{" "}
              </button>
            </div>
            <div>
              <Link to="c/checkout">
                <div className="bg-black text-white px-8 py-2 border border-black hover:bg-white hover:text-black ">
                  Checkout
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden text-center bg-white h-36">
          <h1>Cart Is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
