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
 
  return <div>
    <h1>
        {
            liked.map((item,key)=> <LikeArtifact alldata={item} key={key}/>)
        }
    


    </h1>
  </div>;
}

export default MyLikedArtifact;
