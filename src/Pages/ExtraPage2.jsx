import React from "react";

import { motion } from "motion/react";
import { animate } from "motion";
import { Scale } from "lucide-react";
function ExtraPage2() {
  return (
    <div className="m-4 border px-4 mt-10 rounded-md  p-4 ">

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


        <motion.div  className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md ">

          <img src="/KingTutankhamunsMaskegpt.jpg" alt="egpt" />
          
         <div className="ml-2">
         <p>
            <span className="text-green-500 md:text-xl">Name</span>: <span>King Tutankhamun's Mask</span>
          </p>
          <p>
          
            <span className="text-red-500 md:text-xl">Country :</span> <i class="ri-flag-line"></i> <span>: Egpt</span>
          </p>
          <p>
            <span className="text-orange-500 md:text-xl">Time </span><i class="ri-calendar-schedule-line"></i>: <span>Around 2500 BC</span>
          </p>
         </div>


        </motion.div>

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md">
          
          <img src="/TheCrownJewelsoftheUnitedKingdomuk.jpg" alt="england" className="w-full object-cover" />

         <div className="ml-2">
         <p>
         <span className="text-green-500 md:text-xl">Name</span>: <span>he Crown Jewels of the United Kingdom</span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i> <span>England</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span> <i class="ri-calendar-schedule-line"></i> : <span>Varies (12th century)</span>
          </p>
         </div>
         <div className="mb-16 invisible">
          df
         </div>

        </div>
        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md">
          <img src="/TheDeadSeaScrollspleastine.jpg" alt="pleastine"  className="w-full object-cover"/>
          <div className="ml-2 mt-4">
          <p>
            {" "}
            <span className="text-green-500 md:text-xl">Name</span>: <span>The DeadScrolls</span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i> <span>Pleastine</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span>  <i class="ri-calendar-schedule-line"></i> : <span>2nd century BCE</span>
          </p>
          </div>
          <div className="mb-16 invisible">
            dsf
          </div>

        </div>
        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md ">

          <img src="/TheMagnaCartaengland.jpg" alt="egpt" className="w-full object-cover" />

         <div className="ml-2">
         <p>
            {" "}
            N<span className="text-green-500 md:text-xl">Name</span>: <span>The Magna Carta </span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i> <span>Grece</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span><i class="ri-calendar-schedule-line"></i> : <span>1215 AD</span>
          </p>
         </div>
        </div>

        <div
        className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md">

          <img src="/TheTerracottaArmychina.jpg" alt="egpt" className="w-full object-cover"/>

          <div className="ml-2 mt-6">
          <p>
            {" "}
            <span className="text-green-500 md:text-xl">Name</span>: <span>The Terracotta Army </span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i>  <span>Egpt</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span><i class="ri-calendar-schedule-line"></i> : <span>210 BC</span>
          </p>
          </div>
          <div className="mt-4">

          </div>
          <div className="mb-8 invisible">
            asd
            
            

          </div>
        </div>

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md">
          <img src="/TheElginMarblesgreec.jpg" className="w-full object-cove" />
          <div className="ml-2 mt-6">
          <p>
            {" "}
            <span className="text-green-500 md:text-xl">Name</span>:<span>The Elgin Marbles </span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i> <span>Grece</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span>  <i class="ri-calendar-schedule-line"></i> : <span>447 BC</span>
          </p>
          </div>
          <div className="mb-20"></div>

        </div>

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md">
          <img src="/TheRosettaStone.jpg" className="w-full object-cover" />

         <div className="ml-2">
         <p>
            {" "}
            <span className="text-green-500 md:text-xl">Name</span>: <span>The Rosetta Stone </span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i>  <span>Egpt</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span><i class="ri-calendar-schedule-line"></i> : <span>196 BC</span>
          </p>
         </div>
        </div>

        <div className="shadow-md hover:shadow-xl border border-gray-200  flex justify-center flex-col w-56 p-2 rounded-md">
          <img src="/TheMonaLisaitlaiy.jpg" className="w-full object-cover" />
          <div className="ml-2">
          <p>
            {" "}
            <span className="text-green-500 md:text-xl">Name</span>: <span>The Rosetta Stone </span>
          </p>
          <p>
          <span className="text-red-500">Country :</span> <i class="ri-flag-line"></i>  <span>Italy</span>
          </p>
          <p>
          <span className="text-orange-500 md:text-xl">Time </span> <i class="ri-calendar-schedule-line"></i>: <span>1503 AD</span>
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExtraPage2;
