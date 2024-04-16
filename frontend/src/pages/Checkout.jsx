import React from "react";

import useFetch from "../hooks/useFetch";
import CheckoutTemplate from "../components/Checkout/CheckoutTemplate";

const Checkout = () => {
  const { data, loading } = useFetch("/api/checkout/checkout-details");

  return (
    <>
      <div className=" pt-0 pb-5 px-5 lg:pb-20 lg:px-20 m-0">
        <div className="  grid grid-cols-1 m-auto mb-5 gap-8 ">
          {!!data && <CheckoutTemplate data={data?.cartItems} />}
        </div>
      </div>
    </>
  );
};

export default Checkout;
