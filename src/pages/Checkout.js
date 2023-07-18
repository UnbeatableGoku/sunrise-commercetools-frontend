import { CircularProgress, TextField } from "@mui/material";
import BillingAddress from "../components/checkout/BillingAddress";
import CheckOutCart from "../components/checkout/CheckOutCart";
import ShippingMethod from "../components/checkout/ShippingMethod";
import useCheckout from "../talons/useCheckout";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    handleEmailSubmit,
    handleShippngAddressSubmit,
    cartItems,
    handleOrderCreate,
    userEmail,
    setUserEmail,
    userShippingAddress,
    setUsershippingAddress,
    showShippingAddress,
    showShippingMethod,
    showBillingAddress,
    userBillingAddress,
  } = useCheckout();
  console.log(cartItems);

  if (!cartItems) {
    return <CircularProgress />;
  }
  return (
    <div className="bg-gray-200">
      <div className="mx-auto  max-w-[800px]  w-full  ">
        <div className="flex flex-col  ">
          <div className=" py-6 px-3 bg-white mt-2 ">
            <h1 className="font-semibold text-2xl uppercase ">Checkout</h1>
          </div>
          <div className="flex">
            <div className="max-w-[490px] w-full">
              <div className="bg-white py-2 px-3 mt-2">
                <div className="font-medium text-xl">Email Address</div>

                {cartItems ? (
                  cartItems && cartItems.customerEmail && userEmail ? (
                    <div className="flex justify-between items-center">
                      <div>{cartItems.customerEmail}</div>
                      <div className="bg-black text-white border border-black cursor-pointer hover:bg-white hover:text-black transition-all duration-150">
                        <button
                          className="w-full p-2 px-4"
                          onClick={() => setUserEmail(null)}
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(handleEmailSubmit)}>
                      <div className="mt-3">
                        <TextField
                          size="small"
                          id="outlined-basic"
                          label="Email"
                          fullWidth
                          variant="outlined"
                          {...register("email")}
                          defaultValue={cartItems?.customerEmail}
                        />
                      </div>
                      <div className=" bg-black cursor-pointer py-2 mt-2 text-center border-2 transition-all duration-150  border-black  text-white font-bold text-base hover:bg-white  hover:text-black">
                        <button
                          className="uppercase tracking-wide w-full h-full"
                          type="submit"
                        >
                          Continue As guest
                        </button>
                      </div>
                    </form>
                  )
                ) : (
                  <CircularProgress color="inherit" />
                )}
              </div>
              <div className="bg-white py-2 px-3 mt-2">
                <div className="font-medium text-xl">Shipping Address</div>
                {!showShippingAddress ? (
                  <div></div>
                ) : cartItems ? (
                  cartItems.shippingAddress && userShippingAddress ? (
                    <div className="flex justify-between items-center">
                      <div>
                        {userShippingAddress.firstName +
                          userShippingAddress.lastName}
                        <br></br>

                        {userShippingAddress.streetName}
                        <br></br>

                        {userShippingAddress.city}
                        <br></br>

                        {userShippingAddress.country}
                        <br></br>

                        {userShippingAddress.postalCode}
                        <br></br>

                        {userShippingAddress.phone}
                      </div>
                      <div className="bg-black text-white border border-black cursor-pointer hover:bg-white hover:text-black transition-all duration-150">
                        <button
                          className="w-full p-2 px-4"
                          onClick={() => setUsershippingAddress(null)}
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(handleShippngAddressSubmit)}>
                      <div>
                        <div className="mt-3">
                          <TextField
                            size="small"
                            id="outlined-basic"
                            label="FirstName"
                            fullWidth
                            variant="outlined"
                            {...register("firstName")}
                            defaultValue={cartItems.shippingAddress?.firstName}
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
                            defaultValue={cartItems.shippingAddress?.lastName}
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
                            defaultValue={cartItems.shippingAddress?.streetName}
                          />
                        </div>
                        <div className="mt-3">
                          <select
                            id="outlined-basic"
                            name="country"
                            {...register("country")}
                            className="form-control"
                            defaultValue={cartItems.shippingAddress?.country}
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
                            defaultValue={cartItems.shippingAddress?.city}
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
                            defaultValue={cartItems.shippingAddress?.postalCode}
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
                            defaultValue={cartItems.shippingAddress?.phone}
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
                  )
                ) : (
                  <CircularProgress color="inherit" />
                )}
              </div>
              <div className="bg-white py-2 px-3 mt-2">
                <div className="font-medium text-xl">Shipping Method</div>
                {showShippingMethod ? (
                  <ShippingMethod
                    method={cartItems?.shippingInfo?.shippingMethodName}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <div className="bg-white py-2 px-3 mt-2">
                <div className="font-medium text-xl">Billing Address</div>
                {showBillingAddress ? (
                  <BillingAddress address={userBillingAddress} />
                ) : (
                  <div></div>
                )}
              </div>
              {/* <div>Payment</div> */}
              <div className=" bg-black cursor-pointer py-2 mt-2 text-center border-2 transition-all duration-150  border-black  text-white font-bold text-base hover:bg-white  hover:text-black">
                <button className="w-full" onClick={() => handleOrderCreate()}>
                  Order Generate
                </button>
              </div>
            </div>
            <div className=" max-w-[300px] w-full ms-3 ">
              {cartItems ? (
                <CheckOutCart cartItems={cartItems} />
              ) : (
                <CircularProgress color="success" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
