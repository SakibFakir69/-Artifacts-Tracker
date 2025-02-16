import React, { useEffect, useState } from "react";
import axios from "axios";
import LikeArtifact from "../Pages/LikeArtifact";
import useAuth from "../hooks/useAuth";
import { use } from "react";
import { Helmet } from "react-helmet";
function MyLikedArtifact() {
  const [liked, setliked] = useState([]);
  const { user } = useAuth();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://server-vert-two-78.vercel.app/allartifacts`)

        .then((res) => {
          console.log(res.data);

          const userLikeData = res.data.filter((item) =>
            item?.LikedBy?.includes(user.email)
          );

          console.log(userLikeData, "user");
          setLoading(false);

          setliked(userLikeData);
        })
        .catch((error) => {
          console.log("this error founded", error.name);
        });
    }
  }, [user?.email]);

  console.log(liked, "problem");



  return (
    <div className="">


      <Helmet>
        <title>My liked arifacts</title>
      </Helmet>

      {isLoading ? (
        <div className="flex  w-full justify-center items-center mx-auto">
          <span className="loading loading-bars  w-16"></span>
        </div>
      ) : (

        liked.length > 0 ? (  <div className="grid ld:grid-cols-3 md:grid-cols-2 grid-cols-1  py-20 bg-stone-200 dark:bg-black ">
          {liked.map((item, key) => (
            <LikeArtifact alldata={item} key={key} />
          ))}
        </div>) : (
          <div>
            <h2> No data found 😞</h2>
          </div>
        ) 

      
      )}
    </div>
  );
}

export default MyLikedArtifact;
