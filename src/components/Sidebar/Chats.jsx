import React, { useContext, useState, useEffect } from "react";
// Assets
import * as douChatsInfoServices from "../../services/douChatsInfoServices";
import * as usersServices from "../../services/usersServices";
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";
import { db } from "../../firebase";
// Components
import Chat from "./Chat";
import { doc, onSnapshot } from "firebase/firestore";

const Chats = () => {
  // States
  const { currentUser } = useContext(AuthContext);
  const [chatState, dispatchChatState, change_user, change_group] =
    useContext(ChatContext);
  const [chatsInfo, setChatsInfo] = useState({});
  // Effects
  const chatsInfoRef = doc(db, "dou_chats_info", currentUser.uid);
  useEffect(() => {
    const unsub = onSnapshot(chatsInfoRef, (doc) => {
      const data = doc.data();
      setChatsInfo(data);
    });
    // Clean up
    return () => {
      unsub();
    };
  }, []);
  // Handlers
  const handleClickChat = async (user_id) => {
    const dou_id =
      currentUser.uid < user_id
        ? currentUser.uid + user_id
        : user_id + currentUser.uid;
    const user = await usersServices.getUserByUID(user_id);
    const data = {
      chat_id: dou_id,
      user,
    };
    dispatchChatState(change_user({ data }));
  };
  return (
    <div className="py-2 h-full bg-orange-800 overflow-auto">
      {chatsInfo &&
        Object.entries(chatsInfo).map(([uid, item]) => {
          if (item.isDirty) {
            return (
              <Chat
                key={uid}
                data={item}
                onClick={async () => {
                  await handleClickChat(item.user.uid);
                }}
              ></Chat>
            );
          }
        })}
    </div>
  );
};

export default Chats;
