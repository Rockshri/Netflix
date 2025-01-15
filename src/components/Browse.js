import React from 'react';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import { useEffect } from 'react';
// import { addNowPlayingMovies } from '../utils/moviesSlice';
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
// import { useDispatch } from 'react-redux';
// import { API_OPTIONS } from '../utils/constants';


const Browse = () => {

  // const dispatch = useDispatch();
//fetching the data and updating the store.
//  async function getNowPlayingMovies(){
//     const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", 
//      API_OPTIONS);

//     const json = await data.json();

//     console.log(json.results);

//     dispatch(addNowPlayingMovies(json.results))
    

//   }

   
  //  useEffect(()=>{
  //   getNowPlayingMovies();
  //  }, []);


// We made custom hook for the above code.
   useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
      
      
    </div>
  )
}

export default Browse
