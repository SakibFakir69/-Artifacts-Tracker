import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import Updated from "../Pages/Updated";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

function UpdatePage() {

  const [update, setupdate] = useState([]);
  const data = useLoaderData();

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
    Email,
    _id
    
  } = data;


  // fetch data for default value;





  const UpdateButtonhandel = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);

    fetch(`hhttps://server-vert-two-78.vercel.app/allartifacts/${_id}`, 
      {
        method :'PUT',
        headers:{
          'Content-type': 'application/json'
        },
        body : JSON.stringify(info)

      }
    )
    .then((res)=>{
      console.log("ok");
      toast.success("done")
    })
    .catch((error)=>{
      console.log(error.code)
    })



    console.log("update done");
  };
  console.log(update, "dsf");

  return (
    <div>
      <section className=" ">
        <form
          class="max-w-md mx-auto  p-4 rounded-md shadow-xl border flex flex-col gap-4 mt-6 "
          onSubmit={UpdateButtonhandel}
        >
          <div class="relative z-0 w-full  group ">
            <input
              defaultValue={Artifact_Name}
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
              defaultValue={Artifact_Image}
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

          <div class="max-w-sm mx-auto flex w-full ">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>

            <select
              defaultValue={Artifact_Type}
              id="countries"
              name="Artifact_Type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex   "
            >
              <option value="Writing">Writing</option>
              <option value="Tools">Tools</option>
              <option value="Documents">Documents</option>
              <option value="Weapons">Weapons</option>
            </select>
          </div>

          <div className="">
            <input
              defaultValue={Historical_Context}
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
              defaultValue={create_At}
              type="text"
              name="create_At"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Created At"
              required
            />
          </div>
          {/*Discovered At  */}

          <div>
            <input
              defaultValue={Discovered_At}
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
              defaultValue={Discovered_By}
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
              defaultValue={Present_Location}
              name="Present_Location"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Present Location"
              required
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="px-6 py-2 border w-full  rounded-md bg-blue-700 text-white md:text-xl hover:opacity-75 hover:text-black duration-300 "
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdatePage;
