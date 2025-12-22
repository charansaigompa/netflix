import { useEffect} from "react"
import { urlTrending,API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies} from '../utils/moviesSlice'


//We created a custom hook for calling api and updating the store with movie data
const useTrendingMovies=()=>{
 const dispatch=useDispatch()
 const playingTrendingMovies=useSelector(store=>store?.movies?.playingTrendingMovies)
  const getTrending=async ()=>{
    const data= await fetch(urlTrending,API_Options);
    const json=await data.json();
  
    dispatch(addTrendingMovies(json.results))

  }
  
  useEffect(()=>{
    !playingTrendingMovies&& getTrending();
  },[])

}
export default useTrendingMovies;