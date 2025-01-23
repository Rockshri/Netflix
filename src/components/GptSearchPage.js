import React from 'react';
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BG_IMAGE } from '../utils/constants';
const GptSearchPage = () => {
  return (
    <>
     <div className='absolute'>
        <img 
        src={ BG_IMAGE }
        alt='bg-image'/>
        </div>
     <GptSearchBar/>
     <GptMovieSuggestion/>
    </>
)
}

export default GptSearchPage;
