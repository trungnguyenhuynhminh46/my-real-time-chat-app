// Library
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect, createContext } from "react";
// Assets
import { auth } from "../firebase";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // console.log("user", user);
      if (user) {
        setCurrentUser(user);
      } else {
        // Use is signed out
      }
    });
    // Clean up
    return () => {
      unsub();
    };
  }, []);
  // Get current user
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
