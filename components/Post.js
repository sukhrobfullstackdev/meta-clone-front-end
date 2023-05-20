import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {FiThumbsUp} from "react-icons/fi";
import {FaRegCommentAlt} from "react-icons/fa";
import {RiShareForwardLine} from "react-icons/ri";
import Image from 'next/image'

const Post = () => {
    return (
        <div className={"flex flex-col"}>
            <div className={"bg-white mt-6 rounded-md p-4"}>
                <div className={"flex items-center space-x-2"}>
                    <BsFacebook className={"rounded-full text-blue-500 w-10 h-10"}/>
                    <div>
                        <p className="font-medium">Sukhrobbek Odilov</p>
                        <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
                    </div>
                </div>
                <p className={"py-4"}>lorem ipsum</p>
            </div>
            <div className="relative h-60 md:h-96 bg-white">
                <Image objectFit={"cover"} src={"/russia.jpg"} layout='fill'/>
            </div>
            <div className="flex items-center justify-center bg-white p-2">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-w rounded-xl cursor-pointer">
                    <FiThumbsUp className={"h-4"}/>
                    <p className={"text-xs sm:text-base"}>Like</p>
                </div>
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-w rounded-xl cursor-pointer">
                    <FaRegCommentAlt className={"h-4"}/>
                    <p className={"text-xs sm:text-base"}>Comment</p>
                </div>
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-w rounded-xl cursor-pointer">
                    <RiShareForwardLine className={"h-4"}/>
                    <p className={"text-xs sm:text-base"}>Share</p>
                </div>
            </div>
        </div>
    );
};

export default Post;