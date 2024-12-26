import React, { useEffect, useState } from "react";
import axios from "axios";
import LikeArtifact from "../Pages/LikeArtifact";
import useAuth from "../hooks/useAuth";
function MyLikedArtifact() {
  const [liked, setliked] = useState([]);
  const { user, loading } = useAuth();
  console.log(user);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/allartifacts`)

        .then((res) => {
            
          const userLikeData = res.data.filter((item)=>item.LikeBy);

          console.log(userLikeData);

          
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
      <div className="flex justify-center mt-6">
        <p>No Liked Data founded</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <h1 className="mt-6 md:text-4xl font-semibold text-2xl text-center">
        My Liked Artifacts
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 m-2">
        {liked.map((item, key) => (
          <LikeArtifact alldata={item} key={key} />
        ))}
      </div>
    </div>
  );
}

export default MyLikedArtifact;
