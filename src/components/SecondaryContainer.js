import MovieList from "./MovieList"
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movieslist = useSelector((store)=>store.movies);

    //you can return is this way or by below way
    // if(movieslist === null) return;
    
    //alter of above
  return (movieslist &&
    <div className="bg-black">
        <div className="relative -top-60 pl-9">
      <MovieList title={"Now Playing"} movies={ movieslist?.nowPlayingMovies }/>
      <MovieList title={"Top Rated"} movies={ movieslist?.popularMovies }/>
      <MovieList title={"Upcoming Movies"} movies={ movieslist?.nowPlayingMovies }/>
      <MovieList title={"Popular"} movies={ movieslist?.popularMovies }/>
      <MovieList title={"Horror"} movies={ movieslist?.nowPlayingMovies }/>
      <MovieList title={"Comedy"} movies={ movieslist?.nowPlayingMovies }/>
      </div>
    </div>
  )
}

export default SecondaryContainer;
