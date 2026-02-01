import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import GeneralSearchPage from './generalSearchPage'
import { useSelector } from 'react-redux'
import SearchVideoBackground from './SearchVideoBackground'


//We used custom hook for easy and clean code readability
const Browse = () => {
  const showgeneralSearch=useSelector(store=>store.general.showgeneralSearch)
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
        showgeneralSearch? (<GeneralSearchPage/>):
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
