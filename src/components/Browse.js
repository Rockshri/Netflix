import React from 'react';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';



const Browse = () => {

  //if showGptSearch is True then show Gptsearch Componants else MainCaontainer and SecondaryContainer

    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);





// We made custom hook for the below code.
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

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







  return (
    <div>
      <Header/>
      {
        showGptSearch ? ( 
        <GptSearchPage/> 
      ) : ( 
        <>
        <Maincontainer/>
        <SecondaryContainer/> 
        </>
      )
      }
  </div>
  )
}

export default Browse;
