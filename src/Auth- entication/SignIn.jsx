import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";

function SignIn() {
  const { LoginUser, setloading, setuser,GoogleLoginIn } = useAuth();

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
      })
      .catch((error) => {
        setloading(false);
        toast.error("log in failed");
      });
  };
  // google login
  

  return (
    <div className="bg-slate-900 h-screen">
      <div className="flex items-center justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-20">
          <ToastContainer />

          <form className="card-body " onSubmit={SignINHnadel}>
            <p className="text-center md:text-2xl font-semibold">
              Login <span className="text-green-500">Now!</span>
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">OR</p>
            
            <button
              type="button"
              class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:fo  justify-center"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
