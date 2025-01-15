import MovieCards from "./MovieCards";

const MovieList = (props) => {
    const { title, movies} = props;
    if(!movies) return;
    // console.log(movies);
    
    

  
   



  return (
    <div className="px-6">
        <h1 className="text-3xl py-6 text-white">{title}</h1>
        <div className="overflow-x-auto overflow-y-hidden">
        
            <div className="flex">
                
                { movies.map((movie)=>(<MovieCards key={movie.id} posterPath={movie?.poster_path}/>)) }
                {/* <MovieCards/> */}
                {/* <MovieCards posterPath={ movies[0]?.poster_path }/> */}
                
                
            </div>
        </div>
  
    </div>
  )
}

export default MovieList

