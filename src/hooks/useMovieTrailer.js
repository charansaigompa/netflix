import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_Options } from "../utils/constants";



const useMovieTrailer=(movieId)=>{
     const dispatch = useDispatch();
     const nowPlayingTrailer=useSelector(store=>store?.movies?.nowPlayingTrailer)

  const getMovieVideos = async () => {
    const data = await fetch(
      
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
   
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !nowPlayingTrailer&& getMovieVideos();
  }, []);


}
export default useMovieTrailer