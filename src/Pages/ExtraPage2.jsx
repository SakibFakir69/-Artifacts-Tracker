import React from "react";

import { motion } from "motion/react";
function ExtraPage2() {
  return (
    <div className="m-4 border px-4 mt-10">

      <h1 className="text-4xl font-semibold mb-4 text-center">  A <motion.span animate={{color:[
                    "#e74c3c",
                    "#2ecc71",
                    "#f39c12",
                    "#9b59b6",]}}

      transition={{duration:10, delay:3, repeat:Infinity, repeatType:"reverse"}}
      
      > Collection</motion.span>
        
         of Iconic Artifacts </h1>


      {/* {gave me details all artifact} */}
      {/* name,country,time */}

      <section className="grid md:grid-cols-4 grid-cols-2 gap-4">

        <div>
            <img src='/KingTutankhamunsMaskegpt.jpg' alt="egpt"/>
            <p>Name: <span>King Tutankhamun's Mask</span>
           
           </p>
           <p>Country: <span>Egpt</span>
           </p>
           <p>Time: <span>Around 2500 BC</span></p>
           

        </div>

        <div>
            <img src='/TheCrownJewelsoftheUnitedKingdomuk.jpg' alt="england"/>

            <p>Name: <span>he Crown Jewels of the United Kingdom</span>

           </p>
           <p>Country : <span>England</span></p>
           <p>Time: <span>Varies (12th century)</span></p>


        </div>
        <div>
            <img src='/TheDeadSeaScrollspleastine.jpg' alt="pleastine"/>
            <p> Name :  <span>The DeadScrolls</span></p>
            <p>Country : <span>Pleastine</span></p>
            <p>Time : <span>2nd century BCE</span></p>


        </div>
        <div>
            <img src='/TheMagnaCartaengland.jpg' alt="egpt"/>
        
            <p> Name :  <span>The Magna Carta </span></p>
            <p>Country : <span>Grece</span></p>
            <p>Time : <span>1215 AD</span></p>
        </div>

       
        
        
        <div>
            <img src='/TheTerracottaArmychina.jpg' alt="egpt"/>
           

            <p> Name :  <span>The Terracotta Army china</span></p>
            <p>Country : <span>Egpt</span></p>
            <p>Time : <span>210 BC</span></p>


        </div>

        <div>
            <img src='/TheElginMarblesgreec.jpg' />
            <p> Name :  <span>The Elgin Marbles  </span></p>
            <p>Country : <span>Grece</span></p>
            <p>Time : <span>447 BC</span></p>
        </div>

        <div>
            <img src='/TheRosettaStone.jpg' />
            <p> Name :  <span>The Rosetta Stone  </span></p>
            <p>Country : <span>Egpt</span></p>
            <p>Time : <span>196 BC</span></p>
        </div>

        <div>
            <img src='/TheMonaLisaitlaiy.jpg' />
            <p> Name :  <span>The Rosetta Stone  </span></p>
            <p>Country : <span>Italy</span></p>
            <p>Time : <span>1503 AD</span></p>
        </div>
        


        
        


     

      </section>
    </div>
  );
}

export default ExtraPage2;
