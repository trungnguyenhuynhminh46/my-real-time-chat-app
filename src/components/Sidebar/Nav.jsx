// Library
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
// Assets
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
// Component

const Nav = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center min-h-[60px] px-3 bg-orange-900 text-white">
      <h1 className="font-bold basis-1/4">Chat App</h1>
      <div className="flex justify-end items-center basis-3/4">
        <img
          src={currentUser?.photoURL}
          alt=""
          className="w-5 h-5 rounded-[50%]"
        />
        <h4 className="ml-2">{currentUser?.displayName}</h4>
        <button
          className="text-xs ml-2 p-2 bg-orange-800 hover:opacity-80"
          onClick={(e) => {
            signOut(auth);
            navigate("/login");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
