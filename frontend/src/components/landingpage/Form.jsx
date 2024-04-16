import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    jobTitle: "",
    companyName: "",
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
    <div className="bg-dark-blue pt-10 m-auto  px-5 gap-8 lg:pt-20 lg:px-20 md:flex-nowrap">
      <div className=" text-center">
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-20">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h1>
      </div>
      <div className="w-full pb-10 lg:pb-20">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-5 md:gap-16 md:flex-nowrap mb-5">
            <div className="flex flex-col justify-start  w-full">
              <label for="fname" class="block text-sm text-white mb-1">
                First name
              </label>
              <input
                type="text"
                id="fname"
                name="firstName"
                className="shadow p-2 w-full rounded-2xl"
                onChange={handleInputChange}
                value={formData.firstName}
              />
            </div>
            <div className="flex flex-col justify-start  w-full">
              <label for="lname" class="block text-sm text-white mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lname"
                name="lastName"
                className="shadow p-2 w-full rounded-2xl"
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </div>
            <div className="flex flex-col justify-start w-full">
              <label for="email" class="block text-sm text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow p-2 w-full rounded-2xl"
                required
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-5 md:gap-16 md:flex-nowrap">
            <div className="flex flex-col justify-start  w-full">
              <label for="jobtitle" class="block text-sm text-white mb-1">
              Job title*
              </label>
              <input
                type="text"
                id="jobtitle"
                name="jobTitle"
                className="shadow p-2 w-full rounded-2xl"
                onChange={handleInputChange}
                value={formData.jobTitle}
              />
            </div>
            <div className="flex flex-col justify-start  w-full">
              <label for="companyname" className="block text-sm text-white mb-1">
              Company name
              </label>
              <input
                type="text"
                id="companyname"
                name="companyName"
                className="shadow p-2 w-full rounded-2xl"
                onChange={handleInputChange}
                value={formData.companyName}
              />
            </div>
           
          </div>
          <div>
          <p className="text-xs text-light-gray mt-4 leading-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            
<div className="flex items-center my-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-checkbox" className="ms-2 text-xs text-light-gray leading-6">
    What is Lorem Ipsum?</label>
</div>
<p className="text-xs text-light-gray mt-4 leading-6 mb-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />     
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            

          </div>
          <div className="mb-5">
          <ReCAPTCHA sitekey="Your client site key"/>
          </div>
          <button className="text-xs font-bold bg-theme-green hover:text-theme-green text-white hover:bg-white cursor-pointer rounded-2xl border-solid border-0   px-3 py-2 md:px-5 md:py-2 " type="submit">
         Submit
      </button>
        </form>
       
      </div>
      <hr className="w-full text-light border-t-1 "></hr>
    </div>
  );
};
export default Form;
