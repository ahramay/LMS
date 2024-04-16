import React, { useState } from "react";


const Paymentmethod = () => {
  const [formData, setFormData] = useState({
    cardnumber: "",
    expairydate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="">
      <div className="w-full ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start  w-full">
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="1234 1234 1234 1234"
              maxLength="19"
              className="shadow p-2 text-sm w-full rounded-2xl mb-2"
              onChange={handleInputChange}
              value={formData.cardnumber}
            />
          </div>

          <div className="flex flex-wrap gap-5 md:gap-16 md:flex-nowrap mb-5">
            <div className="flex flex-col justify-start  w-full">
              <input
                type="text"
                id="expairydate"
                name="expairydate"
                maxLength="7"
                placeholder="MM / YY"
                className="shadow p-2 text-sm w-full rounded-2xl"
                onChange={handleInputChange}
                value={formData.expairydate}
              />
            </div>
            <div className="flex flex-col justify-start  w-full">
              <input
                type="password"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                className="shadow p-2 text-sm w-full rounded-2xl"
                onChange={handleInputChange}
                value={formData.cvv}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Paymentmethod;
