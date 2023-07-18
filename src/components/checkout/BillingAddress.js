import { TextField } from "@mui/material";
import React from "react";
import useBillingAddress from "../../talons/useBillingAddress";

const BillingAddress = ({ address }) => {
  const { register, handleSubmit, handleBillingAddressSubmit } =
    useBillingAddress();
  return (
    <div>
      {address ? (
        <div>
          {address.firstName + address.lastName}
          <br></br>

          {address.streetName}
          <br></br>

          {address.city}
          <br></br>

          {address.country}
          <br></br>

          {address.postalCode}
          <br></br>

          {address.phone}
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleBillingAddressSubmit)}>
          <div>
            <div className="mt-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="FirstName"
                fullWidth
                variant="outlined"
                {...register("firstName")}
              />
            </div>
            <div className="mt-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="LastName"
                fullWidth
                variant="outlined"
                {...register("lastName")}
              />
            </div>
            <div className="mt-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="StreetNumber"
                fullWidth
                variant="outlined"
                {...register("streetName")}
              />
            </div>
            <div className="mt-3">
              <select
                id="outlined-basic"
                name="country"
                defaultValue="" // Set the default value to an empty string
                {...register("country")}
                className="form-control"
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="DE">Germany (DE)</option>
              </select>
            </div>

            <div className="mt-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="City"
                fullWidth
                variant="outlined"
                {...register("city")}
              />
            </div>
            <div className="mt-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="PostalCode"
                fullWidth
                variant="outlined"
                {...register("postalCode")}
              />
            </div>
            <div className="mt-3">
              <TextField
                size="small"
                id="outlined-basic"
                label="PhoneNo"
                fullWidth
                variant="outlined"
                {...register("phone")}
              />
            </div>
          </div>
          <div className=" bg-black cursor-pointer py-2 mt-2 text-center border-2 transition-all duration-150  border-black  text-white font-bold text-base hover:bg-white  hover:text-black">
            <button
              className="uppercase tracking-wide w-full h-full "
              type="submit"
            >
              {" "}
              Add Shippng Address
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BillingAddress;
