import React from "react";

const Chat = ({ data, onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center p-2 bg-orange-800 hover:bg-[#a83914]"
      onClick={onClick}
    >
      <img
        src={data.user.photoURL}
        alt=""
        className="w-10 h-10 rounded-[50%]"
      />
      <div className="flex flex-col justify-around ml-3 text-slate-200">
        <h1 className="leading-none">{data?.user?.displayName}</h1>
        {data.currentMessage && (
          <span className="leading-none">{data?.currentMessage}</span>
        )}
      </div>
    </div>
  );
};

export default Chat;
