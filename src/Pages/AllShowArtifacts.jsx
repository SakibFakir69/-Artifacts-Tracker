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




  return (
    <div  className="">

      <section>
        {data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="max-w-xs rounded-md shadow-md   m-4 hover:shadow-xl hover:border duration-150 p-4 transition delay-150 bg-white h-96 ">
              <img
                src={Artifact_Image}
                alt=""
                className=" w-full object-cover rounded-t-md h-44 rounded-md"
              />
              <div className="flex flex-col justify-between p-6 space-y-1">

                <div className="space-y-1">
                  <p className="text-xl font-semibold text-black" >  {Artifact_Name}</p>

                  <p className="text-slate-500"> {create_At}</p>
                  <p className="text-slate-500">  {Artifact_Type}</p>
                </div>

                <NavLink
                  to={`/detailspage/${_id}`}
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 bg-violet-800 text-white"
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
