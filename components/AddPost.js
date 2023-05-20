import React, {useRef, useState} from 'react';
import {HiOutlineVideoCamera} from "react-icons/hi";
import {IoMdPhotos} from "react-icons/io";
import {BsEmojiSmile} from "react-icons/bs";
import {RiDeleteBin6Fill} from "react-icons/ri";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addPost} from "../store/features/postSlice";

const AddPost = () => {
    const META_CLONE_ENDPOINT = "/api/v1/posts";
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    }
    const addImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImage(e.target.result);
            }
        }
    }
    const removeImage = () => {
        setImage(null);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputRef.current.value) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("post", inputRef.current.value);
            formData.append("name", "Sukhrobbek");
            formData.append("email", "sukhrobdev@gmail.com");
            formData.append("profilePic", "../public/girl.jpg");
            const res = await axios.post(META_CLONE_ENDPOINT, formData, {
                headers: {Accept: "application/json"}
            });
            console.log(res);
            inputRef.current.value = "";
            dispatch(addPost(res.data))
            await removeImage();
        }
    }
    return (
        <div className={"bg-white rounded-md shadow-md text-gray-500 p-2"}>
            <div className={"flex p-4 space-x-2 items-center"}>
                <form className={"flex flex-1"}>
                    <input ref={inputRef} placeholder={"What's on your mind?"} type="text"
                           className={"bg-gray-50 font-medium rounded-full h-12 px-4 flex-grow border border-gray-300 focus:outline-none"}/>
                    <button hidden onClick={handleSubmit}/>
                </form>
            </div>
            {image && <>
                <div
                    className={"flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"}>
                    <img className={"h-10 object-contain"} src={image} alt="img"/></div>
                <RiDeleteBin6Fill onClick={removeImage} className={"h-8 hover:text-red-500"}/></>
            }
            <div className={"flex justify-evenly py-2"}>
                <div
                    className={"flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"}>
                    <HiOutlineVideoCamera size={20} className={"text-red-500"}/>
                    <p className={"font-semibold text-gray-600"}>Live Video</p>
                </div>
                <div
                    onClick={handleClick}
                    className={"flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"}>
                    <IoMdPhotos size={20} className={"text-yellow-500"}/>
                    <p className={"font-semibold text-gray-600"}>Feeling/Activity</p>
                    <input onChange={addImage} type="file" ref={hiddenFileInput} hidden accept="image/*"/>
                </div>
                <div
                    className={"flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"}>
                    <BsEmojiSmile size={20} className={"text-green-500"}/>
                    <p className={"font-semibold text-gray-600"}>Photo/Video</p>
                </div>
            </div>
        </div>
    );
};

export default AddPost;