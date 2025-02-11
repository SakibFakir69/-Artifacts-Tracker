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
      <main className=' '>
        <Outlet/>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default App
