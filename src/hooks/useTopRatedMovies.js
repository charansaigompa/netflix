import { useEffect} from "react"
import { urlTopRated,API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'

//We created a custom hook for calling api and updating the store with movie data
const useTopRatedMovies=()=>{
 const dispatch=useDispatch()
  const getTopRatedMovies=async ()=>{
    const data= await fetch(urlTopRated,API_Options);
    const json=await data.json();
    // console.log(json.results)
    dispatch(addTopRatedMovies(json.results))

  }
  
  useEffect(()=>{
    getTopRatedMovies();
  },[])

}
export default useTopRatedMovies;