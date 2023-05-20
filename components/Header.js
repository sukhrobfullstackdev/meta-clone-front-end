import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {HiOutlineSearch, HiOutlineHome} from "react-icons/hi";
import {RiFlag2Line} from "react-icons/ri";
import {MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md";
import {AiOutlineShop, AiFillMessage, AiFillBell} from "react-icons/ai";
import {IoGameControllerOutline} from "react-icons/io5";
import {CgMenuGridO} from "react-icons/cg";

const Header = () => {
    return (
        <div className={"bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16"}>
            <div className={"flex min-w-fit"}>
                <BsFacebook className={"h-10 w-full text-blue-500"}/>
                <div className={"flex items-center text-gray-500 space-x-2 px-2 ml-2 bg-gray-100 rounded-full"}>
                    <HiOutlineSearch size={20}/>
                    <input className={"hidden lg:inline-flex bg-transparent focus:outline-none"} type="text" placeholder={"Search"}/>
                </div>
            </div>
            <div className={"flex flex-grow justify-center mx-2"}>
                <div className={"flex items-center"}>
                    <div className={"flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"}>
                        <HiOutlineHome className={"mx-auto"} size={25} />
                    </div>
                    <div className={"flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"}>
                        <RiFlag2Line className={"mx-auto"} size={25} />
                    </div>
                    <div className={"flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"}>
                        <MdOutlineOndemandVideo className={"mx-auto"} size={25} />
                    </div>
                    <div className={"flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"}>
                        <AiOutlineShop className={"mx-auto"} size={25} />
                    </div>
                    <div className={"flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"}>
                        <IoGameControllerOutline className={"mx-auto"} size={25} />
                    </div>
                </div>
            </div>
            <div className={"flex items-center justify-end min-w-fit space-x-2 hidden xl:inline-flex"}>
                <BsFacebook className={"h-10 w-full text-blue-500"}/>
                <p className={"font-semibold text-sm whitespace-nowrap p-3 max-w-xs"}>Sukhrobbek</p>
                <CgMenuGridO size={20} className={"bg-gray-200 w-full h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"}/>
                <AiFillMessage size={20} className={"bg-gray-200 w-full h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"}/>
                <AiFillBell size={20} className={"bg-gray-200 w-full h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"}/>
                <MdOutlineExpandMore size={20} className={"bg-gray-200 w-full h-10 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"}/>
            </div>
        </div>
    );
};

export default Header;