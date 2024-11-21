import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Navbar = () => {

  const [userName, setUsername] = useState('')


  const logoutHandler = () =>{
    signOut(auth).then(() => {
    toast.success('user logout succeessfully')
    window.location.reload()
    }).catch((error) => {
      console.log(error)
    });
  }

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsername(user.displayName)
      // navigate('/')
      // ...
    } else {
      // User is signed out
      // ...
      console.log("no user")
      navigate('/register')
    }
  });
},[])


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUsername(user.displayName)
        // navigate('/')
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no user")
        // navigate('register')
      }
    });
  },[])
 

  return (
    <>
      <div className="navbar p-5 bg-base-100 bg-[#3c5b99]	shadow">
        <div className="flex-1 text-3xl font-bold text-white">
        <Link to={"/"}>Bloging Web App</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role= "button" className="flex items-center px-5 py-1 bg-white text-2xl font-bold text-[#3b3b3d] capitalize ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


                  {userName ? userName : 'No User'}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                {userName ? <a onClick={logoutHandler}>
                  Log out
                </a> : 
                <Link to={"/login"}>Log In</Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar
