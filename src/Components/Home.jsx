

import React from 'react'
import Banner from '../Pages/Banner'
import ExtraPage1 from '../Pages/ExtraPage1'
import ExtraPage2 from '../Pages/ExtraPage2'
import FeaturedPage from '../Pages/FeaturedPage'
function Home() {
  return (
    <div>


      <header><Banner/></header>

      <main>
        <FeaturedPage/>
        

        <ExtraPage1/>
        <ExtraPage2/>


      </main>



    </div>
  )
}

export default Home