

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useScroll } from 'motion/react'
import AllShowArtifacts from '../Pages/AllShowArtifacts';
function AllArtifacts() {


  // fecth all aritact 

  const [ artifacts , setartifacts ] = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:5000/allartifacts')
    .then((response)=>{
      console.log(response.data);
      setartifacts(response.data);
      

      
    })
    .catch((error)=>{
      console.log("this error find from all aritac",error.name)
    })

  },[])
  
  console.log(artifacts)

  // add pagination



  return (
    <div className='px-4'>
      <h1 className='text-center md:text-4xl text-xl mt-4 border rounded-md '>All Artifact Here </h1>

      <section>
        <h1>Length : {artifacts.length}</h1>


        <div className='grid md:grid-cols-4 gap-4 grid-cols-2 '>
          {
            artifacts.map((item,key)=> <AllShowArtifacts data={item
            } key={key}/>)
          }
        </div>




      </section>



    </div>
  )
}

export default AllArtifacts