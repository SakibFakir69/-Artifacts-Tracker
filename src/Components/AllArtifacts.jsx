import React, { useEffect, useState } from "react";
import axios from "axios";
import { useScroll } from "motion/react";
import AllShowArtifacts from "../Pages/AllShowArtifacts";
import { data } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function AllArtifacts() {
  // fecth all aritact

  const {loading} = useAuth();

  const [artifacts, setartifacts] = useState([]);
  const [serachData, setserachData] = useState([]);
  const [Errorx, setErrorx] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allartifacts", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setartifacts(response.data);
        setserachData(response.data);
      })
      .catch((error) => {
        console.log("this error find from all aritac", error.name);
      });
  }, []);

  console.log(artifacts);

  // add pagination
  // seacrh

  const [input, setinput] = useState("");

  const Finder = (event) => {
    event.preventDefault();
    console.log(input);

    // api

    axios.get(`http://localhost:5000/allartifacts/search?name=${input}`).then((res) => {
      console.log(res.data);
      setserachData(res.data);
    });
  };
  console.log(serachData, "tesrt");

  if(serachData.length==0)
  {
    return <div className="flex justify-center mt-6">
    <span className="loading loading-bars loading-md flex justify-center items-center text-red-500 text-center"></span>
</div>

  }
  

  return (
    <div className="px-4">
      <div className="mt-6">
        <form class="max-w-md mx-auto" onSubmit={Finder}>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => setinput(e.target.value)}
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search  Artifacts...."
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <h1 className="text-center md:text-4xl text-xl mt-4 border rounded-md ">
        All Artifact Here{" "}
      </h1>

      <section>
        <div>{Errorx && <p>No Data Founded</p>}</div>

        <div className="grid md:grid-cols-4 gap-4 grid-cols-2 m-2  ">
          {serachData.map((item, key) => (
            <AllShowArtifacts data={item} key={key} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllArtifacts;
