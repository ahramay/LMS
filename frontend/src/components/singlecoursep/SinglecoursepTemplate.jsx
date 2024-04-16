import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import Instructor from "./Instructor";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { debounce } from "lodash";

import { addItemToCart } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { fetchCartItems } from "../../redux/slice/cartSlice";

const SinglecoursepTemplate = ({ data }) => {
  const [key, setKey] = useState("tab2");
  const navigation = useNavigate();
  const dispatch = useDispatch();

  let query = useParams();
  query = query?.id;
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleAddToCart = async (product) => {
    try {
      const response = await dispatch(addItemToCart({ courseId: product }));
      await dispatch(fetchCartItems());
      if (
        response?.payload?.status === 200 &&
        response?.payload?.data?.success === true
      ) {
        toast(`${response?.payload?.data?.message}`, {
          type: "success",
        });
      }
      if (response?.payload?.response?.status === 400) {
        toast(`${response?.payload?.response?.data?.error}`, {
          type: "info",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedSubmit = debounce(handleAddToCart, 500);

  return (
    <>
      <div className=" flex flex-col-reverse py-5 px-5 lg:flex-row gap-20  lg:py-20 lg:px-20 m-0 ">
        <div className="flex flex-col  py-0 px-0 w-full lg:w-2/3 justify-start ">
          <h2 className="text-4xl font-bold text-dark-blue mb-3 p-2">
            {data?.title}
          </h2>
          <p className="text-md text-dark-blue mb-5 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-md text-dark-blue mb-5 ">
            {data?.overviewcontent}
          </p>

          <Tabs
            className="Tabs w-full "
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <TabList className="flex flex-row flex-wrap md:flex-nowrap md:gap-10 border-b-2">
              <Tab
                eventKey="tab1"
                className="flex flex-row flex-nowrap items-center text-xl font-semibold text-dark-blue p-2 mb-2 "
              >
                {" "}
                <FaThList className="text-theme-green mr-2" />
                Overview
              </Tab>
              <Tab
                eventKey="tab1"
                className="flex flex-row flex-nowrap items-center text-xl font-semibold text-dark-blue p-2 mb-2 "
              >
                {" "}
                <IoMdDocument className="text-theme-green mr-2" />
                Curriculum
              </Tab>
              <Tab
                eventKey="tab1"
                className="flex flex-row flex-nowrap items-center text-xl font-semibold text-dark-blue p-2 mb-2 "
              >
                {" "}
                <FaUser className="text-theme-green mr-2" />
                Instructor
              </Tab>
            </TabList>
            <TabPanel>
              <h3 className=" text-xl font-semibold text-dark-blue my-5 ">
                Study Plan
              </h3>
              <p className="text-md text-dark-blue mb-5 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className=" text-xl font-semibold text-dark-blue my-5 ">
                What will you learn from this course?
              </h3>
              <ul>
                <li className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-2">
                  {" "}
                  <CiCircleCheck className="text-theme-green text-xl mr-2" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-2">
                  {" "}
                  <CiCircleCheck className="text-theme-green text-xl mr-2" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-2">
                  {" "}
                  <CiCircleCheck className="text-theme-green text-xl mr-2" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-2">
                  {" "}
                  <CiCircleCheck className="text-theme-green text-xl mr-2" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li className="flex flex-row flex-nowrap items-center text-md text-dark-blue mb-2">
                  {" "}
                  <CiCircleCheck className="text-theme-green text-xl mr-2" />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <Instructor></Instructor>
            </TabPanel>
          </Tabs>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col  px-5 gap-y-5 lg:col-span-1">
          <div className="border hover:shadow-2xl rounded-md">
            <div className="overflow-hidden">
              <video
                className="w-full object-cover h-80 rounded-t-md"
                controls
                src={data?.pageContent?.videoUrl}
              ></video>
            </div>

            <div className="p-5">
              <h2 className="text-2xl line-clamp-1 font-bold text-dark-blue mb-5 ">
                ${data?.duration}
              </h2>
              <h4 className="text-lg  text-black mb-4 ">{data?.topic}</h4>
              <h4 className="text-lg  text-black mb-4 ">4 Hours Duration</h4>

              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <div
                className="  cursor-pointer "
                onClick={() => debouncedSubmit(query)}
              >
                <a className="font-bold flex justify-center bg-theme-green text-white cursor-pointer  rounded-full border-solid border-0 hover:bg-dark-blue  mb-5 px-3 py-3 md:px-5 md:py-2 ">
                  Enrol Now
                </a>
              </div>
              <div className="flex  justify-center  flex-wrap lg:flex-nowrap">
                <FaFacebookF className="p-2 m-2 text-4xl bg-black text-white rounded-full hover:bg-theme-green" />
                <FaInstagram className="p-2 m-2 text-4xl bg-black text-white rounded-full hover:bg-theme-green" />
                <FaTwitter className="p-2 m-2 text-4xl bg-black text-white rounded-full hover:bg-theme-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglecoursepTemplate;