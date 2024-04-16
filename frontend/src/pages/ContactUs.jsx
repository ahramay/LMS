import React from 'react';

import membershipheroimg from "../assets/resources-bg-light.jpg"
import contactusimg from "../assets/contact-us-img.webp"
import { FaAddressBook } from "react-icons/fa";
import { FaPhone , FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <>
      <div className="w-full  py-10 px-5   lg:py-24 lg:px-20  p-5   bg-center bg-no-repeat bg-cover flex flex-col items-center" style={{backgroundImage: `url(${membershipheroimg})`,}}>
          <h2 className="text-3xl text-center lg:text-6xl font-bold text-dark-blue mb-10">
            Get in touch with us
          </h2>
          <h5 className="text-xl text-center mb-3 lg:w-3/4 ">
          Home / Contact Us
          </h5> 
      </div>
   
    <div className="flex items-center justify-between w-ful max-w-screen-lg mx-auto my-0 flex-col md:flex-row">
    <div className="flex flex-col justify-center sm:text-center lg:pt-12 lg:text-left xl:w-5/12 xl:pt -24">
        <p className="mb-4 font-semibold text-black md:mb-6 md:text-lg xl:text-xl">
        Delighted to present with pride.
        </p>

        <h1 className="mb-8 text-4xl font-bold text-dark-blue sm:text-5xl md:mb-12 md:text-6xl">
        Committed to ensuring safety.
        </h1>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consectetur harum. 
            Aut omnis esse facilis nam harum quia eum placeat deserunt, ex sunt assumenda quaerat!
        </p>
      </div>
        <div className="img w-full md:w-1/2">
            <img src={contactusimg} alt="contact-us" />
        </div>
    </div>
    <div className=" bg-gray-100 py-10 mt-24">
        <h3 className='text-center text-2xl font-bold  text-theme-green pb-4'>Reach out anytime</h3>
        <div className="flex justify-center items-center flex-col gap-5 md:flex-row md:gap-0">
      <div className="max-w-sm mx-4 bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg">
        <div className="p-10">
          <div className="text-3xl text-center mb-4">
          <FaAddressBook />
          </div>
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="max-w-sm mx-4 bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg">
        <div className="p-10">
          <div className="text-3xl text-center mb-4">
          <FaPhone />
          </div>
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>     
      <div className="max-w-sm mx-4 bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg">
        <div className="p-10">
          <div className="text-3xl text-center mb-4">
          <FaLocationDot />
          </div>
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
        </div>
    </div>
   



    <section class="text-gray-600 body-font relative px-24">
    <div class="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.9231484875!2d-77.1793856162061!3d38.89363866446821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sin!4v1705610408455!5m2!1sen!2sin"  style={{width:1000, height:500}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className='text-xl font-bold p-4'>Send us a message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-dark-blue transition-all "
          >
            Send Message
          </button>
        </form>
        </div>
    </div>
</section>
<section className='pb-16'>
<div className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <p className="mb-4 font-semibold text-theme-green md:mb-6 md:text-lg xl:text-xl">Lorem ipsum dolor sit.</p>

      <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Lorem ipsum dolor sit adipisicing elit.</h2>

      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        <a href="#" className="inline-block rounded-lg bg-theme-green px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-dark-blue focus-visible:ringmd:text-base">Lorem, ipsum.</a>

        <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring  md:text-base">Lorem, ipsum.</a>
      </div>
    </div>
  </div>
</div>
</section>





    </>
  );
};

export default ContactUs;
