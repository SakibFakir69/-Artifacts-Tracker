import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Auth from "../Firebase/ConfigF";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "motion/react";


function Navbar() {
  const { user, setloading, setuser,photo } = useAuth();
  console.log(user);

  console.log(photo,"sdf")

  // log out

  const logout = () => {

    setloading(true);
    

    signOut(Auth)
      .then((result) => {
        // setloading(false);
        setloading(false);
        
        console.log("lo out");
        setuser(null);
        toast.success('Log out succesfully')
      })
      .catch((error) => {
        console.log("this error comes form ", error.code);
      });
  };
  console.log(photo ,"navbar");
  const navgate = useNavigate();
  const handelChnage = (event)=>{
    const selectedValue = event.target.value;
    navgate(selectedValue);
  }

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
        

        
          
      
      </li>

   
  
      
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
              <select onChange={handelChnage} className="border p-1 rounded-md">
                <option value={""}>Select</option>
                <option value="mylikedartifact">My Liked</option>
                <option value="/myadedaartifacts">My Added artifacts</option>

              </select>
            </ul>
          </div>
          <motion.a whileHover={{scale:1.1 , opacity:0.9}} 
          className="btn-ghost md:text-2xl">Historical Artifacts <span className="text-green-400 font-semibold">Tracker</span></motion.a>
          

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-4 ">

          <div className="size-10 border rounded-full">
            <img src={photo || user?.photoURL
}  />
          </div>

          {user ? (
            <div>
              <button onClick={logout} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log out 
                </span>
              </button>

              <select onChange={handelChnage} className="border-2 p-1 rounded-md  md:w-32 md:h-10 ">

                <option value={""}>My Profile</option>
                <option value="/mylikedartifact">My Liked</option>
                <option value="/myadedaartifacts">My Added artifacts</option>

              </select>
              
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
