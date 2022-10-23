import React from "react";

const Message = ({ isOwner = false }) => {
  return (
    <div
      className={`flex ${isOwner && "flex-row-reverse"} items-start mb-7 gap-4`}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1666443075691-d151747ec50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80"
          alt=""
          className="w-8 h-8 rounded-[50%]"
        />
        <span>Just now</span>
      </div>

      <p
        className={`px-3 py-2 ${
          isOwner
            ? "bg-[#0087DD] text-slate-100 rounded-l-md rounded-b-md"
            : "bg-slate-100  rounded-r-md rounded-b-md"
        }`}
      >
        This is a message
        {/* <img
          src="https://images.unsplash.com/photo-1666443075691-d151747ec50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80"
          alt=""
        /> */}
      </p>
    </div>
  );
};

export default Message;
