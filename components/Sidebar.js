import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {ImUsers} from "react-icons/im";
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md";
import {AiOutlineShop} from "react-icons/ai";
import {BsStopwatch} from "react-icons/bs";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <div className={"hidden lg:inline-flex border-r-2 flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]"}>
            <div className={"flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer"}>
                <BsFacebook className={"h-12 w-12 pr-2 text-blue-500 rounded-full cursor-pointer"}/>
                <p className={"hidden sm:inline-flex font-thin"}>Odilov Sukhrobbek</p>
            </div>
            <SidebarItem Icon={ImUsers} title={"Friends"}/>
            <SidebarItem Icon={MdGroups} title={"Groups"}/>
            <SidebarItem Icon={AiOutlineShop} title={"Marketplace"}/>
            <SidebarItem Icon={MdOutlineOndemandVideo} title={"Watch"}/>
            <SidebarItem Icon={BsStopwatch} title={"Memories"}/>
            <SidebarItem Icon={MdOutlineExpandMore} title={"See More"}/>
        </div>
    );
};

export default Sidebar;