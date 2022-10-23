import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center min-h-[60px] px-3 bg-orange-900 text-white">
      <h1 className="font-bold basis-1/4">Chat App</h1>
      <div className="flex justify-end items-center basis-3/4">
        <img
          src="https://images.unsplash.com/photo-1666443075691-d151747ec50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80"
          alt=""
          className="w-5 h-5 rounded-[50%]"
        />
        <h4 className="ml-2">Nguyễn Huỳnh Minh Trung</h4>
        <button className="text-xs ml-2 p-2 bg-orange-800 hover:opacity-80">
          logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
