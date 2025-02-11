import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { increment } from "firebase/firestore/lite";

function ShowDetailsPage({ alldata }) {
  // add like button and count like
  // click like button incarase by one



  const {setlikedpost} = useAuth();
  let {
    Artifact_Name,
    Artifact_Image,
    Artifact_Type,
    Historical_Context,
    create_At,
    Discovered_At,
    Discovered_By,
    Present_Location,
    LikeCount,_id,LikeBy,
  } = alldata;

  const {user} = useAuth();

  const [ like , setlike ] = useState(false);

  const [likecount , setlikecount ] = useState(LikeCount);
 

  

  const handleLike= ()=>{

  


    const counter = like ? -1 : 1;

    console.log(counter)
    if(counter<0)
    {
      LikeCount=-1;
      
    }
    setlike((prev)=>!prev)

    // 
    // axios.post('/myadedlikapi',LikeBy)

    const Account = user?.email;
    
   
    
    


    axios.put(`hhttps://server-vert-two-78.vercel.app/detailspage/like/${_id}`,{increment: counter,Email:user?.email})
    .then((response)=>{
        if(response.status===200)

        {
          setlikecount((prev)=> prev+counter);
            
            

        }
    })

    

    

  }
 


  return (
    <div>
      <section className="flex justify-center ">
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border">

          <div className="flex space-x-4">
            <img
              alt=""
              src={user?.photoURL}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              > Name: 
                {Artifact_Name || "Gust"}
              </a>
              
            </div>
          </div>
          <div>

            <img
              src={Artifact_Image}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
            
            <section className="border grid grid-cols-2 gap-2 p-2">
                <p>Artifact Name : {Artifact_Name}</p>
                <p>Artifact Type : {Artifact_Type || "not founded"}</p>
                <p>Create At : {create_At || "not founded"}</p>

                <p>Descovered At : {Discovered_At || "not founded"}</p>
                <p>discovered by : {Discovered_By || "not founded"}</p>
                <p>Present Location : {Present_Location}</p>


            </section>

            
          </div>
          <div className="flex flex-wrap  justify-center">
            
          <i  onClick={handleLike} className={`${like ? 'text-blue-400 ri-thumb-up-line text-2xl md:text-3xl' : 'ri-thumb-up-line text-2xl md:text-3xl'}`}></i> {likecount}

        
          
           
          </div>
          <p className="text-center -mt-4">{like && <p>Like</p>}</p>

        </div>
      </section>
    </div>
  );
}

export default ShowDetailsPage;
