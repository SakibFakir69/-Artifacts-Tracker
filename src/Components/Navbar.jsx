import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Auth from "../Firebase/ConfigF";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "motion/react";
import { easeIn } from "motion";
 

function Navbar() {
  const { user, setloading, setuser,photo } = useAuth();
  console.log(user);

  // log out

  const logout = () => {

    setloading(false);
    

    signOut(Auth)
      .then((result) => {
        // setloading(false);
        console.log("lo out");
        setuser(null);
        toast.success('Log out succesfully')
      })
      .catch((error) => {
        console.log("this error comes form ", error.code);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allartifacts"}>All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to={"/addartifacts"}>Add Artifacts</NavLink>
      </li>

      <li>
        <NavLink>
          Myprofile
          <select value="myProfile">
            <option>My Artifacts</option>
            <option>Liked Artifacts</option>
          </select>
        </NavLink>
      </li>
      <li><NavLink to={'/mylikedartifact'}>mylikedartifact</NavLink></li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-transparent border shadow-md ">
        <div className="navbar-start">
            <ToastContainer/>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <motion.a whileHover={{scale:1.1 , opacity:0.9}} 
          className="btn-ghost md:text-2xl">Historical Artifacts Tracker</motion.a>
          

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-4 ">

          <div className="size-10">
            <img src={user?.photoURL || photo} alt="!" />
          </div>

          {user ? (
            <div>
              <button onClick={logout} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log out 
                </span>
              </button>
            </div>
          ) : (
            <div>
              <NavLink  to={"/authloayout/signin"} className={'btn px-6 border-2'}>Log In</NavLink>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
