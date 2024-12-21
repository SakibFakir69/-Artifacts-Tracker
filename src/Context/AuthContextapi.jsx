import React, { createContext, useEffect, useState } from "react";
import Auth from "../Firebase/ConfigF";

import {
    createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const MyContext = createContext();

function AuthContextapi({ children }) {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const [ photo , setphoto ] = useState(null);
  console.log(photo);
  console.log("hello form authContex");

  // create User
  // reg
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  // google

  const Provider = new GoogleAuthProvider();

  const CreateUserWithGoogle = () => {
    return signInWithPopup(Auth, Provider);
  };

  // login

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  // google login 

  const GoogleLoginIn = ()=>{
    return signInWithPopup(Auth,Provider);

  }
  

  const authInfo = {
    user,
    setuser,
    loading,
    setloading,
    CreateUser,
    CreateUserWithGoogle,LoginUser,GoogleLoginIn
  };

  // onchanged

  // useEffect

  useEffect(() => {

    const unSubcribe = onAuthStateChanged(Auth, (CurrentUser) => {
      if (CurrentUser) {
        setloading(true);
        setuser(CurrentUser);
      }
      setloading(false);
    });

    return unSubcribe();
  }, []);

  return (
    <div>
      <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
    </div>
  );
}

export default AuthContextapi;
