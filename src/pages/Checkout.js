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
  const cartId = localStorage.getItem("cartId");
  const versionId = localStorage.getItem("versionId");

  if (!cartId) {
    return (
      <>
        <div className="mx-auto w-96 mt-10 flex justify-evenly flex-col items-center text-4xl bg-black rounded-sm text-white   h-80">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>

          <div>Cart Is Empty!!</div>
        </div>
        <div className="mt-10 w-96 mx-auto  flex justify-center py-8 items-center  bg-black text-white text-lg hover:text-black border border-black hover:bg-white transition-all duration-300  cursor-pointer">
          Go Back To Shopping
          <div className=" ms-2   svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke={`#ffffff  `}
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-basket   "
            >
              <path d="m5 11 4-7" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
              <path d="m9 11 1 9" />
              <path d="M4.5 15.5h15" />
              <path d="m15 11-1 9" />
            </svg>
          </div>
        </div>
      </>
    );
  }
  if (cartId) {
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
                              defaultValue={
                                cartItems.shippingAddress?.firstName
                              }
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
                              defaultValue={
                                cartItems.shippingAddress?.streetName
                              }
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
                              defaultValue={
                                cartItems.shippingAddress?.postalCode
                              }
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
                  <button
                    className="w-full"
                    onClick={() => handleOrderCreate()}
                  >
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
  }
};

export default Checkout;
