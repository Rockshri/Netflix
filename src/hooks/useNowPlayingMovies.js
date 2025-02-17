import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';




const useNowPlayingMovies = () => {
 
    const dispatch = useDispatch();
    //fetching the data and updating the store.
     async function getNowPlayingMovies(){
      
      try{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", 
         API_OPTIONS);
    
        const json = await data.json();
    
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
        
      } catch(error){
        console.log(error.message);
       }
       
      
        
    
      };

    useEffect(()=>{
        getNowPlayingMovies();
       }, []);
}

export default useNowPlayingMovies;
