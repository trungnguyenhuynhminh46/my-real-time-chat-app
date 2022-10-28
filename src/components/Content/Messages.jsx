import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
// Assets
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";
import { db } from "../../firebase";
// Components
import Message from "./Message";

const Messages = () => {
  const { currentUser } = useContext(AuthContext);
  const [chatState] = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const chat_id = chatState.chat_id;
    const chatRef = doc(db, "dou_messages", chat_id);
    const unsub = onSnapshot(chatRef, (docSnap) => {
      setMessages(docSnap.data().messages);
    });
    // Clean up
    return () => {
      unsub();
    };
  }, [chatState]);
  return (
    <div className="basis-full flex flex-col bg-[#dad0cd] py-8 px-4 overflow-auto">
      {messages &&
        messages.map((message) => {
          // console.log(message);
          return (
            <Message
              key={message.uid}
              isOwner={message.sender_id === currentUser.uid}
              message={message}
            ></Message>
          );
        })}
    </div>
  );
};

export default Messages;
