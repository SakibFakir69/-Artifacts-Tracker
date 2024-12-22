import React from "react";
import Typewriter from "typewriter-effect";

function ExtraPage1() {
  return (
    <div className="mx-2 mt-4">
      {/* card and detils */}
      {/* when hover show detail */}
     

     
      <h1 className="text-center  text-2xl md:text-6xl font-semibold mb-4">
      <Typewriter
        options={{
          strings:["Popular Historic Periods"],


          autoStart: true,
          loop: true,
        }}
      />


      </h1>
      <hr className="mb-6"></hr>

      <section className="grid md:grid-cols-3 gap-4 justify-center ">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-100 shadow-lg">
          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* {/* Classical Greek Period (c. 800 BCE – 146 BCE) */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-100 shadow-lg mt-2 hover:border-2 hover:border-red-300">
          <div>
            <img src="g.jpg" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Classical Greek Period
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Greek Empire refers to the ancient civilization of Ancient
            Greece, which spanned over fourteen centuries from the Archaic Era
            in the 8th century BC to the end of antiquity around 600 AD1. During
            the Hellenistic period (323 B.C. to 31 B.C.), Alexander the Great
            built an empire that stretched from Greece to India, spreading Greek
            ideas and culture2.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Roman Empire */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-100 shadow-lg">
          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Roman Empire
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The Roman Empire ruled the Mediterranean and much of Europe, Western
            Asia and North Africa. The Romans conquered most of this during the
            Republic, and it was ruled by emperors following Octavian's
            assumption of effective sole rule in 27 BC. The western empire
            collapsed in 476 AD, but the eastern empire lasted until the fall of
            Constantinople in 1453
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        {/* Medieval Period */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-100 shadow-lg">
          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medieval Period
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ancient Egypt was a civilization of In the history of Europe, the
            Middle Ages or medieval period lasted approximately from the 5th to
            the late 15th centuries, similarly to the Post-classical period of
            global history. It began with the fall of the Western Roman Empire
            and transitioned into the Renaissance and the Age of Discovery
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        {/* Renaissance */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-100 shadow-lg">
          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            change in most fields and disciplines, including art, architecture,
            politics, literature, exploration and science, the Renaissance was
            first centered in the Republic of Florence, then spread to the rest
            of Italy and later throughout Europe
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        {/*  The Hittite Empire */}

        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-100 shadow-lg">
          <div>
            <img src="e2.png" className="rounded-md shadow-md" />
          </div>

          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ExtraPage1;
