


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FeaturedShowInfo from './FeaturedShowInfo';
function FeaturedPage() {


  const [ data , setdata ] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/higestLikeCount`)
    .then((res)=>{
      setdata(res.data);
    })




  },[])
  console.log(data);
  // Artifact Image
  // // Artifact Name
  // // Short description
  // // Like Count
  // // View Details button
  



  return (
    <div className='bg-blue-200 p-6'>
      
      <h1 className='text-2xl md:text-4xl font-bold text-center mt-4'>Most <span className='text-red-700'>Liked</span> Artifacts</h1>

      <div className='grid  md:grid-cols-3 justify-center items-center '>
      {
        data.map((item,key)=> <FeaturedShowInfo data={item} key={key}/>)
      }
      
      </div>

    </div>
  )
}

export default FeaturedPage