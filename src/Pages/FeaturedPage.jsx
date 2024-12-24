


import React, { useEffect, useState } from 'react'
import axios from 'axios';
function FeaturedPage() {


  const [ data , setdata ] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/higestLikeCount`)
    .then((res)=>{
      setdata(res.data);
    })




  },[])
  console.log(data);



  return (
    <div>
      
      asdf {data.length}
      

    </div>
  )
}

export default FeaturedPage