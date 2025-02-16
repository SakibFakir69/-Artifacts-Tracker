import React, { useEffect, useState } from "react";
import axios from "axios";
import { useScroll } from "motion/react";
import AllShowArtifacts from "../Pages/AllShowArtifacts";
import { data } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import { section } from "motion/react-client";
function AllArtifacts() {
  // fecth all aritact

  const { loading } = useAuth();

  const [artifacts, setartifacts] = useState([]);
  const [serachData, setserachData] = useState([]);
  const [Errorx, setErrorx] = useState(false);

  const [isloading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://server-vert-two-78.vercel.app/allartifacts", {
        withCredentials: true,
      })

      .then((response) => {
        console.log(response.data);
        setartifacts(response.data);
        setserachData(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log("this error find from all aritac", error.code);
        console.log(error.message);
        console.log(error.code);
      });
  }, []);

  console.log(artifacts);

  // add pagination
  // seacrh

  const [input, setinput] = useState("");

  // const Finder = (event) => {
  //   event.preventDefault();
  //   console.log(input);

  //   // api

  //   axios
  //     .get(
  //       `https://server-vert-two-78.vercel.app/allartifacts/search?name=${input}`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setserachData(res.data);
  //       setloading(false);
  //     });
  // };

  const [Search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://server-vert-two-78.vercel.app/allartifacts/search?name=${Search}`
      )
      .then((res) => {
        console.log(res.data);
        setserachData(res.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error.code);
      });
  }, [Search]);

  console.log(serachData);

  const [ sorted , setsorted ] = useState([]);


  const asyndingOrderSearch = () => {

    const ascending =[...artifacts].sort(
      (a, b) => b.Discovered_At - a.Discovered_At
    );
    setserachData(ascending);

    console.log("aes")
  };

  const desndingOrderSearch = () => {
    
    const dscending = [...artifacts].sort(
      (a, b) => a.Discovered_At - b.Discovered_At
    );
    setserachData(dscending);
    console.log("des")
  };


 

  return (
    <div className=" ">
      <Helmet>
        <title>All arifacts</title>
      </Helmet>

      {isloading ? (
        <div className="w-full   flex ">
          <span className="loading loading-bars  flex w-20 h-20 mx-auto justify-center items-center py-40"></span>
        </div>
      ) : (
        <section className="bg-stone-100 py-20 dark:bg-black">
          <div className="absolute w-full text-center py-32 ">
            {serachData.length === 0 && (
              <p>🚫 No matching artifacts found! 🔍</p>
            )}
          </div>

          <h1 className="text-center md:text-4xl text-xl mt-4 rounded-md h-10"></h1>

          <div className="-4  mb-10 ">
            <form class="max-w-md mx-auto ">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
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
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search  Artifacts...."
                  required
                />
              </div>
            </form>
          </div>

          <div className="flex justify-end mr-2 items-center">
            <span>Sort by:</span>

            <select  className="relative z-10 ml-2  p-2 rounded" onChange={(e)=>{

              if(e.target.value==='ascending'){ asyndingOrderSearch() }

              else  if(e.target.value==='descending') {desndingOrderSearch()}
              else{
                setserachData(artifacts);
              }

            } }>


              <option  value="default">Default</option>

              <option value="ascending">Ascending</option>

              <option  value="descending">Descending</option>
            </select>
          </div>

          <section className="">
            <div className="grid md:grid-cols-4 gap-4 grid-cols-1 m-2   ">
              {serachData.map((item, key) => (
                <AllShowArtifacts data={item} key={key} />
              ))}
            </div>
          </section>
        </section>
      )}
    </div>
  );
}

export default AllArtifacts;
