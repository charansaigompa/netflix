import { useEffect} from "react"
import { url,API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'


//We created a custom hook for calling api and updating the store with movie data
const useNowPlayingMovies=()=>{
  const nowPlayingMovies=useSelector(store=>store?.movies?.nowPlayingMovies)
 const dispatch=useDispatch()
  const getNowPlayingMovies=async ()=>{
    const data= await fetch(url,API_Options);
    const json=await data.json();
    
    dispatch(addNowPlayingMovies(json.results))

  }
  
  useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayingMovies();
    
  },[])

}
export default useNowPlayingMovies;