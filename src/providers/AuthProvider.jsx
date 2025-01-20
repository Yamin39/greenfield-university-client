/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserNameAndPhoto = (currentUser, name, photo) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // on auth state change observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      console.log(currentUSer);
      setUser(currentUSer);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    Loading,
    setLoading,
    createUser,
    updateUserNameAndPhoto,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
