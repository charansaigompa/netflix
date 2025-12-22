import React from 'react'
import MovieCard from './MovieCard'

const SearchCard = ({title,movies}) => {
  return (
    <div className='px-6 '>
        <h1 className='text-3xl text-white py-4'>{title}</h1>
      <div className='flex'>
        
        <div className='flex flex-wrap'>
            {movies?.map((movie, index) => (
  <MovieCard key={index} posterPath={movie.poster_path} />
))}
        </div>
      </div>
    </div>
  )
}
export default SearchCard