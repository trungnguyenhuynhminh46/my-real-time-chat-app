import React, { useContext } from "react";
// Assets
import ChatContext from "../../context/ChatContext";
// Components
import images from "../../assets/img";

const Nav = () => {
  const [chatState] = useContext(ChatContext);
  return (
    <div className="shrink-0 min-h-[56px] flex justify-between items-center py-5 px-3 h-[60px] bg-[#943f23]">
      <h1 className="text-slate-100">{chatState?.user?.displayName}</h1>
      <div className="flex items-center">
        <button>
          <img src={images.camera} alt="" className="w-8 h-8 p-1" />
        </button>
        <button>
          <img src={images.add_user} alt="" className="w-8 h-8 p-1" />
        </button>
        <button>
          <img src={images.more} alt="" className="w-8 h-8 p-1" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
