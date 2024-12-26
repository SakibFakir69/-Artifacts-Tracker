



import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import MyaddedartifactShow from '../Pages/MyaddedartifactShow';
import Swal from 'sweetalert2';

function MyArtifactsAdd() {
    const {user,loading} = useAuth();
    if(loading)
    {
        return <p>Loading...</p>
    }

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

     
     
            

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(`http://localhost:5000/myaddedartifacts/${id}`)
                    .then(()=>{

                        const filterdeleted = data.filter((item)=> item._id!==id);
                        setdata(filterdeleted);Swal.fire("Deleted Succesfully")

                    })
                 
                  
                }
              });
         
   

        console.log("filter button clcked")


    }

    if(data.length==0)
    {
          return <div className="flex justify-center mt-6">
            <p>No data founded</p>
        </div>
    }


  return (
    <div>
        <h1 className='text-2xl md:text-4xl text-center font-semibold mt-2'>My added artifacts length is : {data.length}</h1>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-4'>
            {
                data.map((item,key)=> <MyaddedartifactShow data={item} key={key} onDeletehandel={onDeletehandel}/>)
            }
        </div>


    </div>
  )
}

export default MyArtifactsAdd