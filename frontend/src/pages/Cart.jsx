import React, { useEffect, useState } from "react";
import CartItemsSkeleton from "../components/skeleton/CartItemsSkeleton";
import CartItem from "../components/cartpage/CartItem";
import RelaedCours from "../components/cartpage/RelaedCours";
import emptyCartimg from "../assets/empty-cart.webp";
import useFetch from "../hooks/useFetch";

import { useDispatch } from "react-redux";
import { removeItemFromCart, clearCart } from "../redux/slice/cartSlice";
import { fetchCartItems } from "../redux/slice/cartSlice";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  const cart = useSelector(state => state?.cart?.items);
  const loading = useSelector(state => state?.cart?.loading);
  const cartItemCount= useSelector(state=>state?.cart?.cartItemsLenght)
  const totalPrice = useSelector(selectTotalPrice);



  const dispatch = useDispatch();
  const navigation=useNavigate();

  useEffect(() => {
    dispatch(fetchCartItems());
    
  }, [dispatch]);



 
  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

    // for dummy purpose only we have related course only for this course Id later we can make it dynamic / random from cart items 
    const{data}=useFetch(`api/course/related/65cf1ba254766f845198e4b5?random=true&limit=4`);

  return (
    <div className="w-full md:py-20 px-10">
      { loading === "loading" ? (
        <CartItemsSkeleton />
      ) : (
        cart?.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="font-bold text-3xl text-dark-blue mb-5">
                Shopping Cart
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-md font-bold text-dark-blue mb-1">
                  {cartItemCount === 1
                    ? "1 course item"
                    : `${cartItemCount} courses items`}
                </div>
                {cart?.map((item) => (
                  <CartItem
                    data={item}
                    handleDeleteAction={()=>handleRemoveFromCart(item?._id)}
                  />
                ))}
                <div className="flex justify-end w-full">
                  <button
                    className="bg-theme-green font-sans mt-4 text-right text-white font-semibold py-2 px-4 ml-2 rounded-full hover:bg-dark-blue"
                    onClick={handleClearCart}
                  >
                    Empty Cart
                  </button>
                </div>
              </div>

              <div className="flex-[1]">
                <div className="text-md font-bold text-dark-blue mb-1">
                  Summary
                </div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="font-bold text-xl text-dark-blue mb-5">
                      Total
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      &#36;{totalPrice}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit quae quisquam commodi in, nulla magnam.
                  </div>
                </div>

                <button
                  className="w-full py-4 rounded-full hover:bg-dark-blue bg-theme-green text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={()=>navigation('/checkout')}
                >
                  Checkout
                  {/* {loading && <img src="/spinner.svg" />*/}
                </button>
              </div>
            </div>
            {!! data && <RelaedCours filterData={data}/>}
          </>
        )
      )}

      {cart?.length < 1 && loading !== 'loading' ? (
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <img
            src={emptyCartimg}
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top Courses.
          </span>
          <a
            href="/training"
            className="py-4 px-8 rounded-full hover:bg-dark-blue bg-theme-green text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </a>
        </div>
      ):""}
    </div>
  );
};

export default Cart;
