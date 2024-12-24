import React from "react";
import { NavLink } from "react-router-dom";

function AllShowArtifacts({ data }) {
  const {
    Artifact_Type: Artifact_Type,
    Historical_Context,

    create_At: create_At,
    Discovered_At,
    Discovered_By,
    Present_Location,
    LikeCount,
    Artifact_Name,
    Artifact_Image,
    _id,
  } = data;

  console.log(_id);

  return (
    <div >

      <section>
        {data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              <img
                src={Artifact_Image}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 rounded-md"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <p > <span className="text-red-500 font-semibold">Name </span> : {Artifact_Name}</p>
                  <p> <span className="text-pink-500 font-semibold">Create At</span> : {create_At}</p>
                  <p> <span className="text-emerald-500">Artifact Type </span> : {Artifact_Type}</p>
                </div>

                <NavLink
                  to={`/detailspage/${_id}`}
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default AllShowArtifacts;
