import React from "react";


const CartItemsSkeleton = () => {
  return (
    <div   role="status" className="animate-pulse">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="font-bold text-3xl text-dark-blue mb-5">
          Shopping Cart
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 py-10">
        <div className="flex-[2]">
          <div className="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mb-1"></div>

          <div className="flex flex-col md:flex-row py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
              <div className="w-24 h-24 bg-gray-200  dark:bg-gray-700 "></div>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex md:w-2/4 flex-col md:flex-row justify-between">
                <div className="w-full  ">
                  <h5 className=" h-5 full bg-gray-200 rounded-full dark:bg-gray-700 mb-1">
                    {" "}
                  </h5>
                  <div className="h-5 full bg-gray-200 rounded-full dark:bg-gray-700   mb-1"></div>
                  <div className="flex  flex-wrap gap-3 w-full xl:flex-nowrap">
                    <h6 className="flex flex-row  flex-nowrap items-center h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700  mb-2">
                      <span className="text-xl mr-1 h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700  " />
                    </h6>
                    <h6 className="flex flex-row justify-end  xl:justify-center items-center h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700  mb-2">
                      <span className="mr-1 text-xl h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700 " />
                    </h6>
                    <h6 className=" flex flex-row justify-start  xl:justify-end items-center h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700  mb-2">
                      <span className="mr-1 text-xl " />
                      <p className="h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700 "></p>
                    </h6>
                  </div>
                </div>
              </div>

              <div className=" hidden md:block">
                <h5 className="h-5 w-20   bg-gray-200 rounded-full dark:bg-gray-700  flex items-center flex-row mb-3 p-2"></h5>
              </div>

              <div className="flex items-center justify-end">
                <span
                  size={20}
                  className="h-5 w-20  ml-5 bg-gray-200 rounded-full dark:bg-gray-700 "
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
          <button className="bg-gray-200  dark:bg-gray-700 flex h-5  w-24 mt-4 text-right py-2 px-4 ml-2 rounded-full "></button>
          </div>
        </div>

        <div className="flex-[1]">
          <div className=" h-5 w-20 mt-4 bg-gray-200 mb-1 rounded-full dark:bg-gray-700">
           
          </div>

          <div className="p-5 my-5 gap-20 bg-gray-200 dark:bg-gray-700 rounded-xl">
            <div className="flex justify-between">
              <div className=" h-5 w-full mt-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
              <div className=" h-5 w-full mt-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
            </div>
            <div className="h-4 w-full  bg-gray-200 rounded-full dark:bg-gray-700 mb-5"></div>
          </div>

          <button
            className="w-full p-2 rounded-full  h-7  mt-4 bg-gray-200  dark:bg-gray-700  mb-3  "
           
          >

           
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemsSkeleton;
