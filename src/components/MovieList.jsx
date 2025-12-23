import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6 '>
        <h1 className='text-3xl text-white py-4'>{title}</h1>
      <div className='flex overflow-x-auto overflow-y-hidden scrollbar-hide pt-6  '>
        
        <div className='flex'>
            {movies?.map((movie, index) => (
  <MovieCard key={index} posterPath={movie.poster_path} movieId={movie.id}  />
))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
