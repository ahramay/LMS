// PricingPlanButton.js

import React from "react";

const PricingPlanButton = ({ setBillingType ,billingType}) => {
    const handleClickBtn = ( billingType) => {
        setBillingType(billingType);
    };

    return (
        <>
            <button
                onClick={() => handleClickBtn('monthly')}
                type="button"
                className={`relative whitespace-nowrap rounded-md ${billingType == 'monthly' && 'bg-white'} px-6 text-lg font-medium text-black shadow-sm hover:bg-indigo-50 focus:outline-none capitalize transition-all`}
            >
                Monthly billing
            </button>
            <button
                onClick={() => handleClickBtn('yearly')}
                type="button"
                className={`relative ml-0.5 ${billingType == 'yearly' && 'bg-white' } whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-lg font-medium text-black focus:outline-none capitalize transition-all`}
            >
                Yearly billing
            </button>
        </>
    );
};

export default PricingPlanButton;
