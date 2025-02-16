import React from "react";
import Typewriter from "typewriter-effect";

function ExtraPage1() {
  return (
    <div className="mx-2 mt-4">
      {/* card and detils */}
      {/* when hover show detail */}
      {/* add frammer motion */}
     

     
      <h1 className="text-center  text-2xl md:text-6xl font-semibold mb-4 text-red-300">
      <Typewriter
        options={{
          strings:["Popular Historic Periods"],


          autoStart: true,
          loop: true,
        }}
      />


      </h1>


      <section className="grid md:grid-cols-3 gap-4 justify-center bg-stone-200 p-4 dark:bg-black">

        <div class="max-w-sm p-6  border-gray-200 rounded-lg  hover:shadow-xl hover:shadow-blue-100
        bg-white 
        
        
        shadow-lg hover:scale-105 transition duration-200 mb-4 dark:bg-black">

          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl  tracking-tight text-black  font-semibold">

              Ancient Egyptian Period
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ancient Egypt was a civilization of ancient Northeast Africa. It was
            concentrated along the lower reaches of the Nile River, situated
            within the contemporary territory of modern-day Egypt. Ancient
            Egyptian civilization followed prehistoric Egypt and coalesced
            around 3100 BC (according to conventional Egyptian chronology)[1]
            with the political unification of Upper and Lower Egypt under
            pharaoh or king Menes (often identified with Narmer)
            Since its beginning, Sparta had been ruled by a diarchy. This meant that Sparta had two kings 
          </p>

          <a href="https://en.wikipedia.org/wiki/Ancient_Egypt" target="_blank" className="px-7 py-2 border rounded-md bg-red-500 text-white">Read More</a>

          
        </div>

        {/* {/* Classical Greek Period (c. 800 BCE – 146 BCE) */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg   hover:shadow-blue-100  mt-2 hover:border-2 hover:border-red-100 hover:shadow-2xl duration-200 relative transition shadow-slate-400 hover:scale-105  mb-4 dark:bg-black">

          <div>
            <img src="g.jpg" className="rounded-md shadow-md" />
          </div>

          <a href="#" className="mt-2">

            <h5 class="mb-2 text-2xl tracking-tight  text-black mt-2 font-semibold">
              Classical Greek Period
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Greek Empire refers to the ancient civilization of Ancient
            Greece, which spanned over fourteen centuries from the Archaic Era
            in the 8th century BC to the end of antiquity around 600 AD1. During
            the Hellenistic period (323 B.C. to 31 B.C.), Alexander the Great
            built an empire that stretched from Greece to India, spreading Greek
            Since its beginning, Sparta had been ruled by a diarchy. This meant that Sparta had two kings ruling concurrently .
           
          </p>

          <a href="https://en.wikipedia.org/wiki/Classical_Greece" className="px-7 py-2 border rounded-md bg-red-500 text-white" target="_blank">Read More</a>
         
        </div>

        {/* Roman Empire */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl hover:shadow-blue-100 shadow-lg hover:scale-105 duration-200 mb-4 dark:bg-black">

          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tightdare mt-2">
              Roman Empire
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Roman Empire ruled the Mediterranean and much of Europe, Western
            Asia and North Africa. The Romans conquered most of this during the
            Republic, and it was ruled by emperors following Octavian's
            assumption of effective sole rule in 27 BC. The western empire
            collapsed in 476 AD, but the eastern empire lasted until the fall of
            Constantinople in 1453 .Explore the emperors, wars, religions, and cultures that shaped the Roman Empire.Thereafter, Alexander continued his father's plans to conquer all of Greece
          </p>

          <a href="https://en.wikipedia.org/wiki/Roman_Empire" className="px-7 mt-2 py-2 border rounded-md bg-red-500 text-white">Read More</a>
        
        </div>
        {/* Medieval Period */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  hover:shadow-xl hover:shadow-blue-100 shadow-lg hover:scale-105 duration-200 mb-4 dark:bg-black">

          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
              Medieval Period
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ancient Egypt was a civilization of In the history of Europe, the
            Middle Ages or medieval period lasted approximately from the 5th to
            the late 15th centuries, similarly to the Post-classical period of
            global history. It began with the fall of the Western Roman Empire
            and traflourish and the Medieval Warm Period climate change allowed crop yields to increase. Manorialism, the organisation of peasants into villages that owed rent and labour services to the nobles, and feudalism, the political structure whereby knights and lower-status nobles owed military service to their overlords in return 
          </p>
          <a href="https://en.wikipedia.org/wiki/Middle_Ages" target="_blank" className="px-7 py-2 border rounded-md bg-red-500 text-white">Read More</a>
        </div>
        {/* Renaissance */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  hover:shadow-xl hover:shadow-blue-100 shadow-lg hover:scale-105 duration-200 mb-4  dark:bg-black">
          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
              Renaissance
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Renaissance (UK: /rɪˈneɪsəns/ rin-AY-sənss, US: /ˈrɛnəsɑːns/ ⓘ
            REN-ə-sahnss)[1][2][a] is a period of history and a European
            cultural movement covering the 15th and 16th centuries. It marked
            the transition from the Middle Ages to modernity and was
            characterized by an effort to revive and surpass the ideas and
            achievements of classical antiquity. Associated with great social
            change in most fields and disciplines, including art, 
            politics, literature, exploration and science, the Renaissance was
            first centered in the Republic of Florence, then spread to the rest
            of Italy.
          </p>
          <a href="https://en.wikipedia.org/wiki/Renaissance" className="px-7 py-2 border rounded-md bg-red-500 text-white">Read More</a>
        </div>
        {/*  The Hittite Empire */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  hover:shadow-xl hover:shadow-blue-100 shadow-lg hover:scale-105 duration-200 mb-4 dark:bg-black">

          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
              The Hittite Empire
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Hittites (/ˈhɪtaɪts/) were an Anatolian Indo-European people who
            formed one of the first major civilizations of Bronze Age West Asia.
            Possibly originating from beyond the Black Sea,[2] they settled in
            modern-day Turkey in the early 2nd millennium BC. The Hittites
            formed a series of polities in north-central Anatolia, including the
            kingdom of Kussara (before 1750 BC), the Kanesh or Nesha kingdom
            (c. 1750–1650 BC), and an empire centered on Hattusa (around 1650
            BC)
            Scholars once attributed the development of iron-smelting  
          </p>
          <a href="https://en.wikipedia.org/wiki/Renaissance" target="_blank" className="px-7 py-2 border rounded-md bg-red-500 text-white">Read More</a>
          
        </div>
      </section>
    </div>
  );
}

export default ExtraPage1;
