import { useEffect} from "react"
import { urlUpcoming,API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice'


//We created a custom hook for calling api and updating the store with movie data
const useUpcomingMovies=()=>{
 const dispatch=useDispatch()
 const playingUpcomingMovies=useSelector(store=>store?.movies?.playingUpcomingMovies)
  const getUpcomingMovies=async ()=>{
    const data= await fetch(urlUpcoming,API_Options);
    const json=await data.json();
   
    dispatch(addUpcomingMovies(json.results))

  }
  
  useEffect(()=>{
    !playingUpcomingMovies&& getUpcomingMovies();
  },[])

}
export default useUpcomingMovies;