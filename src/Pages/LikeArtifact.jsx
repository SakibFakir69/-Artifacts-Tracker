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
      <section className="w-full p-4 ">

        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border">
          
          <div>
            <img
              src={Artifact_Image}
              alt="Img"
            className="h-80 w-full  rounded object-fill"
           
            />

            <section className="border grid grid-cols-2 gap-2 p-2">
              <p className="text-xl font-semibold"> {Artifact_Name}</p>

              <p className="text-stone-600">{Artifact_Type || "not founded"}</p>
              <p className="text-stone-600"> {create_At || "not founded"}</p>

              <p className="text-stone-600"> {Discovered_At || "not founded"}</p>
              <p className="text-stone-600">{Discovered_By || "not founded"}</p>
              <p className="text-stone-600"> {Present_Location}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LikeArtifact;
