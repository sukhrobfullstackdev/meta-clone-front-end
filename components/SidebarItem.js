import React from 'react';

const SidebarItem = ({Icon, title}) => {
    return (
        <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
            <Icon className="h-12 w-12 pr-2 text-blue-500"/>
            <p className="hidden sm:inline-flex font-thin">{title}</p>
        </div>
    );
};

export default SidebarItem;