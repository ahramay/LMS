import { RiDeleteBin6Line } from "react-icons/ri";
import { PiGraduationCap } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { MdMenuBook } from "react-icons/md";
import { FaTag } from "react-icons/fa6";

const CartItem = ({ data, handleDeleteAction }) => {
  return (
    <div className="flex flex-col md:flex-row py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="sdfds" alt="sdf" width={120} height={120} />
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex md:w-2/4 flex-col md:flex-row justify-between">
          <div className="w-full">
            <h5 className="text-sm font-bold text-dark-blue mb-1">
              {data?.course?.title}
            </h5>
            <div className="text-3xs  text-black mb-2  md:block">
              {data?.course?.topic}
            </div>
            <div className="flex  flex-wrap gap-3 w-full xl:flex-nowrap">
              <h6 className="text-3xs flex flex-row w-fit  flex-nowrap items-center text-theme-green mb-2">
                <PiGraduationCap className="text-xl mr-1  " /> 5-8 Years
              </h6>
              <h6 className="text-3xs  flex flex-row justify-end  xl:justify-center w-fit items-center text-theme-green mb-2">
                <CiDollar className="mr-1 text-xl" /> {data?.course?.duration}
              </h6>
              <h6 className="text-3xs  flex flex-row w-fit  justify-start  xl:justify-end items-center text-theme-green line-clamp-1 mb-2">
                <MdMenuBook className="mr-1 text-xl " />
                <p className="line-clamp-1">{data?.course?.modality}</p>
              </h6>
            </div>
          </div>
        </div>
        <div className="text-md font-medium text-black hidden md:block">
          <h5 className="text-lg font-bold text-theme-green flex items-center flex-row mb-3 p-2">
            ${data?.course?.duration} <FaTag className="ml-2" />
          </h5>
        </div>

        <div className="flex items-center justify-end">
          <RiDeleteBin6Line
            size={20}
            onClick={handleDeleteAction}
            className="cursor-pointer ml-5 text-black hover:text-theme-green-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;