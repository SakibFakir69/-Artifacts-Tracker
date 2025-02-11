


import React from 'react'
import Img from '/error.png'
import { Link } from 'react-router-dom'

function ErrorPages() {
  return (
    <div className='text-4xl text-center  w-full justify-center items-center mx-auto'>


      <div className=' px-4  w-4/5 py-10 flex items-center mx-auto mt-10'>
      <img src={Img} className=' rounded-md shadow-black'/>
      </div>

  

      <Link to={'/'} className='px-8 py-3 bg-green-400 rounded-md md:text-2xl text-xl'>Home</Link>
      <div className='h-10'></div>

      
    
    
    </div>
  )
}

export default ErrorPages