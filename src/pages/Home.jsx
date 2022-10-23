// Library
import React from "react";
import { Link } from "react-router-dom";
// Assets
// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import Chats from "../components/Sidebar/Chats";

const Home = () => {
  return (
    <div className="wrapper bg-[#F5F2EA] min-h-screen">
      <div className="container py-[40px] h-screen">
        <div className="flex mx-auto w-[80%] h-full bg-white shadow-lg rounded-[16px] overflow-hidden">
          <Sidebar></Sidebar>
          <Content></Content>
        </div>
      </div>
    </div>
  );
};

export default Home;
