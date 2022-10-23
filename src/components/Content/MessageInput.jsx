import React from "react";
// Assets
import images from "../../assets/img";

const MessageInput = () => {
  return (
    <div className="flex items-center bg-slate-100 placeholder:text-gray-200 text-lg p-3">
      <input
        type="text"
        name=""
        id=""
        className="bg-transparent outline-none basis-full"
        placeholder="Type something..."
      />
      <div className="flex items-center shrink-0">
        <button>
          <img src={images.attach_file} alt="" className="w-6 h-6 ml-3" />
        </button>
        <button>
          <img src={images.add_img} alt="" className="w-6 h-6 ml-3" />
        </button>
        <button className="p-2 ml-3 bg-orange-800 text-slate-100">Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
