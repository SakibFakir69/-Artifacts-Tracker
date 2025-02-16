import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { increment } from "firebase/firestore/lite";

function ShowDetailsPage({ alldata }) {
  // add like button and count like
  // click like button incarase by one

  const { setlikedpost } = useAuth();
  let {
    Artifact_Name,
    Artifact_Image,
    Artifact_Type,
    Historical_Context,
    create_At,
    Discovered_At,
    Discovered_By,
    Present_Location,
    LikeCount,
    _id,
    LikeBy,
  } = alldata;

  const { user } = useAuth();

  const [like, setlike] = useState(false);

  const [likecount, setlikecount] = useState(LikeCount);

  const handleLike = () => {
    const counter = like ? -1 : 1;

    console.log(counter);
    if (counter < 0) {
      LikeCount = -1;
    }
    setlike((prev) => !prev);

    //
    // axios.post('/myadedlikapi',LikeBy)

    const Account = user?.email;

    axios
      .put(`https://server-vert-two-78.vercel.app/detailspage/like/${_id}`, {
        increment: counter,
        Email: user?.email,
      })
      .then((response) => {
        if (response.status === 200) {
          setlikecount((prev) => prev + counter);
        }
      });
  };

  return (
    <div className="bg-white">

      <div className="w-full flex-grow flex mx-auto  ">

        <div className="md:flex   px-4 space-y-4  border p-4 bg-stone-200 items-center mx-auto   w-full justify-evenly shadow-lg shadow-slate-950 rounded">

          <img
            src={Artifact_Image}
            alt=""
            className="w-96   p-4 rounded h-96 flex justify-center items-center mx-auto"
          />

          <div className="flex space-x-4 h-96">

            <div className="flex flex-col space-y-5 p-3">

              <p className="text-xl font-semibold
              "> {Artifact_Name}</p>
              <p className="">{ Historical_Context}</p>
              <p> {Artifact_Type || "not founded"}</p>
              <p> {create_At || "not founded"}</p>

              <p>{Discovered_At || "not founded"}</p>
              <p>{Discovered_By || "not founded"}</p>
              <p> {Present_Location}</p>

              <section>
                <div className="flex flex-wrap  justify-center">
                  <i
                    onClick={handleLike}
                    className={`${
                      like
                        ? "text-blue-400 ri-thumb-up-line text-2xl md:text-3xl"
                        : "ri-thumb-up-line text-2xl md:text-3xl"
                    }`}
                  ></i>{" "}
                  {likecount}
                </div>
                <p className="text-center -mt-4">{like}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetailsPage;
