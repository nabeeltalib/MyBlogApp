import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from '../config/firebase';

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
            console.log("DocID: ", doc.id)
          });
          setAllblogs(blogData);
        });
      },[])


  return (
    <>
        <Navbar />
        <div className="p-5 flex flex-row gap-10 bg-slate-50" >
        {allblogs.map((item, index)=>{
          return(
          <div className="card bg-base-100 w-96 shadow-xl" key={index}>
              <div className="card-body">
                  <h2 className="card-title">{item.Title}</h2>
                  <p>{item.Description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary mr-5">Edit</button>
                      <button className="btn btn-primary">Delete</button>
                    </div>
              </div>
          </div>
          )
        })}
        </div>
    </>
  )
}

export default Home