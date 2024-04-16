import React from "react";
import profilePic from "../../assets/contact-us-img.webp";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
const TeamCard = () => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 cursor-pointer">
      <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <img
          src={profilePic}
          loading="lazy"
          alt="Photo "
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <div className="text-center font-bold text-indigo-500 md:text-lg">
          Lorem, ipsum
        </div>
        <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
          dolor sit
        </p>
        <div className="flex justify-center">
          <div className="flex gap-4">
            <FaTwitter size={20} />
            <IoLogoLinkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
