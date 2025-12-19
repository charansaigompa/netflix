import { useEffect} from "react"
import { url,API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

//We created a custom hook for calling api and updating the store with movie data
const useNowPlayingMovies=()=>{
 const dispatch=useDispatch()
  const getNowPlayingMovies=async ()=>{
    const data= await fetch(url,API_Options);
    const json=await data.json();
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))

  }
  
  useEffect(()=>{
    getNowPlayingMovies();
  },[])

}
export default useNowPlayingMovies;