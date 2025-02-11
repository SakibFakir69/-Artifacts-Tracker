import React from "react";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import Animation from "../.././public/Animation - 1734847094457.json";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      {/* add background animation */}

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">

         {/* <Lottie animationData={Animation} 

         className="w-full h-full object-cover flex justify-center items-center"
         
         
         /> */}

         <div className="mx-auto max-w-3xl text-center object-cover">

         <div className=" opacity-45">

          
 
            

         </div>
            
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Discover history and artifacts,
              <motion.span
                animate={{
                  color: [
                    "#3498db",
                    "#e74c3c",
                    "#2ecc71",
                    "#f39c12",
                    "#9b59b6",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity, // Infinite looping
                  repeatType: "reverse", // Reverses back and forth
                }}
              >
                Conecting
              </motion.span>
              <span className="sm:block">
                {" "}
                the past to present{" "}
                <motion.span
                  animate={{
                    color: ["#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  adventures{" "}
                </motion.span>
              </span>
            </h1>
            {/* use text animettion */}
            {/* background animation */}

            <p className="mx-auto mt-4 max-w-xl">
              The application will allow users to browse artifacts, view
              details, and add their own entries. The system will also allow
              users to like artifacts and keep track of their own contributions.
              The application should provide a user-friendly interface for
              managing and displaying information about various historical items
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
              to={'/allartifacts'}
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
                target="_blank"
              >
                Get Started
              </Link>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="https://en.wikipedia.org/wiki/Artifact" 
                target="_blank"
              >
                Learn More
              </a>
            </div>
            {/* </Lottie> */}



          </div>

         {/* </Lottie> */}
        </div>
      </section>
    </div>
  );
}

export default Banner;
