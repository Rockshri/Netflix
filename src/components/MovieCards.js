import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCards = (props) => {
  const {posterPath} = props;

  return (
    <div className='h-48 min-w-fit pr-4 '>
      <img className='h-full transform hover:scale-125 transition-transform duration-300 z-50' src={IMG_CDN+posterPath} alt='name'/>
    </div>
  )
}

export default MovieCards;
