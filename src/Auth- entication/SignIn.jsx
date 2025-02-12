import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {
  const { LoginUser, setloading, setuser, GoogleLoginIn } = useAuth();
  const goToHome = useNavigate("/");

  const SignINHnadel = (event) => {
    console.log("button cvlierf");

    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    setloading(true);

    LoginUser(email, password)
      .then((result) => {
        setloading(false);
        toast.success("Succesfully log in");
        const users = result.user;
        setuser(users);
        goToHome("/");
      })
      .catch((error) => {
        setloading(false);
        toast.error("log in failed");
      });
  };
  // google login
  const GoogleSiginINbutton = () => {
    setloading(true);
    GoogleLoginIn()
      .then((result) => {
        const users = result.user;
        setuser(users);
        setloading(false);
        toast.success("log in succesfully");
        goToHome("/");
      })
      .catch((error) => {
        toast.error("failed to login");
      });
  };

  return (
    <div className="bg-slate-900 h-screen">
      <ToastContainer />
      <section class="bg-gray-50 dark:bg-gray-900  p-8 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 mb-2">

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-4">
                Create an account
              </h1>
              <form
                class="space-y-4 md:space-y-6 mt-20"
                action="#"
                onSubmit={SignINHnadel}
              >
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

                <div className="flex justify-center">
                  <button
                    type="submit"
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 md:text-xl "
                  >
                    Sign In
                  </button>
                </div>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
                  You have no account?{" "}
                  <NavLink
                    to={"/authloayout/signUp"}
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up
                  </NavLink>
                </p>
              </form>
            </div>

            <div className="flex justify-center">
              <button
                onClick={GoogleSiginINbutton}
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
                Sign up with Google
              </button>
            </div>
          </div>
          <div className="mb-36"></div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
