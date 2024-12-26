import React from "react";
import { NavLink } from "react-router-dom";

function FeaturedShowInfo({ data }) {
  const { Artifact_Name, Artifact_Image, Artifact_Type, Historical_Context ,LikeCount,_id} =
    data;
  return (
    <div>
      <div className="card bg-base-100 w-96 hover:shadow-xl border mt-4">

        <figure className="px-10 pt-10">
          <img
            src={Artifact_Image}
            alt={Artifact_Name}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
         <p>Name : {Artifact_Name}</p>
         <p>Context {Historical_Context}</p>
         <p>Like Count : {LikeCount}</p>


          <div className="card-actions">

            <NavLink   to={`/detailspage/${_id}`} className="btn btn-primary">View Detils</NavLink>
            <NavLink to={'/allartifacts'} className="btn btn-primary">See all</NavLink>

          </div>

        </div>
      </div>
    </div>
  );
}

export default FeaturedShowInfo;
