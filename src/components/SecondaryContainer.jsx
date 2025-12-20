import MovieList from "./MovieList"
import { useSelector } from "react-redux"
const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movies)
    console.log(movies.playingPopTvSeries)
    return (
      movies?.nowPlayingMovies&&  (
        <div className="bg-black">
            <div className="-mt-30 pl-12 relative z-20" >
            <MovieList title={"Now playing movies"} movies={movies?.nowPlayingMovies}/>
             <MovieList title={"Top Rated"} movies={movies?.playingTopRatedMovies}/>
              <MovieList title={"Trending Movies"} movies={movies?.playingTrendingMovies}/>
              <MovieList title={"Popular"} movies={movies?.playingPopularMovie}/>
               <MovieList title={"Upcoming Movies"} movies={movies?.playingUpcomingMovies}/>
                
                </div>
        </div>
        )
    )
}
export default SecondaryContainer