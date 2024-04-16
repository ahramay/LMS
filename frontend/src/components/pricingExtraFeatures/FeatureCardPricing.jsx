import React from 'react';

const FeatureCardPricing = ({ title, price, period, features, buttonText }) => {
  return (<div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
      <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
        <h3>{title}</h3>
        <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">${price}
          <span className="text-gray-600 text-base ml-1">/mo</span>
        </h2>
        <div className="w-full px-5">
        <button className="flex items-center text-white bg-black border-0 py-2  px-4 w-full focus:outline-none justify-center rounded">{buttonText}</button>
        </div>
      </div>
      {features.map((feature, index) => (
        <p key={index} className={`bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
          {feature}
        </p>
      ))}
         <p className="bg-gray-100 text-gray-600 text-center font-lg h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
        </p>
        
        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </p>
        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </p>
        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </p>
        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </p>
      <div className="p-6 text-center border-t border-gray-300">
        <button className="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none justify-center rounded">{buttonText}</button>
      </div>
    </div>
  );
};

export default FeatureCardPricing;
