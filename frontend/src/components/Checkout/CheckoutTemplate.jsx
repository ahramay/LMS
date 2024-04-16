import Checkoutitemcart from "./Checkoutitemcart"


import CheckoutForm from "../CheckoutForm";
import { useNavigate } from "react-router-dom";

const CheckoutTemplate = ({ data }) => {
  const navigation =useNavigate();
  const handlePlaceOrder = (formData) => {
    console.log('Form Data:', formData);
  };
  
  return (
    <>
      <h2 className="text-4xl font-bold text-dark-blue mb-3 p-2">Checkout</h2>
      <div className=" flex flex-col lg:flex-row gap-5 md:gap-20   ">
        <div className="flex flex-col md:flex-row  py-0 px-0 w-full lg:w-2/3 justify-start ">
          <div className="flex flex-col w-full">
            <div>
              <CheckoutForm  onSubmit={handlePlaceOrder}/>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col py-5 px-5   lg:col-span-1 border hover:shadow-2xl rounded-md">
        <h4 className="text-xl font-bold text-dark-blue mb-3 p-2 pb-0 text-center">
              Current Cart
        </h4>
        <button onClick={()=>navigation('/cart')} className="text-lg text-center pb-4 text-[#6eb46f] ">
          Return to cart
        </button>
          {!!data && data?.map((item) => <Checkoutitemcart data={item} />)}
        </div>
      </div>
    </>
  );
};
export default CheckoutTemplate;