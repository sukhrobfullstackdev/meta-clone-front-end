import React from 'react';
import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Meta</title>
                <meta name="description" content="Meta"/>
                <link rel="icon" href="/meta.svg"/>
            </Head>
          <main className={"flex bg-gray-100"}>
              <Sidebar/>
              <Feed/>
              <RightSidebar/>
          </main>
        </>
    );
};

export default HomePage;