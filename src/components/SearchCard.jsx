import React from 'react'
import MovieCard from './MovieCard'

const SearchCard = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl text-white py-4">
        {title}
      </h1>

      <div className="flex pl-7">
        <div className="flex flex-wrap">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}              
              posterPath={movie.poster_path}
              movieId={movie.id}          
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchCard
