import React, { useRef } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

function NewsLetter() {

    const emailref = useRef();
        
  
    

    const Subcribe = (event)=>{

       
        const email = emailref.current.value;

        const emailValidation = email.includes("@");

        if(!emailValidation)
        {
            toast.error("Your email address not correct");
            return;
        }

        if(!email)
        {
            toast.error("Enter your email");
            return ;
        }

     

        axios.post('https://server-vert-two-78.vercel.app/news-letter',{email})
        .then((result)=>{
            toast.success("Sent Done")
            console.log(result);
            emailref.current.value="";

        })
        .catch((error)=>{
            toast.error("failed")

        })
    



    }


  return (
    <div>
      <section class="bg-red-400 dark:bg-black m-2 rounded dark:border ">
        <div class="max-w-3xl px-6 py-16 mx-auto text-center">
          <h1 class="text-3xl font-semibold text-white">
            Subscribe Now & Stay Updated on Rare Artifacts! 🚀
          </h1>
          <p class="max-w-md mx-auto mt-5  text-stone-200 dark:text-gray-400">
          Track, discover, and preserve artifacts with ease! Stay updated on rare finds, historical treasures, and expert insights—delivered straight to your inbox.
            


          </p>
          <ToastContainer/>

          <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input
              id="email"
              type="email"
              name="email"
              ref={emailref}
              class="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Email Address" required
            />

            <button onClick={Subcribe}  class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
