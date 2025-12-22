import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-55  pr-4 pb-4 transform transition-all duration-300 ease-out
  hover:scale-105 hover:shadow-2xl
  cursor-pointer '>
      <img className='rounded-lg' src={IMG_CDN + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
