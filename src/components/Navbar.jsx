import React, { useEffect, useState } from "react";
import img from "../assets/NabeelLogo.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import {onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [userName, setUsername] = useState('')
 const navigate = useNavigate()
  const LoginHandler = () =>{
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    toast.success(`${user.displayName} login successfully`)
    setTimeout(()=>{
     navigate('/')
    },2000)
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
  }

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
      <div className="navbar p-5 bg-base-100">
        <div className="flex-1">
          <img className="w-64" alt="Nabeel Logo" src={img} />
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
            >
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
                <a
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Log In 
                </a>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="gap-2 p-5">
            <h1 className="text-center font-bold mb-5">
              Log In To Your Account
            </h1>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <button className="btn btn-outline btn-info btn-block" onClick={LoginHandler}>
              Login
            </button>
            <Toaster/>
          </div>

          <br />
          <p className="text-center">
            If You Have No Account!{" "}
            <Link className="font-bold" to={"register"}>
              SignUp
            </Link>
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
