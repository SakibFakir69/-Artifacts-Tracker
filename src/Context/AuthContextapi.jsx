import React, { createContext, useEffect, useState } from "react";
import Auth from "../Firebase/ConfigF";

import {
    createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
export const MyContext = createContext();

function AuthContextapi({ children }) {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const [ photo , setphoto ] = useState([]);
  


  const [ likedpost , setlikedpost ] = useState([]);
  console.log(photo);

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
    CreateUser,setphoto,
    CreateUserWithGoogle,LoginUser,GoogleLoginIn,setlikedpost,photo
  };

  // onchanged

  // useEffect

  useEffect(() => {

    const unSubcribe = onAuthStateChanged(Auth, (currentUser) => {
      console.log(currentUser,"sadf");
      setuser(currentUser);

      const user = currentUser?.email;
      console.log(user);

      
      if(currentUser?.email)
        {
          console.log("got email");
          const user = {email: currentUser?.email};

          axios.post('https://server-sable-sigma-67.vercel.app/jwt',user, {withCredentials:true})
          .then((res)=>{setloading(false), console.log(res.data ,"log in")});

        }else{
          axios.post('https://server-sable-sigma-67.vercel.app/signout',user, {withCredentials:true})
          .then(res =>{setloading(false), console.log(res.data,"log out")})
        }
        
      setloading(false);
    });

    return ()=>  unSubcribe();
  }, []);

  return (
    <div>
      <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
    </div>
  );
}

export default AuthContextapi;
