import React from 'react';
import MegaMenuLink from './MegaMenuLink';
import { useNavigate } from 'react-router-dom';

const MegaMenuItem = ({ mobileViewOpen, megaMenuOpen, handleToggleMegaMenu, data ,navigateTo,HandleCloseMenuRedirection}) => {
    const navigation=useNavigate();
    const HandleOnClickButton = () => {
        handleToggleMegaMenu(`mega-menu-dropdown-${data.id}`)
        if(navigateTo){
        navigation(navigateTo)
        HandleCloseMenuRedirection()
        }
    }

    return (
        <li className={`${mobileViewOpen ? 'bg-white w-full p-2 flex flex-col items-end justify-end ml-0 h-auto' : null }`}>
            <button
                id={`mega-menu-dropdown-button-${data.id}`}
                data-dropdown-toggle={`mega-menu-dropdown-${data.id}`}
                className={`flex flex-row items-center justify-between relative  w-fit md:text-md lg:text-sm xl:text-base font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#6eb43f] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#6eb43f] ${
                    megaMenuOpen === `mega-menu-dropdown-${data.id}` ? 'text-[#6eb43f]' : ''
                }`}
                onClick={HandleOnClickButton}
            >
                {data.title}{' '}
               {
                !navigateTo &&  <svg
                className={`w-2.5 h-2.5 ms-3 transform ${
                    megaMenuOpen === `mega-menu-dropdown-${data.id}` ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
            </svg>
               }
            </button>
            <div
                id={`mega-menu-dropdown-${data.id}`}
                className={`lg:absolute z-10  lg:mt-8 left-0 lg:left-auto  lg:-ml-16 w-full lg:w-fit text-sm bg-white border-gray-100 rounded-lg  dark:border-gray-700 dark:bg-gray-700`}
            >
                <div
                    className={`lg:w-fit  ${
                        megaMenuOpen === `mega-menu-dropdown-${data.id}` ? 'grid-cols-1' : 'hidden'
                    }  grid md:grid-cols-1  p-2 lg:px-7 lg:pb-7`}
                >
                    <div className="px-2 lg:p-4 pb-0 text-gray-900 md:pb-4 dark:text-white ">
                        <ul className=" space-y-4" aria-labelledby={`mega-menu-dropdown-button-${data.id}`}>
                            { data.items && data?.items.map((item) => (
                                <MegaMenuLink data={item} key={item.title} />
                            ))}
                        </ul>
                    </div>
              
                </div>
            </div>
        </li>
    );
};

export default MegaMenuItem;
