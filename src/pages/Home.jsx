// Library
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Assets
import ChatContext from "../context/ChatContext";
// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";

const Home = () => {
  const [chatState] = useContext(ChatContext);
  return (
    <div className="wrapper bg-[#F5F2EA] min-h-screen">
      <div className="container py-[40px] h-screen">
        <div className="flex mx-auto w-[80%] h-full bg-white shadow-lg rounded-[16px] overflow-hidden">
          <Sidebar></Sidebar>
          {chatState && <Content></Content>}
          {!chatState && (
            <div className="basis-2/3 flex flex-col">
              <div className="w-full h-full flex justify-center items-center bg-gray-200 text-gray-400 text-5xl">
                Choose one chat
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
