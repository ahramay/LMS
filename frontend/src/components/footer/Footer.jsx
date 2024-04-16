import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import FooterList from "./FooterList";
import flogo from "../../assets/isea_logo_white.svg";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-dark-blue py-10 px-5 lg:py-20 lg:px-20">
      <div className="flex flex-wrap m-auto  mb-10 gap-8  md:flex-nowrap">
        <div className="flex flex-col justify-evenly gap-y-5  w-full">
          <a href="#" className="flex items-center">
            <img src={flogo} className="mr-3 h-10 sm:h-16  " alt=" Logo" />
          </a>
          <p className="text-sm text-light-gray mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-sm text-light-gray mt-4">
            1101 Wilson Boulevard,
            <br />
            Suite 1425
            <br />
            Arlington, VA 22209-1762
            <br />
            Phone: 703-525-1695
          </p>
          <div className="flex text-theme-green ">
            <FaFacebook className="px-2 text-4xl" />
            <FaTwitter className="px-2 text-4xl" />
            <FaLinkedin className="px-2 text-4xl" />
            <FaInstagram className="px-2 text-4xl" />
          </div>
        </div>
        <div className="flex flex-col justify-start  w-full">
          <FooterList></FooterList>
          <FooterList></FooterList>
        </div>
        <div className="flex flex-col justify-start w-full">
          <FooterList></FooterList>
        </div>
        <div className="flex flex-col justify-start w-full">
          <FooterList></FooterList>
        </div>
        <div className="flex flex-col justify-start w-full">
          <FooterList></FooterList>
        </div>
      </div>
      <hr className="w-full text-light border-t-1 "></hr>
      <div className="flex flex-wrap m-auto mt-4  gap-8  md:flex-nowrap">
        <div className="w-full ">
          <p className="text-sm text-light-gray ">
            {" "}
            &#169; {year} Present HSMA. All rights reserved.
          </p>
        </div>
        <div className="w-full ">
          <ul className=" flex gap-2 sm:justify-end lg:gap-4 w-full font-medium ">
            <li>
              <a href="#" className="text-sm text-theme-green ">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-theme-green">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
