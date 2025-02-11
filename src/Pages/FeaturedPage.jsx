


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FeaturedShowInfo from './FeaturedShowInfo';
function FeaturedPage() {


  const [ data , setdata ] = useState([]);

  useEffect(()=>{
    axios.get(`https://server-vert-two-78.vercel.app/higestLikeCount`)
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

  if(data.length===0)
  {
    return <div className="flex justify-center mt-6">
    <span className="loading loading-bars loading-md flex justify-center items-center text-red-500 text-center"></span>
</div>
  }
  



  return (
    <div className='bg-stone-100 p-6'>
      
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