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
      <section className=" md:grid-col-3 grid-cols-1 mt-4 flex justify-center m-4">
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border">
          <div>
            <img
              src={Artifact_Image}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />

            <section className="border grid grid-cols-2 gap-2 p-2">
              <p>Artifact Name : {Artifact_Name}</p>
              <p>Artifact Type : {Artifact_Type || "not founded"}</p>
              <p>Create At : {create_At || "not founded"}</p>

              <p>Descovered At : {Discovered_At || "not founded"}</p>
              <p>discovered by : {Discovered_By || "not founded"}</p>
              <p>Present Location : {Present_Location}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LikeArtifact;
