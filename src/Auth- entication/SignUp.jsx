import React, { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/AuthContextapi";
import useAuth from "../hooks/useAuth";
import Auth from "../Firebase/ConfigF";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function SignUp() {
  const { CreateUser, CreateUserWithGoogle, setuser, setloading,setphoto } =
    useContext(MyContext);

  const goTohome = useNavigate();
  const [Error, setError] = useState("");
  console.log(Error);

  //   passvalidation

  const PasswordValidation = (pass) => {
    const len = pass.length >= 6;
    const number = /[0-9]/.test(pass);
    const lowerCase = /[a-z]/.test(pass);
    const UpperCase = /[A-Z]/.test(pass);

    if (!len) {
      return "Please Enter 6 digit password";
    }
    if (!number) {
      return "Please Enter number";
    }
    if (!UpperCase) {
      return "Please Enter 1 uppercase atlast";
    }
    if (!lowerCase) {
      return "Please Enter 1 lowerCase atlast";
    }
  };

  const createUserhandel = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { email, password ,
      confirmPassword
      } = data;
    console.log(data);
    setloading(true);

    // if (password !== data.confirm - password) {
    //   return "password not same";
    // }

    // test

    const passTest = PasswordValidation(password);

    if (passTest) {
      setError(passTest);
      return;
    }
    if(password!==confirmPassword)
    {
      setError("password are not same");
      return;
    }
    if(photoURL==="")
    {
      setError('Fil photoURL filed');
      return;
    }


    CreateUser(email, password)
      .then((Result) => {
        setloading(false);
        const users = Result.user;
        setuser(users);
        setloading(false);
        
        goTohome("/");
        toast.success("Sign up succesfully");
        setphoto(data.photoURL);

      })
      .catch((error) => {
        console.log("we founed error on sign up page", error.code);
      });

    //   google login
  };
  const googleButton = () => {
    setloading(true);
    CreateUserWithGoogle()
      .then((result) => {
        goTohome("/");
        setloading(false);
        const users = result.user;
        setuser(users);
        toast.success("sinn up succesfully");
      })
      .catch((error) => {
        console.log(
          "we founed error on sign up page to google singup",
          error.code
        );
      });
  };

  return (
    <div className="w-full max-w-full">
      <ToastContainer />

      <section class="bg-gray-50 dark:bg-gray-900   ">

        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 mb-2">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Historical Artifacts Tracker
          </a>

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-4">
                Create an account
              </h1>
              <form
                class="space-y-4 md:space-y-6 mt-20"
                action="#"
                onSubmit={createUserhandel}
              >
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    required=""
                  />
                </div>

                {/* photo */}
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your photo-URL"
                    required=""
                  />
                </div>



                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                {/* error */}
                <div>
                  <p>{Error && <p className="text-red-500">{Error}</p>}</p>
                </div>

                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button> */}

                <div className="flex justify-center">
                  <button
                    type="submit"
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 md:text-xl "
                  >
                    Create Account
                  </button>
                </div>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
                  Already have an account?{" "}
                  <NavLink
                    to={"/authloayout/signin"}
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </NavLink>
                </p>
              </form>
            </div>

            <div className="flex justify-center">
              <button
                onClick={googleButton}
                type="button"
                class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
              >
                <svg
                  class="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>

            
          </div>
          <div className="mb-36"> 

            </div>
        </div>
        
      </section>
      
    </div>
  );
}

export default SignUp;
