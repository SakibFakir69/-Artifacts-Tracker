


import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowDetailsPage from '../Pages/ShowDetailsPage';
import { Helmet } from 'react-helmet';

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



        <hr className=''/>

        <div className='mt-10 flex justify-center mb-10 py-24 '>
            {
                artifact.map((item,key)=> <ShowDetailsPage alldata={item} key={key}/>)
                

            }

        </div>




    </div>
  )
}

export default Detailspage