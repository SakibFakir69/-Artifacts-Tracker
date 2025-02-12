import React from "react";
import { NavLink } from "react-router-dom";

function FeaturedShowInfo({ data }) {
  const { Artifact_Name, Artifact_Image, Artifact_Type, Historical_Context ,LikeCount,_id} =
    data;
  return (
    <div>
      <div className="card bg-base-100 w-96 hover:shadow-xl border mt-4">

        <figure className="px-8 pt-10 w-full">
          <img
            src={Artifact_Image}
            alt={Artifact_Name}
            className="rounded-xl  h-64 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">

        <div className="">

        <p className="text-black font-semibold"> {Artifact_Name}</p>
         <p className="text-slate-600"> {Historical_Context}</p>
         <p className="text-red-300"> {LikeCount}</p>

        </div>

          <div className="card-actions">

            <NavLink   to={`/detailspage/${_id}`} className="px-7 py-2 bg-red-600 rounded-md text-white hover:bg-red-400">View Detils</NavLink>

            <NavLink to={'/allartifacts'} className="px-7 py-2 border rounded-md hover:bg-red-600 hover:text-white">See all</NavLink>

          </div>

        </div>
      </div>
    </div>
  );
}

export default FeaturedShowInfo;
