import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailorVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = (props) => {
     const trailorVideo = useSelector((store)=>store.movies?.trailorVideo);
    //  const dispatch = useDispatch();
  
    

    
    
     const { movieId } = props;

     //we made the custom hook of getMovieData;

     useMovieTrailer(movieId);

    // async function getMovieData(){
    //    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", 
    //                  API_OPTIONS);
    //    const json = await data.json();
    //    console.log(json.results);
        
    //    const filteredData = json.results.filter((video) => video.type === "Trailer");
    //    const trailor = filteredData.length ? filteredData[0] : json.results[0];
    //    console.log(trailor);
       
    //    dispatch(addTrailorVideo(trailor));
    
    // }


    // useEffect(()=>{
    //     getMovieData();
    //  }, []);

  return (
    <div className='absolute top-0 left-0'>
    <iframe 
      className='w-screen aspect-video'
      src="https://www.youtube.com/embed/LH1J1EbqCaI" 
      title="Sonic the Hedgehog 3 | Official Trailer 2 (2024 Movie) Ben Schwartz, Jim Carrey, Keanu Reeves" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      >

    </iframe>
    </div>
  )
}

export default VideoBackground
