import React from "react";

function LikeArtifact({ alldata }) {
  const {
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
  } = alldata;


  return (
    <div>
      <section className="w-full p-4 flex justify-center items-center mx-auto ">

        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-black dark:text-text-white  border border-s-teal-100/40 bg-white">
          
          <div>
            <img
              src={Artifact_Image}
              alt="Img"
            className="lg:h-96 md:h-80 sm:h-64 h-56 w-full  rounded "
           
            />

            <section className=" grid grid-cols-2 gap-2 p-2">
              <p className="text-xl font-semibold text-black dark:text-white"> {Artifact_Name}</p>

              <p className="text-stone-600 dark:text-stone-100">{Artifact_Type || "not founded"}</p>
              <p className="text-stone-600 dark:text-stone-100"> {create_At || "not founded"}</p>

              <p className="text-stone-600 dark:text-stone-100"> {Discovered_At || "not founded"}</p>
              <p className="text-stone-600 dark:text-stone-100">{Discovered_By || "not founded"}</p>
              <p className="text-stone-600 dark:text-stone-100"> {Present_Location}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LikeArtifact;
