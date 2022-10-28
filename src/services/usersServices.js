import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const usersRef = collection(db, "users");
const getUserByUID = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const user = { uid: docSnap.id, ...docSnap.data() };
  return user;
};
const search = async (input) => {
  let returnUsers = [];
  if (input.trim()) {
    const q = query(
      usersRef,
      where("displayName", ">=", input),
      where("displayName", "<=", input + "\uf8ff")
    );
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      const user = {
        uid: doc.id,
        ...doc.data(),
      };
      returnUsers.push(user);
    });
  }
  return returnUsers;
};

export { search, getUserByUID };
