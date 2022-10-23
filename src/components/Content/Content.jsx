import React from "react";
// Components
import Nav from "./Nav";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Content = () => {
  return (
    <div className="basis-2/3 flex flex-col">
      <Nav></Nav>
      {/* End Nav */}
      <Messages></Messages>
      {/* End Messages */}
      <MessageInput></MessageInput>
      {/* MessageInput */}
    </div>
  );
};

export default Content;
