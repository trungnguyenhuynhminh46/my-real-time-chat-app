import React, { useState, useEffect, useContext, useRef } from "react";
import _ from "lodash";
import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
// Assets
import { db } from "../../firebase";
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";
import * as usersServices from "../../services/usersServices";
import * as douChatsInfoServices from "../../services/douChatsInfoServices";
import * as douMessages from "../../services/douMessages";
// Components
import User from "./User";
const Search = () => {
  // console.log(useContext(ChatContext));
  const searchRef = useRef();
  const [chatState, dispatchChatState, change_user, change_group] =
    useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [returnUsers, setReturnUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // Effects
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const data = await usersServices.search(search);
      setReturnUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, [search]);
  // Handlers
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const debouncedHandleSearch = _.debounce(handleSearch, 600);
  const handleClickUser = async (uid) => {
    const dou_id =
      currentUser.uid < uid ? currentUser.uid + uid : uid + currentUser.uid;
    const douMessagesSnap = await douMessages.getDouMesseagesByDouID(dou_id);
    if (!douMessagesSnap.exists()) {
      // Add chat_info
      await douChatsInfoServices.addChatInfo(currentUser.uid, uid);
      await douChatsInfoServices.addChatInfo(uid, currentUser.uid);
      // Initialize dou_messages
      await douMessages.initializeDouMessages(dou_id);
    }
    // Change Chat Context
    const user = await usersServices.getUserByUID(uid);
    const data = {
      chat_id: dou_id,
      user,
    };
    dispatchChatState(change_user({ data }));
    // Reset State
    setSearch("");
    searchRef.current.value = "";
    searchRef.current.focus();
  };
  return (
    <div className="border-b border-b-[#8b2f11] text-slate-300 caret-slate-300">
      <input
        ref={searchRef}
        type="text"
        placeholder="Enter username..."
        name=""
        id=""
        className="w-full p-2 outline-none bg-orange-800"
        defaultValue={search}
        onChange={debouncedHandleSearch}
      />
      {/* Return users here */}
      {!loading &&
        returnUsers &&
        returnUsers.map((user) => {
          return (
            <User
              key={user.uid}
              user={user}
              onClick={() => {
                handleClickUser(user.uid);
              }}
            ></User>
          );
        })}
      {loading && (
        <div className="cursor-pointer flex items-center p-2 bg-orange-800 hover:bg-[#a83914]">
          <div className="w-4 h-4 rounded-[50%] border-2 border-gray-400 border-r-0 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Search;
