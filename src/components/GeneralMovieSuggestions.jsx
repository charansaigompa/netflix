import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import SearchCard from './SearchCard'

const GeneralMovieSuggestions = () => {
  const searchedMovies=useSelector(store=>store.general.searchedMovies)
  console.log(searchedMovies)
  if(!searchedMovies) return null;
  return (
    <div className=''>
    <div className=' p-4 m-4 bg-[#141414]/90 rounded-xl'>
       <SearchCard title={"Search Results"} movies={searchedMovies[0]}/>
      
    </div>
    </div>
  )
}

export default GeneralMovieSuggestions
