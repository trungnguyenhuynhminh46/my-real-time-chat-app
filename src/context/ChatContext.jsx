// type: undefined, dou, group
// chat_id

import React from "react";
import { createContext, useReducer } from "react";
// Assets

const ChatContext = createContext();
const ChatContextProvider = ({ children }) => {
  // Initial state
  const INITIAL_STATE = undefined;
  // Actions
  const change_user = (payload) => {
    return {
      type: "CHANGE_USER",
      data: {
        chat_id: payload.data.chat_id,
        user: payload.data.user,
      },
    };
  };
  const change_group = (payload) => {
    return {
      type: "CHANGE_GROUP",
      data: {
        chat_id: payload.data.chat_id,
        participants_uid: [...payload.data.participants_uid],
      },
    };
  };
  // Reducer
  const reducer = (prev, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          type: "dou",
          ...action.data,
        };
      case "CHANGE_GROUP":
        return {
          type: "group",
          ...action.data,
        };
      default:
        return prev;
    }
  };
  const [chatState, dispatchChatState] = useReducer(reducer, INITIAL_STATE);
  return (
    <ChatContext.Provider
      value={[chatState, dispatchChatState, change_user, change_group]}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider };
export default ChatContext;
