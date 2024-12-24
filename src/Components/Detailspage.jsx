


import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowDetailsPage from '../Pages/ShowDetailsPage';

function Detailspage() {
    const data = useLoaderData();
    
    // add like button and count like
    // click like button incarase by one
    const [ artifact , setartifact ] = useState([]);
    useEffect(()=>{
        setartifact([data]);
        // obj convert array

    },[])
    console.log(artifact);

    

  return (
    <div>
        <h1>Artifact Details Page</h1>

        <div>
            {
                artifact.map((item,key)=> <ShowDetailsPage alldata={item} key={key}/>)
                

            }

        </div>




    </div>
  )
}

export default Detailspage