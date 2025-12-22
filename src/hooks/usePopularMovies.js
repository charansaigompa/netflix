import { useEffect} from "react"
import { urlPopu,API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'


//We created a custom hook for calling api and updating the store with movie data
const usePopularMovies=()=>{
 const dispatch=useDispatch()
 const playingPopularMovie=useSelector(store=>store?.movies?.playingPopularMovie)
  const getPopularMovies=async ()=>{
    const data= await fetch(urlPopu,API_Options);
    const json=await data.json();
    
    dispatch(addPopularMovies(json.results))

  }
  
  useEffect(()=>{
    !playingPopularMovie && getPopularMovies();
  },[])

}
export default usePopularMovies;