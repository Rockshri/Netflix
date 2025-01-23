import { useSelector } from 'react-redux';
// import { API_OPTIONS } from '../utils/constants';
// import { addTrailorVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = (props) => {
     const trailorVideos = useSelector((store)=>store.movies?.trailerVideo);
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
    <div className='w-full'>
    <iframe 
      className='w-full aspect-video'
      src={
        "https://www.youtube.com/embed/"
        + trailorVideos?.key +
        "?autoplay=1&mute=1" 
      }
      title="Youtube Video Player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      >

    </iframe>
    </div>
  )
}

export default VideoBackground;
