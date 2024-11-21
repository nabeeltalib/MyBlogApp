import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';

const Home = () => {

      const [allblogs, setAllblogs] = useState([]);

      useEffect(()=>{
        const q = query(collection(db, "BlogPost"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const blogData = [];
          querySnapshot.forEach((doc) => {
            blogData.push({
              id: doc.id,
              ...doc.data(),
            });
            // console.log("New ", blogData.metadata.creationTime)
            console.log("DocID: ", doc.id)
          });
          setAllblogs(blogData);
        });
      },[])


  return (
    <>
        <Navbar />
        <div className=" bg-slate-50" >
          <div className="flex flex-col p-5 gap-10 container mx-auto">
              {allblogs.map((item, index)=>{
                return(
                  <div className="card card-side bg-base-100 shadow-xl" key={index}>
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                      alt="Movie" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{item.Title}</h2>
                    <p>{item.Description}</p>
                    <div className="card-actions justify-end">
                    <div className="card-actions justify-end py-5">
                           <a><Link to={"/single"}>See all Blogs from this user</Link></a>
                    </div>
                  </div>
                </div>
                </div>
                )
              })}
          </div>
        </div>

    </>
  )
}

export default Home