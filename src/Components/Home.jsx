

import React from 'react'
import Footer from './Footer'
import Banner from '../Pages/Banner'
import ExtraPage1 from '../Pages/ExtraPage1'
import ExtraPage2 from '../Pages/ExtraPage2'
import FeaturedPage from '../Pages/FeaturedPage'
import { Helmet } from 'react-helmet'
import NewsLetter from './NewsLetter'
function Home() {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>


      <header><Banner/></header>

      <main>
        <FeaturedPage/>
        

        <ExtraPage1/>
        <ExtraPage2/>
        <NewsLetter/>


      </main>

      <Footer/>



    </div>
  )
}

export default Home