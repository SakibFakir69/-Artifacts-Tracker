



import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import MyaddedartifactShow from '../Pages/MyaddedartifactShow';
function MyArtifactsAdd() {
    const {user} = useAuth();

    const [ data ,setdata ] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/myaddedartifacts?email=${user?.email}`)
        .then((res)=>{
            console.log(res.data)
            setdata(res.data);
        })

    },[])


    // implement delete button 

    const onDeletehandel = (id)=>{

        axios.delete(`http://localhost:5000/myaddedartifacts/${id}`)
        .then((res)=>{
            alert("deleted");
            const filterdeleted = data.filter((item)=> item._id!==id);
            setdata(filterdeleted);
        });

        console.log("filter button clcked")


    }


  return (
    <div>
        <h1>My added artifacts length is : {data.length}</h1>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-4'>
            {
                data.map((item,key)=> <MyaddedartifactShow data={item} key={key} onDeletehandel={onDeletehandel}/>)
            }
        </div>


    </div>
  )
}

export default MyArtifactsAdd