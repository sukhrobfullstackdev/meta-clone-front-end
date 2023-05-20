import React from 'react';
import Image from 'next/image';

const Contacts = ({name, src, online}) => {
    return (
        <div className={"relative flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl cursor-pointer"}>
            <Image src={src} height={40} width={40} className={"rounded-full"}/>
            <p className={"hidden sm:inline-flex text-sm font-thin"}>{name}</p>
            <div className={`${online ? `bg-green-500` : `bg-gray-500`} h-4 w-4 rounded-full absolute left-5 bottom-2 border-2`}/>
        </div>
    );
};

export default Contacts;