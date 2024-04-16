import membershipheroimg from "../assets/membership-hero-04.jpg";

import { membershipbenifitData } from "../constant/images";
import MembershipbenifitTemplate from "../components/membership/MembershipbenifitTemplate";

import { membershippackageData } from "../constant/images";
import MembershippackageTemplate from "../components/membership/MembershippackageTemplate";

import { membershipresoursesData } from "../constant/images";
import membershipresimg from "../assets/resources-bg-light.jpg";

function Membership() {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-full  py-10 px-5   lg:py-24 lg:px-20  p-5   bg-center bg-no-repeat bg-cover flex flex-col items-center"
          style={{ backgroundImage: `url(${membershipheroimg})` }}
        >
          <h2 className="text-3xl text-center lg:text-6xl font-bold text-white mb-10">
            What is Lorem Ipsum?
          </h2>
          <a
            href="/dashboard/sign-up"
            className="bg-theme-green font-sans text-white font-semibold py-2 px-4 ml-2 rounded-full hover:bg-dark-blue"
          >
            Become A Member
          </a>
          <h5 className="text-white text-xl text-center mb-3 lg:w-3/4 pt-5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h5>
          <h5 className="text-white text-xl text-center mb-3   lg:w-3/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h5>
          <h5 className="text-white text-xl text-center mb-3  lg:w-3/4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h5>
        </div>
      </div>
      <div className="pt-10 px-5  md:pt-20 md:px-20 ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold text-dark-blue mb-5">
            Choose the right package for you
          </h2>
          <hr className="w-12  font-bold border-black border-t-2 mb-5"></hr>
          <h5 className="text-black w-full lg:w-3/4 text-xl mb-3  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h5>
        </div>
      </div>

      <div className="py-5 px-5  lg:py-20 lg:px-20 ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-dark-blue mb-5">
            Membership benefits
          </h2>

          <h5 className="text-black w-full lg:w-3/4 text-xl mb-10  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h5>
          <div className="w-full xl:w-3/4 mb-2 lg:mb-10 grid grid-cols-1 md:grid-cols-3 gap-5  ">
            {membershipbenifitData.map((item) => (
              <MembershipbenifitTemplate data={item} key={item?.title} />
            ))}
          </div>
          <a className="font-bold flex items-center bg-theme-green text-white  cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue  px-3 py-2 md:px-5 md:py-2 ">
            View List Of Benifits{" "}
          </a>
        </div>
      </div>
      <div className="py-10 px-5  lg:py-20 lg:px-20 ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-dark-blue mb-10">
            Learn about RSNA’s new 2024 membership packages
          </h2>
          <div className=" mb-10 flex flex-wrap w-full xl:w-10/12 m-auto  md:flex-nowrap">
            {membershippackageData.map((item) => (
              <MembershippackageTemplate data={item} key={item?.title} />
            ))}
          </div>
          <a className="font-bold flex items-center bg-theme-green text-white  cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue  px-3 py-2 md:px-5 md:py-2 ">
            View All Package{" "}
          </a>
        </div>
      </div>
      <div
        className="  bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${membershipresimg})` }}
      >
        <div className=" py-10  px-5 lg:py-20 lg:px-20 bg-gray-900 bg-opacity-70">
          <div className=" flex flex-col items-center opacity-100 ">
            <h2 className="text-3xl font-bold text-white mb-5">
              Membership Resourses
            </h2>

            <h5 className="text-white w-full lg:w-3/4 text-xl mb-20  text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </h5>
            <div className="w-full xl:w-3/4 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5  ">
              {membershipresoursesData.map((item) => (
                    <div className="flex flex-col  items-center  w-full ">
                        <h2 className="text-2xl rounded-lg w-full text-center hover:shadow-md hover:shadow-black-900  hover:ease-in hover:duration-300  bg-theme-green hover:bg-white px-2 py-20 lg:px-10 lg:py-20 font-bold hover:text-theme-green text-white">
                        {item?.title}
                        </h2>
                    </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Membership;
