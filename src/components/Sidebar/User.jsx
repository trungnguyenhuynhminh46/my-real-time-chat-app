import React from "react";

const User = ({ user, onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center p-2 bg-orange-800 hover:bg-[#a83914]"
      onClick={onClick}
    >
      <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-[50%]" />
      <div className="flex flex-col justify-around ml-3 text-slate-200">
        <h1 className="leading-none">{user?.displayName}</h1>
      </div>
    </div>
  );
};

export default User;
