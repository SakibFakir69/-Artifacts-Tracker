import React, { useEffect, useState } from "react";
import axios from "axios";
import LikeArtifact from "../Pages/LikeArtifact";
import useAuth from "../hooks/useAuth";
import { use } from "react";
import { Helmet } from "react-helmet";
function MyLikedArtifact() {
  const [liked, setliked] = useState([]);
  const { user } = useAuth();

  const [isLoading , setLoading ] = useState(true);


  

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://server-vert-two-78.vercel.app/allartifacts`)

        .then((res) => {

            console.log(res.data)
            
          const userLikeData = res.data.filter((item)=>item?.LikedBy?.includes(user.email));

          console.log(userLikeData ,"user")
          setLoading(false);

     
          

    

          
          setliked(userLikeData)
        
        })
        .catch((error) => {
          console.log("this error founded", error.name);
        });
    }
  }, [user?.email]);

  console.log(liked, "problem");



  if (liked.length == 0) {
    return (
      <div className="flex justify-center py-52">
        <p>No Liked Data founded</p>
      </div>
    );
  }

  return (
    <div className="">

      <h1 className="mt-6 md:text-4xl font-semibold text-2xl text-center">
        My Liked Artifacts
      </h1>
      <Helmet>
        <title>My liked arifacts</title>
      </Helmet>


      {
        isLoading ? (<div className="flex  w-full justify-center items-center mx-auto">
          <span className="loading loading-bars  w-16"></span>

        </div>) :
        (
          <div className="grid md:grid-cols-3 grid-cols-1 m-2 py-20 bg-stone-200">
    
            {liked.map((item, key) => (
              <LikeArtifact alldata={item} key={key} />
            ))}
    
    
          </div>)
      }


    </div>
  );
}

export default MyLikedArtifact;
