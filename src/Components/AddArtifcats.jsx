import { object } from "motion/react-client";
import React, { useContext } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer , toast} from "react-toastify";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { toastConfig } from "react-simple-toasts";

function AddArtifcats() {

  const {user} = useAuth();


  const handeladdArtifactsFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    const {
      Artifact_Name,
      Artifact_Image,
      Artifact_Type,
      Historical_Context,
      Discovered_At,
      Discovered_By,
      Present_Location,LikeCount,
    } = info;

    const artifactUserData = {
      ...info,LikeCount:0,
    }

    axios.post('http://localhost:5000/addartifact',{artifactUserData})
    .then((data)=>{
      
      if(data.
        status
        ){
        toast.success("Add artifact sucesfully")
      
           
      }
    })
    .catch((error)=>{
      console.log("this error come form add artifact", error.name);
    })


    // start post opration
    console.log(artifactUserData);

  };

  return (
    <div>
      {/* here  create post req and form */}

      <div className=" mt-6 text-center">
        <h1 className="md:text-4xl font-semibold text-2xl">
          Add your Artifacts
        </h1>
      </div>

      {/* to */}
      {/* 
(dropdown: Tools, Weapons, Documents, Writings, etc.)
Historical Context */}

      <section className="text-black">
        <form class="max-w-md mx-auto " onSubmit={handeladdArtifactsFormData}>
          <div class="relative z-0 w-full mb-5 group ">
            <ToastContainer/>
            <input
              type="text"
              name="Artifact_Name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />

            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your artifact name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="url"
              name="Artifact_Image"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />

            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
               Artifact Image
            </label>
          </div>

          {/* drop dwon */}

          <form class="max-w-sm mx-auto" onSubmit={handeladdArtifactsFormData}>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Artifact Type</option>
              <option value="Writing">Writing</option>
              <option value="Tools">Tools</option>
              <option value="Documents">Documents</option>
              <option value="Weapons">Weapons</option>
            </select>
          </form>

          <div className="">
            <input
              type="text"
              name="Historical_Context"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Enter Historical Context"
              required
            />
          </div>

          {/*Created At  */}

          <div>
            <input
              type="text"
              name="Discover_At"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Created At"
              required
            />
          </div>
          {/*Discovered At  */}

          <div>
            <input
              type="text"
              name="Discovered_by"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Discover At"
              required
            />
          </div>
          {/* Discovered By */}
          <div>
            <input
              type="text"
              name="Discovered_By"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Discovered By"
              required
            />
          </div>
          {/* Present Location */}
          <div>
            <input
              type="text"
              name="Present_Location"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Present Location"
              required
            />
          </div>

          {/* user */}
          <div>
            <input
            value={user?.email}
              type="text"
              readOnly
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-6 py-2 border w-full mt-4  rounded-md bg-blue-700 text-white md:text-2xl hover:bg-transparent hover:text-black duration-300 mb-6"
            >
              Add Artifact
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddArtifcats;
