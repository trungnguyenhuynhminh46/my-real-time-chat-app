import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
// Assets
import * as usersServices from "./usersServices";

const addChatInfo = async (sender_id, receiver_id) => {
  const dou_id =
    sender_id < receiver_id ? sender_id + receiver_id : receiver_id + sender_id;
  const docRef = doc(db, "dou_chats_info", sender_id);
  const user = await usersServices.getUserByUID(receiver_id);
  await updateDoc(docRef, {
    [dou_id]: {
      isDirty: false,
      chat_id: dou_id,
      user,
      currentMessage: "",
    },
  });
};

export { addChatInfo };
