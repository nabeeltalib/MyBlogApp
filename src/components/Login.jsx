import React, { useEffect, useState } from "react";
import img from "../assets/login-pic.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {


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
 

  return (
    <>
    <div className="flex">
      <div className="flex flex-1 w-64">
        <img src={img} alt=""/>
      </div>
    <div className="gap-2 p-5 flex flex-1 w-32 justify-center flex-col items-center bg-slate-100">
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
            <button className="btn btn-outline btn-info" onClick={LoginHandler}>
              Login
            </button>
            <Toaster/>
            <br />
          <p className="text-center">
            If You Have No Account!{" "}
            <Link className="font-bold" to={"/register"}>
              SignUp
            </Link>
          </p>
          </div>

    
    </div>
  
    </>
  )
}

export default Login