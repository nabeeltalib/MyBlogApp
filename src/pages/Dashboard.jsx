import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc,  onSnapshot, query, where  } from "firebase/firestore"; 
import { auth, db } from '../config/firebase';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar'
import { onAuthStateChanged } from 'firebase/auth';
const Dashboard = () => {
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  
  const [getblogdata, setgetblogdata] = useState([])


  const UploadBlog = async ()=> {
    const title = titleInput.current.value;
    const description = descriptionInput.current.value;
   if(!title ){
    return toast.error('plz add title')
   }

   try {
    const docRef = await addDoc(collection(db, "BlogPost"), {
      Title: title,
      Description: description,
      uid: auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);
    toast.success("Blog Post Successfully")
   } catch (error) {
    console.log(error.message)
   }
  }
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      const userId = user.uid
     
  const q = query(collection(db, "BlogPost"), where('uid', "==", userId));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const blogData = [];
    querySnapshot.forEach((doc) => {
      blogData.push({
        id: doc.id,
        ...doc.data(), // Spread the data into an object
      });
    });
    setgetblogdata(blogData); // Update the state with the real-time data
  });
}
}); 
},[])




  return (
    <>
     <Navbar/>
        <div className="p-5 bg-slate-50">
            <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
        <div className='shadow-lg mx-40 my-20 p-10'>
        <div className='flex flex-col gap-10'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" ref={titleInput}  />
        <textarea className="textarea h-36 input input-bordered" placeholder="Whats In Your Mind" ref={descriptionInput}></textarea>
        </div>
        <button className="btn btn-success mt-5" onClick={UploadBlog}>Publish Blog</button>
        <Toaster/>
        </div>
        <div className="flex flex-row gap-10 p-5 bg-slate-50">
        {getblogdata.map((item, index)=>{
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

export default Dashboard
