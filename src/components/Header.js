import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import {LOGO} from "../utils/constants";

const Header = () => {
  //useSelector is a hook from react-redux which is used to get the state from the store.
  //It takes a function as an argument which returns the state.
  //The state is the current state of the store.

  const getUser = useSelector((store)=>store.user) 

  // console.log(getUser);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  

  

  function signoutHandler(){
     signOut(auth)
      .then(() => {
            // navigate("/");
              })
      .catch((error) => {
  // An error happened.
  console.log(error.message);
  });
}

  useEffect(()=>{
 
     //onAuthStateChanged is a listener that listens to the authentication state of the user.
     //It takes two arguments, the first one is the auth object and the second one is a callback function.
     //The callback function takes the user as an argument.
     //If the user is logged in, the user object will be returned, otherwise, it will return null.
     //If the user is logged in, we will dispatch the addUser action with the user object as an argument.
     //If the user is not logged in, we will dispatch the removeUser action.
     // onAuthStateChanged won't listen the updateProfile function. because it only when change in authentication state.
     
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
       if (user) {
                 const {uid, email, displayName, photoURL} = user;
                     dispatch(addUser({
                       uid: uid, 
                       email:email, 
                       displayName:displayName, 
                       photoURL:photoURL}
                      ));

                       navigate("/browse");
                } else {
                       dispatch(removeUser());

                       navigate("/");
                       }
               })
          //unsubscribe is a function that is returned by the onAuthStateChanged listener.
          //We need to call this function when the component is unmounted.  
          //If we don't call this function, the listener(i.e onAuthStateChange) will keep listening to the authentication state of the user.
          //It will cause a memory leak.
          // useEffect hook takes a function as an argument which will be called when the component is unmounted.
             return ()=> unsubscribe();
             }, []);

  
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-20 flex justify-between'>
     <img className='h-14 my-2 mx-4 '
     src={LOGO}
     alt='Netflix Logo'
     />
     {getUser && <div className='flex mx-4'>
      <img className='h-10 mx-3 my-4' alt='userImage' src={getUser?.photoURL}></img>
      <button onClick={signoutHandler} className='cursor-pointer text-lg bg-red-600 rounded-lg h-14 my-2 px-3 '>Sign Out</button>
      {/* <div>{getUser.displayName}</div> */}
      {/* <div>hi</div> */}
     </div>}
   
    </div>
  )
}

export default Header
