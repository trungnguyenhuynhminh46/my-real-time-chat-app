import React, { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
// Assets
import * as usersServices from "../../services/usersServices";
const Message = ({ isOwner = false, message }) => {
  function formatDate(seconds) {
    let formattedDate = "";

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  }
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    usersServices.getUserByUID(message.sender_id).then((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div
      className={`flex ${isOwner && "flex-row-reverse"} items-start mb-7 gap-4`}
    >
      <div>
        <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-[50%]" />
        <span>{formatDate(message?.time?.seconds)}</span>
      </div>

      <p
        className={`px-3 py-2 ${
          isOwner
            ? "bg-[#0087DD] text-slate-100 rounded-l-md rounded-b-md"
            : "bg-slate-100  rounded-r-md rounded-b-md"
        }`}
      >
        {message.text && message.text}
        {message.photoURL && (
          <img src={message.photoURL} alt="" className="max-w-[300px]" />
        )}
      </p>
    </div>
  );
};

export default Message;
