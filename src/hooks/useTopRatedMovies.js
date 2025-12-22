import { useEffect} from "react"
import { urlTopRated,API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'


//We created a custom hook for calling api and updating the store with movie data
const useTopRatedMovies=()=>{
 const dispatch=useDispatch()
 const playingTopRatedMovies=useSelector(store=>store?.movies?.playingTopRatedMovies)
  const getTopRatedMovies=async ()=>{
    const data= await fetch(urlTopRated,API_Options);
    const json=await data.json();
    
    dispatch(addTopRatedMovies(json.results))

  }
  
  useEffect(()=>{
    !playingTopRatedMovies&& getTopRatedMovies();
  },[])

}
export default useTopRatedMovies;