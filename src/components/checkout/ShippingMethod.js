import React from "react";
import useShippingMethod from "../../talons/useShippingMethod";

const ShippingMethod = ({ method }) => {
  const { handleOnClick } = useShippingMethod();
  return (
    <div>
      {method ? (
        <div>{method}</div>
      ) : (
        <div>
          <from>
            <div>
              <div>Standard Delivery</div>
              <input
                type="radio"
                value="030680fd-ab97-4109-b868-c46b2b5fa183"
                name="shipping_method"
                onClick={(e) => handleOnClick(e)}
              />
            </div>
            <div>
              <div>Express Delivery</div>
              <input
                type="radio"
                value="2dddd145-5c28-46a0-b774-89ef1c6ef5c6"
                name="shipping_method"
                onClick={(e) => handleOnClick(e)}
              />
            </div>
          </from>
        </div>
      )}
    </div>
  );
};

export default ShippingMethod;
