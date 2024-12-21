



import React, { createContext, useState } from 'react'


export const MyContext = createContext();

function AuthContextapi({children}) {


    const [ user , setuser ] = useState(null);
    const [ loading , setloading ] = useState(true);
    console.log("hello form authContex");



    const authInfo ={
        user,setuser,loading,setloading
    }





  return (
    <div>
        <MyContext.Provider value={authInfo}>
            {children}

        </MyContext.Provider>


    </div>
  )
}

export default AuthContextapi