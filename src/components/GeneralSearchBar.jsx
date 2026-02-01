import  { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { API_Options } from '../utils/constants'
import { TMDB_API_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addSearchedMovies } from '../utils/generalSlice'



const GeneralSearchBar = () => {
  const dispatch=useDispatch()

  const languageKey=useSelector(store=>store.config.language)
  const searchText=useRef(null)

const searchMovieTMDb= async(movie)=>{
 const data=await fetch("https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query="+movie+"&include_adult=false&language=en-US&page=1",API_Options)
 const json= await data.json()
 return json.results

}

  const handlegeneralSearchClick= async()=>{
    console.log(searchText.current.value)
    const promise=searchMovieTMDb(searchText.current.value)
    const tmdbResults= await Promise.all([promise])
    console.log(tmdbResults)
    dispatch(addSearchedMovies(tmdbResults))
    
}

  return (
    <div className=' pt-[35%]  md:pt-[10%] flex justify-center'>
       
        <form action="" className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-2xl' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-2 col-span-10 bg-amber-50 rounded-xl' type="text" placeholder={lang[languageKey]. generalSearchPlaceholder}/>
            <button onClick={handlegeneralSearchClick} className='col-span-2 m-2 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[languageKey].search}</button>
        </form>
      
    </div>
  )
}

export default GeneralSearchBar
