// Library
import React from "react";
// Assets
// Components
import Nav from "./Nav";
import Search from "./Search";
import Chats from "./Chats";
const Sidebar = () => {
  return (
    <div className="basis-1/3 flex flex-col">
      <Nav></Nav>
      {/* End nav */}
      <Search></Search>
      {/* End search */}
      <Chats></Chats>
      {/* End chats */}
    </div>
  );
};

export default Sidebar;
