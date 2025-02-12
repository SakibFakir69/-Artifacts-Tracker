import React from "react";
import { NavLink } from "react-router-dom";

function MyaddedartifactShow({ data, onDeletehandel }) {
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
  } = data;

  if (!data) {
    return (
      <div className="flex justify-center mt-6 py-52">
        <p className="text-black text-4xl text-center">No data founded</p>
      </div>
    );
  }

  return (
    <div>
      <section className="flex justify-center mt-4 m-4 bg-white rounded hover:shadow-2xl hover:shadow-slate-900 w-full">
        
        <div className="flex flex-col  p-4 space-y-6 overflow-hidden rounded-lg shadow-md-800  w-full">

      
          <div className="w-10/12 flex flex-col items-center mx-auto">

            <img
              src={Artifact_Image}
              alt=""
              className=" w-full rounded "
     
            />

            <section className=" grid grid-cols-2 gap-2 p-2">
              <p className="text-xl font-semibold">{Artifact_Name}</p>
              <p className="text-state-300"> {Artifact_Type || "not founded"}</p>
              <p className="text-slate-500"> {create_At || "not founded"}</p>

              <p  className="text-slate-500"> {Discovered_At || "not founded"}</p>
              <p  className="text-slate-500"> {Discovered_By || "not founded"}</p>
              <p  className="text-slate-500"> {Present_Location}</p>
            </section>
          </div>

          <div className="flex justify-evenly">
            <NavLink
              to={`/updatepage/${_id}`}
              className="px-8 py-2 border rounded-md hover:shadow-xl  text-white font-semibold

              bg-red-400 
              
              "

            >
              Update
            </NavLink>

            <button
              className="px-8 py-2   rounded-md hover:shadow-xl 
              border
              hover: bg-black
              hover:text-white
              text-white
              
              font-semibold"
              onClick={() => onDeletehandel(_id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default MyaddedartifactShow;
