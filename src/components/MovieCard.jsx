import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useDispatch } from "react-redux";
import { setSearchTrailerMovieId } from "../utils/searchSlice";

const MovieCard = ({posterPath, movieId}) => {
    const dispatch = useDispatch();
  if(!posterPath) return null;
  return (
    <div  onClick={() => dispatch(setSearchTrailerMovieId(movieId))} className='w-35 pr-2 md:w-55  pr-4 pb-4 transform transition-all duration-300 ease-out
  hover:scale-105 hover:shadow-2xl
  cursor-pointer '>
      <img className='rounded-lg' src={IMG_CDN + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
