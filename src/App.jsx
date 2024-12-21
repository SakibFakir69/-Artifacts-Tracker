import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {


  return (
    <div>
      <header>
        <Navbar/>
      </header>
      

      {/*  */}
      <main>
        <Outlet/>
        <h1>oulet</h1>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
