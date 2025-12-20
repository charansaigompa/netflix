import { useEffect} from "react"
import { urlPopu,API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

//We created a custom hook for calling api and updating the store with movie data
const usePopularMovies=()=>{
 const dispatch=useDispatch()
  const getPopularMovies=async ()=>{
    const data= await fetch(urlPopu,API_Options);
    const json=await data.json();
    // console.log(json.results)
    dispatch(addPopularMovies(json.results))

  }
  
  useEffect(()=>{
    getPopularMovies();
  },[])

}
export default usePopularMovies;