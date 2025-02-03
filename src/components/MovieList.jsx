
import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title,movies}) => {
  console.log('title',title)
  return (
    <div className='px-6 bg-black'>
        <h2 className='text-3xl py-4 text-white '>{title}</h2>
        <div className='flex h-40 overflow-x-scroll'>
            <div className='flex w-screen'>
                {
                movies?.map((movie)=><MovieCard id={movie?.id} key={movie.id} poster_path={movie?.poster_path}  original_title={movie?.original_title} />)
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList