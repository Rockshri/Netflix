import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/moviesSlice';


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
     //fetching the data and updating the store.
     async function getPopularMovies(){
       
       try{
         const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", 
          API_OPTIONS);
         const json = await data.json();
         console.log(json.results);

         dispatch(addTopRatedMovies(json.results));
         
       } catch(error){
         console.log(error.message);
        }
     };
 
     useEffect(()=>{
         getPopularMovies();
        }, []);
}

export default useTopRatedMovies;
