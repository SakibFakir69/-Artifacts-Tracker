



import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

    const {user,loading}= useAuth();
    console.log(loading,"form private route");


    if(loading)
    {
        return <p>Loading..</p>
    }
    if(!user){
        return <Navigate to={'/authloayout/signin'}/>
    }


  return children;
}

export default PrivateRoute