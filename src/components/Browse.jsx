import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
import SearchVideoBackground from './SearchVideoBackground'


//We used custom hook for easy and clean code readability
const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
 useNowPlayingMovies()
 useTopRatedMovies()
 usePopularMovies()
 useUpcomingMovies()
 useTrendingMovies()
   const movieId = useSelector(
     (store) => store.search.searchTrailerMovieId
   );
  return (
    <div>
     
      <Header/>
    {movieId?(<SearchVideoBackground/>):  
        showGptSearch? (<GptSearchPage/>):
       ( <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
    )
    }
      
    </div>
  )
}

export default Browse
