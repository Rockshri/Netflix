import React, { useRef } from 'react';
import { useState } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate';
const Login = () => {
   const [isSignIn, setIsSignIn] = useState(true);
   const [errorMessage, setErrorMessage] = useState(null);

   //Either we can use the state variables or 
   // we can use reference using useRef useRef hook there is two ways of form handling.
   const email = useRef(null);
   const password = useRef(null);



  
   function handleClick(){
      const message = checkValidate(email.current.value, password.current.value);
      // console.log(email.current.value);
      // console.log(password.current.value);
      // console.log(message);
      setErrorMessage(message);
      }

   function signinHandler(){
    setIsSignIn( !isSignIn );
 }

   

  return (
    <div>
   <Header/>
   <div className='absolute'>
    <img 
    src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg'
    alt='bg-image'/>
   </div>
   <form onSubmit={(e)=>e.preventDefault()} className='absolute px-4 py-6 w-3/12 min-h-fit bg-black mx-auto left-0 right-0 my-auto top-0 bottom-0 text-white bg-opacity-80 rounded'>
   <h1 className='font-bold text-3xl my-2 py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
   {!isSignIn && <input
    type='text' 
    placeholder='Full Name' 
    className='p-4 my-2 w-full bg-blue-300 bg-opacity-45 rounded'/>}
    <input 
    ref={email}
    type='email' 
    placeholder='Email Address' 
    className='p-4 my-2 w-full bg-blue-300 bg-opacity-45 rounded'/>
    <input 
    ref={password}
    type='password' 
    placeholder='Password' 
    className='p-4 my-2 w-full  bg-blue-300 bg-opacity-45 rounded'/>
    <p className='text-red-700 font-bold mx-2 text-lg'>{errorMessage}</p>
    <button 
    className='p-4 my-8 bg-red-700 w-full rounded' onClick={handleClick}>{isSignIn ? "Sign In" : "Sign Up"}
    </button>
    <p className='cursor-pointer' onClick={signinHandler}>{isSignIn ? "New to Netflix ? Sign up Now" : "Already Registered ? Sign In Now"}</p>
   </form>
    </div>
  )
}

export default Login
