import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { TbCircleXFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
interface PlanData {
  planCategory: string;
  planTagLine: string;
  monthSubCost: number;
  listofItemsIncludes: string[];
  listofItemsExculdes?: string[]; 
  buttonName: string;
}

interface SubscriptionPlanProps {
  planData: PlanData;
  billingType: 'monthly' | 'yearly';
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({ planData, billingType }) => {
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate(`/checkout?category=${planData.planCategory}&tagline=${planData.planTagLine}&cost=${planData.monthSubCost}&billing=${billingType}`);
  };
  return (
    <>
      <div className={'bg-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl ms-2'}>
        <div className={`text-center ${planData?.planCategory == 'Personal' ? 'bg-[#EEEDEB]' : planData?.planCategory == 'Team' ? 'bg-[#F5EEE6]' : 'bg-[#E0CCBE] '} w-full p-6`}>
          <h4 className="text-2xl uppercase font-extrabold">{planData?.planCategory ? planData?.planCategory : "basic"}</h4>
          <p className="text-xs mt-2 ">{planData?.planTagLine ? planData?.planTagLine : "Lorem ipsum dolor sit."}</p>
          <h3 className="text-2xl  font-extrabold mt-4">
            ${planData?.monthSubCost ? planData?.monthSubCost : "11"}
            <span className=" font-medium  ml-2 capitalize">/ {billingType}</span>
          </h3>
          <button
            type="button"
            onClick={handleCheckout}
            className="w-full mt-8 px-2 py-2.5 text-md capitalize font-semibold text-black bg-gray-100 hover:text-white  hover:bg-black transition-all rounded-full"
          >
            {planData?.buttonName ? planData?.buttonName : "Buy Now"}
          </button>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-bold mb-4">Plan Included</h4>
          <ul className="space-y-4 ">

            {
              planData?.listofItemsIncludes ? planData?.listofItemsIncludes?.map((item, index) => (
                <li className="flex items-center gap-3 text-sm " key={index}>
                  <IoIosCheckmarkCircle size={25} color="green" />
                  {item}
                </li>
              )) : "Start Now"
            }

            {
              planData?.listofItemsExculdes && planData?.listofItemsExculdes?.map((listItem, index) =>
                <li className="flex gap-3 items-center text-sm" key={index}>
                  <TbCircleXFilled size={25} color="red" />
                  {listItem}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlan;
