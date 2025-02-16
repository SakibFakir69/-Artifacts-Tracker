import React from "react";

import { motion } from "motion/react";
import { animate } from "motion";
import { Scale } from "lucide-react";
function ExtraPage2() {
  return (
    <div className="m-4 px-4 mt-10 rounded-md  p-4  bg-stone-200 dark:bg-black">

      <h1 className="text-4xl font-semibold mb-4 text-center">
        {" "}
        A{" "}
        <motion.span
          animate={{ color: ["#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"] }}
          transition={{
            duration: 10,
            delay: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {" "}
          Collection
        </motion.span>
        of Iconic Artifacts{" "}
      </h1>

      {/* {gave me details all artifact} */}
      {/* name,country,time */}

      <section className="grid md:grid-cols-4 items-center justify-center gap-4">

        <motion.div className="shadow-md hover:shadow-xl border border-gray-200 bg-white  flex justify-center flex-col w-56  rounded-md p-4 hover:shadow-black

        dark:bg-black
        
        ">


          <img src="/KingTutankhamunsMaskegpt.jpg" alt="egpt" className="w-full h-48 rounded" />

          <div className="ml-2 mt-2 ">
            <p className="">
              <span className="text-black font-semibold dark:text-white ">
                King Tutankhamun's Mask
              </span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-flag-line"></i> <span> Egpt</span>
            </p>
            <p className="text-slate-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i>{" "}
              <span className="dark:text-slate-300">Around 2500 BC</span>
            </p>
          </div>
        </motion.div>
        {/* done  1 */}

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col  w-56 rounded-md p-4 bg-white hover:shadow-black dark:bg-black">

          <img
            src="/TheCrownJewelsoftheUnitedKingdomuk.jpg"
            alt="england"
            className="w-full object-cover h-48 rounded"
          />

          <div className="ml-2 mt-2">

            <p className=" font-semibold dark:text-white">
              <span className="dark:text-slate-300"> Crown Jewels of the United Kingdom</span>
            </p>
            <p className="text-stone-500">
              <i class="ri-flag-line dark:text-slate-300"></i> <span className="dark:text-slate-300">England</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i>{" "}
              <span>Varies (12th century)</span>
            </p>
          </div>

          {/* done  2 */}

         
        </div>

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-4 bg-white  rounded-md hover:shadow-black dark:bg-black" >
          <img
            src="/TheDeadSeaScrollspleastine.jpg"
            alt="pleastine"
            className="w-full object-cover rounded h-48"
          />
          <div className="ml-2 mt-2">
            <p className="text-black font-semibold">
              {" "}
              <span className="dark:text-white">The DeadScrolls</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-flag-line"></i> <span>Pleastine</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i>{" "}
              <span>2nd century BCE</span>
            </p>
            <div className="invisible">d</div>
          </div>
         
        </div>
        {/* done 3  */}

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-4 rounded-md  

        dark:bg-black
        
        
        bg-white hover:shadow-black">

          <img
            src="/TheMagnaCartaengland.jpg"
            alt="egpt"
            className="w-full object-cover h-48 rounded"
          />

          <div className="ml-2 mt-2">
            <p className="text-black font-semibold dark:text-white">
              {" "}
              <span>The Magna Carta </span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-flag-line"></i> <span>Grece</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i> : <span>1215 AD</span>
            </p>
            <div className="invisible">
              s
            </div>
          </div>
        </div>
        {/* done  4 */}


        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-4 rounded-md

        dark:bg-black
        
        bg-white hover:shadow-black">
          <img
            src="/TheTerracottaArmychina.jpg"
            alt="egpt"
            className="w-full object-cover h-48 rounded"
          />

          <div className="ml-2 mt-6">
            <p className="text-black font-semibold dark:text-white">
              {" "}
              <span>The Terracotta Army </span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              {" "}
              <i class="ri-flag-line"></i> <span>Egpt</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i> : <span>210 BC</span>
            </p>
          </div>
      
          
        </div>
        {/* done */}

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-4 rounded-md

        dark:bg-black
        
        bg-white hover:shadow-black">
          <img src="/TheElginMarblesgreec.jpg" className="w-full object-cover h-48 rounded" />

          <div className="ml-2 mt-2">

            <p className="text-black font-semibold dark:text-white">
              {" "}
              <span>The Elgin Marbles </span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-flag-line"></i> <span>Grece</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i> : <span>447 BC</span>
            </p>
          </div>
         
        </div>

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-4 rounded-md bg-white

        dark:bg-black
        
        hover:shadow-black">
          <img src="/TheRosettaStone.jpg" className="w-full object-cover h-48 rounded" />

          <div className="ml-2 mt-2">
            <p className="text-black font-semibold dark:text-white">
              {" "}
              <span>The Rosetta Stone </span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-flag-line"></i> <span>Egpt</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i> : <span>196 BC</span>
            </p>
          </div>
        </div>
        {/* done */}

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-4 rounded-md bg-white

        dark:bg-black
        
        hover:shadow-black">

          <img src="/TheMonaLisaitlaiy.jpg" className="w-full object-cover rounded h-48" />
          <div className="ml-2 mt-4">
            <p className="text-black font-semibold dark:text-white">
              {" "}
              <span>The Rosetta Stone </span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-flag-line"></i> <span>Italy</span>
            </p>
            <p className="text-stone-500 dark:text-slate-300">
              <i class="ri-calendar-schedule-line"></i>: <span>1503 AD</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExtraPage2;
