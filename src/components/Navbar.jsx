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
      <div className="navbar p-5 bg-base-100 bg-zinc-100	shadow">
        <div className="flex-1 text-3xl font-bold text-[#3c5b99]">
        <Link to={"/"}>Bloging Web App</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role= "button" className="text-2xl font-bold text-[#3b3b3d] capitalize ">
              <div>
                  {userName ? userName : 'No User'}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"dashboard"}>Dashboard</Link>
              </li>
              <li>
                {userName ? <a onClick={logoutHandler}>
                  Log out
                </a> : 
                <Link to={"login"}>Log In</Link>
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
