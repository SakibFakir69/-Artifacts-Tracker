import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import MyaddedartifactShow from "../Pages/MyaddedartifactShow";
import Swal from "sweetalert2";

function MyArtifactsAdd() {
  const { user } = useAuth();

  const [loading, setloading] = useState(true);

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://server-vert-two-78.vercel.app/myaddedartifacts?email=${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        setloading(false);
      });
  }, []);

  // implement delete button

  const onDeletehandel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `hhttps://server-vert-two-78.vercel.app/myaddedartifacts/${id}`
          )
          .then(() => {
            const filterdeleted = data.filter((item) => item._id !== id);
            setdata(filterdeleted);
            Swal.fire("Deleted Succesfully");
          });
      }
    });

    console.log("filter button clcked");
  };

  return (
    <div className=" ">

      <div className=" p-4 py-24">

        {loading ? (
          <div className="flex w-full justify-center items-center mx-auto">
            <span className="loading loading-bars  w-16"></span>
          </div>
        ) : (

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4 bg-stone-200">
            {data.map((item, key) => (
              <MyaddedartifactShow
                data={item}
                key={key}
                onDeletehandel={onDeletehandel}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyArtifactsAdd;
