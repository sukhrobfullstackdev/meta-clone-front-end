import React from 'react';
import AddPost from "./AddPost";
import Posts from "./Posts";

const Feed = () => {
    return (
        <div className={"flex-grow pt-6 mr-6 overflow-y-hidden my-3"}>
            <div className={"mx-auto max-w-md md:max-w-xl lg:max-w-2xl"}>
                <AddPost/>
                <Posts/>
            </div>
        </div>
    );
};

export default Feed;