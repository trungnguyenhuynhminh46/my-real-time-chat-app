import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
// Assets
import { db } from "../firebase";

const initializeDouMessages = async (dou_id) => {
  const docRef = doc(db, "dou_messages", dou_id);
  await setDoc(docRef, {
    messages: [],
    time_start: serverTimestamp(),
  });
};
const getDouMesseagesByDouID = async (dou_id) => {
  const docRef = doc(db, "dou_messages", dou_id);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

export { initializeDouMessages, getDouMesseagesByDouID };
