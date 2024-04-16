import Clogo from "../../assets/isea_logo_color.svg";
import { FaCartPlus } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";
import { servicedata, servicedata2, servicedata3 } from "../../constant/images";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgCloseR } from "react-icons/cg";
import MegaMenuItem from "./MegaMenuItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/slice/authSlice";

const Header = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);
  const [mobileViewOpen, setMobileViewOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.cart.cartItemsLenght);
  const isAuthenticated =useSelector(state=>state.auth.user.isAuthenticated);

  const handleToggleMegaMenu = (menuId) => {
    setMegaMenuOpen((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  const handleCloseMegaMenus = () => {
    setMegaMenuOpen(null);
  };

  const handleMobileView = () => {
    setMobileViewOpen(!mobileViewOpen);
  };
  const HandleCloseMenuRedirection = () => {
    setMobileViewOpen(false);
  };

  const handleLogOut =()=>{
    // dispatch(logout());
    navigate('/')
  }
  const megaMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        handleCloseMegaMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth >= 1024 && mobileViewOpen) {
        setMobileViewOpen(false);
      }
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileViewOpen]);

  return (
    <div className="bg-white border-gray-200 p-2.5  ">
      <nav
        className="bg-white border-gray-200 dark:bg-gray-900 relative "
        ref={megaMenuRef}
      >
        <div className="flex lg:flex-nowrap justify-between max-w-screen-xl mx-auto py-4 ">
          <div
            onClick={() => navigate("/")}
            className=" items-end mr-5 space-x-3 rtl:space-x-reverse cursor-pointer"
          >
            <img src={Clogo} className="h-12 " alt=" Logo" />
          </div>
          <div className="flex w-10/12 lg:flex-nowrap justify-end lg:justify-between items-center  ">
            <div className="  ">
              <div className="flex items-center lg:order-2 space-x-1 lg:space-x-2 rtl:space-x-reverse">
                <div
                  onClick={() => navigate("/cart")}
                  className="relative p-2 lg:hidden"
                >
                  {state !== 0 && (
                    <span className="absolute top-0 right-0 bg-dark-blue text-white rounded-full px-2 py-1 text-xs">
                      {state}
                    </span>
                  )}
                  <FaCartPlus className="text-xl text-theme-green mx-2" />
                </div>
                <button
                  type="button"
                  onClick={handleMobileView}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open main menu</span>
                  {!mobileViewOpen ? (
                    <RxHamburgerMenu size="2rem" />
                  ) : (
                    <CgCloseR size="2rem" />
                  )}
                </button>
              </div>
              <div
                id="mega-menu"
                className={`  items-center justify-between w-full lg:flex  lg:order-1 ${
                  mobileViewOpen ? "flex bg-white" : "hidden "
                }`}
              >
                <ul
                  className={`w-full flex lg:items-center  text-md font-semibold flex-col mt-4 mr-5 lg:flex-row lg:mt-0 lg:space-x-4 rtl:space-x-reverse ${
                    mobileViewOpen
                      ? "absolute top-[70%] z-20 left-0 w-10/12 justify-start items-end bg-white p-4  "
                      : "justify-between h-full bg-white xl:p-5"
                  }`}
                >
                  <MegaMenuItem
                  
                    mobileViewOpen={mobileViewOpen}
                    megaMenuOpen={megaMenuOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    data={{ id: 1, title: "Explore 1", items: servicedata }}
                  />
                  <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    megaMenuOpen={megaMenuOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    data={{ id: 2, title: "Explore 2", items: servicedata2 }}
                  />
                  <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                    navigateTo={"/news"}
                    data={{ id: 4, title: "News" }}
                  />

                  <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                    navigateTo={"/certification"}
                    data={{ id: 4, title: "Certification" }}
                  />

                  <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                    navigateTo={"/training"}
                    data={{ id: 4, title: "Training" }}
                  />
                  <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                    navigateTo={"/services"}
                    data={{ id: 4, title: "Services" }}
                  />
                    <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                    navigateTo={"/pricing"}
                    data={{ id: 4, title: "Pricing" }}
                  />

                  {mobileViewOpen && (
                    <MegaMenuItem
                      mobileViewOpen={mobileViewOpen}
                      handleToggleMegaMenu={handleToggleMegaMenu}
                      HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                      navigateTo={"/"}
                      data={{ id: 4, title: " Contact Us" }}
                    />
                  )}
                  {mobileViewOpen && !isAuthenticated ? (
                    <MegaMenuItem
                    mobileViewOpen={mobileViewOpen}
                    handleToggleMegaMenu={handleToggleMegaMenu}
                    HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                    navigateTo={"/dashboard/sign-in"}
                    data={{ id: 4, title: "  Log in" }}
                  />
                  ):(mobileViewOpen && isAuthenticated &&
                    <MegaMenuItem
                      mobileViewOpen={mobileViewOpen}
                      handleToggleMegaMenu={handleToggleMegaMenu}
                      HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                      onClick={handleLogOut}
                      data={{ id: 4, title: "Log Out" }}
                    />
                  )
                  }
                  {mobileViewOpen && (
                    <MegaMenuItem
                      mobileViewOpen={mobileViewOpen}
                      handleToggleMegaMenu={handleToggleMegaMenu}
                      HandleCloseMenuRedirection={HandleCloseMenuRedirection}
                      navigateTo={"/membership"}
                      data={{ id: 4, title: "Become A Member" }}
                    />
                  )}
                </ul>
              </div>
            </div>
            <div className="lg:flex flex-row items-center hidden list-none ">
              <div
                onClick={() => navigate("/contactus")}
                className=" cursor-pointer hidden md:block px-3  md:text-md lg:text-sm xl:text-base font-semibold "
              >
                Contact Us
              </div>
              {
                !isAuthenticated ? (
                  <div
                onClick={() => navigate("/dashboard/sign-in")}
                className=" cursor-pointer md:text-md lg:text-sm xl:text-base font-semibold text-white px-3  md:text-black"
              >
                Log in
              </div>
                ):(<div
                  onClick={handleLogOut}
                  className=" cursor-pointer md:text-md lg:text-sm xl:text-base font-semibold text-white px-3  md:text-black"
                >
                  Log Out
                </div>)
              }
              
              <div
                onClick={() => navigate("/membership")}
                className="cursor-pointer bg-theme-green text-sm  text-white font-semibold p-2  rounded-full hover:bg-dark-blue"
              >
                Become A Member
              </div>
              <div
                onClick={() => navigate("/cart")}
                className=" cursor-pointer relative p-2"
              >
                {state !== 0 && (
                  <span className="absolute top-0 right-0 bg-dark-blue text-white rounded-full px-2 py-1 text-xs">
                    {state}
                  </span>
                )}
                <FaCartPlus className="hidden lg:block text-xl text-theme-green mx-2" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
