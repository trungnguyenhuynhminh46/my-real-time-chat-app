import React, { useContext, useEffect, useRef, useState } from "react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { uid } from "uid";
// Assets
import images from "../../assets/img";
import { db, storage } from "../../firebase";
import AuthContext from "../../context/AuthContext";
import ChatContext from "../../context/ChatContext";
import { set } from "lodash";

const MessageInput = () => {
  const inputRef = useRef();
  const { currentUser } = useContext(AuthContext);
  const [chatState, dispatchChatState, change_user, change_group] =
    useContext(ChatContext);
  // States
  const [text, setText] = useState("");
  const [file, setFile] = useState(undefined);
  // Effects
  // Handlers
  const handleSendMessage = async (e) => {
    var hasText = false;
    var hasFile = false;
    // Upload Image (if there's any)
    const dou_id =
      currentUser.uid < chatState.user.uid
        ? currentUser.uid + chatState.user.uid
        : chatState.user.uid + currentUser.uid;
    // Update dou_messages doc
    if (file) {
      hasFile = true;
      if (!text.trim()) {
        hasText = true;
      }
      const file_name =
        file.name.split(".")[0] + Date.now() + "." + file.name.split(".")[1];
      // Upload file
      const storageRef = ref(storage, file_name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update doc
            const docRef = doc(db, "dou_messages", dou_id);
            await updateDoc(docRef, {
              messages: arrayUnion({
                uid: uid(),
                text: text.trim(),
                sender_id: currentUser.uid,
                time: Timestamp.now(),
                photoURL: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      // Test if value is valid
      if (text.trim()) {
        hasText = true;
        // Update doc
        const docRef = doc(db, "dou_messages", dou_id);
        await updateDoc(docRef, {
          messages: arrayUnion({
            uid: uid(),
            text: text.trim(),
            sender_id: currentUser.uid,
            time: Timestamp.now(),
          }),
        });
      }
    }
    // Update dou_chats_info
    if (hasText || hasFile) {
      let file_name;
      if (hasFile) {
        file_name =
          file.name.split(".")[0] + Date.now() + "." + file.name.split(".")[1];
      }
      // Current user
      const currentUserChatsInfoRef = doc(
        db,
        "dou_chats_info",
        currentUser.uid
      );
      // console.log(dou_id + ".isDirty");
      await updateDoc(currentUserChatsInfoRef, {
        [dou_id + ".isDirty"]: true,
        [dou_id + ".currentMessage"]: hasFile ? file_name : text,
      });
      // Remaining person
      const remainingChatsInfoRef = doc(
        db,
        "dou_chats_info",
        chatState.user.uid
      );
      await updateDoc(remainingChatsInfoRef, {
        [dou_id + ".isDirty"]: true,
        [dou_id + ".currentMessage"]: hasFile ? file_name : text,
      });
    }
    // Reset state
    setText("");
    setFile(undefined);
    inputRef.current.focus();
  };
  return (
    <div className="flex items-center bg-slate-100 placeholder:text-gray-200 text-lg p-3">
      <div className="max-h-[100px] input basis-full flex flex-col overflow-auto">
        <input
          ref={inputRef}
          type="text"
          name="text"
          id="text"
          className="bg-transparent outline-none"
          placeholder="Type something..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSendMessage(e);
            }
          }}
        />
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="max-w-[300px]"
            onClick={() => {
              setFile(undefined);
            }}
          />
        )}
      </div>
      <div className="flex items-center shrink-0">
        <button>
          <img src={images.attach_file} alt="" className="w-6 h-6 ml-3" />
        </button>
        <label htmlFor="image" className="cursor-pointer">
          <input
            id="image"
            type="file"
            className="hidden"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <img src={images.add_img} alt="" className="w-6 h-6 ml-3" />
        </label>
        <button
          className="p-2 ml-3 bg-orange-800 text-slate-100"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
