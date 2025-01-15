import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    //fetching the data and updating the store.
    async function getPopularMovies(){
      
      try{
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", 
         API_OPTIONS);
    
        const json = await data.json();
    
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
        
      } catch(error){
        console.log(error.message);
       }
    };

    useEffect(()=>{
        getPopularMovies();
       }, []);


}

export default usePopularMovies;
