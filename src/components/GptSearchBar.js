import React, { useRef } from 'react';
import lang from "../utils/languageConstant";
import { useSelector } from 'react-redux';
// import openai from '../utils/openai';


const GptSearchBar = () => {
    //here langKey is a dynamic so to access it we use bracket notation to access 
    const langKey = useSelector((store)=> store.config.lang);
    const searchText = useRef(null);

   async function handleGptSearchClick(){
        console.log(searchText.current.value);
    
        //open ai code here.
    };

  return (
   <>
   <div className='mt-[20%] absolute w-full flex justify-center'>
   <form className='bg-black w-1/2 grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>
    <input type='text' className='p-2 m-4 col-span-6' placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText}></input>
    <button className='bg-red-600 h-12 m-4 col-span-6 rounded-lg text-white' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
   </form>
   </div>
   </>
  )
};

export default GptSearchBar;
