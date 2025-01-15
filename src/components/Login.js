import React, { useRef, useState } from 'react';
import Header from './Header';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { checkValidate } from '../utils/validate';
import { useDispatch } from 'react-redux';
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { BG_IMAGE, USER_IMAGE } from '../utils/constants';


const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [isSignIn, setIsSignIn] = useState(true);
   const [errorMessage, setErrorMessage] = useState(null);

   //Either we can use the state variables or 
   // we can use reference using useRef useRef hook there is two ways of form handling.
   const name = useRef(null);
   const email = useRef(null);
   const password = useRef(null);

  
   function handleClick(e){
          e.preventDefault();
          console.log("clicked");
    
          const message = checkValidate(email.current.value, password.current.value);
          // console.log(name);
      
          // console.log(email.current.value);
          // console.log(password.current.value);
          // console.log(message);
          setErrorMessage(message);


          if(message) return;

          if(!isSignIn){

            //SignUp logic
              createUserWithEmailAndPassword(
              auth, 
              email.current.value, 
              password.current.value 
            )
            .then((userCredential)=>{
               const user = userCredential.user;
           //  console.log(userCredential);
               console.log(user);

               //updateProfile is used to update the user profile. 
               // It won't trigger the onAuthStateChanged listener.
               updateProfile(user, {
                displayName: name.current.value , photoURL: USER_IMAGE
             })
            })
            .then(() => {

              //auth.currentUser will return the current user object.
              //it will return null if the user is not logged in. 
              //And it will return the user object if the user is logged in.
              
              const { uid, email, displayName, photoURL } = auth.currentUser;
                                  dispatch(addUser({
                                    uid: uid, 
                                    email:email, 
                                    displayName:displayName, 
                                    photoURL:photoURL}));
              console.log(auth);
              
              navigate("/browse");

              })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
              });
          }
          else{

           signInWithEmailAndPassword(
           auth,
           email.current.value, 
           password.current.value
         )
          .then((userCredential) => {
            // Signed in 
          //  const user = userCredential.user;
          //  console.log(userCredential);
           
          //  console.log(auth);
           navigate("/browse");
           
            // ...
         })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(error);
           
           setErrorMessage(errorCode + "-" + errorMessage);
  });
          }
      }

   function signinHandler(){

    setIsSignIn( !isSignIn );

 }

   

  return (

  <div>
    <Header/>
    <div className='absolute'>
    <img 
    src={ BG_IMAGE }
    alt='bg-image'/>
    </div>
    <form className='absolute px-4 py-6 w-3/12 min-h-fit bg-black mx-auto left-0 right-0 my-auto top-0 bottom-0 text-white bg-opacity-80 rounded'>
    <h1 className='font-bold text-3xl my-2 py-2'>{ isSignIn ? "Sign In" : "Sign Up" }</h1>
    {!isSignIn && <input
    ref={ name }
    type='text' 
    placeholder='Full Name' 
    className='p-4 my-2 w-full bg-blue-300 bg-opacity-45 rounded'/>}
    <input 
    ref={ email }
    type='email' 
    placeholder='Email Address' 
    className='p-4 my-2 w-full bg-blue-300 bg-opacity-45 rounded'/>
    <input 
    ref={ password }
    type='password' 
    placeholder='Password' 
    className='p-4 my-2 w-full  bg-blue-300 bg-opacity-45 rounded'/>
    <p className='text-red-700 font-bold mx-2 text-lg'>{ errorMessage }</p>
    <button type='submit'
    className='p-4 my-8 bg-red-700 w-full rounded' onClick={ (e)=>handleClick(e) }>{ isSignIn ? "Sign In" : "Sign Up" }
    </button>
    <p className='cursor-pointer' onClick={ signinHandler }>{ isSignIn ? "New to Netflix ? Sign up Now" : "Already Registered ? Sign In Now" }</p>
    </form>
  </div>
  )
}

export default Login
