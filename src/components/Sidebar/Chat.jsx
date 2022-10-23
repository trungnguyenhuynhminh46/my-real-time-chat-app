import React from "react";

const Chat = () => {
  return (
    <div className="cursor-pointer flex items-center p-2 bg-orange-800 hover:bg-[#a83914]">
      <img
        src="https://images.unsplash.com/photo-1666443075691-d151747ec50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80"
        alt=""
        className="w-10 h-10 rounded-[50%]"
      />
      <div className="flex flex-col justify-around ml-3 text-slate-200">
        <h1 className="leading-none">Minh Trung</h1>
        <span className="leading-none">Just a message</span>
      </div>
    </div>
  );
};

export default Chat;
