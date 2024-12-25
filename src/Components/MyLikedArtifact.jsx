import React, { useEffect, useState } from "react";
import axios from "axios";
import LikeArtifact from "../Pages/LikeArtifact";
import useAuth from "../hooks/useAuth";
function MyLikedArtifact() {


    const [ liked , setliked ] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        axios.get(`http://localhost:5000/myaddedlike?email=${user?.email}`)
        .then((res)=>{

            const fltLike  = res.data.filter((item)=> item.LikeCount>0);
            setliked(fltLike);
        })


    },[user?.email])
    console.log(liked)
 
  return <div className="px-4">
    <h1 className="mt-6 md:text-4xl font-semibold text-2xl text-center">My Liked Artifacts</h1>
    
    <div className="grid md:grid-cols-3 grid-cols-1">
        {
            liked.map((item,key)=> <LikeArtifact alldata={item} key={key}/>)
        }
    


    </div>
  </div>;
}

export default MyLikedArtifact;
